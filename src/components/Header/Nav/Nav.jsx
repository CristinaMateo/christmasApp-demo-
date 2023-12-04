import React from "react";
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  return (
    <nav >
        <ul className={`.nav-bar`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/list'>Christmas List</Link></li>
            <li><Link to='/course'>ChristmasCourse</Link></li >
            <li><Link to='/about'>About</Link></li >
            <li><Link to='/staff'>Staff</Link></li >
            <li><Link to='/contact'>Contact</Link></li >
            <li><Link to='/topic'>Topic</Link></li >
            <li><Link to='/donations'>Donations</Link></li >
        </ul >
    </nav >
)
};

export default Nav;
