import React from 'react';
import $ from 'jquery';


export default class Register extends React.Component {
	 constructor(props) {
    super(props);
    this.registerSubmit = this.registerSubmit.bind(this);
}
 registerSubmit(e) {
  e.preventDefault();

  $.ajax({
    type: 'POST',
    url:'http://laravel.renegade.local/api/store',
     crossDomain: true,
    dataType: 'json',
    data: {
    	first: this.refs.firstname.value,
    	last: this.refs.lastname.value,
        email: this.refs.email.value,
        password: this.refs.password.value
    },
    cache: false,
    success: function(data){
       console.log(data);
    }
  }); 
};
  render() {
    return (
    
      <div className="Login-content">
      <form onSubmit= {this.registerSubmit}>
      <h2>Registeration form</h2>
       <div className="inputBox">
        <label>First Name:</label>
        <input type="text" ref="firstname" required/>
       </div>
       <div className="inputBox">
        <label>Last Name:</label>
        <input type="text" ref="lastname" required/>
       </div>
       <div className="inputBox">
        <label>Email:</label>
        <input type="email" ref="email" required/>
       </div>
       <div className="inputBox">
        <label>Password:</label>
        <input type="password" ref="password" required/>
       </div>
       <div className="inputBox">
        <button>Submit</button>
       </div>
       </form>
     </div>
    
     );
  }
}