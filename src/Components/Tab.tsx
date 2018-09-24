
import * as React from 'react';
import classNames from 'classnames';

interface ITabButton {
   title: string;
   tabIndex: number;
   isActive?: boolean;
   onClick(number:number):void;
}

const Tab: React.StatelessComponent<ITabButton> = (props) => {
   const {onClick, tabIndex, isActive, title} = props;
   const classString = classNames({
      "tab-title": true,
      "active": (isActive),
   });
   const handleTabClick = () => onClick(tabIndex);

   return(
      <button className={classString} onClick={handleTabClick} title={title}>
         {title}
      </button>
   );  
};

export default Tab;