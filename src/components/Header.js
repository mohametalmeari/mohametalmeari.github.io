import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
} from '../assets/icons';
import Particle from './Particle';
import TypeHeader from './TypeHeader';
import { bio } from '../redux/data';
import { setActiveSection } from '../redux/navbar/navSlice';

const Header = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(entry.target.id));
    }
  }, [inView, ref, entry]);

  return (
    <>
      <header id="home" ref={ref}>
        <div className="header-wrapper">
          <Particle />
          <h1 style={{ zIndex: '-999', position: 'absolute', top: '-100%' }}>
            Mohamad - Web Developer
          </h1>
          <h2 className="type-header">
            <TypeHeader />
          </h2>
          <p className="header-text">{bio}</p>
          <a
            className="connect-link"
            href="#contact"
          >
            LET&#39;S CONNECT
          </a>
          <section className="header-icons-container">
            <Link
              to="https://www.linkedin.com/in/mohamet-almeari/"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
            <Link to="https://medium.com/@mohamet.almeari" target="_blank">
              <MediumIcon />
            </Link>
            <Link to="https://github.com/mohametalmeari" target="_blank">
              <GithubIcon />
            </Link>
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
