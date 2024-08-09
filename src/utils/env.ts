import dotenv from "dotenv";

dotenv.config();

// console.log("DATABASE_URL:", process.env.DATABASE_URL); // Debug log
// console.log("SECRET:", process.env.SECRET); // Debug log

export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const SECRET: string = process.env.SECRET || "secret";
export const CLOUDINARY_API_KEY: string =
  process.env.CLOUDINARY_API_KEY || "default_api_key";
export const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || "default_api_secret";
export const CLOUDINARY_CLOUD_NAME: string =
  process.env.CLOUDINARY_CLOUD_NAME || "default_cloud_name";
