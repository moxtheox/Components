import { DrawableComponent } from "./DrawableComponent.mjs";

export class ButtonComponent extends DrawableComponent {
   constructor(parent, buttonMessage) {
      super(document.createElement('button'), parent);
      this.ButtonContent = buttonMessage;
   }

   get Button() {
      return this.element;
   }
   /**
    * @param {string} bc
    */
   set ButtonContent(bc) {
      this.Button.innerHTML = bc;
   }

   set Id(id) {
      this.Button.id = id;
   }

   get Id() {
      return this.Button.id;
   }
}
