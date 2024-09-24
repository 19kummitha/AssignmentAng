import { Injectable } from '@angular/core';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  constructor(){
    this.products=[
    {Id:1, Name:'Product 1', Price:100},
    {Id:2, Name:'Product 2', Price:200}
  ];
  }
  getAllProducts(){
    return this.products;
  }
  addProduct(product: Product): void {
    this.products.push(product);
  }
  deleteProduct(id: number): void {
    const index = this.products.findIndex(product => product.Id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    
  }
  UpdateProduct(id:number,Updateproduct:Product):void{
    const index=this.products.findIndex(product=>product.Id===id);
    this.products[index]={
      Id:Updateproduct.Id,
      Name:Updateproduct.Name,
      Price:Updateproduct.Price,
  }
  }
}
