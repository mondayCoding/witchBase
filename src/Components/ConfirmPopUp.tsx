import * as React from 'react';
import { PlainConfirmModal, ReactConfirmProps, confirmable, createConfirmation } from 'react-confirm';
import {Button, Icons} from 'Common/Index';


interface IConfirmProps extends ReactConfirmProps {
   proceedText:string;
   cancelText:string;
}

class ConfirmPopUp extends React.Component<IConfirmProps> {

   listenKeyboard = (e:KeyboardEvent) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
         this.props.cancel();
      }
   }

   componentDidMount() {
      if (this.props.cancel) {
         window.addEventListener('keydown', this.listenKeyboard, true);
      }
   }

   componentWillUnmount() {
      if (this.props.cancel) {
         window.removeEventListener('keydown', this.listenKeyboard, true);
      }
   }
   
   onDialogClick = (event:React.MouseEvent) => {
      event.stopPropagation();
   }

   handleCancel = () => {
      this.props.cancel();
   }

   handleProceed = () => {
      this.props.proceed();
   }

   render() {
      const {confirmation, show, dismiss, proceedText, cancelText } = this.props;

      // Render nothing if the "show" prop is false
      if (!show) {return null;}

      return (
         <div className="fade--backdrop confirmPopUp" onClick={this.handleCancel}>
            <div className="thememodal animated--scaleIn" onClick={this.onDialogClick}>

               <div className="thememodal--heading">
                  <button onClick={this.handleCancel} type="button" className="close-button noborder"></button>
               </div>

               <div className="thememodal--content">

                  <div className="thememodal--fill">
                     {confirmation}    
                  </div>        

                  <div className="row-flex center">
                     <Button 
                        onClick={this.handleCancel} 
                        buttonText={cancelText} 
                        className="rounded fat"
                        buttonIcon={Icons.close} 
                     />
                     <Button 
                        onClick={this.handleProceed} 
                        buttonText={proceedText} 
                        className="rounded fat"
                        autoFocus={true} 
                        buttonIcon={Icons.check} 
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}




// make chosen dialog confirmable
const dialog = confirmable(ConfirmPopUp);

// create confirm function
const confirm = createConfirmation(dialog);
 
// define simplified call to confirm dialog
const confirmPopUp = (confirmation: string, proceedText:string="Ok", cancelText:string="Cancel",  options={}, ) => {

// return version that returns true/false from user input
return confirm({ confirmation, options, proceedText, cancelText })
   .then( () => true, () => false );
};

export default confirmPopUp;