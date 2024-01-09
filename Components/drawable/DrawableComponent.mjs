import { Component } from "../component.mjs";


export class DrawableComponent extends Component {
   #oldDisplay = '';
   #isDrawn = false;
   /**
    * @param {HTMLElement} element 
    * @param {HTMLElement} parent 
    */
   constructor(element, parent) {
      super(element);
      this.Parent = parent;
   }

   get IsDrawn()
   {
      return this.#isDrawn;
   }

   drawAll()
   {
      const vals = Object.values(this);
      for(const drawable of vals)
      {
         if(drawable instanceof DrawableComponent && !drawable.IsDrawn) drawable.draw();
      }
   }

   draw() {
      this.#isDrawn = true;
      this.attach(this.Parent);
      this.ondraw();
   }

   remove() {
      this.#isDrawn = false;
      this.detach();
   }

   get CurrentDisplay() {
      return window.getComputedStyle(this.element).display;
   }

   toggleVisiblity() {
      (this.CurrentDisplay === 'none') ? this.show() : this.hide();
   }

   hide() {
      this.#oldDisplay = this.CurrentDisplay;
      this.Style.display = 'none';
      this.element.dispatchEvent(new Event('hide'));
   }

   show() {
      this.Style.display = this.#oldDisplay;
      this.element.dispatchEvent(new Event('show'));
   }
   /**
    * @abstract
    */
   ondraw()
   {}

}
