import React from 'react';
import { Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Navigation = () =>{

  const navigate = useNavigate();
    
  return(
        <>
           <Nav className="justify-content-end navigation">
            <Nav.Item>
              <Nav.Link href="/driverHome" active-class="active" spy="true" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/driver/transfer" spy="true" >Transfers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/driver/progress" spy="true">Progress</Nav.Link>
            </Nav.Item> 
          
            <Nav.Item>
              
                <button
                      type="submit" 
                      className="btn btn-primary btn-sm"
                      onClick={()=>navigate("/driver")}
                >
                    Log out
                </button>
            
            </Nav.Item>

          </Nav>

        </>
    );

}

export default Navigation;
