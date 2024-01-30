import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Particle from './Particle';
import TypeHeader from './TypeHeader';
import { setActiveSection } from '../redux/navbar/navSlice';
import Links from './Links';
import Bio from './Bio';

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
          <motion.h2
            className="type-header"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
              delay: 0,
            }}
          >
            <TypeHeader />
          </motion.h2>
          <motion.p
            className="header-text"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
              delay: 0.1,
            }}
          >
            <Bio />
          </motion.p>
          <Links />
        </div>
      </header>
    </>
  );
};
export default Header;
