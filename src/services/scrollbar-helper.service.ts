import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
<<<<<<< HEAD
 * 
 * @export
 * @class ScrollbarHelper
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
@Injectable()
export class ScrollbarHelper {

  width: number = this.getWidth();

  constructor(@Inject(DOCUMENT) private document: any) { }

  getWidth(): number {
    const outer = this.document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    this.document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';

    const inner = this.document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

}
