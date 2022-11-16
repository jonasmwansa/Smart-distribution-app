import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Steps from 'rsuite/steps';

import { FaUserCircle, FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";

import Data from '../../globals/data/Data';
import ConfirmedDelivery from './ConfirmedDelivery';

function Delivered() {

  const [isConfirmed, setConfirm] = useState(false);
  
  const navigate = useNavigate();

  const handleConfirmation = event => {
    // 👇️ toggle shown state
    setConfirm(current => !current);


    ;

  };                  


  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
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
                                </Steps>
                                </div>
                              );
                            })
                          }
                    </div>
                    <div className="delivery-btn">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={()=>navigate('/confirmed')}     
                        >confirm delivery
                        </button>
                    </div>
                </div>
            </div>

            {isConfirmed && <ConfirmedDelivery />}
    </div>
  )
}

export default Delivered;