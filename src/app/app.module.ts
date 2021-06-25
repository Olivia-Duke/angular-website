import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './components/home/home.module';
import { AppComponent } from './app.component';
import {WishlistItemComponent} from './components/wishlist/wishlist-item/wishlist-item.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MusicComponent} from './components/music/music.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectItemComponent} from './components/projects/project-item/project-item.component';
import {LocalResourceService} from './service/local-resource-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ServicesModule} from './service/services.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    ProjectsComponent,
    ProjectItemComponent,
    MusicComponent,
    WishlistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ServicesModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
