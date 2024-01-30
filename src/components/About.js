import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { HiDownload } from 'react-icons/hi';
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
        <h2>About Myself</h2>
        <p className="about-text">
          <code>Hello</code>
          {' '}
          <Bio />
        </p>
        <Links />
        <a
          className="main-btn"
          target="_blank"
          rel="noreferrer"
          href="http://resume.mo-dev.site/"
          download
        >
          Get my resume
          <HiDownload className="download-icon" />
        </a>
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
            <ul
              style={
                spreadList === group.title
                  ? { display: 'flex' }
                  : { display: 'none' }
              }
              className="skill-cards"
            >
              {group.list?.map((skill) => (
                <li className="skill-card" key={skill.name}>
                  <img src={skill.icon} alt="icon" />
                  <span>{skill.name}</span>
                  {skill.tag && <span className="tag">{skill.tag}</span>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default About;
