import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor(private productservice:ProductService){
    this.products = this.productservice.getAllProducts();
  }
  
  addProduct(name: string, price: string, nameInput: HTMLInputElement, priceInput: HTMLInputElement): void {
    const priceNumber = parseFloat(price);
    if (name && !isNaN(priceNumber)) {
      const newProduct: Product = { Id:this.products.length+1, Name: name, Price: priceNumber };
      this.productservice.addProduct(newProduct);
      nameInput.value = '';
      priceInput.value = '';
    }
  }
  deleteProduct(id: number): void {
    this.productservice.deleteProduct(id);
    this.products = this.productservice.getAllProducts();
  }
  
  get:boolean=true;
  getAll(){
    this.get=!this.get;
  }
}
