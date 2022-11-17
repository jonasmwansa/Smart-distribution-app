import React from 'react';
import {useParams} from 'react-router-dom';
import Steps from 'rsuite/steps';

import { FaUserCircle, FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMail,MdDateRange} from "react-icons/md";
import {BiPackage} from "react-icons/bi";
import {SiProgress} from "react-icons/si";

import Data from '../../globals/data/Data';
// import ConfirmedDelivery from './ConfirmedDelivery';

function Delivered() {


  const {itemId} =useParams();




  return (
    <div className="container">
            <div className="row">
            <h4>Progress Details</h4>
            
                <div className="delivery-details">
                    <div className="clients-details">
                        
                                <div>
                                  <Steps vertical >
                                    <Steps.Item title="Receiver Name"
                                        icon={<FaUserCircle style={{ color: 'red' }} />}
                                        description={Data[itemId - 1].itemReceiver} className="steps"/>
                                    <Steps.Item title="Receiver contact" 
                                        icon={<FaPhoneAlt style={{ color: 'green' }} />}
                                        description={Data[itemId - 1].itemReceiverPhoneNumber} className="steps"/>
                                    <Steps.Item title="Item Name" 
                                        icon={<BiPackage style={{ color: 'orange' }} />}
                                        description={Data[itemId - 1].itemName} className="steps" />
                                      <Steps.Item title="Receiver's Email" 
                                        icon={<MdOutlineMail style={{ color: 'blue' }} />}
                                        description={Data[itemId - 1].itemReceiverEmailAddress} className="steps" />
                                        <Steps.Item title="Delivery Progress" 
                                        icon={<SiProgress style={{ color: 'black' }} />}
                                        description={Data[itemId - 1].deliveryProgress} className="steps" />
                                        <Steps.Item title="Approximate Delivery Date" 
                                        icon={<MdDateRange style={{ color: 'green' }} />}
                                        description={Data[itemId - 1].deliveryDate} className="steps" />
                                  </Steps>
                                </div>
                              
                    </div>
        
                </div>
            </div>
    </div>
  )
}

export default Delivered;