
import * as React from 'react';

const Heading: React.SFC<IProps> = ({ headingText, className, icon, tooltip, isInline, type, ...rest }) => {
   
   className = (className) ? `themeheading ${className}` : "themeheading";
   className = (isInline) ? `${className} inline` : className;

   const HeadingContent = () => { 
      return(   
         <React.Fragment>
            {icon && <span className="icon">{icon}</span>}
            {headingText && <span>{headingText}</span>}
            {tooltip && <span>TODO: TOOLTIP</span>}
         </React.Fragment>
      );
   };

   switch (type) {
      case "h3":
         return <h3 className={className} {...rest}><HeadingContent/></h3>;
      case "h4":
         return <h4 className={className} {...rest}><HeadingContent/></h4>;
      case "h5":
         return <h5 className={className} {...rest}><HeadingContent/></h5>;
      default:
         return <h2 className={className} {...rest}><HeadingContent/></h2>;
   }
};
export default Heading;

export interface IProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  headingText: React.ReactNode;
  isInline?: boolean;
  tooltip?: string;
  type?:string;
  onClick?(params: any): void;
}