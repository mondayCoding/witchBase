
import * as React from 'react';
import Tip from './Infotip';
import classNames from 'classnames';

const InputMaterial: React.SFC<IProps> = ({id, value, label, tooltip, error, disabled, ...rest}) => {

   const classString = classNames({
      "themeinput--material": true,
      "hasContent": value && value.length > 0,
      "hasError": error,
      "isDisabled": disabled
   });

   return (
      <div className={classString} data-tooltip-error={error}>
         <input type="text" id={id} {...rest} value={value} />
         <label htmlFor={id}> {label} </label>
         <span className="bar"></span>   
         {(tooltip) && <Tip message={tooltip} />}
      </div> 
   );
};

interface IProps {
   id?:string;
   name?:string;
   label?:string;
   value?:string;
   placeholder?:string;
   readonly?:boolean;
   required?:boolean;
   disabled?:boolean;
   isSmall?:boolean;
   type?:string;
   tooltip?:string;
   error?:string;
   onChange?(params?:any):any;
   onBlur?(params?:any):any;
   onKeyUp?(params?:any):any;
} 

export default InputMaterial;
