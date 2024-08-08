import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../utils/env";
import { IReqUser } from "../utils/interfaces";

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token tidak ditemukan. Akses ditolak." });
  }

  const [prefix, accessToken] = token.split(" ");

  if (prefix !== "Bearer" || !accessToken) {
    return res
      .status(401)
      .json({ message: "Format token tidak valid. Akses ditolak." });
  }

  try {
    const decoded = jwt.verify(accessToken, SECRET) as {
      id: string;
      roles: string[];
    };

    (req as IReqUser).user = {
      id: decoded.id,
      roles: decoded.roles,
    };

    next();
  } catch (error) {
    console.error("Kesalahan verifikasi JWT:", error);
    return res
      .status(401)
      .json({ message: "Token tidak valid. Akses ditolak." });
  }
};
