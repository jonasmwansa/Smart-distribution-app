import React from 'react';
import Navigation from './Navigation';
import ActivityData from '../globals/data/ActivityData';
import Catalogue from '../globals/Catalogue';

function AdminHome() {


  return (
    <div>
        <Navigation />
         
        <div className="container">
            <div className="row">
                <div className="activity-home">
                    <div className='activity-title'>
                        <h3>Recent activity</h3>
                    </div>
                    <div className="widgets">
                        {
                        ActivityData.map((activity)=>
                        (
                        <div key={activity.id} className="widget col-sm-12 col-md-6 col-lg-3">
                            <div className="count-icon">
                                <div className='count'>{activity.count}</div>
                                <div className="icon">{activity.icon}</div>
                            </div>
                            <div className='title'>
                                <div className="title">{activity.title}</div>
                            </div>    
                        </div>
                        ))
                        }  
                    </div>      
                </div>
            </div>    
            
            {<Catalogue />}  
                    
    </div>
</div>
  )
}

export default AdminHome;