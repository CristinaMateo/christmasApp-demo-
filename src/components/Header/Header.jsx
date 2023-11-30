import React from "react";
import { useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import Nav from "./Nav";

const Header = () => {
  const { username, updateUsername } = useContext(UserContext);

  return (
    <header>
      <p>Header</p>
      <Nav/>
      {username? 
      <>
      <p>Hola, {username}</p>
      <button onClick={()=>updateUsername("")}>Logout</button>
      </>: "Bienvenido"}
      
    </header>
  )
};

export default Header;