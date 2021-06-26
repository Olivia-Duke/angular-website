import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MusicComponent} from './music.component';

const routes: Routes = [
  {path: '', component: MusicComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
