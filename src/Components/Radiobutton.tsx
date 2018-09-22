
import * as React from 'react';
import {IInputCheckboxProperties} from '../interfaces';

export default class Radiobutton extends React.Component<IInputCheckboxProperties> {

   render() {
      const {id, label, ...rest} = this.props;

      return (
         <div className="themeradio">
               <input type="radio" id={id} {...rest} />
               <label htmlFor={id}> {label} </label>
         </div>
      );
   }
}

