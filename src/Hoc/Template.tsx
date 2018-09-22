import * as React from 'react';

// *********************************************************************
// HOC - TEMPLATES
// *********************************************************************

// Stateless High Order Component (HOC)
const WrapWithStateless = (WrappedComponent:any) => {

   // DO SOMETHING HERE

   return (props:any) => {
      return(
         <WrappedComponent {...props} />
      );
   };
};


// Class High Order Component (HOC)
const WrapWithClass = (WrappedComponent:any) => {
   return class extends React.Component {

      // DO SOMETHING HERE

      render(){
         return(
            <WrappedComponent {...this.props} />
         );
      }
   }; 
};

export { WrapWithClass, WrapWithStateless };



// *********************************************************************
// HOC - TEMPLATES
// *********************************************************************


// Stateless High Order Component (HOC)
const WrapWith = (WrappedComponent: any) => {
   // DO SOMETHING HERE

   return (props: any) => {
      return (
         <WrappedComponent {...props} />
      );
   };
};


// Class High Order Component (HOC)
const wrapInContext = (WrappedComponent: any) => {
   return class extends React.Component {

      // DO SOMETHING HERE

      render() {
         return (
         <WrappedComponent {...this.props} />
         );
      }
   };
};

export default { wrapInContext, WrapWith };
 
 
 
 
 // *********************************************************************
 // HOC - Tyypitykset 
 // *********************************************************************
 
 
 // ENCHANCER TYPES
 
interface IEnchance {
   isReady: boolean;
}

const EnchanceData = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
   return class extends React.Component<P & IEnchance> {            

      render(){
         const { isReady, ...props } = this.props as IEnchance;
         return <WrappedComponent {...props} />;
      }
   }; 
};


// INJECTOR TYPES

export interface IInjected {
   injectedParam: boolean;
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

const InjectData = <P extends IInjected>(WrappedComponent: React.ComponentType<P >) => {
   return class extends React.Component <Subtract<P, IInjected>> { 

      render(){
         return <WrappedComponent injectedParam={true} {...this.props} />;
      }
   }; 
};