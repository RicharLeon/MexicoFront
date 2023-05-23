import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ProductService } from 'src/app/service/product.service.service';

/**
 * Here is the component, call principal records
 */
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

/**
 * This class is for create new data for the products
 */
export class ProductCreateComponent implements OnInit {

  /**
   * the constructor is used to call libraries or schemas
   * @param productService 
   * @param location 
   */
  constructor(private productService: ProductService,
    private location: Location
    ) { }

   
  ngOnInit(): void {
  }

  /**
   * Method which consumes the service
   *  and creates the new product
   * @param product 
   */
  createProduct(product: any): void {
    this.productService.createProduct(product)
    .subscribe(
      res => {
        alert("Creado exitosamente");
      },
      err => {
        console.info(err.message);
      }
    )
  }
  
  /**
   * Method for return page
   */
  goBack(): void {
    this.location.back(); 
  }

}
