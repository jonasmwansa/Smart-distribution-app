import React from 'react';
import { Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const Navigation = () =>{

  const navigate = useNavigate();
    
  return(
        <>
           <Nav className="justify-content-end navigation">
            <Nav.Item>
              <Nav.Link href="/AdminHome">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/catalogue">Packages</Nav.Link>
            </Nav.Item> 
          
            <Nav.Item>
              
                <button
                      type="submit" 
                      className="btn btn-primary btn-sm"
                      onClick={()=>navigate("/")}
                >
                    Log out
                </button>
            
            </Nav.Item>

          </Nav>

        </>
    );

}

export default Navigation;
