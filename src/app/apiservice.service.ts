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
      return this.http.get("https://fakestoreapi.com/products");  //get method for httpclient
    }


    getProductById(id:string)
    {
      return this.http.get(`https://fakestoreapi.com/products/${id}`);  //get method for httpclient
    }
}
