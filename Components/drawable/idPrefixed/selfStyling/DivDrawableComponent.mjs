import { SelfStylingDrawableComponent } from "./SelfStylingDrawableComponent.mjs";


export class DivDrawableComponent extends SelfStylingDrawableComponent {
   constructor(parent, idPrefix = '') {
      super(document.createElement('div'), parent, idPrefix);
   }

   get Div() {
      return this.element;
   }
}
