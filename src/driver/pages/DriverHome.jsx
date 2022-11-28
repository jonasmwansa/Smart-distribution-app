import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import {useNavigate} from 'react-router-dom';  
import Navigation from '../Navigation';
import Data from '../../globals/data/Data';
import banner from '../../globals/data/img_bg_2.jpg'

function DriverHome()
{
    const navigate = useNavigate();

    const filtered = Data.filter(itemPackage => {
        return itemPackage.itemId === 2;
    });

return(
<div>
    <Navigation />
        {/* <div className="container-fluid">
            <div className='banner'>
                <img src={banner} alt='banner' className="fluid"/>
                <span className="driver-welcome">Deliver and Earn</span>
            </div>
        </div> */}
        <div className="container">
            <div className='row'>
                
                <h5>Delivery Details</h5>
            </div>
            <div className="row">
                {
                    filtered.map((item) => {
                    return(
                        <div key={item.itemId}>    
                            <div className="item-detail">
                                <div className="col-sm-12 col-md-6 col-lg-6 item-image">    
                                    <img src={item.itemImage} alt={item.itemName} className='img-fluid'/>
                                </div>
                            
                                <div className="user-detail">
                                
                                    <div className="text-center">
                                        <h4>Details</h4>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 item-details">
                                        <div>
                                            <ul className="list">
                                                <li className="data">
                                                    <span className="title">Sender Name</span>
                                                    <span className="subtitle">{item.itemSender}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Sender Contact</span>
                                                    <span className="subtitle">{item.itemSenderPhoneNumber}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Receiver Name</span>
                                                    <span className="subtitle">{item.itemReceiver}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Receiver Contact</span>
                                                    <span className="subtitle">{item.itemReceiverPhoneNumber}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Receiver Email</span>
                                                    <span className="subtitle">{item.itemReceiverEmailAddress}</span>
                                                </li>
                                                
                                                <li className="data">
                                                    <span className="title">Delivery Address</span>
                                                    <span className="subtitle">{item.deliveryAddress}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Pickup point</span>
                                                    <span className="subtitle">{item.pickupPoint}</span>
                                                </li>
                                                <li className="data">
                                                        <span className="title">Delivery Date</span>
                                                        <span className="subtitle">{item.deliveryDate}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Tracking Number</span>
                                                    <span className="subtitle">{item.itemTrackingCode}</span>
                                                </li>
                                                <li className="data">
                                                    <span className="title">Package Name</span>
                                                    <span className="subtitle">{item.itemName}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="start-btn">
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary"
                                                onClick={()=>navigate("/driver/progress")}     
                                            >start shipment
                                            </button>
                                        </div>
                                    </div>    
                                </div>  
                            </div>
                        </div> 
                        );
                    })
                }     
        </div>
    </div>
</div>
)}

export default DriverHome;