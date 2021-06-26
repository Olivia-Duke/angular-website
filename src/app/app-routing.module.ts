import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import ('../modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import ('../modules/projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'music',
    loadChildren: () => import ('../modules/music/music.module').then(mod => mod.MusicModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import ('../modules/wishlist/wishlist.module').then(mod => mod.WishlistModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
