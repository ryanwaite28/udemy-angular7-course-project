import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  OnInit,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') hasClassOpen = false;

  @HostListener('click') toggleDropdown() {
    this.hasClassOpen = !this.hasClassOpen;
  }

  constructor(private renderer: Renderer2, private element: ElementRef) {}

}
