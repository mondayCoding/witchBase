import * as React from 'react';
import classNames from 'classnames';


const IconLink: React.SFC<IProps> = ({ icon, size, className, ...rest }) => {

   const sizeClass = (size) ? size : "default";
   const classString = classNames({ 
      themeiconlink: true,
      [sizeClass]: true,
      [className]: className
   });

   return (
      <a href="#" className={classString} {...rest} >
         {icon}
      </a>
   );
};

export default IconLink;

export interface IProps {
   className?: any;
   id?: string;
   disabled?:boolean;
   href?:string;
   title?:string;
   download?: string;
   target?: string;
   size?: any;
   icon: React.ReactNode;
   onClick?(params:any):void;
   onMouseEnter?(params:any):void;
}

