import React from "react";
import ChristmasList from "./ChristmasList/ChristmasList";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";


const Main = () => {
  return (
    <main>
      <div>
        <h3>Feliz Navidad</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ChristmasList />
    </main>
  )
};

export default Main;
