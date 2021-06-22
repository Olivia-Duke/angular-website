import {Component, Input} from '@angular/core';
import {SpecificItem} from '../../../models/wishlist/specificItem';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  title = 'Jackson Duke | Wishlist';
  @Input() item: SpecificItem;

  openLink() {
    window.open(this.item.link, '_blank');
  }
}
