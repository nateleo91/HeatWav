import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Calendar from './pages/Calendar';
import Sponsor from './pages/Sponsor';
import Videos from './pages/Videos';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/sponsor" element={<Sponsor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
