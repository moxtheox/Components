export class EventOptions {
   constructor(bubbles = false, cancelable = false, composed = false)
   {
      this.bubbles = bubbles;
      this.cancelable = cancelable;
      this.composed = composed;
   }
}

/**
 * Baseclass that allows events on objects.
 * @extends EventTarget
 */
export class EventObject extends EventTarget
{
   /**
    * @param {CustomEventInit<any> | EventOptions} options
    */
   constructor(options)
   {
      super();
      this.options = options ?? new EventOptions();
   }
   /**
    * @param {string} type 
    */
   fireEvent(type)
   {
      this.dispatchEvent(new CustomEvent(type, this.options));
   }

}