import Product from '../domain/product.domain';


export default class ProductRepository {

    public async get() {
        return await Product.find();
    }

    public async getById(id: number) {
        return await Product.findOne({ _id: id });
    }

    public async save(product: any) {
        return await product.save();
    }

    public async update(product: any) {
        return await Product.updateOne(product);
    }
}