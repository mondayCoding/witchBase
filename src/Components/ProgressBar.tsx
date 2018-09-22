
import * as React from 'react';
import classNames from 'classnames';

//*****************************************************************************************************************
// Progress bar 
//*****************************************************************************************************************

const PropgressBar:React.StatelessComponent<IProps> = (props) => {
   const {percentage, showPercentStatus, showWarningWhenFull, minText, maxText} = props;
   const cappedPercentage = (percentage >= 100 ) ? 100 : percentage;
   const statusText = (showPercentStatus) ? <span>{`${cappedPercentage}%`}</span> : null;

   const classString = classNames({
      themeprogress: true,
      thick: (statusText || minText || maxText),
      warning: (showWarningWhenFull && cappedPercentage === 100)
   });

   return (
      <div className={classString} title={cappedPercentage.toString()}>
         {minText &&  <span>{minText}</span>}
         {statusText && <span>{statusText}</span>}
         {maxText &&  <span>{maxText}</span>}
         <div className="themeprogress--fill" style={{width:`${cappedPercentage}%`}}></div>
      </div>
   );
};

export default PropgressBar;

interface IProps {
   showPercentStatus?: boolean;
   showWarningWhenFull?: boolean;
   maxText?:string;
   minText?:string;
   percentage: number;
}


