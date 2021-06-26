import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LocalResourceService} from './local-resource-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [

  ],
  providers: [
    LocalResourceService,
    HttpClient
  ]
})
export class ServicesModule { }
