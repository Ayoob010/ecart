import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductviewComponent } from './pages/productview/productview.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

            {
                path: 'products',
                component: ProductsComponent
            },
                
                {
                    path: 'contact',
                    component: ContactComponent
                },
                {
                    path: 'productview/:id',
                    component: ProductviewComponent
                }
];
