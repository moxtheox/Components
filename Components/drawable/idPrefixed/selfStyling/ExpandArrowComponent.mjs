import { SelfStylingDrawableComponent } from "./SelfStylingDrawableComponent.mjs";
import {
   ARROW_ICON_CLASS_DOWN,
   ARROW_ICON_CLASS_UP,
   ARROW_ICON_STYLE_BODER_WIDTH,
   ARROW_ICON_STYLE_BORDER,
   ARROW_ICON_STYLE_DISPLAY,
   ARROW_ICON_STYLE_PADDING
} from "../../../constants/componentConstants.mjs";

export class ExpandArrowComponent extends SelfStylingDrawableComponent {
   constructor(parent, idPrefix) {
      super(document.createElement('i'), parent, idPrefix);
      this.selfStyle(this.BasicStyleDeclarations);
      this.selfStyle(this.DownArrowStyleDeclarations);
      this.ExpandArrowClassList.add(ARROW_ICON_CLASS_UP);
   }
   /**
    * @returns {HTMLElement}
    */
   get ExpandArrow() {
      return this.element;
   }

   get ExpandArrowClassList() {
      return this.ExpandArrow.classList;
   }

   get BasicStyleDeclarations() {
      let s = new Map();
      s.set('border', ARROW_ICON_STYLE_BORDER);
      s.set('borderWidth', ARROW_ICON_STYLE_BODER_WIDTH);
      s.set('display', ARROW_ICON_STYLE_DISPLAY);
      s.set('padding', ARROW_ICON_STYLE_PADDING);
      return s;
   }
   /**
    * @returns {Map<string,string>}
    */
   get DownArrowStyleDeclarations() {
      let s = new Map();
      s.set('rotate', '45deg');
      return s;
   }
   /**
    * @returns {Map<string,string>}
    */
   get UpArrowStyleDeclarations() {
      let s = new Map();
      s.set('rotate', '-135deg');
      return s;
   }

   up() {
      this.selfStyle(this.UpArrowStyleDeclarations);
      this.ExpandArrowClassList.remove(ARROW_ICON_CLASS_DOWN);
      this.ExpandArrowClassList.add(ARROW_ICON_CLASS_UP);
   }

   down() {
      this.selfStyle(this.DownArrowStyleDeclarations);
      this.ExpandArrowClassList.remove(ARROW_ICON_CLASS_UP);
      this.ExpandArrowClassList.add(ARROW_ICON_CLASS_DOWN);
   }

   toggleUpDown() {
      let sd = (this.isUp()) ? this.DownArrowStyleDeclarations : this.UpArrowStyleDeclarations;
      this.selfStyle(sd);
      this.ExpandArrowClassList.toggle(ARROW_ICON_CLASS_DOWN);
      this.ExpandArrowClassList.toggle(ARROW_ICON_CLASS_UP);
   }
   /**
    * @returns {boolean} True if arrow is pointing up; otherwise false.
    */
   isUp() {
      return this.ExpandArrowClassList.contains(ARROW_ICON_CLASS_UP);
   }

}