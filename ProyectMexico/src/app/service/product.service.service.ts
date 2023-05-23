import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../modules/products';

@Injectable({
  providedIn: 'root'
})

/**
 * This class is for call petitions of the api
 */
export class ProductService {

  /**We initialize the API URL
   */
  private apiURL = 'http://localhost:7070/api/products'; 

  /**
   * call method HTTP
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * Petition for view all data
   * @returns 
   */
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }

  /**
   * petition for view data specific
   * @param id 
   * @returns 
   */
  getProduct(id: string): Observable<Product>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Product>(url);
  }

  /**
   * Method for create new data
   * @param product 
   * @returns 
   */
  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiURL, product);
  }

  /**
   * Method for update data
   * @param id 
   * @param product 
   * @returns 
   */
  updateProduct(id: string, product: Product): Observable<Product>{
    const url = `${this.apiURL}/${id}`;
    return this.http.put<Product>(url, product);
  }

  /**
   * Method for delete data
   * @param id 
   * @returns 
   */
  deleteProduct(id: string): Observable<void>{
    const url = `${this.apiURL}/${id}`;
    return this.http.delete<void>(url);
  }

}
