import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  title = 'Jackson Duke | Wishlist';
  @Input() itemName: string;
  @Input() itemPrice: number;
  @Input() itemImage: string;
  @Input() itemLink: string;
  @Input() itemBlurb: string;

  openLink() {
    window.open(this.itemLink, '_blank');
  }
}
