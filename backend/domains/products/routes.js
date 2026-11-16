import { Router, Router } from "express";
import Product from "./model"

const router = Router;

router.post('/', async (req, res) => {
    const {
        id,
        title,
        price,
        description,
        category,
        image,
    } = req.body

    try {

        const newProduct = Product.create({
            id,
            title,
            price,
            description,
            category,
            image,
        })

    } catch (error) {

        console.error(error);
        res.status(500).json(error);

    }
});
