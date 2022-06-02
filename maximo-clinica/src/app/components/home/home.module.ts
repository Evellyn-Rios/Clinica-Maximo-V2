import { NgModule } from '@angular/core';
import { NavbarModule } from '../navbar/navbar.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [HomeComponent ],
    imports: [ NavbarModule ]
})

export class HomeModule { }