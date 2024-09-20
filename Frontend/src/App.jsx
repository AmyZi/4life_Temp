import React from 'react';
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About';
import Login from './Login/Login';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';



function App() {
  return (
   
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      
    </>
  );
}

export default App
