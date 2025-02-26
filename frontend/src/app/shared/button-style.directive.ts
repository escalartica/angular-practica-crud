// src/app/shared/button-style.directive.ts
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonStyle]'
})
export class ButtonStyleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyle();
  }

  private setInitialStyle(): void {
    this.renderer.addClass(this.el.nativeElement, 'px-4');
    this.renderer.addClass(this.el.nativeElement, 'py-2');
    this.renderer.addClass(this.el.nativeElement, 'rounded-lg');
    this.renderer.addClass(this.el.nativeElement, 'bg-blue-500');
    this.renderer.addClass(this.el.nativeElement, 'text-white');
    this.renderer.addClass(this.el.nativeElement, 'hover:bg-blue-600');
    this.renderer.addClass(this.el.nativeElement, 'focus:outline-none');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, 'bg-blue-600');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, 'bg-blue-600');
  }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.addClass(this.el.nativeElement, 'active:bg-blue-700');
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.removeClass(this.el.nativeElement, 'active:bg-blue-700');
  }
}
