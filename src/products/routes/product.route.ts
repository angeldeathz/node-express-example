import { Router } from "express";
import { productController } from "../controllers/product.controller";

class ProductRoute {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    private config() {
        const api = "/products";
        this.router.get(api, productController.get);
        this.router.post(api, productController.post);
    }
}

export const productRoute = new ProductRoute().router;