import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  CircleIcon, CloseDetailsIcon, LiveIcon, SourceIcon,
} from '../assets/icons';
import { closePopupReducer } from '../redux/works/workSlice';

const Details = () => {
  const { details, detailsVisibility } = useSelector((state) => state.works);
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(closePopupReducer());
  };
  return (
    <div className="details-container" style={{ display: detailsVisibility }}>
      <div className="work-card-container">
        <section className="details-title-container">
          <h2 className="work-name">
            {details.name}
          </h2>
          <button className="close-details" type="button" onClick={() => closePopup()}>
            <span className="hidden-text">
              Close:
            </span>
            <CloseDetailsIcon />
          </button>
        </section>
        <section className="work-info">
          <span>{details.info[0]}</span>
          {details.info.slice(1).map((item) => (
            <>
              <CircleIcon />
              <span key={item}>{item}</span>
            </>
          ))}
        </section>
        <div className="work-img-container">
          <img src={details.desktopImg} alt={details.name} />
        </div>
        <div className="details-body">
          <p className="work-long">{details.description}</p>
          <div className="details-tags-btns">
            <section className="work-tags">
              {details.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </section>
            <section className="details-btns-container">
              {details.liveLink
              && (
              <button className="main-btn details-btn" type="button">
                <Link to={details.liveLink} target="_blank">
                  <span>
                    See live
                  </span>
                  <LiveIcon />
                </Link>
              </button>
              )}
              <button className="main-btn details-btn" type="button">
                <Link to={details.sourceLink} target="_blank">
                  <span>
                    Live Link
                  </span>
                  <SourceIcon />
                </Link>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
