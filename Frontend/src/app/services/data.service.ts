import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category-model';
import { appConfig } from '../utils/app-config';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from '../models/product-model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public constructor(private http: HttpClient) { }

public async getAllCategories():Promise<CategoryModel[]>{
    const observable=this.http.get<CategoryModel[]>(appConfig.categoriesUrl)
    const categories= await firstValueFrom(observable)
    return categories 
    }

public async getProductsByCategory(categoryId:string):Promise<ProductModel[]>{
    const observable=this.http.get<ProductModel[]>(appConfig.productsByCategoryUrl+categoryId)
    const products= await firstValueFrom(observable)
    return products 
    }

public async addProduct(product:ProductModel):Promise<void>{
    const observable=this.http.post<ProductModel>(appConfig.productsUrl,product)
    await firstValueFrom(observable)
}

public async deletProduct(_id:string):Promise<void>{
    const observable=this.http.delete<ProductModel>(appConfig.productsUrl+_id)
    await firstValueFrom(observable) 
}

}
