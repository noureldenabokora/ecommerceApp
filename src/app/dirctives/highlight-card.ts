import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCard implements OnChanges {
  // decorator input for external color
 @Input() externalcolor : string ='black';

  constructor(private ele : ElementRef) {
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.ele.nativeElement.style.backgroundColor = "gray";
  }

  @HostListener('mouseover') over (){
  this.ele.nativeElement.style.backgroundColor = this.externalcolor;
 }
 
  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor = "gray";
  }
}
