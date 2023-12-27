import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  GithubIcon, LinkedinIcon, MediumIcon, TwitterIcon, RightArrowIcon, DownArrowIcon,
} from '../assets/icons';
import jsIcon from '../assets/images/skills/js.png';
import htmlIcon from '../assets/images/skills/html.png';
import cssIcon from '../assets/images/skills/css.png';
import rubyIcon from '../assets/images/skills/ruby.webp';
import reactIcon from '../assets/images/skills/React-icon.png';
import rorIcon from '../assets/images/skills/Ruby-on-rails.png';
import bootstrapIcon from '../assets/images/skills/Bootstrap.png';
import teamworkIcon from '../assets/images/skills/Teamwork.png';
import mentoringIcon from '../assets/images/skills/Mentoring.png';
import pairProgrammingIcon from '../assets/images/skills/Pair-programming.png';
import Pdf from '../assets/MohamadAlmeariResume.pdf';

const About = () => {
  const [listOne, setListOne] = useState('none');
  const [listTwo, setListTwo] = useState('none');
  const [listThree, setListThree] = useState('none');
  const toggleListOne = () => {
    if (listOne === 'none') {
      setListOne('flex');
      setListTwo('none');
      setListThree('none');
    } else {
      setListOne('none');
    }
  };
  const toggleListTwo = () => {
    if (listTwo === 'none') {
      setListTwo('flex');
      setListOne('none');
      setListThree('none');
    } else {
      setListTwo('none');
    }
  };
  const toggleListThree = () => {
    if (listThree === 'none') {
      setListThree('flex');
      setListOne('none');
      setListTwo('none');
    } else {
      setListThree('none');
    }
  };
  return (
    <div className="about-container" id="about">
      <div className="ignore-mobile">

        <h2>
          About Myself
        </h2>
        <p className="about-text">
          Hello I&#39;m a software developer! I can help you build a product ,
          feature or website. Look through some of my work and experience!
          If you like what you see and have a project you need coded, don&#39;t
          hesitate to contact me.
        </p>
        <button
          className="connect-link"
          type="button"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          LET&#39;S CONNECT
        </button>
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
        <button className="main-btn" type="button">
          <a className="btn-link" href={Pdf} target="_blank" rel="noreferrer">Get my resume</a>
        </button>
      </div>
      <ul className="skills-container">
        <li className="skill-item">
          <button type="button" className="skill-tab" onClick={toggleListOne}>
            <span className="skill-name">
              Languages
            </span>
            {listOne === 'none' ? <RightArrowIcon /> : <DownArrowIcon />}
          </button>
          <ul style={{ display: listOne }} className="skill-cards">
            <li className="skill-card">
              <img src={jsIcon} alt="icon" />
              <span>
                JavaScript
              </span>
            </li>
            <li className="skill-card">
              <img src={htmlIcon} alt="icon" />
              <span>
                HTML
              </span>
            </li>
            <li className="skill-card">
              <img src={cssIcon} alt="icon" />
              <span>
                CSS
              </span>
            </li>
            <li className="skill-card">
              <img src={rubyIcon} alt="icon" />
              <span>
                Ruby
              </span>
            </li>
          </ul>
        </li>

        <li className="skill-item">
          <button type="button" className="skill-tab" onClick={toggleListTwo}>
            <span className="skill-name">
              Frameworks
            </span>
            {listTwo === 'none' ? <RightArrowIcon /> : <DownArrowIcon />}
          </button>
          <ul style={{ display: listTwo }} className="skill-cards">
            <li className="skill-card">
              <img src={reactIcon} alt="icon" />
              <span>
                React
              </span>
            </li>
            <li className="skill-card">
              <img src={rorIcon} alt="icon" />
              <span>
                Ruby on Rails
              </span>
            </li>
            <li className="skill-card">
              <img src={bootstrapIcon} alt="icon" />
              <span>
                Bootstrap
              </span>
            </li>
          </ul>
        </li>
        <li className="skill-item">
          <button type="button" className="skill-tab" onClick={toggleListThree}>
            <span className="skill-name">
              Skills
            </span>
            {listThree === 'none' ? <RightArrowIcon /> : <DownArrowIcon />}
          </button>
          <ul style={{ display: listThree }} className="skill-cards">
            <li className="skill-card">
              <img src={teamworkIcon} alt="icon" />
              <span>
                Teamwork
              </span>
            </li>
            <li className="skill-card">
              <img src={mentoringIcon} alt="icon" />
              <span>
                Mentoring
              </span>
            </li>
            <li className="skill-card">
              <img src={pairProgrammingIcon} alt="icon" />
              <span>
                Remote Pair-Programming
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default About;
