import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { DocComponent } from './doc.component';

@NgModule({
  declarations: [
    DocComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    DocComponent,

  ],
})
export class DocModule { }