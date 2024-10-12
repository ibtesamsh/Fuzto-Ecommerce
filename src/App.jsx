import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarElement from "./components/NavbarElement";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Navbar />
      <Outlet />
      <div className=" sm:hidden flex justify-center items-center bottom-0 fixed  w-full shadow-inner bg-white ">
        <NavbarElement />
      </div>
      
     {/* <Cards/> */}
     {/* <CardDetails/> */}
     {/* <Footer/> */}
     {/* <Cart/>
     <CartItem/> */}
     
    </>
  );
}

export default App;
