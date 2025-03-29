import { Component } from '@angular/core';
import { CardsComponent } from '../../UI/cards/cards.component';
import { APIServiceService } from '../../apiservice.service';

@Component({
  selector: 'app-products',
  imports: [CardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: any[] = [];
  constructor(private apiservice:APIServiceService) { }

  ngOnInit()
  {
    this.apiservice.getProduct().subscribe((data:any)=>{
      this.products = data;
  })

  }
}
