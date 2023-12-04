
import { Button, Switch } from '@mui/material'
import {  useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { ThemeContext } from '../../context/ThemeContext'
import Nav from "./Nav/Nav";
// import "./Header.css";

const Header = () => {
  const { username, updateUsername } = useContext(UserContext); //consumer
  const { theme, toggleTheme } = useContext(ThemeContext); //consumer
  return <header className={`header-${theme}`}>
    <Nav/>
    <Switch  sx={{
        marginTop:0.8,
        marginRight: 1
      }}
      defaultChecked onClick={toggleTheme}/>
    {username?
    <>
      <p>Hola, {username}</p>
      <Button size="small" variant="contained" style={{marginLeft: 20, maxHeight:30}} onClick={()=>updateUsername("")}>Logout</Button>
    </>:""}
  </header>;
};

export default Header;