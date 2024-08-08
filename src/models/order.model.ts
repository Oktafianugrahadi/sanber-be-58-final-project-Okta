import mongoose, { Document, Model } from "mongoose";
import mail from "@/utils/mail/mail"; // Pastikan path-nya sesuai dengan struktur folder Anda
import UserModel from "@/models/user.model"; // Pastikan path-nya sesuai dengan struktur folder Anda

interface IOrderItem {
  name: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}

interface IOrder extends Document {
  grandTotal: number;
  orderItems: IOrderItem[];
  createdBy: mongoose.Types.ObjectId;
  status: "pending" | "completed" | "cancelled";
}

const OrderItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"],
      max: [5, "Quantity must be less than or equal to 5"],
    },
  },
  { _id: false }
);

const OrderSchema = new mongoose.Schema(
  {
    grandTotal: {
      type: Number,
      required: true,
    },
    orderItems: [OrderItemSchema],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referensi ke model User
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Hook untuk sebelum order disimpan
OrderSchema.pre("save", function (next) {
  if (this.isNew) {
    console.log("Memproses order baru...");
  }
  next();
});

// Hook untuk setelah order disimpan
OrderSchema.post(
  "save",
  async function (doc: IOrder, next: (err?: any) => void) {
    try {
      // Menggunakan model untuk query
      const populatedOrder = await OrderModel.findById(doc._id)
        .populate("createdBy") // Populasi createdBy untuk mendapatkan detail pengguna
        .exec();

      if (!populatedOrder) {
        console.error("Pesanan tidak ditemukan");
        next(new Error("Pesanan tidak ditemukan"));
        return;
      }

      // Mengambil user dari populatedOrder
      const user = populatedOrder.createdBy as any; // as any untuk menghindari masalah tipe

      if (!user) {
        console.error("Pengguna tidak ditemukan");
        next(new Error("Pengguna tidak ditemukan"));
        return;
      }

      // Render dan kirim email
      const content = await mail.render("invoice.ejs", {
        customerName: user.fullName,
        orderItems: doc.orderItems,
        grandTotal: doc.grandTotal,
        contactEmail: "support@example.com", // Ganti dengan email kontak Anda
        companyName: "Your Company", // Ganti dengan nama perusahaan Anda
        year: new Date().getFullYear(),
      });

      await mail.send({
        to: user.email,
        subject: "Your Invoice",
        content: content, // Kirim sebagai HTML
      });

      console.log(`Berhasil membuat order dengan ID: ${doc._id}`);
      console.log(`Email dikirim ke: ${user.email}`);

      next();
    } catch (error) {
      console.error("Terjadi kesalahan dalam post save hook:", error);
      next(error);
    }
  }
);

const OrderModel: Model<IOrder> = mongoose.model<IOrder>("Orders", OrderSchema);

export default OrderModel;
