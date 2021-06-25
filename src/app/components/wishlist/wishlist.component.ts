import {Component, OnInit} from '@angular/core';
import wishlist from '../../../assets/text-content/wishlist-items.json';
import {SpecificItem} from '../../models/wishlist/specificItem';
import {WishlistItem} from '../../models/wishlist/wishlistItem';
import {Wishlist} from '../../models/wishlist/wishlist';
import {LocalResourceService} from '../../service/local-resource-service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  resourceLocation = '/assets/text-content/wishlist-items.json';

  constructor(
    private resourceService: LocalResourceService
  ) {}

  wishlist: Wishlist;

  ngOnInit() {
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.wishlist = result;
    }).catch(err => {
      console.error(err);
    });
  }

  getSpecificItems(): SpecificItem[] {
    return wishlist.specificItems;
  }

  getGeneralItems(): WishlistItem[] {
    return wishlist.generalItems;
  }
}
