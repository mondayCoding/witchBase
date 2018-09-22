
import * as React from 'react';

interface IProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
   label: string;
}

export default class Checkbox extends React.Component<IProps> {

   render() {
      const {id, label, ...rest} = this.props;

      return (
         <div className="themecheckbox">
            <input type="checkbox" id={id}  {...rest} />
            <label htmlFor={id} >{label}</label>
         </div>
      );
   }
}
