import { IdPrefixedDrawableComponent } from "./IdPrefixedDrawableComponent.mjs";
import { ExpandArrowComponent } from "./selfStyling/ExpandArrowComponent.mjs";

export class ExpandButtonComponent extends IdPrefixedDrawableComponent {
   icon = new ExpandArrowComponent(this.ExpandArrowButton, this.IdPrefix);
   constructor(parent, idPrefix) {
      super(document.createElement('button'), parent, idPrefix);
      this.ExpandArrowButton.onclick = (e)=>this.icon.toggleUpDown();
   }

   get ExpandArrowButton() {
      return this.element;
   }

   get Icon() {
      return this.icon.Icon;
   }
}