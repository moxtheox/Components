import { DrawableComponent } from "./DrawableComponent.mjs";


export class Slider extends DrawableComponent {

   constructor(parent, idAttribute = '', min = 1, max = 100) {
      super(document.createElement('input'), parent);
      this.Slider.type = 'range';
      this.Slider.min = min;
      this.Slider.max = max;
      if (this.isStringWithLength(idAttribute)) {
         this.Slider.id = idAttribute;
      }
   }

   get Slider() {
      return this.element;
   }

}
