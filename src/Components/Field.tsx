import * as React from 'react';
import Tooltip from 'Common/Infotip';
import classNames from 'classnames';

export const Field: React.SFC<IProps> = ({id, label, tooltip, error, disabled, isSmall, children }) => {

   const classString = classNames({
      themefield: true,
      hasError: error,
      isNumeric: isSmall,
      isDisabled: disabled
   });

   return (
      <React.Fragment>
         <div className={classString}>

            <label className="themefield--label" htmlFor={id}>
               {label}
            </label>

            <div className="themefield--content">
               {children}
               {tooltip && <div className="themefield--tooltip"> {Tooltip(tooltip)}</div>}
            </div>

         </div>

         {error && <div className="themefield--error">{error}</div>}

      </React.Fragment>
   );
};

export interface IProps {
  id?: string;
  label: string;
  disabled?: boolean;
  responsive?: boolean;
  error?: string;
  isSmall?: boolean;
  tooltip?: string;
}