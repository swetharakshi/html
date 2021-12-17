import React, { Component } from 'react';
import history from './history';
import{Router,Switch,Route} from "react-router-dom"
import Welcome  from './sucess';
import Home from './home';
class Login extends Component {
  render(){
  
  return(
     
        <Router history={history}>
       
         <Switch>
         <Route path="/" exact component={Home}/>

          <Route path="/sucess" component={Welcome}/>
         </Switch>
       
     </Router>

        

    )
}
}
export default Login;