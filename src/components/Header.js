import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  TwitterIcon,
} from '../assets/icons';
import Particle from './Particle';
import TypeHeader from './TypeHeader';
import { bio } from '../redux/data';

const Header = () => (
  <>
    <header id="home">
      <Particle />
      <h1 style={{ zIndex: '-999', position: 'absolute', top: '-100%' }}>Mohamad - Web Developer</h1>
      <h2 className="type-header"><TypeHeader /></h2>
      <p className="header-text">{bio}</p>
      <span>
        <button
          className="connect-link"
          type="button"
          onClick={() => document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })}
        >
          LET&#39;S CONNECT
        </button>
      </span>
      <section className="header-icons-container">
        <Link to="https://twitter.com/MohametAlmeari" target="_blank">
          <TwitterIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/mohamet-almeari/" target="_blank">
          <LinkedinIcon />
        </Link>
        <Link to="https://medium.com/@mohamet.almeari" target="_blank">
          <MediumIcon />
        </Link>
        <Link to="https://github.com/mohametalmeari" target="_blank">
          <GithubIcon />
        </Link>
      </section>
    </header>
  </>
);
export default Header;
