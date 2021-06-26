import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from '../modules/projects/projects.component';
import {MusicComponent} from '../modules/music/music.component';
import {WishlistComponent} from '../modules/wishlist/wishlist.component';
import {HomeComponent} from '../modules/home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
