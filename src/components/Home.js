import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Home = (props) => {
  const { continent, deaths } = props;

  return (
    <div>
      <div className="home-header">
        <p>Covid Stats</p>
        <Link to="/continent-1" className="links">
          <BsArrowRightCircle />
        </Link>
      </div>
      <span className="all-stats">ALL STATS</span>
      <div className="card">
        <div className="stats-summary">
          <div className="sum1">
            {continent}
            {deaths}
            deaths
          </div>
          <div className="sum1">
            {continent}
            {deaths}
            recovered
          </div>
          <div className="sum1">
            1302 deaths
          </div>
          <div className="sum1">
            1302 deaths
          </div>
        </div>
        <div className="continents">
          <div className="continent">
            <Link to="/continent-1" className="links">
              continent-1
            </Link>
          </div>
          <div className="continent">
            <Link to="/continent-1" className="links">
              continent-1
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  continent: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
};

export default Home;
