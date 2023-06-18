import { CategoryModel } from "./category-model"

export class ProductModel{
    public _id:string
    public name:string
    public creationTime:string
    public expiry:string
    public categoryId :string
    public price:number
    public category:CategoryModel
}