import "./App.css";
import PreNavbar from "./components/PreNavbar";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAcceessoriesMenu from "./components/HotAcceessoriesMenu.jsx";
function App() {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start}/>
        <Offers  offer  ={data.offer}/>
        <Heading text={"Star Products"}/>
        <StarProduct starProduct={data.starProduct}/>
        <Heading text={"Hot Accessories"}/>
        <HotAcceessoriesMenu/>
      </Router>
    </div>
  );
}

export default App;
