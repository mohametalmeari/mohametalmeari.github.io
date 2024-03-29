import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const links = [
  { path: 'home', text: 'Intro' },
  { path: 'works', text: 'Projects' },
  { path: 'about', text: 'About' },
  { path: 'contact', text: 'Contact' },
  {
    path: 'https://github.com/mohametalmeari/mohametalmeari.github.io',
    text: 'Source Code',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [navbarScrollAnimation, setNavbarScrollAnimation] = useState(true);
  const { activeSection } = useSelector((state) => state.navbar);

  // Navbar active link animation variables
  const linkWidth = 120;
  const lastLinkWidth = 320;
  const maskWidth = 90;
  const navPadding = 6;
  const maskLeft = navPadding + (linkWidth - maskWidth) / 2 + linkWidth * activeLinkIndex;

  useEffect(() => {
    if (navbarScrollAnimation) {
      setActiveLink(activeSection);
      switch (activeSection) {
        case 'home':
          setActiveLinkIndex(0);
          break;
        case 'works':
          setActiveLinkIndex(1);
          break;
        case 'about':
          setActiveLinkIndex(2);
          break;
        case 'contact':
          setActiveLinkIndex(3);
          break;
        default:
          setActiveLinkIndex(0);
          break;
      }
    }
  }, [activeSection]);

  const toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };

  const pauseNavbarScrollAnimation = () => {
    setNavbarScrollAnimation(false);
    setTimeout(() => {
      setNavbarScrollAnimation(true);
    }, 1000);
  };

  return (
    <nav>
      <button
        className="menu-icon-btn"
        style={{
          backgroundColor: navbarOpen
            ? 'transparent'
            : 'rgba(235, 235, 255, 0.8)',
          boxShadow: navbarOpen || '2px 2px 4px -1px rgb(223, 225, 230)',
        }}
        onClick={() => toggleMenu()}
        type="button"
      >
        <div className="menu-icon">
          {<span className={`line${navbarOpen ? ' open' : ''}`} /> || 'Menu'}
        </div>
      </button>

      <motion.ul
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
          delay: 0,
        }}
        className={`nav-links${navbarOpen ? ' open' : ''}`}
        style={{ padding: `${navPadding}px` }}
      >
        <span
          className="active-mask"
          style={{
            left: `${maskLeft}px`,
            width: `${maskWidth}px`,
          }}
        />
        {links.slice(0, links.length - 1).map((link, index) => (
          <div
            key={link.text}
            className="link-container"
            style={{
              width: `${linkWidth}px`,
            }}
          >
            <li
              className={`nav-item${navbarOpen ? ' open' : ''}${
                activeLink === link.path ? ' active' : ''
              }`}
              style={{
                transition: `all ${
                  (links.length - index) * 0.2 + 0.2
                }s ease-in-out`,
              }}
            >
              <a
                href={`#${link.path}`}
                onClick={() => {
                  toggleMenu();
                  setActiveLink(link.path);
                  pauseNavbarScrollAnimation();
                  setActiveLinkIndex(index);
                }}
              >
                {link.text}
              </a>
            </li>
          </div>
        ))}
        <div
          className="link-container"
          style={{
            width: `${lastLinkWidth}px`,
          }}
        >
          <li
            className={`nav-item${navbarOpen ? ' open' : ''} last-link`}
            style={{
              transition: `all ${0.4}s ease-in-out`,
            }}
          >
            <a
              href={links[links.length - 1].path}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                toggleMenu();
              }}
            >
              {links[links.length - 1].text}
            </a>
          </li>
        </div>
      </motion.ul>
    </nav>
  );
};
export default Navbar;
