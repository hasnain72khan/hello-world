import React from 'react';
import { BrowserRouter, Route, Switch, Link, browserHistory } from "react-router-dom";
import Home from './Header/Home.js';
import Login from './Header/Login.js';
import Register from './Header/Register.js';
import history from 'history';

export default class Header extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
      <div>   
      <header>
      <div className="col-md-12">
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link to="/register">Register</Link>
      </li>
      </ul>
      </div>
      </header>    
      <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/login" component={Login} />
       <Route path="/register" component={Register} />
       </Switch> 
       </div>
      </BrowserRouter>
      
     );
  }
}

