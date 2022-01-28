import { Directive, ElementRef ,HostBinding,HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {

  @Input('error')error!:string;
  @HostBinding('title')title!:string;
  constructor(private elementRef:ElementRef) { }
  ngOnInit(){
    this.elementRef.nativeElement.innerHTML = 
    `<div style='background-color:#f79f9f;transition:transform 0.5s' class='alert fade show '>
    <span>${this.error}</span>
    </div>`
    this.title='please try again'
  }
  @HostListener("mouseenter",["$event"])
  onMouseEnter(event:any){
    this.elementRef.nativeElement.querySelector
    ('.alert').style.transform = "scale(1.3)"
  }

  @HostListener("mouseenter",["$event"])
  mouseEnter(event:any){
    this.elementRef.nativeElement.querySelector
    ('.alert').style.transform = "scale(1.3)"
  }

  @HostListener("mouseleave",["$event"])
  onMouseLeave(event:any){
    this.elementRef.nativeElement.querySelector
    ('.alert').style.transform = "scale(1)"
  }

}
