import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './globals/Login';
import AdminLogin from './staff/Login';
import ConfirmDelivery from './customer/pages/ClientHome';
import AdminHome from './staff/AdminHome';
import ItemDetails from './globals/ItemDetails';
import DriverHome from './driver/pages/DriverHome';
import Transfer from './customer/pages/Transfer';
import Transfers from './driver/components/Transfers';
import Pending from './customer/pages/Pending';
import Progress from './staff/components/Progress';
import DriverProgress from './driver/components/Progress';
import ConfirmedDelivery from './driver/components/ConfirmedDelivery';
import CatalogueHolder from './globals/CatalogueHolder';


function App() {
  return (
    <div className="app">

      <Router>
        <Routes>

            {/* admin routes */}
            <Route path='/' element={<AdminLogin />}/>
            <Route path='/adminHome/*' element={<AdminHome />}/>
            <Route path='/catalogue/*' element={<CatalogueHolder/>}/>
            <Route path='/:itemId/*' element={<ItemDetails/>} />
            <Route path='/parcelprogress/:itemId' element={<Progress/>}/>

            {/*client routes */}
            <Route path='/client' element={<Login loginLink='/clientHome' signupLink='/client' />}/>
            <Route path='/clientHome' element={<ConfirmDelivery/>}/>
            <Route path='/client/transfer' element={<Transfer />}/>
            <Route path='/client/pending' element={<Pending />}/>
            
            {/* driver routes */}
            <Route path='/driver' element={<Login loginLink='/driverHome' signupLink='/driver' />}/>
            <Route path='/driverHome/*' element={<DriverHome />}/>
            <Route path='/driver/transfer' element={<Transfers />}/>
            <Route path="/driver/progress" element={<DriverProgress/>}/>
            <Route path="/confirmed" element={<ConfirmedDelivery/>}/>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
