import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from '../modules/home/home.module';
import { AppComponent } from './app.component';
import {MusicComponent} from '../modules/music/music.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServicesModule} from '../modules/services/services.module';
import {WishlistModule} from '../modules/wishlist/wishlist.module';
import {ProjectsModule} from '../modules/projects/projects.module';
import {ScrollToTopComponent} from './components/scroll-to-top/scroll-to-top.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MusicModule} from '../modules/music/music.module';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    WishlistModule,
    ProjectsModule,
    ServicesModule,
    MusicModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
