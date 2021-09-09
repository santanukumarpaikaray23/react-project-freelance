import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';


const ListingDisplay =(props)=>{
    const renderList = ({listdata})=>{
        if(listdata){
            return listdata.map((item)=>{
                return(<h1>hii</h1>)
            })
        }else{
            return(
                <div className="item">
                <img src="/images/loader.gif"/>
                </div>

            )
        }
    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="col-md-12">
                    {renderList(props)}
                </div>
            </div>
        </div>
    )

}
export default ListingDisplay;