import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-reactivo1',
  template: `
    <h2>Formulario Reactivo</h2>
    <input type="text" [formControl]="control1" />
    <p>Resultado: {{control1.value}}</p>
  `,
  styles: ``
})
export class FormReactivo1Component {
 control1=new FormControl();
}
