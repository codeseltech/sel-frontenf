import { Link } from 'react-router-dom';

import { textNote } from '../../data/textNote';
const textnote = textNote[0];

export const RequestMoreInfo = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add your click logic here
  };
  return (
    <section className='requestMoreInfo-section'>
      <h2>Need More Information?</h2>
      <p>{textnote.reqMoreInfoNote}</p>

      <Link to='/submit/reqmoreinfo'>
        <button onClick={handleButtonClick} type='button'>
          Request More Info
        </button>
      </Link>
    </section>
  );
};
