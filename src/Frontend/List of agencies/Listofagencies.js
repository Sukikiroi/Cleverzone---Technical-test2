import React from "react";
import Appbar from "./Component/Appbar";
import Container from "./Component/Container";
import useLocalStorage from 'react-use-localstorage';
import Login from '../Login/Login'
function Agencies() {
  var user=localStorage.getItem('user')
  var ID=localStorage.getItem('me')

  return (  
  <div>
 
    {(user && <div>   <Appbar />    <Container ID={ID}/> </div>) ||'Login plz'}
  
   
    </div>
  );
}

export default Agencies;
