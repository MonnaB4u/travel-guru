import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../../fakeData/Data';
import HotelData from '../../../HotelFakeData/HotelData';
import BookingDestination from '../../BookingDestination/BookingDestination';
const BookDestinationData = () => {
  
    const {bookId}=useParams();
    const [data]=useState(HotelData);
    
    return (
        <div>
            {
               data.map(data => <BookingDestination data={data} key={data.id}></BookingDestination>)
            }
        </div>
    );
};

export default BookDestinationData;