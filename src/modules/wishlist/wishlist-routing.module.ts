import {RouterModule, Routes} from '@angular/router';
import {WishlistComponent} from './wishlist.component';
import {NgModule} from '@angular/core';

const wishlistRoutes: Routes = [
  {path: '', component: WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forChild(wishlistRoutes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
