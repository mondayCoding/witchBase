import * as React from 'react';
import { Heading, TextInputResponsive } from 'Common/Index';

export interface IProps {
   name?: string;
}

export const SignUp: React.SFC<IProps> = (props) => {

   return (
      <div>
         <Heading headingText="Sign Up" />
         <TextInputResponsive
            id={"nom"}
            name={"nom"}
            label={"Password"}
            value={""}
         />
         <TextInputResponsive
            id={"nom"}
            name={"nom"}
            label={"Password"}
            value={""}
         />
         <TextInputResponsive
            id={"nom"}
            name={"nom"}
            label={"Password"}
            value={""}
         />
      </div>
   )
};