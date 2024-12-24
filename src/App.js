import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register';
import Register from './pages/Leadership';
import Register from './pages/AboutFecin';
import Events from './pages/Events';
import PrayerRequest from './pages/PrayerRequest';
import Donate from './pages/Donate';

const App = () => (
  <Router>
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<><Hero /><Register /></>} />
        <Route path="/" element={<Leadership />} />
        <Route path="/" element={<AboutFecin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prayer-request" element={<PrayerRequest />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
