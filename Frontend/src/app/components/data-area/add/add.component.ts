import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category-model';

import { ProductModel } from 'src/app/models/product-model';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{

  public categories:CategoryModel[]=[]
  public product=new ProductModel()

  public constructor(private dataService:DataService,private router:Router){}

   public async ngOnInit() {
    try {
      
      this.categories= await this.dataService.getAllCategories()
      
    } catch (error:any) {
      alert(error.message)
    }
  }

  public async send(){
try {
     await this.dataService.addProduct(this.product)
     alert("you added product")
     this.router.navigateByUrl("/list")
  
} catch (error:any) {
  alert(error.message)
}  }

}
