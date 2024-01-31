import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MediumIcon } from '../assets/icons';

const Links = () => (
  <>
    <motion.a
      className="connect-link animation-grow"
      href="#contact"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.03 }}
      viewport={{ once: true }}
      transition={{
        whileInView: { duration: 0.1, delay: 0.3 },
        whileHover: { duration: 0.05, delay: 0 },
      }}
    >
      LET&#39;S CONNECT
    </motion.a>
    <motion.section
      className="header-icons-container"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.1,
        delay: 0.55,
      }}
    >
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
    </motion.section>
  </>
);

export default Links;
