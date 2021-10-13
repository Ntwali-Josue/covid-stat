import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Header = () => (
  <>
    <div className="home-header">
      <p>Covid Stats</p>
      <Link to="/continent-1" className="links">
        <BsArrowRightCircle />
      </Link>
    </div>
    <span>All Stats</span>

  </>
);

export default Header;
