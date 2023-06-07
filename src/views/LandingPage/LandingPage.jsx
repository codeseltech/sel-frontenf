import { TopDisplaySec } from './TopDisplaySec';
import { SubjectAreaSec } from './SubjectAreaSec';
import FeaturedCoursesTitle, {
  FeaturedCourses,
  FeaturedCoursesBtn,
} from './FeaturedCoursesSec';

export const LandingPage = () => {
  return (
    <section className='landing-container'>
      <TopDisplaySec />
      <SubjectAreaSec />
      <FeaturedCoursesTitle />
      <FeaturedCourses />
      <FeaturedCoursesBtn />
    </section>
  );
};
