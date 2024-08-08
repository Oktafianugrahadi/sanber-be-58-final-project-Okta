import { Request, Response, NextFunction } from "express";
import { IReqUser } from "@/utils/interfaces";

export default (allowed: string | string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user = (req as IReqUser).user;
    const userId = user.id;

    if (typeof allowed === "string") {
      // Jika allowed adalah 'user.id', pastikan pengguna sesuai
      if (allowed === "user.id" && userId !== userId) {
        return res.status(403).json({
          message: "Akses ditolak: ID pengguna tidak sesuai.",
        });
      }
    } else if (Array.isArray(allowed)) {
      // Jika allowed adalah array peran
      if (!user.roles.some((role) => allowed.includes(role))) {
        return res.status(403).json({
          message: "Akses ditolak: Peran tidak diizinkan.",
        });
      }
    } else {
      return res.status(403).json({
        message: "Akses ditolak: Kriteria tidak valid.",
      });
    }

    next();
  };
