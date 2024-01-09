import { Component } from "./component.mjs";
export class Page
{
   components = {}
   
   constructor()
   {

   }

   addComponent(component, key)
   {
      if(component instanceof Component && !this.components.hasOwnProperty(key))
      {
         this.components[key] = component;
      }
      else if(this.components.hasOwnProperty(key))
      {
         console.warn(`Key ${key} already exists.  Component not added`);
      }
   }

   removeComponent(key)
   {
      this.components[key].detach();
      delete this.components[key];
   }
   
}