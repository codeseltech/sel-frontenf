import { Link } from 'react-router-dom';
import logo from '../assets/logo-sel.png';
export const SELtitle = () => {
  return (
    <Link to='/'>
      <section className='sel-title'>
        <div className='sel-title-logo'>
          <img src={logo} alt='' />
        </div>
        <div className='sel-title-name'>
          <h1>
            <span>s</span>kyinnk
          </h1>
          <p>Expressive Learning</p>
        </div>
      </section>
    </Link>
  );
};
