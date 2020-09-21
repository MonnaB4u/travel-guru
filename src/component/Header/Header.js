import React, { useState } from 'react';
import Data from '../../fakeData/Data';
import LoadDestination from '../LoadDestination/LoadDestination';



const Header = () => {
   const [data]=useState(Data)
    return (

        <div>  
               {
                   data.map(data=> <LoadDestination data={data} key={Data.id} ></LoadDestination>)
               }
          
        </div>
    );
};

export default Header;