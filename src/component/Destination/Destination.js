import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Destination.css';
import logo from '../../Icon/Logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';




const Destination = () => {

  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
 
    return (

      <div>

   <div className="header">  
  
 <Navbar bg="light" variant="light">
      <img className="headerImg"  src={logo} alt=""/>
       <Nav className="mr-auto">
       <Form inline>
        <FormControl type="text" placeholder="Search your Destination.." className="mr-sm-2" />
        </Form>

        <Link className="mr-5 text-dark" to="/home">Home</Link>
        <Link className="mr-5 text-dark" to="/destination">Destination</Link>
        <Link className="mr-5 text-dark" to="/blog">Blog</Link>
        <Link className="mr-5 text-dark" to="/contact">Contact</Link>
        
       </Nav>
       <Form  inline className="search">
      
       <Link to="/login"> <Button onClick={() =>setLoggedInUser({})} variant="outline-primary">Login</Button> </Link>
      </Form>

  </Navbar>  
 


          </div>

      </div>

    );
  
};

export default Destination;