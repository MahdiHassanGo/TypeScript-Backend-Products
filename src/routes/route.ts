import { type IncomingMessage, type ServerResponse } from "http";
import { insertProduct, readProduct } from "../service/productServices.js";
import type { Iproduct } from "../types/productType.js";
import { parseBody } from "../utility/parseBody.js";
import { sendResponse } from "../utility/sendResponse.js";

export const routeHandler = async(req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const products = JSON.parse(readProduct());
  const urlParts = url?.split("/")
  const id = urlParts && urlParts[1] === 'products' ?Number(urlParts[2]) :null;



  if (url === "/products" && method === "GET") {
    sendResponse(res, 200, true, "Product Recieved Successfully", products);
    console.log("This is Root route ");
  } else if (method === 'GET' && id !== null) {
    const product = products.find((p: Iproduct) => p.id === id);
    if (product) {
      sendResponse(res, 200, true, "Product found", product);
    } else {
      sendResponse(res, 404, false, "Product not found");
    }
  } else if (method === "POST" && url === "/products") {
    const body = await parseBody(req);
    const productsList = JSON.parse(readProduct()) as Iproduct[];
    const newProduct: Iproduct = {
      id: Date.now(),
      ...body,
    };
    productsList.push(newProduct);
    insertProduct(JSON.stringify(productsList, null, 2));

    sendResponse(res, 200, true, "Product Recieved Successfully", newProduct);
  } else if (method === "PUT" && id !== null) {
    const body = await parseBody(req);
    const productsList = JSON.parse(readProduct()) as Iproduct[];
    const index = productsList.findIndex((p) => p.id === id);

    if (index === -1) {
      sendResponse(res, 404, false, "Product not found");
      return;
    }

    const updatedProduct = {
      ...productsList[index],
      ...body,
    };
    productsList[index] = updatedProduct;
    insertProduct(JSON.stringify(productsList, null, 2));

    sendResponse(res, 200, true, "Product updated", updatedProduct);
  } else if (method === 'DELETE' && id !== null) {
    const productsList = JSON.parse(readProduct()) as Iproduct[];
    const index = productsList.findIndex((p) => p.id === id);

    if (index === -1) {
      sendResponse(res, 404, false, "Product not found");
      return;
    }

    productsList.splice(index, 1);
    insertProduct(JSON.stringify(productsList, null, 2));
    sendResponse(res, 200, true, "Product Deleted successfully", null);
  }
};
