import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted: boolean = false;

  @Output()
  toggleHighlight: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  
  }

  // @HostBinding('className')
  // get classWayOne() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get classWayTwo() {
    return this.isHighlighted;
  }

  // @HostBinding('style.border')
  // get styleWayOne() {
  //   return '1px solid blue';
  // }

  // @HostBinding('style')
  // get styleWayTwo() {
  //   return { border: '1px solid blue' };
  // }

  // @HostBinding('attr.disabled')
  // get attrOne() {
  //   return false;
  // }


  @HostListener('mouseenter')
  mouseOver() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave($event) {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
