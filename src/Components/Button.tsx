
import * as React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component<IButtonProperties> {

   public render() {
      let { className, buttonText, buttonIcon, type, disabled, ...rest } = this.props; 
      className = className || ""; 
      buttonText = buttonText || "button";
      type = type || "button";

      const classString = classNames({
         themebutton: true,
         [className]: className, disabled
      });
 
      return (
         <button type={type} className={classString} {...rest} >
            {buttonIcon && <span>{buttonIcon}</span>}
            {buttonText && <span>{buttonText}</span>}
         </button>
      );
   }
}

export interface IButtonProperties {
  className?: string;
  id?: string;
  disabled?:boolean;
  autoFocus?: boolean;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  type?: string;
  onClick?(params:any):any;
}
