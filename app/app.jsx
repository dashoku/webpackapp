import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/nav.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Hobbies from "./components/hobbies.jsx";
import HobbiInfo from"./components/hobbiinfo.jsx";

ReactDOM.createRoot(document.getElementById("app"))
.render(
  <Router>
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "16px" }}>
      
      <Nav style={{ display: "flex", justifyContent: "center" }}>
      </Nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/hobbies" element={<Hobbies />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/hobbiinfo" element={<HobbiInfo />}/>
      </Routes>
    </div>
  </Router>
);
