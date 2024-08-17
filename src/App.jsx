import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import './index.css'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  console.log("hello")
  return (
    <div>
    <Header/>
      <main className="min-h-screen">
        <Outlet/> 
      </main>
      <Footer/>
    </div>
  );
}

export default App;
