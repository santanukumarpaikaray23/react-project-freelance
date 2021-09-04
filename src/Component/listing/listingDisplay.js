import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderList = ({listdata})=>{
        if(listdata){
            return listdata.map((item)=>{
                return(
                    <div className="item">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="Image" src={item.thumb}/>
                            </div>
                            <div className="col-md-7">
                                <div className="service_name">
                                    <Link to={`/details/${item._id}`}>{item.name}</Link>
                                    <div className="service_name">{item.service_name}</div>
                                
                                    </div>
                                </div>
                            </div>
                            <hr/>
                           {/* <div className="row">
                               <div className="col-sm-3">
                                   <div className="cuision">MakingCost</div>
                                   </div>
                                   <div className="cusion_data">
                                      Rs. {item.cost}
                                   </div>
                           </div> */}
                    </div>
                )
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
            {/* Listing */}
        </div>
    )
}
export default ListingDisplay;