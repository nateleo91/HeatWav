import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Calendar from './pages/Calendar';
import Sponsor from './pages/Sponsor';
import Videos from './pages/Videos';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {

  return (
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
