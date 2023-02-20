import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {

  productlist:any
  filterproducts:any
  searchkey:any

  constructor (private ps:ProductserviceService){

  }
  ngOnInit(): void {
    this.ps.viewAllProducts().subscribe((data:any)=>{
      // console.log(data);
      this.productlist=data
    })

    // Access data from behaviour subject
    this.ps.search.subscribe((data:any)=>{
      this.searchkey=data
    })

  }

  filter(category:any){
    this.filterproducts=this.productlist.filter((item:any)=>{
      if(item.categoryId==category || category==""){
        return item
      }
    })
  }

  

}
