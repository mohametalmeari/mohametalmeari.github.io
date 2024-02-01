import PropTypes from 'prop-types';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CircleIcon } from '../assets/icons';

const WorkCard = ({
  name, projectImage, info, tags, description, liveLink, sourceLink, note,
}) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="work-card-container"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <div
        className="work-img-container"
        style={{ backgroundColor: getRandomColor() }}
      >
        <img src={projectImage} alt={name} width="400" height="300" loading="lazy" title={name} />
      </div>
      <div className="ignore-mobile">
        <h2 className="work-name">{name}</h2>
        <section className="work-info">
          <span>{info[0]}</span>
          {info.slice(1).map((item) => (
            <>
              <CircleIcon />
              <span key={item}>{item}</span>
            </>
          ))}
        </section>
        <p className="work-desc">
          {description.slice(0, 150)}
          {description.length > 150 && <span title={description}>...</span>}
        </p>
        {note && (
        <p className="work-note" title={note}>
          {note.slice(0, 50)}
          {note.length > 50 && <span>...</span>}
        </p>
        )}
        <section className="work-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </section>
        <div className="btn-container">
          <Link
            to={liveLink}
            target="_blank"
            className={`main-btn ${liveLink || 'disabled'}`}
          >
            See live
          </Link>
          <Link
            to={sourceLink}
            target="_blank"
            className={`main-btn ${sourceLink || 'disabled'}`}
          >
            Code link
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
};
export default WorkCard;
