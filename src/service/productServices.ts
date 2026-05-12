import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "./src/database/db.json");

export const readProduct = () => {
  const products = fs.readFileSync(filePath, "utf-8");
  return products;
};


export const insertProduct = (payload: string) => {
  fs.writeFileSync(filePath, payload, "utf-8");
}