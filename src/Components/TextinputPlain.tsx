
import * as React from 'react';
import classNames from 'classnames';

const Input: React.SFC<IProps> = ({
   id, label, tooltip, error, className, disabled, isNumberField, children, ...rest }) => {

   const classString = classNames({
      "themeinput--wrapper":true,
      "hasError": error,
      "numeric": isNumberField,
      "disabled": disabled
   });

   return (
      <React.Fragment>
         <div className={classString}>
            <label className="themeinput--label" htmlFor={id}>{label}</label>

            <div className="themeinput--content">
               <input className="themeinput" id={id} type="text" {...rest} />
               {tooltip && <div className="themeinput--content--tooltip">tooltip</div>}
            </div>

         </div>

         {error && <div className="themeinput--error">{error}</div>}

      </React.Fragment>
   );
};

export default Input;

export interface IProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  disabled?: boolean;
  className?:string;
  type?: string;
  error?: string;
  isNumberField?: boolean;
  tooltip?: string;
  onChange?(params?: any): void;
  onBlur?(params?: any): void;
  onKeyUp?(params?: any): void;
}