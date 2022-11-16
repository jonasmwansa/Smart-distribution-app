import React from 'react';
import { Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Navigation = () =>{

  const navigate = useNavigate();
    
  return(
        <>
           <Nav className="justify-content-end navigation">
            <Nav.Item>
              <Nav.Link href="/clientHome">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/client/transfer">Transfer</Nav.Link>
            </Nav.Item> 
          
            <Nav.Item>
              
                <button
                      type="submit" 
                      className="btn btn-primary btn-sm"
                      onClick={()=>navigate("/client")}
                >
                    Log out
                </button>
            
            </Nav.Item>

          </Nav>

        </>
    );

}

export default Navigation;
