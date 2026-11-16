import { Schema, model } from "mongoose";

const userSchema = new Schema({
     id: String,
     title: String,
     price: Number,
     description: String,
    category: String,
    image: String,
});

export default model('productsStore', userSchema);