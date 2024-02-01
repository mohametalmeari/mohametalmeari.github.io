import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { HiDownload } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { RightArrowIcon } from '../assets/icons';
import { setActiveSection } from '../redux/navbar/navSlice';
import Links from './Links';
import { skills } from '../redux/data';
import Bio from './Bio';

const About = () => {
  const [spreadList, setSpreadList] = useState();
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
    <div className="about-container" id="about" ref={ref}>
      <div className="ignore-mobile">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.2,
            delay: 0.1,
          }}
        >
          About Myself
        </motion.h2>
        <motion.p
          className="about-text"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.2,
            delay: 0.2,
          }}
        >
          <code>Hello</code>
          {' '}
          <Bio />
        </motion.p>
        <Links />
        <motion.a
          className="main-btn"
          style={{ flex: 0 }}
          target="_blank"
          rel="noreferrer"
          href="http://resume.mo-dev.site/"
          download
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.01,
            delay: 0.55,
          }}
        >
          Get my resume
          <HiDownload className="download-icon" />
        </motion.a>
      </div>

      <ul className="skills-container">
        {skills.map((group) => (
          <li className="skill-item" key={group.title}>
            <button
              type="button"
              className="skill-tab"
              onClick={() => {
                if (spreadList === group.title) {
                  setSpreadList(null);
                } else {
                  setSpreadList(group.title);
                }
              }}
            >
              <span className="skill-name">{group.title}</span>
              <span
                style={{
                  transform: `rotate(${
                    spreadList === group.title ? '90deg' : '0'
                  }) translate(0, 0)`,
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <RightArrowIcon />
              </span>
            </button>
            <motion.ul
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              style={
                spreadList === group.title
                  ? { display: 'flex' }
                  : { display: 'none' }
              }
              className="skill-cards"
            >
              {group.list?.map((skill) => (
                <li className="skill-card" key={skill.name}>
                  <img src={skill.icon} alt="icon" width={48} height={48} loading="lazy" title={skill.name} />
                  <span>{skill.name}</span>
                  {skill.tag && <span className="tag">{skill.tag}</span>}
                </li>
              ))}
            </motion.ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default About;
