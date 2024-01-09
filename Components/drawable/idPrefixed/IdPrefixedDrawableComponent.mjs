import { DrawableComponent } from "../DrawableComponent.mjs";

export class IdPrefixedDrawableComponent extends DrawableComponent {
   constructor(element, parent, idPrefix) {
      super(element, parent);
      this.IdPrefix = idPrefix;
   }

   set IdPrefix(id) {
      this.idPrefix = id;
   }

   get IdPrefix() {
      return this.idPrefix;
   }

   set Id(id) {
      this.element.id = this.IdPrefix + id;
   }

}
