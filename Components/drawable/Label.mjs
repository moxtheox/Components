import { DrawableComponent } from "../component.mjs";
/**
 * Kept for Backwards Compatability.
 * Replace with LabelComponent and remove from library.
 */

export class Label extends DrawableComponent {
   constructor(parent, text, forAttirbute = '') {
      super(document.createElement('label'), parent);
      this.Label.innerText = text;
      this.Label.htmlFor = forAttirbute;
   }
   /**
    * @returns {HTMLLabelElement}
    */
   get Label() {
      return this.element;
   }
}
