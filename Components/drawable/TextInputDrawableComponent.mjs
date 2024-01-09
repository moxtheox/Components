import { InputDrawableCompenent } from "./InputDrawableCompenent.mjs";

export class TextInputDrawableComponent extends InputDrawableCompenent {
   constructor(parent) {
      super(parent);
      this.Type = 'text';
   }
}
