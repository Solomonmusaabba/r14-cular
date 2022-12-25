import React from 'react'
import PreNav from "./Items/PreNav.js";
import NavBar from "./Items/Navbar.js";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Items/Home.js";
// import { ReactDOM } from 'react'
import './App.css'
function App() {
  return (
    <div>
      <PreNav />
      <NavBar />
      <Home />
    </div>
  )
}

export default App