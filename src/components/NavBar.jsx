import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Rado from '../assets/Logo.svg';
import Close from '../assets/Close.svg';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <img src={Close} alt="close" onClick={handleSidebarToggle} className="magnetic"/>
        <div className="sidebar-header">
          <img src={Rado} alt="Logo" className="sidebar-logo" />
        </div>
        <div className="sidebar-menu">
            <>
                <Link to="/" className="menu-item" onClick={() => setIsSidebarOpen(false)}>
                    Home
                </Link>
                <Link to="/favorites" className="menu-item" onClick={() => setIsSidebarOpen(false)}>
                    Our Work
                </Link>
                <Link to="/services" className="menu-item" onClick={() => setIsSidebarOpen(false)}>
                    Services
                </Link>
                <Link to="/about" className="menu-item" onClick={() => setIsSidebarOpen(false)}>
                    About Us
                </Link>
                <Link to="/contact" className="menu-item" onClick={() => setIsSidebarOpen(false)}>
                    Contact
                </Link>
            </>
        </div>
      </aside>
  );
}

export default Navbar;
