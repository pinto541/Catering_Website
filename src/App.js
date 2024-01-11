import React from 'react'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/About/About';
import Menu from './components/Menu/Menu';





const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Menu" element={<Menu/>} />
     
      
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </BrowserRouter>
   

    </>
  );
}

export default App