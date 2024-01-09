import { DrawableComponent } from "./DrawableComponent.mjs";

export class InputDrawableCompenent extends DrawableComponent {
   constructor(parent) {
      super(document.createElement('input'), parent);
   }
   /**
    * @returns {HTMLInputElement}
    */
   get Input() {
      return this.element;
   }

   set Type(t) {
      this.Input.type = t;
   }
}
