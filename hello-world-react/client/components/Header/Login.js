import React from 'react';
import $ from 'jquery';
import { browserHistory } from "react-router";
import history from 'history';
import { Route, Redirect } from 'react-router';
import Home from './Home.js';


export default class Login extends React.Component {
 constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
}
 handleSubmit(e) {
  e.preventDefault();

  $.ajax({
    
    url:'http://laravel.renegade.local/api/login',
    crossDomain: true,
    dataType: 'json',
    data: {
        email: this.refs.email.value,
        password: this.refs.password.value
    },
    cache: false,
    success: function(data, status){
       console.log(data);
       if(data.status == "true"){
           
         //<Redirect to="/"/>
         window.location="http://localhost:8080";
       }
    }
  });
};

  render() {

    return (
     
     <div className="Login-content">
      <form onSubmit= {this.handleSubmit}>
       <h2>Login form</h2>
       <div className="inputBox">
        <label>Email:</label>
        <input ref="email" type="email" required/>
       </div>
       <div className="inputBox">
        <label>Password:</label>
        <input ref="password" type="password" required/>
       </div>
       <div className="inputBox">
        <button type="submit">Login</button>
       </div>
       </form>
     </div>
    
     );
  }
}
