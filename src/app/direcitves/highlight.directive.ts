import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener ('mouseenter') onMouseEnter(){
     this.element.nativeElement.style.color = 'blue';
     this.element.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener ('mouseleave') onMouseLeave(){
     this.element.nativeElement.style.color = 'black';
     this.element.nativeElement.style.backgroundColor = '';
  }


  constructor(private element: ElementRef)
  {
    // this.element.nativeElement.style.color = 'blue';
    // this.element.nativeElement.style.backgroundColor = 'pink';
  }

}


//ng generate ng g directive direcitves/highlight o en su forma corta ng g d direcitves/highlight
