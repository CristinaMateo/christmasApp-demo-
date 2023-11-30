import React from "react";
import { useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'
import Nav from "./Nav";
import './Header.css';

const Header = () => {
  const { username, updateUsername } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header-${theme}`}>
      <button onClick={toggleTheme}>Cambiar Tema</button>
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