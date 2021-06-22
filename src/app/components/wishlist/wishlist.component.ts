import {Component} from '@angular/core';
import wishlist from '../../../assets/text-content/wishlist-items.json';
import {SpecificItem} from '../../models/wishlist/specificItem';
import {WishlistItem} from '../../models/wishlist/wishlistItem';
import {Wishlist} from '../../models/wishlist/wishlist';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist: Wishlist = wishlist;

  getSpecificItems(): SpecificItem[] {
    return wishlist.specificItems;
  }

  getGeneralItems(): WishlistItem[] {
    return wishlist.generalItems;
  }
}
