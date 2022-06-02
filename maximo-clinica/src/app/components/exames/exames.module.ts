import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { ExamesComponent } from './exames.component';

@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
  ],
  exports: [
    ExamesComponent,
  ],
})
export class ConsultaModule { }