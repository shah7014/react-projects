import React from "react";
import { NavBar } from "./components";
import GlobalStyle from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import SampleComponent from "./components/MyComponent";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<h1>Hello Servcies</h1>} />
        <Route path="/products" element={<h1>Hello Products</h1>} />
        <Route path="/sign-up" element={<h1>Hello SignUp</h1>} />
      </Routes>
    </>
  );
};

export default App;
