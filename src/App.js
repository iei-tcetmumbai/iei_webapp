import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Note the imports
import HomePage from './pages/HomePage';
import bgGif from './background.gif'
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import Events from './pages/Events';
import Contact from './pages/Contact';

export default function App() {
  const containerStyle = {
    height: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgGif})`,
    overflowX: "hidden",
    backgroundSize: "100%",
    backgroundRepeat: "repeat",
    backgroundPosition: "center"
  }
  return (
    <div style={containerStyle}>
      <BrowserRouter basename='/iei_webapp'>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path='/about' element = {<About />} />
          <Route path='/team' element = {<OurTeam />} />
          <Route path='/events' element = {<Events />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
