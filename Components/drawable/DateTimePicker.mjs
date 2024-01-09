import { DrawableComponent } from "./DrawableComponent.mjs";


export class DateTimePicker extends DrawableComponent {
   constructor(parent, idAttribute = '') {
      super(document.createElement('input'), parent);
      this.DateTimePicker.type = 'datetime-local';
      this.Id = idAttribute;
   }
   /**
    * @returns {HTMLInputElement}
    */
   get DateTimePicker() {
      return this.element;
   }

}
