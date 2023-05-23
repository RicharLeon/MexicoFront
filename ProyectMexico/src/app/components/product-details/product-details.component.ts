import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/products';
import { ProductService } from 'src/app/service/product.service.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
/**
 * This class is for call especific data
 */
export class ProductDetailsComponent implements OnInit {

  /**
   * We invoke the variable that comes from the schema
   */
  product: Product | undefined;

  /**
   * We host the main variables and libraries, to be able to use them
   * @param route 
   * @param productService 
   * @param location 
   */
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  /**
   * the ngoninit, we used it to update the information every 
   * time we mention or make an action in the component
   */
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductId(productId);
    }
  }

  /**
   * Here methos is for Invoke the service which brings us the specific information
   * @param id 
   */
  getProductId(id: string): void {
    this.productService.getProduct(id)
    .subscribe(produc =>{
      this.product = produc;
    })
  }

  /**
   * MEthos is used for return page
   */
  goBack(): void {
    this.location.back(); 
  }
}
