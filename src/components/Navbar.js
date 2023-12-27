import React, { useState, useRef, useEffect } from 'react';
import { BurgerMenuIcon, CloseMenuIcon } from '../assets/icons';
import logo from '../assets/images/mobile_logo.png';

const links = [
  { path: 'works', text: 'Portfolio' },
  { path: 'about', text: 'About' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (window.innerWidth > 800) {
      setNavbarOpen(true);
    }
    const handler = (event) => {
      if (
        navbarOpen
        && ref.current
        && !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setNavbarOpen(false);
  };
  return (
    <nav ref={ref} className="navbar">
      <button className="none-btn" type="button" onClick={() => scrollToSection('home')}>
        <img className="my-logo" src={logo} alt="logo" />
      </button>
      <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)} type="button">
        {navbarOpen ? (
          <CloseMenuIcon />

        ) : (
          <BurgerMenuIcon />
        )}
      </button>

      <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.text}>
            <button className="nav-link" type="button" onClick={() => scrollToSection(link.path)}>{link.text}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
