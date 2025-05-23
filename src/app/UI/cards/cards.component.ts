import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductviewComponent } from '../../pages/productview/productview.component';

@Component({
  selector: 'app-cards',
  imports: [RouterLink, ProductviewComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
@Input() data={
  id: 9,
  image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  productitle:"Card Title",
  price:"$64",
  description:"Card Description",
}
}
