import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/products';
import { ProductService } from 'src/app/service/product.service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

/**
 * This class is for list all data of the component
 */
export class ProductListComponent implements OnInit {

  /**
   * We create variables
   */
  @Input() productId: string = '';
  products: Product[]=[];
  /**
   * In the constructor we invoke libraries and functions to be used
   * @param productService 
   * @param router 
   */
  constructor(private productService: ProductService,
    private router: Router) { }

    /**
     * Is for initialize our methods, serves as actulaizacion
     */
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Method for view all information
   */
  getProducts(){
    this.productService.getProducts()
      .subscribe(products => {
        console.log(products); // Añade esta línea
        this.products = products;
      });
  }

  /**
   * Method for call class you edit
   * @param id 
   */
  editProduct(id: string) {
    this.router.navigate(['/edit', id]);
  }

  /**
   * Method for call class to delete
   * @param id 
   */
  deleteProduct(id: string) { 
  this.productService.deleteProduct(id) 
  .subscribe(products => {
    alert('product eliminado' + id)
    console.log('producto eliminado', products);
    this.ngOnInit();
  })   
  
  }

  /**
   * Method for claa class to create
   */
  createProduct(){
    this.router.navigate(['/create']);
  }

  /**
   * Method for call class to specific informaction
   * @param id 
   */
  seeMore(id: string){
    this.router.navigate(['/products',id])
  }


  
}
