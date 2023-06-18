import mongoose from "mongoose";

// 1. Interface
export interface ICategoryModel extends mongoose.Document {
    categoryName: string;
}

// 2. Schema
export const CategorySchema = new mongoose.Schema<ICategoryModel>({
    categoryName: {
        type: String,
        required: [true, "Missing name"]
    }
});

// 3. Model
export const CategoryModel = mongoose.model<ICategoryModel>("CategoryModel", CategorySchema, "categories");