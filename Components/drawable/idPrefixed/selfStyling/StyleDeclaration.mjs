export class StyleDecalaration 
{
   #m;
   /**
    * @param {Array<Array<string>>} declarations 
    */
   constructor(declarations)
   {
      this.#m = new Map();
      this.massConsumeDeclarations(declarations);
   }
   /**
    * @returns {Map<string,string>}
    */
   get StyleDecalaration()
   {
      return this.#m;
   }
   /**
    * @param {string} cssProperty 
    * @param {string} cssValue 
    */
   addStyleDeclaration(cssProperty, cssValue)
   {
      if(!this.#isString(cssProperty) || !this.#isString(cssValue)) 
      {
         let badArg = (typeof cssProperty !== 'string' ? 'cssProperty':'cssValue');
         this.#throwBadArgError(badArg, 'must be a string.');
      }
      this.#m.set(cssProperty,cssValue);
   }
   /**
    * @param {Array<Array<string>>} arrayOfDeclarations 
    */
   massConsumeDeclarations(arrayOfDeclarations)
   {
      arrayOfDeclarations.forEach(ele=>this.addStyleDeclaration(...ele));
   }

   #isString(arg)
   {
      return (typeof arg === 'string') ? true:false;
   }

   #throwBadArgError(badArg, errMsg)
   {
      throw new Error(`Argument ${badArg} ${errMsg}`);
   }
}