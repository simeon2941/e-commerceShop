import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';
import {DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ProductDetailsComponent } from './components/product-detail/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [

  { path: '', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent},

  // { path: '', component: HomeContentComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },

  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'cart', component: CartComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,

  },
  {
    path: 'error',
    component: ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
