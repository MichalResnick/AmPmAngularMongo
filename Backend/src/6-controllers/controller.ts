import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import { ProductModel } from "../4-models/product-model";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/____
router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
      const categories=await logic.getAllCategories()
      response.json(categories)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/products-by-category/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
      const categoryId=request.params.categoryId
      const products=await logic.getProductsByCategories(categoryId)
      response.json(products)
    }
    catch (err: any) {
        next(err);
    }
});

router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product= new ProductModel(request.body)
      const addedProduct=await logic.addProduct(product)
      response.status(201).json(addedProduct)
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/products/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        await logic.deleteProduct(_id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;

