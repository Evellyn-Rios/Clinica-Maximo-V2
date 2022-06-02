import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { ConsultaComponent } from './consulta.component';

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    ConsultaComponent,
  ],
})
export class ConsultaModule { }