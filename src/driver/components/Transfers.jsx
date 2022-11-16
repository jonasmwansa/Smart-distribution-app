import React, {useState} from 'react'
import Steps from 'rsuite/steps';
import {useNavigate, useParams} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaUserCircle, FaPhoneAlt, FaMapPin, FaSearchLocation } from "react-icons/fa";
import {FcPackage} from "react-icons/fc";
import Navigation from '../Navigation';
import Data from '../../globals/data/Data';

function Transfers() {

  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });

  const clientItem = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    });

    const {itemId} = useParams();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleApproval = () => setShow(true);

  

  return (
<>
    <Navigation />
 
    <div className="container">

            <div className="row">
                <h4 className='text-center'>Current Transfer Request</h4>
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

                    <form className="Transfer-form">
                        <div className="transfer-btn">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                onClick={()=>handleApproval()}     
                            >Approve
                            </button>
                        </div>           
                    </form>              
            </div>
            <Modal  show={show} 
                onHide={()=>handleClose()} 
                animation={false} 
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>Approve delivery point transfer</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    <h4><strong>address</strong></h4>
                    <p>are you sure you want prove this request</p>
                    </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>handleClose()}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={()=>handleClose()}>
                        Accept
                </Button>
                </Modal.Footer>
            </Modal>
          </div>
      </div>
</div>
</>
  )
}

export default Transfers;