import { IdPrefixedDrawableComponent } from "../IdPrefixedDrawableComponent.mjs";


export class SelfStylingDrawableComponent extends IdPrefixedDrawableComponent {
   constructor(element, parent, idPrefix = '') {
      super(element, parent, idPrefix);
   }
   /**
    * Method to apply all styling declarations.
    * @param {Map<string,string>} styleDeclarations
    */
   selfStyle(styleDeclarations) {
      styleDeclarations.forEach(
         (value, key) => {
            this.Style[`${key}`] = value;
         },
         this
      );
   }
}
