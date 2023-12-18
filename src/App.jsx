import "./App.css";
import PreNavbar from "./components/PreNavbar";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
function App() {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start}/>
        <Offers  offers={data.offer}/>
      </Router>
    </div>
  );
}

export default App;
