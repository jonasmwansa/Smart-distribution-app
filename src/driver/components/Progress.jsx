import React, {useState} from 'react'; 
import {useParams} from 'react-router-dom';

import Data from '../../globals/data/Data';
import Navigation from '../Navigation';
import Delivered from './Delivered'



function Progress() {
  
  const [isDelivered, showDelivery] = useState(false);

  const handleClick = (event) => {

    // toggle shown state
    showDelivery(current => !current);

  };

  const {itemId} = useParams();

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
                                <label htmlFor="driverUniqueId">Tracking code</label>
                                <input
                                  type="number"
                                  className="form-control mt-1"
                                  placeholder="e.g 10562345"
                                  name="trackingcode"
                                />
                              </div>
                            </div>
                        </form>
                      <div className="transfer-btn">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={()=>handleClick()}     
                        >Submit
                        </button>
                      </div>
                </div>
          </div>
    </div>

    {isDelivered && <Delivered />}

  </div>     
  )
}

export default  Progress;