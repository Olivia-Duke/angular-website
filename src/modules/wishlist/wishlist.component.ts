import {Component, OnInit} from '@angular/core';
import wishlist from '../../assets/text-content/wishlist-items.json';
import {SpecificItem} from './models/wishlist/specificItem';
import {WishlistItem} from './models/wishlist/wishlistItem';
import {Wishlist} from './models/wishlist/wishlist';
import {LocalResourceService} from '../services/local-resource-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(
    private resourceService: LocalResourceService
  ) {}

  resourceLocation = '/assets/text-content/wishlist-items.json';

  wishlist: Wishlist;

  generalItems: WishlistItem[];
  specificItems: SpecificItem[];



  ngOnInit() {
    this.log('ngOnInit');
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.wishlist = result;
      this.generalItems = wishlist.generalItems;
      this.specificItems = wishlist.specificItems;

      this.log(`generalItems: ${this.generalItems.length}`);
      this.log(`specificItems: ${this.specificItems.length}`);
    }).catch(err => {
      console.error(err);
    });
  }

  private log = (message: string): void => {
    console.log(`[WishListComponent] ${message}`);
  }
}
