import React from 'react';
import Steps from 'rsuite/steps';
import {useNavigate} from 'react-router-dom';
import {FaHouseUser, FaThumbsUp} from 'react-icons/fa';

import { FaUserCircle,  FaPhoneAlt, FaMapPin, FaSearchLocation } from "react-icons/fa";
import {FcPackage} from "react-icons/fc";
import {TiTickOutline} from "react-icons/ti"

import Data from '../../globals/data/Data';


function ConfirmedDelivery(props) {
const navigate = useNavigate();

const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });

  const clientItem = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });

return (
    <div className="container confirmed-container">
        <div className="row">
            <div className="delivery-btn">
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={()=>navigate('/driverHome')}     
                >
                <FaHouseUser style={{ color: 'white' }}/>
                </button>
            </div>
        </div>
             
        <div className="row">
        <div className="text-center">
            <FaThumbsUp style={{color:'green' }} size={32}/>
            <h3>Delivery Completed</h3>
        </div>
            <hr/>   
                    <div className="clients-details">  
                        <h4>Personal Details</h4>
                        {
                          filtered.map(item => {
                              return (
                                <div key={item.itemId}>
                                    <Steps vertical >
                                    <Steps.Item title="Receiver Name"
                                        icon={<FaUserCircle style={{ color: 'red' }} />}
                                        description={item.itemReceiver} className="steps"/>
                                    <Steps.Item title="Receiver contact" 
                                        icon={<FaPhoneAlt style={{ color: 'green' }} />}
                                        description={item.itemReceiverPhoneNumber} className="steps"/>
                                    <Steps.Item title="Delivery Address" 
                                        icon={<FaMapPin style={{ color: 'blue' }} />}
                                        description={item.deliveryAddress}className="steps" />
                                    </Steps>
                                </div>
                              );
                            })
                        }
                </div>
        </div>
                
        <div className="row">
            <div className="clients-details">
                <h4>Item Details</h4>  
                
                    {
                        clientItem.map(item => {
                        return (
                        <div key={item.itemId}>
                            <Steps vertical >
                            <Steps.Item title="Item Name" 
                                icon={<FaSearchLocation style={{ color: 'orange' }} />}
                                description={item.itemName} className="steps"/>
                            <Steps.Item title="Tracking Number" 
                                icon={<FcPackage style={{ color: 'orange' }} />}
                                description={item.itemTrackingCode} className="steps"/>
                            <Steps.Item title="Sender Name"
                                icon={<FaUserCircle style={{ color: 'red' }} />}
                                description={item.itemSender} className="steps"/>
                            <Steps.Item title="Sender contact" 
                                icon={<FaPhoneAlt style={{ color: 'green' }} />}
                                description={item.itemSenderPhoneNumber} className="steps"/>
                            </Steps>
                        </div>
                        );
                        })
                    }
            </div>
        </div>            
    </div>
)
}

export default ConfirmedDelivery;