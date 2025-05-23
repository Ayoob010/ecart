import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http:HttpClient) {   //created obj for httpclient

    }

   getProduct()
    {
      return this.http.get("https://fakestoreapi.com/products/category/electronics");  //get method for httpclient
    }


    getProductById(id:string)
    {
      return this.http.get(`https://fakestoreapi.com/products/category/electronics/${id}`);  //get method for httpclient
    }
}
