import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormReactivo1Component } from './form-reactivo1/form-reactivo1.component';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormControl, ReactiveFormsModule, Validator } from '@angular/forms';
import { FormularioPlantillasDetalleComponent } from './formulario-plantillas-detalle/formulario-plantillas-detalle.component';
import {DirectivaCustomDirective} from './formulario-plantillas-detalle/directiva-custom.directive';
import { ValidacionCustomDirective } from './formulario-plantillas-detalle/validacion-custom.directive';
import { PlantillasFormCompletoComponent } from './plantillas-form-completo/plantillas-form-completo.component';
import { DirectivasAngularComponent } from './directivas-angular/directivas-angular.component'; 
@NgModule({
  declarations: [
    AppComponent,
    FormReactivo1Component,
    TemplateDrivenComponent,
    FormularioPlantillasDetalleComponent,
    DirectivaCustomDirective,
    ValidacionCustomDirective,
    PlantillasFormCompletoComponent,
    DirectivasAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
