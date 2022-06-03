import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExamesComponent } from './exames.component';

@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExamesComponent,
  ],
})
export class ConsultaModule { }