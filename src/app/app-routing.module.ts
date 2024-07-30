import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InformationComponent } from './components/information/information.component';
import { ReportComponent } from './components/report/report.component';
import { FormularioComponent} from './components/formulario/formulario.component';
import {ImpuestoComponent } from './components/impuesto/impuesto.component';
import{LoginComponent}from './components/login/login.component'
import { JsonapiComponent } from './components/jsonapi/jsonapi.component';
const rutas: Routes = [
  { path: '', component: InformationComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'reporte', component: ReportComponent },
  { path: 'impuesto', component: ImpuestoComponent },
  {path: 'login',component:LoginComponent},
  {path: 'jsonapi',component:JsonapiComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
