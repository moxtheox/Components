import {
   CSS_FONT_WEIGHT_BOLD,
   DROP_DOWN_BUTTON_STYLE_MARGIN_RIGHT, OPTION_BOX_SELECTION_CHANGE_EVENT, OPTION_BOX_STYLE_WIDTH, SEARCHABLE_OPTION_BOX_DEFAULT_IDS,
   SEARCHABLE_OPTION_BOX_STYLE_HEIGHT,
   SEARCH_BOX_STYLE_MARGIN_RIGHT,
   SEARCH_LABEL_STYLE_MARGIN_RIGHT,
   SELECTED_OPTIONS_FIELD_DEFAULT_SELECTED_OPTIONS_VALUE
} from "../../../../constants/componentConstants.mjs";
import {OptionBoxComponent, OptionBoxDefaultStyle} from "./optionBoxComponent.mjs";
import {ButtonComponent} from "../../../ButtonComponent.mjs";
import {DivDrawableComponent} from "../DivDrawableComponent.mjs";
import {TextInputDrawableComponent} from '../../../TextInputDrawableComponent.mjs';
import {ExpandArrowComponent} from '../ExpandArrowComponent.mjs';
import {ExpandButtonComponent} from '../../ExpandButtonComponent.mjs';
import {LabelComponent} from '../../../LabelComponent.mjs';
import { StyleDecalaration } from "../StyleDeclaration.mjs";
import { SelectedOptionsField } from "./SelectedOptionsField.mjs";

export class SearchableOptionBox extends DivDrawableComponent {
   headerDiv = new DivDrawableComponent(this.SearchBoxContainer, this.IdPrefix);
   searchLabel = new LabelComponent(this.HeaderDiv, '');
   searchBox = new TextInputDrawableComponent(this.HeaderDiv);
   dropDownButton = new ExpandButtonComponent(this.HeaderDiv);
   expandArrow = new ExpandArrowComponent(this.DropDownButton, this.IdPrefix);
   optionBox = new OptionBoxComponent(this.SearchBoxContainer, true);
   buttonDiv = new DivDrawableComponent(this.SearchBoxContainer, this.IdPrefix);
   resetComponent = new ButtonComponent(this.ButtonDiv, 'Reset');
   applyButtonComponent = new ButtonComponent(this.ButtonDiv, 'Apply');
   selectedOptionsField = new SelectedOptionsField(this.SearchBoxContainer, this.IdPrefix);
   constructor(parent, searchLabelText, idPrefix = '') {
      super(parent, idPrefix);
      this.SearchLabelText = searchLabelText; 
      this.#assembleSelf();
   }

   get SearchBoxContainer() {
      return this.element;
   }

   set SearchBoxContainerId(id) {
      this.SearchBoxContainer.id = id;
   }

   get SearchBoxContainerId() {
      return this.SearchBoxContainer.id;
   }

   get SearchBoxContainerStyle() {
      return this.SearchBoxContainer.style;
   }

   get SearchBox() {
      return this.searchBox.Input;
   }

   get SearchBoxStyle() {
      return this.SearchBox.style;
   }

   set SearchBoxId(id) {
      this.SearchBox.id = id;
   }

   get SearchLabel() {
      return this.searchLabel.Label;
   }

   set SearchLabelId(id) {
      this.SearchLabel.id = this.IdPrefix + id;
   }

   get SearchLabelId() {
      return this.SearchLabel.id;
   }

   set SearchLabelText(t)
   {
      this.SearchLabel.innerText = t;
   }

   get SearchLabelText()
   {
      return this.SearchLabel.innerText;
   }

   get DropDownButton() {
      return this.dropDownButton.ExpandArrowButton;
   }

   set DropDownButtonId(id) {
      this.DropDownButton.id = id;
   }

   get ExpandArrow() {
      return this.expandArrow.ExpandArrow;
   }

   get ExpandArrowStyle() {
      return this.expandArrow.Style;
   }
   /**
    * @param {string} id
    */
   set ExpandArrowId(id) {
      this.ExpandArrow.id = id;
   }

   get ExpandArrowClassList() {
      return this.ExpandArrow.classList;
   }

   get OptionBox() {
      return this.optionBox.OptionBox;
   }

   get HeaderDiv() {
      return this.headerDiv.Div;
   }

   get SelectedOptions() {
      return this.optionBox.SelectedOptions;
   }

   get OptionValues() {
      return this.optionBox.OptionValues;
   }

   get ButtonDiv()
   {
      return this.buttonDiv.Div;
   }

   get SelectedOptionsLabel()
   {
      return this.selectedOptionsField.SelectedOptionsLabel;
   }

   set SelectedOptionsId(id)
   {
      this.selectedOptionsField.Id = id;
   }

   set SelectedOptionsText(t)
   {
      this.selectedOptionsField.SelectedOptionsContentText = t;
   }

   get SelectedOptionsText()
   {
      return this.selectedOptionsField.SelectedOptionsContentText;
   }

   #applyEventHandlers() {
      this.OptionBox.addEventListener(OPTION_BOX_SELECTION_CHANGE_EVENT,()=>this.#updateSelectedOptionsDisplay());
      this.DropDownButton.onclick = () => {
         this.optionBox.displayAllOptions();
         this.optionBox.toggleVisiblity();
         this.dropDownButton.icon.toggleUpDown();
      };
      this.SearchBox.onblur = (e) => {
         if (this.isOutOfSearchArea(e)) {
            this.dropDownButton.icon.down();
            this.optionBox.displayAllOptions();
            this.optionBox.hide();
            this.SearchBox.value = '';
         }
      };
      this.SearchBox.oninput = () => this.searchValues(this.SearchBox.value);
      this.SearchBox.onfocus = () => {
         this.dropDownButton.icon.up();
         this.optionBox.show();
      };
      this.resetComponent.Button.onclick = ()=>this.#reset();
   }
   #updateSelectedOptionsDisplay()
   {
      const ar = Array.from(this.SelectedOptions);
      if(ar.length > 0){
         let selectionText = ' ';
         for(let el of ar)
         {
            let t = el.innerText + ", "
            selectionText += t;
         }
         this.SelectedOptionsText = selectionText.substring(0,selectionText.length - 2);
      } else {
         this.SelectedOptionsText = SELECTED_OPTIONS_FIELD_DEFAULT_SELECTED_OPTIONS_VALUE;
      }
   }
   /**
    * @param {FocusEvent} event
    */
   isOutOfSearchArea(event) {
      const rt = event.relatedTarget;
      return (rt !== this.DropDownButton && rt !== this.OptionBox);
   }
   /**
    * @param {string} sbv Search Box Value
    */
   searchValues(sbv) {
      let regEx = new RegExp(sbv, 'i');
      let vals = this.OptionValues;
      this.optionBox.displayAllOptions();
      if (sbv.length === 0) return;
      for (let i of vals) {
         if (!regEx.test(i)) {
            this.optionBox.OptionComponents.get(i).hide();
         }
      }
   }

   #assembleSelf() 
   {
      this.#setStyles();
      this.#assignIds();
      this.drawAll();
      this.#applyEventHandlers();
      this.DropDownButton.click();
   }

   #setStyles()
   {
      this.selfStyle(new SearchableOptionBoxDefaultStyle().StyleDecalaration);
      this.SearchLabel.style.marginRight = SEARCH_LABEL_STYLE_MARGIN_RIGHT;
      this.SearchBoxStyle.marginRight = SEARCH_BOX_STYLE_MARGIN_RIGHT;
      this.DropDownButton.style.marginRight = DROP_DOWN_BUTTON_STYLE_MARGIN_RIGHT;
      this.SelectedOptionsLabel.style.fontWeight = CSS_FONT_WEIGHT_BOLD;
      this.optionBox.selfStyle(new OptionBoxDefaultStyle().StyleDecalaration);
      this.buttonDiv.selfStyle(new ButtonDivDefaultStyle().StyleDecalaration);
   }

   #assignIds() {
      const [CONTAINER_ID, LABEL_ID, BUTTON_ID, ICON_ID, SEARCH_BAR_ID] = SEARCHABLE_OPTION_BOX_DEFAULT_IDS;
      this.SearchBoxContainerId = this.idPrefix + CONTAINER_ID;
      this.SearchLabelId = this.idPrefix + LABEL_ID;
      this.DropDownButtonId = this.idPrefix + BUTTON_ID;
      this.ExpandArrowId = ICON_ID;
      this.SearchBox.id = this.IdPrefix + SEARCH_BAR_ID;

   }

   addOptions(...opt) {
      this.optionBox.addOptions(...opt);
   }

   #reset()
   {
      this.SearchBox.value = '';
      const ar = Array.from(this.SelectedOptions);
      for(let ele of ar)
      {
        ele.click(); 
      }
   }
}

export class SearchableOptionBoxDefaultStyle extends StyleDecalaration
{
   constructor()
   {
      
      const d = [
         ['height',SEARCHABLE_OPTION_BOX_STYLE_HEIGHT],
         ['position','relative'],
         ['width', '275px']
      ]
      super(d);
   }

}

class ButtonDivDefaultStyle extends StyleDecalaration
{
   constructor()
   {
      const d = [
         ['position','absolute'],
         ['width', '100%'],
         ['display','flex'],
         ['flexDirection', 'row'],
         ['justifyContent', 'space-around'],
         ['bottom','0'],
         ['margin', '4px 0px 4px 0px']
      ];
      super(d);
   }
}
