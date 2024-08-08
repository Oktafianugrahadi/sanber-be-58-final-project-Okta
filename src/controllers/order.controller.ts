import { Request, Response } from "express";
import OrderModel from "../models/order.model";
import ProductsModel from "../models/products.model";
import { IReqUser } from "../utils/interfaces";
import * as yup from "yup";

// Skema validasi Yup
const orderItemSchema = yup.object().shape({
  productId: yup.string().required("Product ID wajib diisi"),
  quantity: yup
    .number()
    .required("Quantity wajib diisi")
    .min(1, "Quantity minimal 1")
    .max(5, "Quantity maksimal 5"),
});

const orderSchema = yup.object().shape({
  grandTotal: yup.number().required("Grand total wajib diisi"),
  orderItems: yup
    .array()
    .of(orderItemSchema)
    .required("Order items wajib diisi"),
});

export default {
  async create(req: Request, res: Response) {
    const user = (req as IReqUser).user;
    try {
      await orderSchema.validate(req.body);

      const { grandTotal, orderItems } = req.body;
      const productIds = orderItems.map((item: any) => item.productId);
      const products = await ProductsModel.find({ _id: { $in: productIds } });

      for (const item of orderItems) {
        const product = products.find(
          (p: any) => p._id.toString() === item.productId
        );

        if (!product) {
          return res.status(404).json({
            message: `Produk tidak ditemukan untuk ID ${item.productId}`,
          });
        }

        if (item.quantity > product.qty) {
          return res.status(400).json({
            message: `Stok tidak mencukupi untuk produk ${product.name}`,
          });
        }

        item.name = product.name;
        item.price = product.price;
      }

      const newOrder = new OrderModel({
        grandTotal,
        orderItems,
        createdBy: user.id,
        status: "pending",
      });

      await newOrder.save();

      for (const item of orderItems) {
        await ProductsModel.updateOne(
          { _id: item.productId },
          { $inc: { qty: -item.quantity } }
        );
      }

      res.status(201).json({
        data: newOrder,
        message: "Berhasil membuat pesanan",
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        res.status(400).json({
          data: error.errors,
          message: "Gagal membuat pesanan",
        });
        return;
      }

      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Gagal membuat pesanan",
      });
    }
  },

  async getOrderHistory(req: Request, res: Response) {
    try {
      const user = (req as IReqUser).user;

      // Cari semua order yang terkait dengan user.id dan populate createdBy
      const orders = await OrderModel.find({ createdBy: user.id })
        .sort({ createdAt: -1 }) // Mengurutkan dari yang terbaru
        .populate("createdBy"); // Populasi referensi pengguna

      res.status(200).json({
        data: orders,
        message: "Berhasil mengambil semua order berdasarkan pengguna",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Gagal mengambil order berdasarkan pengguna",
      });
    }
  },

  async deleteOrder(req: Request, res: Response) {
    const user = (req as IReqUser).user; // Mengambil user dari token JWT

    try {
      const orderId = req.params.id;

      // Temukan pesanan berdasarkan ID
      const order = await OrderModel.findById(orderId);

      if (!order) {
        return res.status(404).json({
          message: "Pesanan tidak ditemukan",
        });
      }

      // Cek apakah pengguna yang membuat pesanan sesuai dengan user.id yang melakukan permintaan
      if (order.createdBy.toString() !== user.id.toString()) {
        return res.status(403).json({
          message: "Tidak memiliki izin untuk menghapus pesanan ini",
        });
      }

      // Hapus pesanan
      const deletedOrder = await OrderModel.findByIdAndDelete(orderId);

      if (!deletedOrder) {
        return res.status(404).json({
          message: "Pesanan gagal dihapus",
        });
      }

      // Kembalikan kuantitas produk setelah pesanan dihapus
      for (const item of deletedOrder.orderItems) {
        await ProductsModel.updateOne(
          { _id: item.productId },
          { $inc: { qty: item.quantity } }
        );
      }

      res.status(200).json({
        data: deletedOrder,
        message: "Berhasil menghapus pesanan",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Gagal menghapus pesanan",
      });
    }
  },
  async updateOrder(req: Request, res: Response) {
    const user = (req as IReqUser).user;
    const orderId = req.params.id;
    const updateData = req.body;

    try {
      // Validasi data yang akan diupdate
      await orderSchema.validate(updateData);

      const existingOrder = await OrderModel.findById(orderId);

      if (!existingOrder) {
        return res.status(404).json({
          message: "Pesanan tidak ditemukan",
        });
      }

      if (existingOrder.createdBy.toString() !== user.id.toString()) {
        return res.status(403).json({
          message: "Tidak diizinkan mengupdate pesanan yang bukan milik Anda",
        });
      }

      // Ambil data orderItems lama
      const oldOrderItems = existingOrder.orderItems;

      // Update pesanan
      const updatedOrder = await OrderModel.findByIdAndUpdate(
        orderId,
        updateData,
        {
          new: true,
        }
      );

      // Mengambil daftar produk yang ada di orderItems baru
      const newOrderItems = updateData.orderItems || [];

      // Kumpulkan ID produk dari orderItems baru
      const newProductIds = newOrderItems.map((item: any) => item.productId);
      const oldProductIds = oldOrderItems.map((item: any) => item.productId);

      // Menghitung perbedaan kuantitas untuk produk yang diupdate
      for (const item of oldOrderItems) {
        const product = await ProductsModel.findById(item.productId);

        if (product) {
          const newItem = newOrderItems.find(
            (i: any) => i.productId === item.productId
          );

          // Jika produk masih ada di pesanan baru
          if (newItem) {
            await ProductsModel.updateOne(
              { _id: item.productId },
              { $inc: { qty: item.quantity - newItem.quantity } }
            );
          } else {
            // Jika produk dihapus dari pesanan
            await ProductsModel.updateOne(
              { _id: item.productId },
              { $inc: { qty: item.quantity } }
            );
          }
        }
      }

      // Update kuantitas untuk produk yang baru ditambahkan ke pesanan
      for (const item of newOrderItems) {
        const product = await ProductsModel.findById(item.productId);

        if (product) {
          await ProductsModel.updateOne(
            { _id: item.productId },
            { $inc: { qty: -item.quantity } }
          );
        }
      }

      res.status(200).json({
        data: updatedOrder,
        message: "Berhasil memperbarui pesanan",
      });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return res.status(400).json({
          data: error.errors,
          message: "Gagal memperbarui pesanan",
        });
      }

      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Gagal memperbarui pesanan",
      });
    }
  },
};
