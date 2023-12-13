import React from "react";
import { useContext, useRef } from 'react'
import { UserContext } from "../../../context/UserContext";
import { Button, TextField } from '@mui/material'
const Home = () => {

  const { updateUsername } = useContext(UserContext);
  const inputName = useRef(null);

  const handleClick = () => {
    const username = inputName.current.value
    updateUsername(username); //invoca función del contexto, el valor del input es lo que invoca la referencia .
    inputName.current.value = "" // vuelve a poner el campo del input en vacío, no usamos la variable porque es const
  };


  return (
    <section className="home">
      <h2 className="h2Home">Update Username</h2>

      <div className="homeFrom">
        <TextField type="text" inputRef={inputName} />
        <Button variant="contained" size="large" type="submit" onClick={handleClick}>Update</Button>
      </div>

      <iframe width="720" height="480" src="https://www.youtube.com/embed/aAkMkVFwAoo?si=BJj5Cc-k8DcM2ilW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </section>
  );
};
export default Home;