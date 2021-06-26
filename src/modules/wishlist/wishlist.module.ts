import {NgModule} from '@angular/core';
import {WishlistComponent} from './wishlist.component';
import {WishlistItemComponent} from './wishlist-item/wishlist-item.component';
import {ServicesModule} from '../services/services.module';
import {CommonModule} from '@angular/common';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {LocalResourceService} from '../services/local-resource-service';

@NgModule({
  declarations: [
    WishlistComponent,
    WishlistItemComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalComponentsModule
  ],
  exports: [
    WishlistComponent
  ],
  providers: [
    LocalResourceService
  ]
})
export class WishlistModule { }
