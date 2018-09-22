
import * as React from 'react';

const WizardPath: React.StatelessComponent<IProps> = (props) => {
 	
   const {step, maxStep} = props;
   let steps = [];
   
   for(let i = 1; i < maxStep+1; i++ ){
      if (i === step) {
         steps.push(<li className="current" key={i}><div className="bullet"></div></li>);
      } else {
         steps.push(<li key={i}><div className="bullet"></div></li>);
      }		
   }

   return (
      <ol className="wizard-path">
         {steps.map((item) => item)}
      </ol>
   );
};

export default WizardPath;

interface IProps {
   step:number;
   maxStep:number;
}