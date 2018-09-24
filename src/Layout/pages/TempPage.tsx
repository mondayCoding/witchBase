import * as React from 'react';
import { Heading } from 'Common/Index';

export interface IProps {
   name?: string;
}

export const TempPage: React.SFC<IProps> = (props) => {

   return (
      <div>
         <Heading headingText="Sample heading" />
      </div>
   )
};