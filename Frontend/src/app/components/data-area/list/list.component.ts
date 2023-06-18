import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category-model';
import { ProductModel } from 'src/app/models/product-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public constructor( private service:DataService){}

  public categories:CategoryModel[]=[]
  public products:ProductModel[]

  public async ngOnInit() {
    try {
      
    this.categories=await this.service.getAllCategories()
      
    } catch (error:any) {
      alert(error.message)
      
    }

  }

  public async displayProducts(args:Event){

    try {
      const selectedElements=args.target as HTMLSelectElement
      const value=selectedElements.value
     
      this.products=await this.service.getProductsByCategory(value)
      
    } catch (error:any) {
      alert(error.message)
    } 
  }

  public async deleteMe(_id:string){

    try {
      if(!window.confirm("Are you sure?")) return;
      await this.service.deletProduct(_id)
      alert("You Deleted Product")

      const index=this.products.findIndex(i=>i._id===_id)
      this.products.splice(1,index)
    } catch (error:any) {
      alert(error.message)
    }
  }



}
