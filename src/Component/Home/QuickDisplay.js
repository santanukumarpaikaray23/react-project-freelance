import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const url ="http://localhost:5000/api/auth/userinfo";

const QuickDisplay = (props)=>{
    const listTrip =({tripdata}) => {
        if(tripdata){
            return tripdata.map((item)=>{
                return(
                    <Link to={`/list/${item._id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                           <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                       Make your {item.name} by us.
                                    </div>
                                </div>
                        </div>
                        
                    </Link>
                )
            })
        }
    }
    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">
             Also Search here

            </p>
               {/* <p className="quickSearchSubHeading">
                   You can also Search here

               </p> */}
               <br/>
               {listTrip(props)}
            </div>
    )
}
export default QuickDisplay;