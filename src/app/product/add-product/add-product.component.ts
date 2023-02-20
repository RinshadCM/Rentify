import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb: FormBuilder,private ps:ProductserviceService, private router:Router) {

  }
  addProductForm = this.fb.group({
    id: [''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    previousPrice: [''],
    isAvailable: [''],
    productImage: [''],
    rating: [''],
    reviews: [''],
    vendorName: [''],
    about:['']
  })


  addNewProduct() {
    let newProductData = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      previousPrice: this.addProductForm.value.previousPrice,
      isAvailable: this.addProductForm.value.isAvailable,
      productImage: this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      reviews: this.addProductForm.value.reviews,
      vendorName: this.addProductForm.value.vendorName,
      about:this.addProductForm.value.about
    }

    this.ps.addProduct(newProductData).subscribe((item:any)=>{
      alert("Product Added Successfully")
      this.router.navigateByUrl('product')
    })
  }



}
