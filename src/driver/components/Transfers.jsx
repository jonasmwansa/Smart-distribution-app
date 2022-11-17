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

  const navigate = useNavigate();

  const filtered = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    
  });

  const clientItem = Data.filter(itemPackage => {
    return itemPackage.itemId === 2;
    });

    const {itemId} = useParams();
    const [show, setShow] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handleClose = () => setShow(false);
    const handleApproval = () => setShow(true);
    const showDriverDetails =()=> setShowDetails(true);
  

  return (
<>
    <Navigation />
    <Modal  show={show} 
            onHide={()=>handleClose()} 
            animation={false} 
            backdrop="static"
               keyboard={false}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="message-box">
                      <div className="col-sm-12">
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
                      </div>
                  </div>

              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" 
                          onClick={()=>handleClose()}
                  >
                    Cancel
                  </Button>
                  <Button 
                          variant="primary" 
                          onClick={()=>navigate("/driver/pending")}
                  >
                      Transfer
                  </Button>
              </Modal.Footer>
          </Modal>

 
    <div className="container">

            <div className="row">
                <h4 className='text-center'>Issue Transfer</h4>
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
                                onClick={(e)=>{
                                       e.preventDefault()
                                          handleApproval()
                                }}  
                                // onClick={()=>navigate(`/transfer/${Data[itemId - 1].itemId}`)}  
                            >Request
                            </button>
                        </div>           
                    </form>              
            </div>
            
          </div>
      </div>
</div>
</>
  )
}

export default Transfers;