import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {TbArrowBack} from 'react-icons/tb'

import {useParams, useNavigate, Routes, Route} from 'react-router-dom';
import Navigation from '../staff/Navigation';
import Progress from '../staff/components/Progress';

import Data  from './data/Data';

       
function ItemDetails(){

    const {itemId} = useParams();

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
        <Routes>
            <Route path="/parcelprogress/:itemId" component={<Progress />}/>
        </Routes>



return (
    <div>
        <Navigation/>
        <Modal  show={show} 
                onHide={()=>handleClose()} 
                animation={false} 
                backdrop="static"
                keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Tracking code generated</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <h4><strong>{Data[itemId - 1].itemTrackingCode}</strong></h4>
                <p>you can now print</p>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>handleClose()}>
                Cancel
            </Button>
            <Button variant="primary" onClick={()=>handleClose()}>
                Print
            </Button>
            </Modal.Footer>
        </Modal>

    <div className="container">
    
        <div className="sub-nav">
            
            <div className='sub-link'>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={()=>navigate("/adminHome")}     
                ><TbArrowBack />
                </button>
            </div>
            <h3>{Data[itemId - 1].itemName}</h3>
        </div>
            <div className ='item-detail'>
                <div className="col-sm-12 col-md-6 col-lg-6 item-image">
                    <img src={Data[itemId - 1].itemImage} alt={Data[itemId - 1].itemName} className='img-fluid'/>
                </div>
                <br/>
                <div className="user-detail">
                    <div className="text-center">
                        <h4>Details</h4>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 item-details">
                        <form>
                            <div className="form-group col-md-12">
                                <label htmlFor="itemOwner">Receiver's Full name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="itemOwner" 
                                    defaultValue={Data[itemId - 1].itemReceiver}/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="ownerPhoneNumber">Receiver's Phone Number</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="ownerPhoneNumber" 
                                    defaultValue={Data[itemId - 1].itemReceiverPhoneNumber}/>
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="emailAddress">Receiver's  Email Address</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="emailAddress" 
                                    defaultValue={Data[itemId - 1].itemReceiverEmailAddress}/>
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="deliveryAddress">Delivery Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="deliveryAddress" 
                                    defaultValue={Data[itemId - 1].deliveryAddress}/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="driverName">Driver Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="driverName" 
                                    defaultValue={Data[itemId - 1].driverDetails.driverName}/>
                            </div>
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="driverPhone">Driver Phone Number</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="driverPhone" 
                                    defaultValue={Data[itemId - 1].driverDetails.driverPhone}
                                        
                                    />
                            </div>
                            <br/>

                        {/* specify the button to display */}
                        {
                            Data[itemId - 1].deliveryProgress === 'request' 
                            
                            ? 
                            <button 
                                type="submit" 
                                className="btn btn-primary "
                                onClick={(e)=> {
                                    e.preventDefault()
                                    handleShow()
                                }}
                                >Generate track Code
                            </button>
                            :
                            

                            <button 
                                type="submit" 
                                className="btn btn-primary "
                                onClick={()=>navigate(`/parcelprogress/${Data[itemId - 1].itemId}`)}     
                                >View progress
                            </button>
                            
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ItemDetails;