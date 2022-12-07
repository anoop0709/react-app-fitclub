import './App.css';
import Footer from './Componenets/Footer/Footer';
import Hero from './Componenets/Hero/Hero';
import Join from './Componenets/Join/Join';
import Plans from './Componenets/Plans/Plans';
import Programs from './Componenets/Programs/Programs';
import Reasons from './Componenets/Reasons/Reasons';
import Testimonial from './Componenets/Testimonial/Testimonial';
import Login from "./Componenets/Login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signup from './Componenets/Signup/Signup';
import React from "react";




function App() {
  
  function Home() {
 
    return (
      <div>
       
        <Hero />
        <Programs />
        <Reasons />
        <Plans />
        <Testimonial />
        <Join />
        <Footer/> 
       
      </div>
    )
  }
  return (
    <div className="App">
      <Router>
      
        <Routes>
         
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route exact path="/" element={<Home />}/>
         

          
        </Routes>
       


      </Router>






    </div>
  );
}

export default App;
