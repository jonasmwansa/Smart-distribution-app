import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Data  from './data/Data';
import ItemDetails from './ItemDetails';


const Catalogue = ()=>{
    
    const navigate = useNavigate();

    return(

    <div className="row">
        <div className='title'>
            <h3 style={{paddingTop:'1rem'}}>Packages</h3>
        </div>
            <div className="catalogue-item">
                {
                    Data.map((item)=>
                    (
                        <div key={item.itemId}>
                            <div className='item-content'>
                                <div className="image-container">
                                    <img src={item.itemImage} className='img-fluid' alt="item" />
                                    {/* <span className="badge-item">{item.deliveryProgress}</span> */}
                                </div>
                                <div className="details-item">
                                    <span><b>{item.itemName}</b></span><br/>                               
                                    <Routes>
                                        <Route path="/:itemId" component={<ItemDetails/>} />
                                    </Routes>
                                    
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary "
                                        onClick={()=>navigate(`/${item.itemId}`)}
                                
                                    >view
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
</div>    
    );
}

export default Catalogue; 