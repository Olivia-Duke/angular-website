import {NgModule} from '@angular/core';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {CommonModule} from '@angular/common';
import {ContentHeaderComponent} from './components/content-header/content-header.component';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ContentHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    ContentHeaderComponent,
  ],
  providers: []
})
export class GlobalComponentsModule { }
