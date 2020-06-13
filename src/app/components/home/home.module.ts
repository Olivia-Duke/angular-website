import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {ToolsAndTechComponent} from './content/proficiencies/tools-and-tech.component';
import {ContentHeaderComponent} from './content/content-header/content-header.component';
import {BookComponent} from './content/book/book.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContentHeaderComponent,
    BookComponent,
    ToolsAndTechComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentHeaderComponent,
    HomeComponent,
  ],
  providers: []
})
export class HomeModule { }
