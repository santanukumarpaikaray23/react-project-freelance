import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
  
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/"><img src="https://i.ibb.co/TbLXYQQ/unnamed.png" width="100%" height="150%"></img></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
    <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
             <li><Link to="/post">Post</Link></li>
            <li><Link to="/profile">Profile</Link></li>
     
    </ul>
     
      <ul class="nav navbar-nav navbar-right">
        <li><Link href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link href="#"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
           
        </div>
    )
}
export default Header;