import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';

const Containertwo = (props) =>{
    console.log(props)
    return(
        <div className="panel panel-danger">
            
        <div className="panel-heading">
           <center> <h3>Profile Page</h3></center>
        </div>
        <div className="panel-body">


        <h1 align="center"> Welcome to my Profile 👨‍💻</h1>
Hi Developers👋
        
 I am MEAN Stack Developer.i like Design and Programming verymuch.I have been lucky enough to work with some 
 talented teams on a number of high profile websites.i have a wide number of skills that include back-end development 
 using open source technologies(Nodejs),Front-end development(Angular10,Reactjs,Redux,HTML5,CSS3,JavaScript),
 Database(MongoDB,MySQL),CI/CD(Docker,Kubernetes).
  









       
           
        </div>
    </div>
    )
}




export default withRouter(Containertwo);