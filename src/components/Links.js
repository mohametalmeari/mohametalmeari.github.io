import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MediumIcon } from '../assets/icons';

const Links = () => (
  <>
    <a className="connect-link animation-grow" href="#contact">
      LET&#39;S CONNECT
    </a>
    <section className="header-icons-container">
      <Link
        to="https://www.linkedin.com/in/mohamet-almeari/"
        target="_blank"
        className="animation-grow"
      >
        <LinkedinIcon />
      </Link>
      <Link
        to="https://medium.com/@mohamet.almeari"
        target="_blank"
        className="animation-grow"
      >
        <MediumIcon />
      </Link>
      <Link
        to="https://github.com/mohametalmeari"
        target="_blank"
        className="animation-grow"
      >
        <GithubIcon />
      </Link>
    </section>
  </>
);

export default Links;
