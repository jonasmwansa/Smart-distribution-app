import React from 'react';
import Steps from 'rsuite/steps';
import {useNavigate} from 'react-router-dom';  
import { FaUserCircle, FaPhoneAlt, FaMapPin, FaSearchLocation } from "react-icons/fa";
import {FcPackage} from "react-icons/fc";

import Data from '../../globals/data/Data';
import Navigation from '../Navigation';


function Transfer() {

  const navigate = useNavigate();

  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });

  const clientItem = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });
  
  return (
<div>
      <Navigation />
      <div className="container">
            <div className="row">
              <h3>Delivery Details</h3>
                <div className="delivery-details">
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
                <div className="transfer-btn">
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={()=>navigate("/transfer")}     
                    >request transfer
                    </button>
                  </div>

                
            </div>
        </div>
    </div>
  )
}

export default Transfer;