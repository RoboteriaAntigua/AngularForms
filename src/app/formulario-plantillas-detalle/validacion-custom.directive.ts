import { Directive } from '@angular/core';
import { Validator, FormControl, ValidationErrors } from '@angular/forms';
import { isEmpty } from 'rxjs';

@Directive({
  selector: '[appValidacionCustom]'
})
export class ValidacionCustomDirective implements Validator{

  validate(c: FormControl): ValidationErrors|null {
    const nombre:string='';
    let isValid = false;

    
    if (nombre.length >2 && nombre.length<30){ isValid=true;}
    
    const message = {
      'nombre': {'message': 'El nombre es invalido' }
    };
    return isValid ? null : message;
  }

}
