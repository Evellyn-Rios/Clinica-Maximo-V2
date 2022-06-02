import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { DocModule } from './components/medico/doc.module';
import { LoginModule } from './components/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './components/home/home.module';
import { ConsultaModule } from './components/cad-consultas/consulta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LoginModule,
    HttpClientModule,
    HomeModule,
    ConsultaModule,
    DocModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
