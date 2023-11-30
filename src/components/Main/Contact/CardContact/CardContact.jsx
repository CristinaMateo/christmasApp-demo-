import React from 'react';

const CardContact = ({ data,clear }) => { //data --> {message, date}
  return (
    <div>
      {data.message?
      <>
        <p>Mensaje recibido: {data.message}</p>
        <p>Fecha {data.date}</p>
        <button onClick={clear}>Borrar</button>
      </>:""}
    </div>
  );//ternario, si no hay mensaje se esconde
};

export default CardContact;
