import React from "react";
import "../src/styles/layout.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Error from "./components/Error";
import Cards from "./components/Cards";
import Card from "./components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <div className="topheader">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route exact path="/cards" element={<Cards />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
