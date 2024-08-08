import express from "express";
import categoriesController from "@/controllers/categories.controller";
import authController from "@/controllers/auth.controller";
import authMiddleware from "@/middlewares/auth.middleware";
import aclMiddleware from "@/middlewares/acl.middleware";
import productController from "@/controllers/product.controller";
import orderController from "@/controllers/order.controller";

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

export default router;
