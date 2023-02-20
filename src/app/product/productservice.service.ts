import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  search=new BehaviorSubject("")
 
  constructor(private http:HttpClient) { }

  // http request for view all products
  viewAllProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  addProduct(newproduct:any){
    return this.http.post('http://localhost:3000/products',newproduct)
  }

  // API To get single poduct data
  viewproduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }

  // Delete API
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }

  // Update product
  updateProduct(id:any,data:any){
    return this.http.put('http://localhost:3000/products/'+id,data)
  }


}
