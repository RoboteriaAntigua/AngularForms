import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-group-reactivo',
  template: `
    <p> group-reactivo works!</p>

  <form [formGroup]="grupo1" (ngSubmit)="procesar()">
  <input type="text" formControlName="name"><br>
  <input type="text" formControlName="email"><br>
  <input type="text" formControlName="password"><br>
  <input type="submit" value="enviar" [disabled]="!grupo1.dirty"><br>
  </form>

  


  `,
  styles: ``
})



export class GroupReactivoComponent {

  grupo1 = new FormGroup( {
    name : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
  });


  procesar(){
    console.log( this.grupo1.value);  //{ name: "asd", email: "asd", password: "asdas" }
   
  }
}


