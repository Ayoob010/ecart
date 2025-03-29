import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductviewComponent } from '../../pages/productview/productview.component';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
@Input() data={
  id: 1,
  image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  productitle:"Card Title",
  price:"$45.6",
  category:"Mens",
  description:"Card Description",
  rate:"3.5"
}
}
