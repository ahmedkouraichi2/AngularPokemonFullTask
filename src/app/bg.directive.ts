import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective {

  private initialColor :string = '#f5f5f5';
  private defaultColor :string ='#009688';
  private defaultHeight : number = 180 ;

  constructor(private el :ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(180);

  }

  @Input('appBg') borderColor :string;

  @HostListener('mouseenter') onMouseEnter(){
      this.setBorder(this.borderColor ||'#009688');
  }

  @HostListener('mouseleave') onMouseLeave(){
      this.setBorder('#f5f5f5')
  }

  setHeight(heigth :number){
     this.el.nativeElement.style.heigth =`${heigth}px`;

  }
  setBorder(color :string){
     this.el.nativeElement.style.border = ` solid 4px ${color}` ;
  }
}
