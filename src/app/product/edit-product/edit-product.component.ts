import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  productid:any
  productdata:any

  constructor(private ar:ActivatedRoute,private ps:ProductserviceService,private router:Router){ }

  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"]
    })

    this.ps.viewproduct(this.productid).subscribe((item:any)=>{
      this.productdata=item
    })
  }


  updateProduct(form:any){
    let updateproduct={
      id: form.value.id,
      productName:form.value.productName,
      categoryId: form.value.categoryId,
      description:form.value.description,
      about: form.value.about,
      price: form.value.price,
      previousPrice:form.value.previousPrice,
      isAvailable:form.value.isAvailable,
      productImage: form.value.productImage,
      rating:form.value.rating,
      reviews:form.value.reviews,
      vendorName:form.value.vendorName
    }

    this.ps.updateProduct(this.productid,this.productdata).subscribe((item:any)=>{
      alert("Product details Updated")
      this.router.navigateByUrl("product")
    })
  }

}
