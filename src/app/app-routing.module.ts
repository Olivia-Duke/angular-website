import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {MusicComponent} from './components/music/music.component';
import {WishlistComponent} from './components/wishlist/wishlist.component';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
