import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WishlistItemComponent} from './components/wishlist/wishlist-item/wishlist-item.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MusicComponent} from './components/music/music.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    ProjectsComponent,
    MusicComponent,
    WishlistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
