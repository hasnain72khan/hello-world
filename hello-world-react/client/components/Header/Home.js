import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Login from './Login.js';

$(document).ready(function(){
$.ajax({
    url: "http://laravel.renegade.local/api/dashboard/", 
    dataType: 'json',
    success: function(data){
       //console.log(data);
      $.each(data, function(i, item){
       $('#abc').append("<li>user: "+ item.user_id +", <br> "+ item.body +"</li>");
      });
       }
  });
});

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.craetePost = this.craetePost.bind(this);
    this.deletPost = this.deletPost.bind(this);
}
 craetePost(e) {
  e.preventDefault();
  console.log("helo");

 $.ajax({
    type:'POST',
    url:'http://laravel.renegade.local/api/createpost/',
    crossDomain: true,
    dataType: 'json',
    data: {
       body: this.refs.post.value
    },
    cache: false,
    success: function(data){
       //console.log(data);
       }
  });
 $.ajax({
    url: "http://laravel.renegade.local/api/dashboard/", 
    dataType: 'json',
    success: function(data){
       //console.log(data);
      $.each(data, function(i, item){
       $('#abc').append("<li>user: "+ item.user_id +", <br> "+ item.body +"</li>");
      });
       }
  });
};
deletPost(e){
     console.log("hello");
     $.ajax({
     // type: 'DELETE',
    url:'http://laravel.renegade.local/api/delete-post/${post_id}',
    dataType: 'json',
    cache: false,
    success: function(data){
       console.log(data);
    }
  });
};
craeteComment(e) {
     console.log("hello");
};

  render() {
    return (
    
      <div className="content">
      <div className="Home-heading">
      <h1> Posts</h1>
      </div>
          <div className="row">
        <div className="col-md-6 Homeregion">
         <div className="Posts-area">
         <form onSubmit={this.craetePost}>
           <div className="form-group">
<textarea className="form-control" ref="post" name="body" id="new-post" rows="5" placeholder="your post"></textarea>
    
</div>
<button type="submit">Create Post</button>
          
         </form>
         </div>
         <div>
       <ul id="abc"></ul>
       </div>
       <button onClick={this.deletPost}>Delete post</button>
         <div className="comment-area">
         <form>
    <div className="form-group">
  <input type="text" placeholder="Your comment here.." />
  
  </div>
   
  <button type="submit">Add Comment</button>

</form>
</div>
        </div>
       </div>
       </div>
    
     );
  }
}