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
                <h4 className="text-center">Request A Transfer</h4>
                <div className="delivery-details">
                    <div className="clients-details">  
                        <h5>Details</h5>
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
                                  <Steps.Item title="Item Name" 
                                      icon={<FaSearchLocation style={{ color: 'orange' }} />}
                                      description={item.itemName} className="steps"/>
                                  <Steps.Item title="Tracking Number" 
                                      icon={<FcPackage style={{ color: 'orange' }} />}
                                      description={item.itemTrackingCode} className="steps"/>
                                      
                                </Steps>
                                </div>
                              );
                            })
                          }
                    </div>

                    <div className="clients-details">
                    <form className="Transfer-form">
                          <div className="Transfer-form-content">
                            <h3 className="Transfer-form-title">Driver Details</h3>
                            
                              <div className="form-group mt-3">
                                <label htmlFor="driverUniqueId">Driver Unique Id</label>
                                <input
                                  type="number"
                                  className="form-control mt-1"
                                  placeholder="e.g 10562345"
                                  name="driverUniqueId"
                                />
                              </div>
                            </div>
                        </form>
                      <div className="transfer-btn">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={()=>navigate("/client/pending")}     
                        >request
                        </button>
                </div>
              </div>
          </div>
      </div>
    </div>
</div>
  )
}

export default Transfer;