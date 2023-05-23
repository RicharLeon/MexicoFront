import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/service/product.service.service';
import { Product } from 'src/app/modules/products';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

/**
 * Class for edit products
 */
export class ProductEditComponent implements OnInit {

  /**
   * Creation of variables
   */
  productId: string = '';
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
    this.productId = this.route.snapshot.params['id'];
    this.getProduct();
  }

  /**
   * Methos which invokes the function which allows us to view information
   */
  getProduct(): void {
    this.productService.getProduct(this.productId)
      .subscribe(
        (res: Product) => {
          this.product = res;
        },
        (err: any) => {
          console.log('err', err.message);
        }
      );
  }

  /**
   *  Methos which invokes the function which allows us to edit
   */
  updateProduct(): void {
    if (this.product) {
      this.productService.updateProduct(this.productId, this.product)
        .subscribe(
          (res: any) => {
            alert('Producto actualizado exitosamente');
          },
          (err: any) => {
            console.log('err', err.message);
          }
        );
    } else {
      alert('No se encontró el producto');
    }
  }

  /**
   * Method for return page
   */
  goBack(): void {
    this.location.back(); 
  }

}
