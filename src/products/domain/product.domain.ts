import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLenght: 50
    },
    description: {
        type: String,
        required: true,
        maxLenght: 100
    },
    imageUrl: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    actualStock: {
        type: Number,
        required: true
    }
});

const Product = model("Product", productSchema);
export default Product;