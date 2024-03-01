import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectivaCustom]'
})
export class DirectivaCustomDirective {

  constructor(private eleRef: ElementRef) { 
  eleRef.nativeElement.style.background = 'red';
  }
}
