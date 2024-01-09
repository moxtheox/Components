import { OPTION_BOX_DATE_PERIOD_STYLE_PADDING, OPTION_BOX_STANDARD_DATE_OPTIONS } from "../../../../constants/componentConstants.mjs";
import { OptionBoxComponent } from "./optionBoxComponent.mjs";


export class OptionBoxDatePeriod extends OptionBoxComponent {

   constructor(parent) {
      super(parent, false);
      this.datePeriods = OPTION_BOX_STANDARD_DATE_OPTIONS;
      this.Style.padding = OPTION_BOX_DATE_PERIOD_STYLE_PADDING;
   }

   addDatePeriod(dp) {
      this.datePeriods.push(dp);
   }

   removeDatePeriod(dp) {
      let index = this.datePeriods.indexOf(dp);
      if (index > -1) {
         let end = this.datePeriods.slice(index + 1);
         let start = this.datePeriods.slice(0, index);
         this.datePeriods = start.concat(end);
         return true;
      }
      return false;
   }
   /**
    * @override DrawableComponent.draw();
    */
   draw() {
      this.addOptions(...this.datePeriods);
      this.attach(this.Parent);
   }



}
