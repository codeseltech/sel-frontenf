import { TopDisplaySec } from './TopDisplaySec';
import { SubjectAreaSec } from './SubjectAreaSec';
import { ExpressiveLearning } from './ExpressiveLearningSec';

import FeaturedCoursesTitle, {
  FeaturedCourses,
  FeaturedCoursesBtn,
} from './FeaturedCoursesSec';

import { TopFAQs } from './TopFaqSec';

export const LandingPage = () => {
  return (
    <section className='landing-container'>
      <TopDisplaySec />
      <SubjectAreaSec />
      <FeaturedCoursesTitle />
      <FeaturedCourses />
      <FeaturedCoursesBtn />
      <ExpressiveLearning />
      <TopFAQs />
    </section>
  );
};
