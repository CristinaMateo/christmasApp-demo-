import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Topic = () => {

  const [value, setValue] = useState("christmas"); // Para guardar el dato a buscar, por defecto busca ese topic
  const [posts, setPosts] = useState([]); // Para guardar los posts, array de objetos a pintar
  
  // equivale a un componentDidUpdate()
  useEffect(() => { //salta cuando hay un cambio a buscar
    async function fetchData() {
      try{
        // Petición HTTP
        const res = await axios.get(`https://www.reddit.com/r/${value}.json`);
        const json = res.data;

        // Guarda en el array de posts el resultado. Procesa los datos
        setPosts(json.data.children.map(c => c.data));//está guardando lo que viene de la api
      }catch(e){
        setPosts([]) // No pintes nada en caso de que haya un error
      }
    }

    fetchData();
  }, [value]); // componentDidUpdate


  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.topic.value)
    setValue(e.target.topic.value) // Modificando el estado de Value
  };


  return    <section>
              <h1>Búsqueda por topic</h1>
              <form onSubmit={handleSubmit}>
                <input name="topic"/>
              </form>

              {posts.length!==0?
                                <ul className='topics'>
                                  {posts.map(post => (
                                    <li key={post.id}>{post.title}</li>
                                  ))}
                                </ul>
                                :""
              }
            </section>
};

export default Topic;
