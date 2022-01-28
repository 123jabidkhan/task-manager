import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appSidenavButton]'
})
export class SidenavButtonDirective {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.innerHTML = 
    `<div style='background-color:#f79f9f;transition:transform 0.5s' class='alert fade show '> 
    </div>`
  }
  @HostListener("mouseenter",["$event"])
  onMouseEnter(event:any){
    this.elementRef.nativeElement.querySelector
    ('#sidebtn').style.transform = "scale(1.3)"
  }

}
