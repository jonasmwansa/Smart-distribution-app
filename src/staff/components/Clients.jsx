import React, {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Navigation from './Navigation';
import ActivityData from '../globals/data/ActivityData';
import Catalogue from '../globals/Catalogue';
import Data from '../globals/data/Data';

function Clients() {

    const navigate = useNavigate();
    const [isSelected, getSelected ] = useState('request');

    const requests = Data.filter(itemPackage => {
      return itemPackage.itemStatus === 'request';
    });
    
    const transist = Data.filter(itemPackage => {
        return itemPackage.itemStatus === 'transit';
      });

      const delivered = Data.filter(itemPackage => {
        return itemPackage.itemStatus === 'delivered';
      });

   if(isSelected){
    return (
        

        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <Link to='/requests' className='link'>Requests</Link>
            <div className="clients-table">
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Physical Address</th>                    
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                        requests.map((requests)=>(
                        <tr key={requests.itemId}>
                        <td>{requests.itemReceiver}</td>
                        <td>{requests.itemReceiverEmailAddress}</td>
                        <td>{requests.itemReceiverPhoneNumber}</td>
                        <td>{requests.deliveryAddress}</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
      )

   }else if(isSelected==='transit'){
    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <Link to='/requests' className='link'>Requests</Link>
            <div className="clients-table">
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Physical Address</th>                    
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                        transist.map((requests)=>(
                        <tr key={requests.itemId}>
                        <td>{requests.itemReceiver}</td>
                        <td>{requests.itemReceiverEmailAddress}</td>
                        <td>{requests.itemReceiverPhoneNumber}</td>
                        <td>{requests.deliveryAddress}</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
      )
   }else if(isSelected==='delivered'){

    return (
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
            <Link to='/requests' className='link'>Requests</Link>
            <div className="clients-table">
                <Table striped>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Full name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Physical Address</th>                    
                        </tr>
                    </thead>
    
                    <tbody>
                        {
                        delivered.map((requests)=>(
                        <tr key={requests.itemId}>
                        <td>{requests.itemReceiver}</td>
                        <td>{requests.itemReceiverEmailAddress}</td>
                        <td>{requests.itemReceiverPhoneNumber}</td>
                        <td>{requests.deliveryAddress}</td>
                        </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
      )
   }
}

export default Clients;