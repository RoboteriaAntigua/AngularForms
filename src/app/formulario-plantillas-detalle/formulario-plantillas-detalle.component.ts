import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-plantillas-detalle',
  template: `
  <p>Eventos para la validacion </p>
    <input type="email" [(ngModel)]="variable1" #id1="ngModel" >
    <div
  *ngIf="id1.invalid && (id1.dirty || id1.touched)"
  class="alert">


    <p> id1.valid: {{id1.valid | json}}</p>
    <p> id1.invalid: {{id1.invalid | json}}</p>
    <p> id1.pristine: {{id1.pristine | json }}</p>
    <p> id1.untouched: {{id1.untouched |json }}</p>
    <p> id1.touched: {{id1.touched |json }}</p>
    <p> id1.dirty: {{id1.dirty |json }}</p>

 
  `,
  styles: ``
})
export class FormularioPlantillasDetalleComponent {
variable1:string='';



}
