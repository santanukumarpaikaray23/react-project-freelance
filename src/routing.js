import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Component/Home/Home';
import ListingApi from './Component/listing/listingApi';
import DetailComponent from './Component/details/details'

const Routing = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/list/:id" component={ListingApi}/>
        <Route path="/details/:id" component={DetailComponent}/>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing;