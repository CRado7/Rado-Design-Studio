import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
// import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import ProjectPage from './pages/ProjectPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CursorDot from './components/CursorDot';
import Breadcrumbs from './components/Breadcrumbs';

const AppContent = () => {

  return (
    <div className="App">
      <CursorDot />
      <NavBar />
      <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-work/:company" element={<ProjectPage />} />
        </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

