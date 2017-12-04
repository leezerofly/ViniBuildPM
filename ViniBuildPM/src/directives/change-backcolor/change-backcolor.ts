import { Directive, HostListener, ElementRef, Renderer,Input } from '@angular/core';

/**
 * Generated class for the ChangeBackcolorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[change-backcolor]' // Attribute selector
})
export class ChangeBackcolorDirective {
  @Input('change-backcolor')

  opacity = "0.5";

  constructor(private elementRef: ElementRef,private renderer: Renderer) {
    console.log('Hello ChangeBackcolorDirective Directive');
  }
  @HostListener('click')
  onClick() {
    this.renderer.setElementStyle(this.elementRef.nativeElement, 
      'opacity', this.opacity);
      this.renderer.setElementStyle(this.elementRef.nativeElement, 
        'backgroundColor', 'black');
    }

}
