import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "./Components/Footer";
import "./App.css";
import Product from "./Components/Product";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function App() {
  // const [count, setCount] = useState(0) //return [contador, modificador contadot]

  //array inicial de deseos
  const initialData = [{
    title:"Calcetines navideños",
    price:10,
    url:"https://r.rp-static.com/r/catalog/public/8ca88a0deef8f716c0e9131bcb489f80ee2e05e3/558/desktop.jpg"
  },
  {
    title:"Nuevo libro Brandon Sanderson",
    price:15,
    url:"https://imagessl0.casadellibro.com/a/l/s5/00/9788418037900.webp"
  },
  {
    title:"Jersey",
    price:22,
    url:"https://qmode.es/wp-content/uploads/2016/12/6a668901063c7ef50b4fc1e48a3b6b88-255x300.jpg"
  }
]

  const [data, setData] = useState({}); //Deseo actual
  const [list, setList] = useState(initialData); //[{}]lista deseos

  const creatWish = () => {
    alert("Pide tu deseo");
    const title = prompt("Introduce titulo");
    const price = prompt("Introduce precio");
    const url = prompt("introduce url imagen");

    const myProduct = { title, price, url };

    setData({ myProduct }); //genera deseo {}
    setList([...list, myProduct]); // [{}, {}] lista deseos
  };

  const paintWishes = () => {
    //[{},{},{}] --> []
    //leer estado array deseos y deovlver array componente productos
    return list.map((product, i) => (
      <Product
        key={uuidv4()} //index o identificador unico
    
        title={product.title}
        price={product.price}
        url={product.url}
        deleteWish={()=>deleteWish(i)}
      />
    )); //se le pasa un index para pintar?
  };

const clearWishes = () =>{

  setList([]); //vaciar lista de deseos (state)
}


const resetWishes = () =>{

  setList(initialData); //Recarga lista de deseos (state)
}

const deleteWish = (i) =>{
  //product product product
  //i=2
  //product product

const remainingWishes= list.filter((product,j)=> i!==j );
setList(remainingWishes);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  const title = e.target.title.value
  const price = e.target.price.value
  const url = e.target.url.value

  const myProduct = { title, price, url };

  const confirmated = confirm(`¿Desea crear el deseo "nombre: ${title} , precio: ${price}€" ?`)

  if (confirmated){
    setData({ myProduct }); //genera deseo {}
    setList([...list, myProduct]); // [{}, {}] lista deseos
    alert("Deseo cocedido");
  }

}


  return (
    <>
      <div>
        <h3>Feliz Navidad</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Lista de deseos</h2>
      <button onClick={creatWish}>Pide tu deseo</button>
      <button onClick={clearWishes}>Limpiar</button>
      <button onClick={resetWishes}>Recargar</button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Nombre</label><br />
        <input type="text" name="title" /><br />

        <label htmlFor="price">Precio</label><br />
        <input type="number" name="price" /><br />

        <label htmlFor="url">URL imagen</label><br />
        <input type="url" name="url"/><br />

        <button type="submit">Crear deseo</button>
      </form>

      <section>{paintWishes()}</section>

      <Footer />
    </>
  );
}

export default App;