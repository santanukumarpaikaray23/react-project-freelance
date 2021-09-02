import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props)=>{
    const listTrip =({tripdata}) => {
        if(tripdata){
            return tripdata.map((item)=>{
                return(
                    <Link to="/">
                        <div className="tileContainer">
                            <div className="tileComponent1">
                           <img src={item.image}/>
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
                QuickSearch

            </p>
               <p className="quickSearchSubHeading">
                   You can also Search here

               </p>
               <br/>
               {listTrip(props)}
            </div>
    )
}
export default QuickDisplay;