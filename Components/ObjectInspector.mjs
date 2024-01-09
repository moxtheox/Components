
export class ObjectInspector {
   object;
   getters = [];
   /**
    * @param {Object} object Object to inspect;
    */
   constructor(object) {
      this.object = object;
      this.retrieveGetters();
   }

   get Getters() {
      return this.getters;
   }

   retrieveGetters() {
      let prop = Object.getOwnPropertyNames(Object.getPrototypeOf(this.object));
      this.getters = prop.filter(ele => ele.charCodeAt(0) >= 65 && ele.charCodeAt(0) <= 90);
   }

   getterValues() {
      const vals = [];
      for (let getter of this.Getters) {
         vals.push(this.object[getter]);
      }
      return vals;
   }

   keysAsHeaders() {
      const h = [];
      for (let i of this.Getters) {
         h.push(this.camelCaseToNormieCase(i));
      }
      return h;
   }

   camelCaseToNormieCase(camelCase) {
      const re = /[A-Z-_\&](?=[a-z0-9]+)|[A-Z-_\&]+(?![a-z0-9])/g;
      return camelCase.replace(re, ' $&').trim();
   }
}
