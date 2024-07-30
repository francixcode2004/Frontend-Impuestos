import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import {InformationComponent } from './components/information/information.component';
import { ReportComponent } from './components/report/report.component';
import { FormularioComponent} from './components/formulario/formulario.component';
import {ImpuestoComponent } from './components/impuesto/impuesto.component';
import {HttpClientModule} from '@angular/common/http';
import{GastoService}from './services/gasto.service'
import {FooterComponent}from './components/footer/footer.component'
import {HeaderComponent}from './components/header/header.component'
import {LoginComponent}from './components/login/login.component'
import { ReactiveFormsModule } from '@angular/forms';
import { JsonapiComponent } from './components/jsonapi/jsonapi.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent,
    InformationComponent,
    ReportComponent,
    FormularioComponent,
    ImpuestoComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ReactiveFormsModule,
    HttpClientModule,
    JsonapiComponent
  ],
  providers: [
    provideClientHydration(),
    GastoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }