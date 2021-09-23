import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url = "localhost:9800/placeBooking"

class viewBooking extends Component{
    constructor(){
        super()

        this.state={
            placeBookings:''
        }
    }
    render(){
        return(
            <BookingDisplay bookdata={this.state.Booking}/>
        )
    }
    componentDidMount(){
        axios.get(url).then((res)=>{this.setState({placeBookings:res.data})})
    }
}
export default viewBooking