import { BrowserRouter } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {

  const [username, setUsername] = useState('Xavier'); //aquí guarda el nombre de usuario.

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  } //modifica el estado del username

  const userData = { username, updateUsername };

//hay un provider (App) y dos consumers (Header y Main)

  return (
    <>
      <BrowserRouter >
        <UserContext.Provider value={userData}>
          <Header/>
          <Main/>
        </UserContext.Provider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;




