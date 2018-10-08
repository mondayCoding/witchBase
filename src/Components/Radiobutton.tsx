
import * as React from 'react';


export default class Radiobutton extends React.Component<any> {

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

 