import React, {Component} from 'react';
import QuickDisplay from './QuickDisplay';

const url = "http://localhost:9800/booking"

class QuickSearch extends Component {
    constructor(){
        super()
        
        this.state={
            tripType:''
        }
    }
    render(){
        return(
            <QuickDisplay tripType={this.state.tripType}/>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({tripType:data})
        })
    }
}
export default QuickSearch;