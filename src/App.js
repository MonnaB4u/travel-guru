import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from './component/Destination/Destination';
import Header from './component/Header/Header';
import Booking from './component/Booking/Booking';
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import BookingDestination from './component/BookingDestination/BookingDestination';
import BookDestinationData from './component/Booking/BookDestinationData/BookDestinationData';

export const UserContext=createContext()

function App(props) {
  
  const [loggedInUser,setLoggedInUser]=useState({})
  return (
 
 <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    
    
  
     <Router>
     <Destination></Destination>
     
       <Switch>
         <Route exact path="/">
         <Header></Header>
         </Route>

           <Route path="/home">
           <Header></Header>
          </Route>

           <Route path="/destination/:bookId">
           <Booking></Booking>
         </Route>

         <Route path="/login">
           <Login></Login>
         </Route>
         
         <PrivateRoute path="/confirmBooking">
           <BookDestinationData></BookDestinationData>
         </PrivateRoute>
         
         <Route path="*">
           <NoMatch></NoMatch>
         </Route>

       </Switch>
     </Router>
    </UserContext.Provider>
  
    
  );
}

export default App;
