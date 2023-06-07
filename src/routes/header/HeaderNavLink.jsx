import { NavLink } from 'react-router-dom';

export const HeaderNavLink = () => {
  return (
    <div className='headerNavBar'>
      <NavLink
        to='/dispmsg'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Courses
      </NavLink>
      <NavLink
        to='/dispmsg'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Insights
      </NavLink>
      <NavLink
        to='/dispmsg'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        More Info
      </NavLink>
      <NavLink
        to='/dispmsg'
        className={({ isActive }) =>
          isActive ? 'nav-link nav-link-active' : 'nav-link'
        }
      >
        Teach on SEL
      </NavLink>
    </div>
  );
};
