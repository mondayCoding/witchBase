
import * as React from 'react';
// import {Tooltip} from 'react-lightweight-tooltip';


//*****************************************************************************************************************
// Infotip component
//*****************************************************************************************************************

const Tip = (props:any) => {
   const message = props.message;
   return (
      <div style={{position:"absolute", top:0, right:0, display:"inline-block"}}>
         {/* <Tooltip content={message} >
            <i className="fas fa-info" tabIndex={0}></i>
         </Tooltip> */}
         message
      </div>
   );
};

export default Tip;
