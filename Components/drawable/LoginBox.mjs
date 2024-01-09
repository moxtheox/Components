import { DrawableComponent } from "./DrawableComponent.mjs";

export class LoginBox extends DrawableComponent {
   userNameLabel;
   userNameField;
   passwordLabel;
   passwordField;
   submitButton;
   /**
    * @param {String} idAttribute DOM id to be given to this.form
    * @param {String} classAttribute Style classname to be applied to this.form
    */
   constructor(parent, idAttribute = '', classAttribute = '') {
      super(document.createElement('form'), parent);
      if (this.isStringWithLength(idAttribute)) {
         this.Form.id = idAttribute;
      }
      if (this.isStringWithLength(classAttribute)) {
         this.Form.className = classAttribute;
      }
      this.makeForm();

   }

   get Form() {
      return this.element;
   }

   makeForm() {
      this.userNameLabel = this.makeLabel('Username:', 'mUsername');
      this.passwordLabel = this.makeLabel('Password:', 'mPassword');
      this.userNameField = this.makeInput('text', 'mUserName', 'mUsername');
      this.passwordField = this.makeInput('password', 'mPassword', 'mPassword');
      this.submitButton = this.makeSubmitButton('mLogin');
      this.Form.appendChild(this.userNameLabel);
      this.Form.appendChild(this.userNameField);
      this.Form.appendChild(this.passwordLabel);
      this.Form.appendChild(this.passwordField);
      this.Form.appendChild(this.submitButton);
      this.Form.appendChild(this.makeInput('reset'));
      this.submitButton.onclick = this.getValues.bind(this);
   }

   getValues() {
      const ret = { un: this.userNameField.value, pw: this.passwordField.value };
      return ret;
   }

}