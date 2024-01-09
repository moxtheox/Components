import { SelfStylingDrawableComponent } from "./SelfStylingDrawableComponent.mjs";

export class SpanDrawableComponent extends SelfStylingDrawableComponent
{
   constructor(parent, idPrefix)
   {
      super(document.createElement('span'),parent,idPrefix)
   }

   get Span()
   {
      return this.element;
   }

   get SpanStyle()
   {
      return this.Span.style;
   }

   set SpanId(id)
   {
      this.Span.id = this.IdPrefix + id;
   }

   get SpanId()
   {
      return this.Span.id;
   }

   set SpanClass(c)
   {
      this.Span.classList.add(c);
   }

   get SpanClass()
   {
      return this.Span.classList;
   }

   set SpanText(t)
   {
      this.Span.innerText = t;
   }

   get SpanText()
   {
      return this.Span.innerText;
   }
}