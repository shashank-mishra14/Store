import "./App.css";
import PreNavbar from "./components/PreNavbar";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <PreNavbar />
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
