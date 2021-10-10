import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url ="http://localhost:9800/servicedetails";

class details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }
    render(){
        //  let details=this.state.details;
       let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                         <h3>{this.state.details.name}</h3> 
                        {/* <h3>{this.state.details.name}</h3> */}
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                            <img className="img-responsive" src={details.thumb} style={{height:500,width:1500}}/>

                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                {/* <h3>{details.service_name}</h3> */}
                                <h3>{details.about}</h3>
                                <h3>{details.cost}</h3>
                                
                                </div>

                        </div>
                        <hr/>
                        <Tabs>
                      <TabList>
                    <Tab>Details</Tab>
                    <Tab>Contact Us</Tab>
                   </TabList>

                <TabPanel>
                 <h2>{details.name}</h2>
                 <p>We are accepting order any type of {details.name} {details.service_name} (with Maintenance also)</p>
                </TabPanel>
                <TabPanel>
             <h2>Nature With Code</h2>
             <h3>Puri,Odisha,India</h3>
             <h4>Phone no:8917310896</h4>
            </TabPanel>
            </Tabs>
            <Link to="/home" className="btn btn-danger">Back</Link> &nbsp;
            <Link to={`/booking/${details.name}`} className="btn btn-success">
                Proceed
            </Link>
  
                    </div>
                </div>
            </div>
        )
    }
//     componentDidMount(){
//         let serviceId = this.props.match.params.id;
//         axios.get(`${url}/${serviceId}`)
//         .then((res)=>{this.setState({details:res.data})})


//     }
// }
async componentDidMount(){
    let serviceId = this.props.match.params.id;
    let response = await axios.get(`${url}/${serviceId}`)
    this.setState({details:response.data[0]})
    sessionStorage.setItem('cost',response.data[0].cost)
}

}
export default details;