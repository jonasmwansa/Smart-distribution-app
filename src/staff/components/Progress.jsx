import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom';

import Navigation from '../Navigation';
import Delivered from './Delivered'
import Data from '../../globals/data/Data';



function Progress() {

  const [isDelivered, showDelivery] = useState(false);
  
  const {itemId} =useParams();


  const handleClick = (event) => {
    // 👇️ toggle shown state
    Data.filter((parcel) => {
      return parcel.itemId === itemId;
    
    })

    showDelivery(current => !current);
    
  }

      

  return (
    <div>
        <Navigation />
        <div className="container">
            <div className="row">
              <div className="progress-form">
                    <form className="progress-form">
                          <div className="progress-form-content">
                            <h3 className="progress-form-title">Progress Check</h3>
                              
                              
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
                              onClick={()=>handleClick()}     
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