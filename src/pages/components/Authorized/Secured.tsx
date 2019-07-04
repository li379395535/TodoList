import React from "react";
import CheckPermissions from './CheckPermissions';

export const isComponentClass = (component:React.ComponentClass | React.ReactNode):boolean =>{
  if(!component) return false;
  const proto = Object.getPrototypeOf(component);
  if(proto === React.Component || proto === Function.prototype) return true;
  return isComponentClass(proto);
}

