import { SELtitle } from '../../components/SELtitle';
import { HeaderNavIcon } from './HeaderNavIcon';
import { HeaderNavLink } from './HeaderNavLink';

export const Header = () => {
  return (
    <div className="headerBG">

    <header className='header-nav-section'>
      <SELtitle />
      <div className='headerNavLink'>
        <HeaderNavLink />
      </div>
      <HeaderNavIcon />
    </header>
    </div>
  );
};
