import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { UserContext } from './context/UserContext'
import { ThemeContext } from './context/ThemeContext';
import { BrowserRouter } from "react-router-dom";
import Snowfall from 'react-snowfall'


import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer";


function App() {

  const [username, setUsername] = useState('');
  const [theme, setTheme] = useState("night");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };



  // Actualizar tema
  const toggleTheme = () => theme == "day" ? setTheme("night") : setTheme("day");

  const themeData = { theme, toggleTheme }
  const userData = { username, updateUsername }
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={themeData}>
          <BrowserRouter>
            <UserContext.Provider value={userData}>
              <Snowfall />
              <Header />
              <Main />
            </UserContext.Provider>
          </BrowserRouter>
          <Footer />
        </ThemeContext.Provider>
      </Provider>
    </>

  )
}

export default App;