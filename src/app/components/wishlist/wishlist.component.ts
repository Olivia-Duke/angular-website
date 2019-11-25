import {Component} from '@angular/core';
import wishlist from '../../../assets/text-content/wishlist-items.json';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist = wishlist;
}
