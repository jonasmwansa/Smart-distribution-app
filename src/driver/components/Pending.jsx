import React from 'react';
import { useNavigate} from 'react-router-dom';
import {TbArrowBack} from 'react-icons/tb'

import Navigation from '../Navigation';
import {MdOutlineTransferWithinAStation} from 'react-icons/md';

function Pending() {

    const navigate = useNavigate();

  return (
    <div>
        <Navigation />
        <div className="container">
        
        <div className="row">
        <div className="sub-nav">
            <div className='sub-link'>
            <button 
                type="submit" 
                className="btn btn-primary btn-sm"
                onClick={()=>navigate("/driverHome")}     
            ><TbArrowBack />
            </button>
            </div>
        </div>
            <div className="message-box">
                <div className="col-sm-12 text-center">
                    <MdOutlineTransferWithinAStation style={{color:'green' }} size={32} />
                    <h4>request succesfully made</h4>
                        <p>the driver is being notified of the request</p>

                </div>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default Pending;