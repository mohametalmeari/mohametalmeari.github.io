import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const links = [
  { path: 'home', text: 'Home' },
  { path: 'works', text: 'Projects' },
  { path: 'about', text: 'About' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);
  const [navbarScrollAnimation, setNavbarScrollAnimation] = useState(true);
  const { activeSection } = useSelector((state) => state.navbar);

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
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          outline: 'none',
          border: 'none',
          margin: '1rem',
          padding: '0.3rem',
          backdropFilter: 'blur(8px)',
          backgroundColor: navbarOpen
            ? 'transparent'
            : 'rgba(235, 235, 255, 0.8)',
          boxShadow: navbarOpen || '2px 2px 4px -1px rgb(223, 225, 230)',
          zIndex: 999,
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          aspectRatio: '1/1',
        }}
        onClick={() => toggleMenu()}
        type="button"
      >
        <div className="menu-icon">
          {<span className={`line${navbarOpen ? ' open' : ''}`} /> || 'Menu'}
        </div>
      </button>

      <ul className={`nav-links${navbarOpen ? ' open' : ''}`}>
        <span
          className="active-mask"
          style={{ left: `${2 + 24.5 * activeLinkIndex}%` }}
        />
        {links.map((link, index) => (
          <li
            className={`nav-item${navbarOpen ? ' open' : ''}${
              activeLink === link.path ? ' active' : ''
            }`}
            style={{
              transition: `all ${
                (links.length - index) * 0.2 + 0.2
              }s ease-in-out`,
            }}
            key={link.text}
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
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
