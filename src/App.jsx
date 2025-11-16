import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router";
import RoutesComponent from "./utlis/Routes";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
        <Navbar />
        <RoutesComponent />
        <Footer/>

        {/* <Home/> */}
    </>
  );
};

export default App;
