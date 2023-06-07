import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { featuredCourses } from '../../data/LandingPage/featuredCourses';

function FeaturedCoursesTitle() {
  return (
    <div className='FeaturedCoursesTitle'>
      <svg className='svg-icon featured-courses-icon'>
        <use
          className='featured-courses-icon-dots-three-horizontal'
          xlinkHref={`${sprite}#icon-dots-three-horizontal`}
        />
      </svg>
      <h2>Featured Courses</h2>
      <svg className='svg-icon featured-courses-icon'>
        <use
          className='featured-courses-icon-dots-three-horizontal'
          xlinkHref={`${sprite}#icon-dots-three-horizontal`}
        />
      </svg>
    </div>
  );
}

const FeaturedCourses = () => {
  return (
    <section className='featuredCourses-section'>
      {featuredCourses.map((course) => {
        return <Course {...course} key={course.id} />;
      })}
    </section>
  );
};

const Course = (props) => {
  const {
    link,
    img,
    title,
    level,
    course,
    noteFor,
    description,
    duration,
    mode,
  } = props;

  const handleClick = () => {
    console.log('Div clicked!');
  };

  return (
    <Link to={link}>
      <section className='course' onClick={handleClick}>
        <img id='img' src={img} alt='' />

        <div className='center'>
          <h3 className='title'>
            {title} <span>{level}</span>
          </h3>
        </div>
        <div className='titleName'>
          <h4>{course}</h4>
          <p className='for'>{noteFor}</p>
          <p className='desc'>{description}</p>
          <div className='moreinfo'>
            <div>
              <p className='note'>{mode}</p>
              <p className='note'>{duration}</p>
            </div>
            <button type='buttob'>{'Explore'}</button>
          </div>
        </div>
      </section>
    </Link>
  );
};

const FeaturedCoursesBtn = () => {
  return (
    <div className='featured-courses-btn'>
      <Link to='/dispmsg'>
        <button type='button' className='featured-courses-btn'>
          <span className='btnm'>{`Explore all courses`}</span>
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCoursesTitle;
export { FeaturedCourses, FeaturedCoursesBtn };
