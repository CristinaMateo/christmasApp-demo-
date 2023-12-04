import React from "react";
import {  useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
// import "./Footer.css";

const Footer = () => {
    
  const { theme } = useContext(ThemeContext); //consumer
  return ( <footer className={`footer-${theme}`}>
    <p>Esto es mi Footer</p>
    <ul>
        <li>
            <a href="#">Twitter</a>              
        </li>
        <li>
            <a href="#">Facebook</a>            
        </li>
        <li>            
            <a href="#"> Instagram</a>
        </li>
    </ul>       
 </footer>)
};

export default Footer;
