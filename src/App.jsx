import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import HomePage1 from "./components/Homepage1";
import Products from "./components/Products";
import Products2 from "./components/Products2";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<><Nav/><Homepage /><Products /><HomePage1 /><Products2/><Footer/></>} /> {/* Default route */}
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products2" element={<Products2 />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

