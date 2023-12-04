import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import ChristmasList from "./ChristmasList/ChristmasList";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Staff from "./Staff/Staff";
import ChristmasCourse from "./ChristmasCourse/ChristmasCourse";
import Topic from "./Topic/Topic";
import Donations from "./Donations";


const Main = () => {
  return (
    <main>
      {/* <div>
        <h3>Feliz Navidad</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Staff" element={<Staff />} />
        <Route path="christmaslist" element={<ChristmasList />} />
        <Route path="christmascourse" element={<ChristmasCourse />} />
        <Route path="topic" element={<Topic />} />
        <Route path='/donations' element={<Donations/>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;