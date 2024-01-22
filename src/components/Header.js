import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon, MediumIcon, TwitterIcon,
} from '../assets/icons';
import Particle from './Particle';
import TypeHeader from './TypeHeader';

const Header = () => (
  <>
    <header id="home">
      <Particle />
      <h1>
        <TypeHeader />
      </h1>
      <p className="header-text">
        I&#39;m a software developer! I can help you build a product, feature or website.
        Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don&#39;t hesitate to contact me.
      </p>
      <span>
        <button
          className="connect-link"
          type="button"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
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
