
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

interface IState {
   hasError: boolean;
}

export default class Main extends React.Component {

   state:IState = {
      hasError:false
   }; 

   componentDidCatch(error:any, info:any) {
      // fallback UI
      this.setState({ hasError: true });
      console.error(error);
      console.error(info);
    }

   render() {
      return (
         <React.Fragment>
            {
               (!this.state.hasError) ? 
                  <Switch>
                     {/* <Route exact={true} path="/" component={dashboard}/>
                     <Route exact={true} path="/createchar" component={CreateCharPage}/>
                     <Route exact={true} path="/soon" component={soonpage}/> */}
                     <Redirect to="/"/>
                  </Switch> 
               :
                  <section>
                     <h2>
                        Something Broke ;(
                     </h2>
                  </section>
            }         
         </React.Fragment> 
      );
   }
}
