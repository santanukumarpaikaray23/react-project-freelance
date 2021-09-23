import React, {Component} from 'react';
import { withRouter } from 'react-router';
// import {Link} from 'react-router-dom';
import './Container.css'; 

// import React, {Component} from 'react';
// import { withRouter } from 'react-router';

const Container = (props) =>{
    console.log(props)
    return(
        <div className="panel panel-success">
            
        <div className="panel-heading">
           <center> <h3>Here You can see all the new posted things.</h3></center>
        </div>
        <div className="panel-body">

         
            <h3>Youtube Channel</h3>
            <a href="https://www.youtube.com/channel/UC44Igj1mSwOYsfQo6VUfr9g">click here to visit...</a>
            <h3>Some Demo Websites which has made by us.</h3>
            <a href="https://telangapdaatm.herokuapp.com/">(1) click here to visit...</a>
           
        </div>
    </div>
    )
}
export default withRouter(Container);