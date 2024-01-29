import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import WorkCard from './WorkCard';
import { setActiveSection } from '../redux/navbar/navSlice';

const Works = () => {
  const { worksList } = useSelector((state) => state.works);

  const { ref, inView, entry } = useInView({
    threshold: 0.75 / worksList.length,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(setActiveSection(entry.target.id));
    }
  }, [inView, ref, entry, dispatch]);

  return (
    <main id="works" ref={ref}>
      {worksList
        .slice()
        .reverse()
        .map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            name={work.name}
            desktopImg={work.desktopImg}
            info={work.info}
            tags={work.tags}
            shortDescription={work.shortDescription}
          />
        ))}
    </main>
  );
};
export default Works;
