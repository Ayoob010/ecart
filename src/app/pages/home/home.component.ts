import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
