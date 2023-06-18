import mongoose from "mongoose";
import { CategoryModel } from "./category-model";

// 1. Interface
export interface IProductModel extends mongoose.Document {
    name: string;
    creationTime: string;
    expiry: string;
    categoryId: mongoose.Schema.Types.ObjectId;
    price:number;
}

// 2. Schema
export const ProductSchema = new mongoose.Schema<IProductModel>({
    name: {
        type: String,
        required: [true, "Missing name"]
    },
    creationTime: {
        type: String,
        required: [true, "Missing CreationTime"]
    },
    expiry: {
        type: String,
        required: [true, "Missing expiry"]
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId
    },
    price:{
        type:Number,
        required:[true,"Missing Price"]
    }
}, {
    versionKey: false,
    toJSON: { virtuals: true},
    id: false
});

ProductSchema.virtual("category", {
    ref: CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
});

// 3. Model
export const ProductModel = mongoose.model<IProductModel>("ProductModel", ProductSchema, "products");
