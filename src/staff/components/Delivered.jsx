import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Steps from 'rsuite/steps';

import { FaUserCircle, FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";

import Data from '../../globals/data/Data';
// import ConfirmedDelivery from './ConfirmedDelivery';

function Delivered() {
 const {itemId} =useParams();

  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === itemId;
  });

  return (
    <div className="container">
            <div className="row">
            <h3>Receiver's Details</h3>
                <div className="delivery-details">
                    <div className="clients-details">
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
                                  <Steps.Item title="Receiver's Email" 
                                      icon={<MdOutlineMail style={{ color: 'blue' }} />}
                                      description={item.itemReceiverEmailAddress}className="steps" />
                                    <Steps.Item title="Receiver's Email" 
                                      icon={<MdOutlineMail style={{ color: 'blue' }} />}
                                      description={item.deliveryProgress}className="steps" />
                                </Steps>
                                </div>
                              );
                            })
                          }
                    </div>
        
                </div>
            </div>
    </div>
  )
}

export default Delivered;