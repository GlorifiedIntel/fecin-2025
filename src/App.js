import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register';
import Leadership from './pages/Leadership';
import AboutFecin from './pages/AboutFecin';
import Events from './pages/Events';
import PrayerRequest from './pages/PrayerRequest';
import Donate from './pages/Donate';

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<><Hero /><Register /></>} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/aboutfecin" element={<AboutFecin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/prayer-request" element={<PrayerRequest />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
