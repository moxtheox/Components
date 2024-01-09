import { DrawableComponent } from "./DrawableComponent.mjs";

export class LabelComponent extends DrawableComponent {
   constructor(parent, text) {
      super(document.createElement('label'), parent);
      this.LabelText = text;
   }

   get Label() {
      return this.element;
   }

   set LabelText(lt) {
      this.Label.innerText = lt;
   }

}
