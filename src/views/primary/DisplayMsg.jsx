import { BarLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

import { feaCoursesImage } from '../../data/imgPoolList';
const imgdev = feaCoursesImage[0].webdev;

export function DisplayMsg() {
  const isLoading = true;
  return (
    <div className='demopageview'>
      <div className='imgm'>
        <div>
          <img src={imgdev} alt='' />
        </div>
      </div>
      <div className='textnote'>
        <h1>we are currently updating our website ...</h1>
        <p className='tobring'>... to bring you a better experience</p>
        <h3 className='soon'>
          we will be going live soon with fresh content and enhanced features.
        </h3>
        <div>
          {isLoading && (
            <div>
              <BarLoader color='#000000' loading={isLoading} />
            </div>
          )}
        </div>
        <div className='gotohome'>
          <svg className='svg-icon '>
            <use
              className='icon-chevron-thin-left'
              xlinkHref={`${sprite}#icon-chevron-thin-left`}
            />
          </svg>
          <Link to='/' className='nav-link'>
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
