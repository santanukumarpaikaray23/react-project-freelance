import React,{Component} from 'react';
import UserDisplay from './UserDisplay';

const url = "https://naturewithcodeauth.herokuapp.com/api/auth/users";

class UserList extends Component{
    constructor(){
        super()

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk')==null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'admin'){
            this.props.history.push('/Login')
        }
        return(
            <div>
                <UserDisplay userdata={this.state.users}/>
            </div>
        )
    }
   //callapi
   componentDidMount(){
       fetch(url,{methed:'GET'})
       .then((res)=>res.json())
       .then((data)=>{this.setState({users:data})})
   }
}
export default UserList;