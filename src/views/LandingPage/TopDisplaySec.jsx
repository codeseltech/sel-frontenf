import { Link } from 'react-router-dom';

import { topDispSlideImage } from '../../data/imagePool';
const slide = topDispSlideImage[1];
import { topDisplayText } from '../../data/LandingPage/textNote';
const textnote = topDisplayText[0];

export const TopDisplaySec = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add your click logic here
  };
  return (
    <section className='display-section'>
      <div className='text-content'>
        <h1>{textnote.dispTitle}</h1>
        <h3>{textnote.dispTitleNote}</h3>

        <p>
          {'Be part of the Leading Edge: the pioneering expert in'}
          <span id='span'>{' Expressive Learning Approach '}</span>
          {
            ' unrivalled knowledge, groundbreaking techniques, and unmatched          opportunities for growth and success.'
          }
        </p>
        <Link to='/userregform'>
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
