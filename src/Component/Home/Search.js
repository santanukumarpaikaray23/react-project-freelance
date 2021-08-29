import React, {Component} from 'react';
import './Search.css';
const serviceUrl="http://localhost:9800/services";

class Search extends Component {
    constructor(){
        super()
        console.log(">>>in constructor")
        this.state={
            service:''
        }
    }
    render(){
        console.log(">>>in render")
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
            console.log(data)
        })


    }
}
export default Search;