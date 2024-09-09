import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
