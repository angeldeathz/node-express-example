import { Request, Response } from "express";
import ProductRepository from '../infraestructure/product.repository';
import Product from '../domain/product.domain';

class ProductController {

    private readonly productRepository: ProductRepository;

    constructor() {
        this.productRepository = new ProductRepository();
    }

    public async get(request: Request, response: Response, next: any) {
        try {

            // const repository: ProductRepository = new ProductRepository();
            const products = await this.productRepository.get();

            if (products.length > 0) {
                return response.status(200).json(products);
            }

            return response.sendStatus(204);

        } catch (error) {
            next(error);
        }
    }

    public async post(request: Request, response: Response, next: any) {
        try {

            const body = request.body;

            const product = new Product({
                name: body.name,
                description: body.description,
                imageUrl: body.imageUrl,
                weight: body.weight,
                actualStock: body.actualStock
            });


            // const repository: ProductRepository = new ProductRepository();

            const usuarioResponse = await this.productRepository.save(product);
            response.status(200).json(usuarioResponse);
        } catch (error) {
            next(error);
        }
    }
}

export const productController = new ProductController();