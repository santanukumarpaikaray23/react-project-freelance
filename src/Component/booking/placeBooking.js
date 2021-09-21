import React, {Component} from 'react';

//  const url="localhost:9800/addplaceBooking";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            // id:'',
            service_name:this.props.match.params.service_name,
            name:'',
            phone:'',
            mail:'',
            message:'',
            cost:sessionStorage.getItem('cost')
        }
    }
    handleChange = (event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = () =>{
        // console.log(this.state);
        fetch('/addplaceBooking',{
            method:'POST',
            headers:{
                // 'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)

        })
        .then(this.props.history.push('/viewBooking'))
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3>  Place Booking </h3>
                    </div>
                    {/* <div className="form-group">
                        <label>Order Id</label>
                        <input name="id" value={this.state.id}
                        className="form-control" readOnly/> */}

                    </div>
                    <div className="form-group">
                        <label>Service Name</label>
                        <input name="service_name" value={this.state.service_name}
                        className="form-control" readOnly/>

                    </div>
                    <div className="form-group">
                        <label>Cost</label>
                        <input name="cost" value={this.state.cost}
                        className="form-control" readOnly/>

                    </div>
                    <div className="form-group">
                        <label>Fill Your Name</label>
                        <input name="name" value={this.state.name}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    <div className="form-group">
                        <label>Fill Your Phone No.</label>
                        <input name="phone" value={this.state.phone}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    <div className="form-group">
                        <label>Fill Your Mail Id</label>
                        <input name="mail" value={this.state.mail}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    <div className="form-group">
                        <label>Message For Us</label>
                        <input name="message" value={this.state.message}
                        className="form-control" onChange={this.handleChange}/>

                    </div>
                    <button className="btn btn-success" onClick={this.handleSubmit}>
                        Place Booking
                    </button>

                </div>
            
        )
    }

}
export default PlaceOrder;