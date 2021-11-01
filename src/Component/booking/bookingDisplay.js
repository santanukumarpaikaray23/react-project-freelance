import React from 'react';
import {Link} from 'react-router-dom';


const BookingDisplay = (props)=>{
    

    return(
        <div className="container">
            <center><h2>Hi There👋</h2>
           <h3>Your Order Booked Successfully.Our Team will reach out you as soon as 
               possible.</h3></center>
            
            <table className="table table-responsive">
             <center> <h4>You will get Your OrderId from Your mail</h4></center>
               
            </table>
            {/* <Link to="/home" className="btn btn-danger">Back to Home</Link> */}
        </div>
    )
    
}
export default BookingDisplay;