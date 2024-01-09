import { SelfStylingDrawableComponent } from "../SelfStylingDrawableComponent.mjs";
import { 
   OPTION_BOX_SELECTED_CLASS_NAME,
   OPTION_BOX_SELECTION_CHANGE_EVENT,
   OPTION_BOX_STYLE_BACKGROUND_COLOR,
   OPTION_BOX_STYLE_BORDER,
   OPTION_BOX_STYLE_MARGIN_TOP,
   OPTION_BOX_STYLE_PADDING,
   OPTION_BOX_STYLE_POSITION,
   OPTION_BOX_STYLE_TEXT_ALIGN,
   OPTION_BOX_STYLE_WIDTH,
   OPTION_BOX_STYLE_Z_INDEX} from "../../../../constants/componentConstants.mjs";
import { OptionComponent } from "../../../OptionComponent.mjs";
import { StyleDecalaration } from "../StyleDeclaration.mjs";

export class OptionBoxComponent extends SelfStylingDrawableComponent
{
   selectedClassName = '';
   optionComponents = new Map();
   constructor(parent, multiSelect = false, idPrefix = '')
   {
      super(document.createElement('ul'),parent, idPrefix);
      this.multiSelect = multiSelect;
      this.SelectedClassName = OPTION_BOX_SELECTED_CLASS_NAME;
      this.selfStyle(this.DefaultStyle);
   }
   /**
    * @returns {HTMLUListElement}
    */
   get OptionBox()
   {
      return this.element;
   }
   /**
    * @param {string} cn Class name to use for "Selected" options.
    */
   set SelectedClassName(cn)
   {
      this.selectedClassName = cn;
   }

   get SelectedClassName()
   {
      return this.selectedClassName;
   }

   get SelectedOptions()
   {
      return this.OptionBox.querySelectorAll(`.${this.SelectedClassName}`);
   }

   set Id(id)
   {
      this.OptionBox.id = id;
   }

   get Id()
   {
      return this.OptionBox.id;
   }

   get ClassNames()
   {
      return this.OptionBox.classList;
   }

   set ClassName(cn)
   {
      this.ClassNames.add(cn);
   }

   get Options()
   {
      return this.OptionBox.children;
   }

   get OptionValues()
   {
      return Array.from(this.OptionComponents.keys());
   }

   get DefaultStyle()
   {
      let sd = new Map();
      sd.set('marginTop', OPTION_BOX_STYLE_MARGIN_TOP);
      sd.set('border', OPTION_BOX_STYLE_BORDER);
      sd.set('padding', OPTION_BOX_STYLE_PADDING);
      sd.set('position', OPTION_BOX_STYLE_POSITION);
      sd.set('zIndex', OPTION_BOX_STYLE_Z_INDEX);
      sd.set('backgroundColor', OPTION_BOX_STYLE_BACKGROUND_COLOR);
      sd.set('width', OPTION_BOX_STYLE_WIDTH);
      sd.set('textAlign',OPTION_BOX_STYLE_TEXT_ALIGN);
      return sd;
   }

   get Style()
   {
      return this.OptionBox.style;
   }
   /**
    * @returns {Map<string,DrawableComponent>}
    */
   get OptionComponents()
   {
      return this.optionComponents;
   }
   /**
    * Method to remove a class name from the OptionBox
    * @param {string} cn Class name to remove.
    */
   removeClassName(cn)
   {
      this.ClassNames.remove(cn);
   }
   /**
    * Method to add Option to OptionBox
    * @method 
    * @param {string} optionText Text to display in option
    * @param {string |} optionValue Value of the option created.  Defaults to text value.
    * @param {string | undefined} id DOM id to assign to created option element.
    */
   addOption(optionText, id = undefined)
   {
      let opt = new OptionComponent(optionText, this.OptionBox);
      if(id !== undefined) opt.Id = id;
      opt.Option.onclick = this.multiSelect ? (e)=>this.multiSelectOptionClicked(e):(e)=>this.singleSelect(e);
      opt.draw();
      this.OptionComponents.set(optionText, opt);
   }
   addOptions(...opts)
   {  
      for(let i of opts)
      {
         if(i instanceof Array)
         {
            const [optText,id]  = i;
            this.addOption(optText,id);
         }
         else
         {
            this.addOption(i);
         }
      }
   }
   /**
    * @param {Event} event
    */
   multiSelectOptionClicked(event)
   {
      let option = event.target;
      let cl = option.classList;
      cl.toggle(this.SelectedClassName);
      this.OptionBox.dispatchEvent(new Event(OPTION_BOX_SELECTION_CHANGE_EVENT));
   }
   /**
    * @param {Event} event 
    */
   singleSelect(event)
   {
      const SELECTED = this.selectedClassName;
      let tar = event.target;
      for(const ele of this.Options)
      {
         ele.classList.remove(SELECTED);
      }
      tar.classList.add(SELECTED);
      this.OptionBox.dispatchEvent(new Event(OPTION_BOX_SELECTION_CHANGE_EVENT));
   }

   displayAllOptions()
   {
      this.OptionComponents.forEach((val)=>{
         val.show();
      })
   }

}

export class OptionBoxDefaultStyle extends StyleDecalaration
{
   constructor()
   {
      const d = [
         ['tabIndex', '0'],
         ['maxHeight', '250px'],
         ['overflowY', 'scroll']
      ]
      super(d);
   }
}