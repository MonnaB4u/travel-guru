import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import {  Link, useHistory, useParams } from 'react-router-dom';
import Data from '../../fakeData/Data';
import './Booking.css'


const Booking = () => {

    const {bookId}=useParams();
    const book=Data.find(data => data.id==bookId);
   
    
    return (
        <div className="d-flex justify-content-between" >
         
    {
           <div>
    
            <h1>{book.name}</h1>
             <p>{book.info}</p>

            </div>
       
    }

            <div className="forms">

            <label htmlFor="Origin" required>Origin</label><br />
             <input className="form-control" value="Dhaka" type="text" required /><br />
             <label htmlFor="Destination" required>Destination</label>
             <input className="form-control" type="text" required /> <br />
 
             <div className="d-flex justify-content-between">
                 <div left>
                    <label >From</label><br />
                    <input type="date" value="" placeholder="input your date" required/>
                    <label className="d-flex wrap">
                                        
                         </label>
                 </div>

                     <div right>
                       <label>To</label> <br/>
                       
                       <input type="date" value="" placeholder="input your return date" required/>

                     </div>
         
                </div>
                <Link to="/confirmBooking">   <input  type="submit" value="start booking"/>  </Link>
              
                </div>
             
         
        
</div>
        

    );
};

export default Booking;