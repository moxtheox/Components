import { SELECTED_OPTIONS_FIELD_DEFAULT_SELECTED_OPTIONS_VALUE } from "../../../../constants/componentConstants.mjs";
import { LabelComponent } from "../../../LabelComponent.mjs";
import { DivDrawableComponent } from "../DivDrawableComponent.mjs";
import { SpanDrawableComponent } from "../SpanDrawableComponent.mjs";

export class SelectedOptionsField extends DivDrawableComponent
{
   selectedOptionsLable = new LabelComponent(this.Parent,'Selected Options:');
   selectedOptionsSpan = new SpanDrawableComponent(this.Parent, this.IdPrefix);
   /**
    * @param {HTMLElement} parent 
    * @param {string} idPrefix 
    */
   constructor(parent, idPrefix = '')
   {
      super(parent, idPrefix);
      this.SelectedOptionsContentText = SELECTED_OPTIONS_FIELD_DEFAULT_SELECTED_OPTIONS_VALUE;
   }
   /**
    * @override DrawableComponent.ondraw
    */
   ondraw()
   {
      this.drawAll();
   }
   /**
    * @returns {HTMLDivElement}
    */
   get SelectedOptionsField()
   {
      return this.element;
   }
   /**
    * @returns {HTMLLabelElement}
    */
   get SelectedOptionsLabel()
   {
      return this.selectedOptionsLable.Label;
   }
   /**
    * @returns {HTMLSpanElement}
    */
   get SelectedOptionsContent()
   {
      return this.selectedOptionsSpan.Span;
   }

   get SelectedOptionsContentText()
   {
      return this.SelectedOptionsContent.innerText;
   }

   set SelectedOptionsContentText(cont)
   {
      this.SelectedOptionsContent.innerText = cont;
   }

}