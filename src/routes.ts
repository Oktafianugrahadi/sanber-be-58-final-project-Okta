import express from "express";
import categoriesController from "@/controllers/categories.controller";
import authController from "@/controllers/auth.controller";
import authMiddleware from "@/middlewares/auth.middleware";
import aclMiddleware from "@/middlewares/acl.middleware";
import productController from "@/controllers/product.controller";
import orderController from "@/controllers/order.controller";
import { handleUpload } from "@/utils/cloudinary";
import { single, multiple } from "./middlewares/upload.middleware";

const router = express.Router();

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.get("/auth/me", authMiddleware, authController.me);
router.put("/auth/profile", authMiddleware, authController.profile);

// CRUD Categories
router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);

router.get("/products", productController.findAll);
router.post(
  "/products",
  [authMiddleware, aclMiddleware(["admin"])],
  productController.create
);
router.get("/products/:id", productController.findOne);
router.put(
  "/products/:id",
  [authMiddleware, aclMiddleware(["admin"])],
  productController.update
);
router.delete(
  "/products/:id",
  [authMiddleware, aclMiddleware(["admin"])],
  productController.delete
);

router.post("/orders", authMiddleware, orderController.create);
router.get(
  "/orders/history",
  [authMiddleware, aclMiddleware("user.id")],
  orderController.getOrderHistory
);
router.delete(
  "/orders/:id",
  [authMiddleware, aclMiddleware("user.id")],
  orderController.deleteOrder
);
router.put(
  "/orders/:id",
  [authMiddleware, aclMiddleware("user.id")],
  orderController.updateOrder
);

// Rute untuk upload satu file
router.post("/upload/single", single, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const { buffer, originalname } = req.file;
    const result = await handleUpload(buffer, originalname);
    res.status(200).json(result);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred.");
    }
  }
});

// Rute untuk upload beberapa file
router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).send("No files uploaded.");
    }

    const uploadPromises = (req.files as Express.Multer.File[]).map((file) =>
      handleUpload(file.buffer, file.originalname)
    );
    const results = await Promise.all(uploadPromises);
    res.status(200).json(results);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("An unknown error occurred.");
    }
  }
});

export default router;
