import React,{useState} from 'react';
import {useParams, useNavigate, Routes, Route} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Navigation from '../staff/Navigation'
import Catalogue from './Catalogue';
import Data from './data/Data';

function CatalogueHolder() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Navigation />
        <Modal  
                show={show} 
                onHide={()=>handleClose} 
                animation={false} 
                backdrop="static"
                keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Package</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <div className="col-sm-12 col-md-12 col-lg-12 item-details">
                        <form>
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="itemOwner">Receiver Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="itemOwner" 

                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="ownerPhoneNumber">Receiver Contact</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="ownerPhoneNumber" 
                                />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="emailAddress">Receiver Email</label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="emailAddress" 
                                />
                            </div>

                            <div className="form-group col-md-12">
                                <label htmlFor="deliveryAddress">Delivery Address</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="deliveryAddress" 
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="driverName">Driver Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="driverName"
                                />
                            </div>
                            
                            <div className="form-group col-md-12">
                                <label htmlFor="driverPhone">Driver Phone Number</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="driverPhone"        
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="deliveryProgress">Delivery Progress</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="deliveryProgress" 
                                />
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="PackageImage">Package Image</label>
                                <input 
                                    type="file" 
                                    className="form-control" 
                                    id="PackageImage"
                                    name="PackageImage" 
                                />
                            </div>
                        </form>
                  </div>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={()=>navigate("/")}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        <div className="container">
            <div className="search-add-container">
                <div className="search-container">
                <form>
                  <div className="form-group">
                  <input type="search" placeholder="search package"/>
                  <button type="submit" className="btn btn-primary btn-sm">search</button>
                  </div> 
                </form>
                </div>
                <div className="add-container">
                    <button 
                          type="submit" 
                          className="btn btn-primary "
                          onClick={(e)=> {
                              e.preventDefault()
                              handleShow()
                          }}
                          >Add
                      </button>
                </div>
            </div>
            <Catalogue />
        </div>

    </div>
  )
}

export default CatalogueHolder