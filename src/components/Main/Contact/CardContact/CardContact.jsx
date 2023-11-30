import React from 'react';

const CardContact = ({ message, clear }) => {
  return (
    <div>
      <p>Mensaje recibido: {message}</p>
      <button onClick={clear}>Borrar</button>
    </div>
  );
};

export default CardContact;
