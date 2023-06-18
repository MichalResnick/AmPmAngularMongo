import { CategoryModel, ICategoryModel } from "../4-models/category-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllCategories():Promise<ICategoryModel[]> {
    return CategoryModel.find().exec()
}

function getProductsByCategories(categoryId:string):Promise<IProductModel[]>{
    return ProductModel.find({ categoryId }).populate("category").exec();

}

function addProduct(product:IProductModel):Promise<IProductModel>{
    const error=product.validateSync()
    if(error) throw new ValidationErrorModel(error.message)
    return product.save()
}

async function deleteProduct(_id:string):Promise<void> {
  const deleteProduct=await ProductModel.findByIdAndDelete(_id)
  if(!deleteProduct) throw new ResourceNotFoundErrorModel(_id)
    
}



export default {
    getAllCategories,
    getProductsByCategories,
    addProduct,
    deleteProduct
};