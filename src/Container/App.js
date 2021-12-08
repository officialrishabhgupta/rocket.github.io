import React from 'react';
import Navbar from '../Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../Components/Home";
import Section from '../Components/Section';
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import './App.css';


function App() {
  return (
    
      <Router>
        <Navbar/>
        <Home/>
        <Section/>
        <Container/>
        <Footer/>
      <Routes>
        <Route path='/' exact />
      </Routes>
      </Router>
  );
}

export default App;

