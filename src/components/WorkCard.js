import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
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

  return (
    <div className="work-card-container animation-grow">
      <div className="work-img-container" style={{ backgroundColor: getRandomColor() }}>
        <img src={desktopImg} alt={name} />
      </div>
      <div className="ignore-mobile">
        <h2 className="work-name">
          {name}
        </h2>
        <section className="work-info">
          <span>{info[0]}</span>
          {info.slice(1).map((item) => (
            <>
              <CircleIcon />
              <span key={item}>{item}</span>
            </>
          ))}
        </section>
        <p className="work-short">{shortDescription}</p>
        <section className="work-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </section>
        <button className="main-btn" type="button" onClick={() => openPopup()}>
          see project
        </button>
      </div>
    </div>
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
