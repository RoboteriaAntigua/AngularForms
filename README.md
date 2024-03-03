# Formularios en Angular

# Componentes en linea:
    Todo en una pagina estilo vue y react, es mas visible
    ng g c form1 -st
        -s (styles en linea)
        -t (template en linea)

# Angular tiene 2 tipos de formularios:
    Reactivos y basados en plantillas.

# formularios Impulsados por plantilla /template driven:
-----------------------------------------------------------------------------------

# Intro
  Recomendados para formularios pequeños.
    Importar formsModule(x2)                      <br>
    <input type="text" [(ngModel)]="variable1" /> <br>
    <p>Resultado: {{variable1}} </p>              <br>

    export class TemplateDrivenComponent {
      variable1='';
    }



# Eventos para validacion en forms Template-driven (COmponente formulario-plantillas-detalle)
  Se les agrega un id asi: #id1="ngModel"                       <br>
  <input type="email" [(ngModel)]="variable1" #id1="ngModel" >  <br>
  Y lo podemos usar en el template asi:                         <br>
  <p> id1.pristine: {{id1.pristine | json }}< /p>               <br> 

  Podemos acceder a los siguientes estados:                   <br>
    untouched The field has not been touched yet              <br>
    touched The field has been touched                        <br>
    pristine The field has not been modified yet              <br>
    dirty The field has been modified                         <br>
    invalid The field content is not valid                    <br>
    valid The field content is valid                          <br>

Estados de formulario completo:
    pristine No fields have been modified yet
    dirty One or more have been modified
    invalid The form content is not valid
    valid The form content is valid
    submitted The form is submitted

# Cuando es valid (Ver detalle en componente directivas-angular):
  Podemos definir nuestros custom validator in Template-driven pero ya vienen algunos interesantes:
    
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

# Validar un form completo (ver componente validacion-form-completo )
  (ngSubmit) dispara una funcion, dicha funcion puede ser una validacion
  El componente validacion-form-completo es un buen ejemplo para mezclar este submit con los eventos para obtener una buena validacion.

# Crear una directiva personalizada
  ng g directiva nombre
  La importamos 2 veces en app.module.ts

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'red';
  }
  y la usamos asi:
    <h1 appDirectivaCustom >Como usar una directiva personalizada en este titulo</h1>
  

# Custom validator en template-driven
    Seria una directiva y en ella una funcion que retorne un ValidatorFn, masomenos asi:

  export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }
  Luego agregar en los imports de app.module.ts





  # -------------------------- Formularios reactivos ----------------------------------------------------------------------------#

  # Intro
  Para formularios mas largos.
    Importar FormControl y ReactiveFormsModule(x2) 
     template: `
        <h2>Formulario Reactivo</h2>
        <input type="text" [formControl]="control1" />
        <p>Resultado: {{control1.value}}</p>
      `,
    export class FormReactivo1Component {
     control1=new FormControl();
    }

# Continuar