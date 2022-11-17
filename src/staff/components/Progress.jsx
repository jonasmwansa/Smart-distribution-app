import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {TbArrowBack} from 'react-icons/tb'

import Navigation from '../Navigation';
import Delivered from './Delivered'
import Data from '../../globals/data/Data';



function Progress() {

  const [isDelivered, showDelivery] = useState(false);
  
  const {itemId} =useParams();
  const navigate = useNavigate();


  const handleClick = () => {
    Data.filter((parcel) => {
      return parcel.itemId === itemId;
    
    })

    showDelivery(true);
    
  }

      

  return (
    <div>
        <Navigation />
        <div className="container">
        
            <div className="row">
              <div className="progress-form">
                    <form className="progress-form">
                          <div className="progress-form-content">
                            <div className="progress-form-title">
                                <h3 className="title">Progress Check</h3>
                                <div className='text-right'>
                                    <button 
                                    type="submit" 
                                    className="btn btn-primary btn-sm"
                                    onClick={()=>navigate("/adminHome")}     
                                    ><TbArrowBack />
                                    </button>
                                </div>
                            </div>
                              
                                <div className="form-group mt-3">
                                    <label htmlFor="itemTrackingCode">Tracking code</label>
                                    <input
                                      type="number"
                                      className="form-control mt-1"
                                      name="itemTrackingCode"
                                      defaultValue={Data[itemId-1].itemTrackingCode}
                                    />
                                </div>
                          </div>
                          <div className="transfer-btn">
                          <button 
                              type="submit" 
                              className="btn btn-primary"
                              onClick={(e)=>{
                                    e.preventDefault()
                                    handleClick()}}     
                          > check
                          </button>
                        </div>
                    </form>
                      
                </div>
          </div>
    </div>

    {isDelivered && <Delivered />}

  </div>     
  )
}

export default  Progress;