import { Directive, ElementRef, HostBinding,  HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {
 @HostBinding('style.border')
 border:string
 @HostListener('input', ['$event'])

 
 onKeyDown(event:KeyboardEvent) {
  const input = event.target as HTMLInputElement; 
  
  let trimmered = input.value.replace(/\s+/g,''); 

  if(trimmered.length > 16) {
    trimmered = trimmered.substr(0,16)
  }

  let numbers = []; 
  for(let i = 0; i<trimmered.length; i+=4) {
    numbers.push(trimmered.substr(i, 4))
  }
  
  input.value = numbers.join(' ');
  this.border = ''; 

  if(/[^\d]+/.test(trimmered)) {
    this.border = '1px solid red'
  }

  }
}