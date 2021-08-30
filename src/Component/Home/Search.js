import React, {Component} from 'react';
import './Search.css';
const serviceUrl="http://localhost:9800/services";
const servicetypeUrl=""

class Search extends Component {
    constructor(){
        super()
        console.log(">>>in constructor")
        this.state={
            service:''
        }
    }
    renderservices = (data)=>{
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
  
    render(){
        console.log(">>>>>in render>>>>>",this.state.service)
        return(
            <div className="imageContainer">
                <div id="logo"> 
               

                </div>
                <div className="heading">
                        Welcome
                          to
                    Nature With Code

                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>--SELECT SERVICES--</option>
                        {this.renderservices(this.state.services)}
                    </select>
                    <select className="typesDropDown">
                        <option>--SELECT SERVICES TYPE--</option>
                    </select>
                    </div>
            </div>
        )
    }
    ///call api
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
export default Search;