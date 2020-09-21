import React from 'react';
import { Card } from 'react-bootstrap';



const BookingDestination = (props) => {
    
 const {name,img,info}=props.data;

    return (         
      <div  style={{float: 'left', padding:'20px'}}>

      <Card  style={{ width: '18rem', }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     {info}
    </Card.Text>
  </Card.Body>
</Card>

      </div>
      
    );
};

export default BookingDestination;