import { DrawableComponent } from "./DrawableComponent.mjs";


export class DatePicker extends DrawableComponent {
   constructor(parent) {
      super(document.createElement('input'), parent);
      this.DatePicker.type = 'date';
   }

   get DatePicker() {
      return this.element;
   }

}
