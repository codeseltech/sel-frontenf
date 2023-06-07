import { Link } from 'react-router-dom';

import { topDispSlideImage } from '../../data/imagePool';
const slide = topDispSlideImage[1];
import { titleText } from '../../data/LandingPage/textNote';
const textnote = titleText[0];

export const TopDisplaySec = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add your click logic here
  };
  return (
    <section className='display-section'>
      <div className='text-content'>
        <h1>{textnote.displayNote}</h1>
        <p>{textnote.displaySubNote}</p>

        <Link to='/dispmsg'>
          <button onClick={handleButtonClick}>{'Join for Free'}</button>
        </Link>
      </div>
      <div className='slide-show'>
        <div className='disp-img'>
          <img src={slide.url} alt={slide.title} />
        </div>
      </div>
    </section>
  );
};
