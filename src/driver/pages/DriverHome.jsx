import React from 'react';
import 'rsuite/dist/rsuite.min.css';

import Steps from 'rsuite/steps';
import {useNavigate} from 'react-router-dom';  
import { FaUserCircle, FaPhoneAlt, FaMapPin, FaSearchLocation } from "react-icons/fa";
import {FcPackage} from "react-icons/fc";
import Navigation from '../Navigation';
import Data from '../../globals/data/Data';

function DriverHome(){
  const navigate = useNavigate();

  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
  });
  return (
    
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
            <h4>New shipment Request</h4>
            
                <div className="delivery-details">
                    <div className="clients-details">  
                    <h5>Delivery Details</h5>
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
                                      description={item.deliveryAddress} className="steps" />
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
                                <Steps.Item title="Sender Address" 
                                      icon={<FaMapPin style={{ color: 'blue' }} />}
                                      description={item.itemSenderAddress} className="steps" />
                                </Steps>
                                </div>
                              );
                            })
                          }
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
  )
}

export default DriverHome;