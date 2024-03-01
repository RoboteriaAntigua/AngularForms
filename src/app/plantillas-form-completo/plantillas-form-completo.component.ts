import { Component } from '@angular/core';

@Component({
  selector: 'app-plantillas-form-completo',
  template: `
     <p>Eventos para la validacion del formulario completo </p>

<form (ngSubmit)="procesar()" >
  Name: <input type="text" [(ngModel)]="user.name" #name="ngModel" name="name">  <span *ngIf="!validacion.name && ! name.pristine && name.touched">*El nombre debe tener al menos 3 letras y maximo 30. </span><br>
  Email: <input type="email" [(ngModel)]="user.email" #email="ngModel" name="email"> <br>
  Password: <input type="password" [(ngModel)]="user.password" #password="ngModel" name="password"> <br>
  <input type="submit" value="enviar" [disabled]="email.dirty || password.dirty">
</form>


  `,
  styles: ``
})
export class PlantillasFormCompletoComponent {
  user={
    name:'',
    email:'',
    password:''
  }
  validacion={
    name:false,
    email:false,
    password:false
  }
  
  procesar(){
    //Procesamos el formulario completo
    if( this.user.name.length >= 3 && this.user.name.length <=30){ this.validacion.name=true}

  }
}
