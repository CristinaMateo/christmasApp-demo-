import React, { useState } from 'react';
import FormContact from "./FormContact";
import CardContact from "./CardContact";

const Contact = () => {
//formcontact y cardcontact son hermanos, el padre es contact

  const [data, setData] = useState({}); //estado a compartir, vive en el padre y se pasa a los hijos {message, date}

  const clearData = () => {
    setData({});
  }


  const addData =(message) =>{
    const date = new Date().toDateString();
    const data = {message,date};
    setData(data);
  }

  return (
    <section>
      <h1>Contact</h1>
      <FormContact add={addData} /> {/*Sibling 1*/}
      <CardContact data={data} clear={clearData} /> {/*Sibling 2*/}
    </section>
  
  )
};

export default Contact;
