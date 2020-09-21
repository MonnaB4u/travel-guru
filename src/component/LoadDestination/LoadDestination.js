import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LoadDestination = (props) => {
     
    const {id,name,info,img}=props.data

     let history =useHistory();


    const handleBtn = (id) => {

      history.push(`/destination/${id}`)
      
    }
    return (

  <div style={{float: 'left', padding:'20px'}}>

  <Card style={{ width: '18rem' }}>

  <Card.Img 
  style={{ height: '190px' }} variant="top" src={img} />

  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Title>{name}</Card.Title>
    <Card.Text style={{fontSize:"0px"}}>
      {info}
    </Card.Text>

    <Button variant="primary"
    
    onClick={()=>handleBtn(id)}>

     booking
    </Button>
    
    
  </Card.Body>
</Card>
        </div>
    );
};

export default LoadDestination;