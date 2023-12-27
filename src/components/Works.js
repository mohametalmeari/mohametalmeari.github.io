import { useSelector } from 'react-redux';
import WorkCard from './WorkCard';

const Works = () => {
  const { worksList } = useSelector((state) => state.works);
  return (
    <main id="works">
      {
        worksList.slice().reverse().map((work) => (
          <WorkCard
            key={work.id}
            id={work.id}
            name={work.name}
            desktopImg={work.desktopImg}
            info={work.info}
            tags={work.tags}
            shortDescription={work.shortDescription}
          />
        ))
      }
    </main>
  );
};
export default Works;
