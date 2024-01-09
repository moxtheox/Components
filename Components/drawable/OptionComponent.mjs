import { DrawableComponent } from "./DrawableComponent.mjs";


export class OptionComponent extends DrawableComponent {
   constructor(optionText, parent) {
      super(document.createElement('li'), parent);
      this.OptionText = optionText;
   }

   get Option() {
      return this.element;
   }

   set OptionText(ot) {
      this.Option.innerText = ot;
   }

   get OptionText() {
      return this.Option.innerText;
   }

   set Id(id) {
      this.Option.id = id;
   }

   get Id() {
      return this.Option.id;
   }
}
