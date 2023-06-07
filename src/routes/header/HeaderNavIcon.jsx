import { NavLink, Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

export const HeaderNavIcon = () => {
  return (
    <div className='headerNavIcon'>
      <Link to='/search'>
        <svg className='svg-icon'>
          <use
            className='header-icon-magnifying-glass'
            xlinkHref={`${sprite}#icon-magnifying-glass`}
          />
        </svg>
      </Link>

      <NavLink
        to='/login'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Login
      </NavLink>

      <Link to='/menu'>
        <svg className='svg-icon'>
          <use className='header-icon-menu' xlinkHref={`${sprite}#icon-menu`} />
        </svg>
      </Link>
    </div>
  );
};
