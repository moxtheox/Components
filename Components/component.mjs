export class Component
{
   /**
    * @param {HTMLElement} element 
    */
   constructor(element)
   {

      if(new.target === Component)
      {
         throw new TypeError("Cannot construct Component classes directly");
      }
      if(this.isHTMLElement(element))
      {
         this.element = element;
      }
      else
      {
         this.throwNonHTMLElementError('element');
      }

   }
   /**
    * @param {HTMLElement} parent 
    */
   set Parent(parent)
   {
      this.isHTMLElement(parent) ? this.parent = parent:this.throwNonHTMLElementError('parent');
   }
   /**
    * @returns {HTMLElement}
    */
   get Parent()
   {
      return this.parent;
   }

   set ParentClassName(cn)
   {
      this.Parent.className = cn;
   }

   get ParentClassName()
   {
      return this.Parent.className;
   }

   set ParentId(id)
   {
      this.Parent.id = id;
   }

   get ParentId()
   {
      return this.Parent.id;
   }

   set ClassName(cn)
   {
      this.element.className = cn;
   }

   get ClassName()
   {
      return this.element.className;
   }

   set Id(id)
   {
      this.element.id = id;
   }

   get Id()
   {
      return this.element.id;
   }

   get Style()
   {
      return this.element.style;
   }
/**
 * Test to see if tested variable is HTMLElement
 * @param {any} test variable to be tested
 */
   isHTMLElement(test)
   {
      return this.typeCheck(test, HTMLElement);
   }

   attach(parent = undefined)
   {
      if(parent !== undefined) this.Parent = parent;
      this.Parent.appendChild(this.element);
   }

   detach()
   {
      this.Parent.removeChild(this.element);
   }

   isStringWithLength(testSubject)
   {
      return (typeof testSubject === 'string'  && testSubject !== '');
   }

   makeLabel(labelText, forAttribute = '')
   {
      if(this.isStringWithLength(labelText))
      {
         let l = document.createElement('label');
         l.innerHTML = labelText;
         if(this.isStringWithLength(forAttribute))
         {
            l.htmlFor = forAttribute;
         }
         return l;
      }
      else
      {
         throw new TypeError('labelText must be a String.');
      }
   }

   makeInput(type = 'text', idAttribute = '', nameAttribute = '')
   {
      if(this.isStringWithLength(type))
      {
         let inp = document.createElement('input');
         inp.type = type;
         if(this.isStringWithLength(idAttribute))
         {
            inp.id = idAttribute;
         }
         if(this.isStringWithLength(nameAttribute))
         {
            inp.name = nameAttribute;
         }
         return inp;
      }
      else
      {
         throw new TypeError('type must be a String.');
      }
   }

   makeOption(optionText)
   {
      let opt = document.createElement('option');
      opt.text = optionText;
      return 
   }

   makeSubmitButton(id)
   {
      let b = document.createElement('button');
      b.type = "button";
      b.innerHTML = "Login";
      if(this.isStringWithLength(id))
      {
         b.id = id;   
      }
      return b;
   }

   makeTableHead(text)
   {
      const th = document.createElement('th');
      th.innerHTML = text;
      return th;
   }

   throwNonHTMLElementError(argName)
   {
      throw new TypeError(`${argName} must be a HTMLElement.`);
   }

   typeCheck(variableTested, type)
   {
      return variableTested instanceof type;
   }

}