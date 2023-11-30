import React, { useState } from 'react';
import FormContact from "./FormContact";
import CardContact from "./CardContact";

const Contact = () => {
//formcontact y cardcontact son hermanos, el padre es contact

  const [message, setMessage] = useState(''); //estado a compartir, vive en el padre y se pasa a los hijos

  const clearMessage = () => {
    setMessage("");
  }


  const addMessage =(message) =>{
    setMessage(message);
  }

  return (
    <div>
      <FormContact add={addMessage} /> {/*Sibling 1*/}
      <CardContact message={message} clear={clearMessage} /> {/*Sibling 2*/}
    </div>
  
  )
};

export default Contact;
