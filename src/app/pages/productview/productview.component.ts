import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';
import { APIServiceService } from '../../apiservice.service';

@Component({
  selector: 'app-productview',
  imports: [],
  templateUrl: './productview.component.html',
  styleUrl: './productview.component.scss'
})
export class ProductviewComponent {

product: any;

constructor(private route: ActivatedRoute,private apiservice:APIServiceService) { }


ngOnInit() {
  const productId = this.route.snapshot.paramMap.get('id');


  if (productId) {
    this.apiservice.getProductById(productId).subscribe((data) =>
       {
      this.product = data;
    });
  }
}



}
