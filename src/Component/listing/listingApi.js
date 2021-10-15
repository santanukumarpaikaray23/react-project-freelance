import React, {Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';

const url ="http://naturewithcode.herokuapp.com/servicedetail"


class Listing extends Component{
    constructor(props){
        super(props)
      
        this.state={
            servicedetails:''
        }
    }
    render(){
        console.log(">>>>in listing",this.props)
        return(
            <div className="row">
                 {/* <div className="col-md-2">
                    Filter

                </div>  */}
                <div className="col-md-10">
                  <ListingDisplay listdata={this.state.servicedetails}/>  
                </div>
            </div>
        )
    }
    componentDidMount(){
        let tripId= this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({servicedetails:res.data})})


    }
}
export default Listing;