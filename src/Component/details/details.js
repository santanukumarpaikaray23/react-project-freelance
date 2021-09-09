import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const url ="http://localhost:9800/servicedetails";

class details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }
    render(){
        let details=this.state.details;
        // let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        {/* <h3>{this.state.details.name}</h3> */}
                        <h3>{this.state.details.name}</h3>
                    </div>
                </div>
            </div>
        )
    }
    // componentDidMount(){
    //     let tripId = this.props.match.params.id;
    //     axios.get(`${url}/${tripId}`)
    //     .then((res)=>{this.setState({types:res.data})})


    // }
// }
async componentDidMount(){
    let serviceId = this.props.match.params.id;
    let response = await axios.get(`${url}/${serviceId}`)
    this.setState({details:response.data[0 ]})
}

}
export default details;