import React from 'react';


const BookingDisplay = (props)=>{
    const renderTable= ({bookdata}) =>{
        // <p>We got your Order.We will react out you as soon as possible.</p>
      }

    return(
        <div className="container">
            <center><h2>Hi👋, We got your Order.Our Team will reach out you as soon as possible.</h2></center>
            
            <table className="table table-responsive">
             <center> <h3>You will get Your OrderId from mail</h3></center>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>

        </div>
    )
}
export default BookingDisplay;