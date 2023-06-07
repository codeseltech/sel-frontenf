import { Link } from 'react-router-dom';
import { subjectList } from '../../data/LandingPage/subArea';

export const SubjectAreaSec = () => {
  return (
    <section className='subjectArea-section'>
      <h4 className='title'>Choose a subject area:</h4>

      <div className='subject-go'>
        {subjectList.map((subjects) => {
          const { link, subject, id } = subjects;
          return (
            <a href={link} key={id}>
              <div className='subject'>
                <h4>{subject}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
