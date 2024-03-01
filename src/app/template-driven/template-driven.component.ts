import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  template: `
  <h2>Formulario Impulsado por plantilla</h2>
  <input type="text" [(ngModel)]="variable1" />
  <p>Resultado: {{variable1}}</p>

  <input type="text" [(ngModel)]="objeto.name">
  <p>Objeto: {{objeto.name}}</p>


`,
  styles: ``
})
export class TemplateDrivenComponent {
  variable1='';

  objeto:any= {
    name:'',
    edad:''
  }

  


}
