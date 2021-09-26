import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import ListingApi from './Component/listing/listingApi';
import DetailComponent from './Component/details/details';
 import PlaceBooking from './Component/booking/placeBooking';
 import BookingComponent from './Component/booking/bookingApi';
 import Post from './Component/Post/Post';
 import LoginComponent from './Component/Login';
 import RegisterComponent from './Component/Register';
 import UserComponent from './Component/UserApi';
 import LogoutComponent from './Component/Logout';
 

 const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
         <Route exact path="/logout" component={LogoutComponent}/>
        <Route exact path="/" component={LoginComponent}/>
        <Route path="/register" component={RegisterComponent}/>
        <Route path="/show" component={UserComponent}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/Post" component={Post}/>
        
    
        <Route path="/list/:id" component={ListingApi}/>
        <Route path="/details/:id" component={DetailComponent}/>
        <Route path="/booking/:service_name" component={PlaceBooking}/>
        <Route path="/viewBooking" component={BookingComponent}/>
        
      
   
       
        <Footer/>
        </BrowserRouter>

    )
}
export default Routing;