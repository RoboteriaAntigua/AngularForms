import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-angular',
  template: `
  <h2>Validacion con template-driven</h2>
    <p>Validacion con templete-driven usa ciertas directivas angular</p>

    <input
  type="text"
  id="name"
  name="name"
  class="form-control"
  required
  minlength="3"
  maxlength="30"
  appForbiddenName="bob"
  [(ngModel)]="user.name"
  #name="ngModel"
/>

<!-- Un poco mas complejo pero tira un error bien detallado-->
<div  *ngIf="name.invalid && (name.dirty || name.touched)"  class="alert">
  <div *ngIf="name.errors?.['required']">Name is required.</div>
  <div *ngIf="name.errors?.['minlength']"> Name must be at least 3 characters long. </div>
  <div *ngIf="name.errors?.['forbiddenName']">    Name cannot be Bob. </div>
</div>

<!-- Sino podemos tirarle todos los errores, con valid-->
<p>valid ? : {{name.valid}}</p>
<div *ngIf="name.invalid &&(name.dirty || name.touched)" class="alert">
  * Name is required and must be at least 3 characters. Name cannot be bob
</div>
  `,
  styles: ``
})
export class DirectivasAngularComponent {
  user= {
    name:''
  }

}
