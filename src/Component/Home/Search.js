import React, {Component} from 'react';
import { withRouter } from 'react-router';
import './Search.css';
const serviceUrl="http://localhost:9800/service";
const typeUrl="http://localhost:9800/types?service=";

class Search extends Component {
    constructor(props){
        super(props)
        console.log(">>>in constructor")
        this.state={
            service:'',
            types:''
        }
    }
    renderservice = (data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>
                        {item.service_name}
                    </option>
                )
            })
        }

        }
        rendertypes = (data)=>{
            if(data){
                return data.map((item)=>{
                    return(
                        <option value={item._id}>
                            {item.name} 
                        </option>
                    )
                })
            }
    
            }
  handleService = (event) => {
      console.log(event.target.value)
      const serviceId = event.target.value;
      fetch(`${typeUrl}${serviceId}`,{method:'GET'})
      .then((res)=>res.json())
      .then((data)=>{
          this.setState({types:data})
      })
  }
  handletypes=(event) => {
      this.props.history.push(`/details/${event.target.value}`)
  }
    render(){
        console.log(">>>>in search",this.props)
        // console.log(">>>>>in render>>>>>",this.state.types)
        return(
            <div className="imageContainer">
                <div id="logo"> 
               

                </div>
                <div className="heading">
                        Welcome
                          to
                    Nature With Code

                </div>
                <div className="serviceSelector">
                    <select className="serviceDropDown" onChange={this.handleService}>
                        <option>--SELECT SERVICES--</option>
                        {this.renderservice(this.state.services)}
                    </select>
                    <select className="typesDropDown" onChange={this.handletypes}>
                        <option>-----SELECT TYPES-----</option>
                        {this.rendertypes(this.state.types)}

                    </select>
                    </div>
            </div>
        )
    }
    ///on page load
    componentDidMount(){
        console.log(">>>in componentDidMount")
        //We get the data and update the state
        fetch(serviceUrl, {method:'GET'})
        //return the promise here
        .then((res)=>res.json())
        //get the data
        .then((data)=>{
            //setting data in state
            this.setState({services:data})
        })
        //error handling
        .catch((err)=>{
            console.log(err)
        })


    }
}
export default withRouter(Search);