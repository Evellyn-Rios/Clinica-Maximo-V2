import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { PacientesComponent } from './pacientes.component';


@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    NavbarModule
  ],
  exports: [
    PacientesComponent,

  ],
})
export class PacientesModule { }