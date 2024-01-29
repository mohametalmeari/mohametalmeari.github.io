import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CircleIcon } from '../assets/icons';
import { openPopupReducer } from '../redux/works/workSlice';

const WorkCard = ({
  id, name, desktopImg, info, tags, shortDescription,
}) => {
  const dispatch = useDispatch();
  const openPopup = () => {
    dispatch(openPopupReducer(id));
  };

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
        <img src={desktopImg} alt={name} width="400" height="300" />
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
        <p className="work-short">
          {shortDescription.slice(0, 150)}
          {shortDescription.length > 150 && <span>...</span>}
        </p>
        <section className="work-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </section>
        <button className="main-btn" type="button" onClick={() => openPopup()}>
          See project
        </button>
      </div>
    </motion.div>
  );
};

WorkCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desktopImg: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};
export default WorkCard;
