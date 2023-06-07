import { NavLink } from 'react-router-dom';

export const HeaderNavLink = () => {
  return (
    <div className='headerNavBar'>
      <NavLink
        to='/courses'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Courses
      </NavLink>
      <NavLink
        to='/insights'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Insights
      </NavLink>
      <NavLink
        to='/moreinfo'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        More Info
      </NavLink>
      <NavLink
        to='/teachonsel'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Teach on SEL
      </NavLink>
    </div>
  );
};
