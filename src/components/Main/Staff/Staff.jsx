import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';

const Staff = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await resp.json();
      setPokemons(data);
    }
    getPokemons();
  }, []);

  return (
    <>
      <section>
        <h1>Staff</h1>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <ul>
          {pokemons.length != 0 ?
            pokemons.results.map((pokemon, i) => (
              <li key={i}>
                <p> {pokemon.name}</p>
                <a href={pokemon.url}> URL</a>
              </li>
            ))
            : null}
        </ul>
      </section>
    </>
  );
};

export default Staff;
