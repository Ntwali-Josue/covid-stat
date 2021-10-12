import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const Home = () => (
  <>
    <div className="home-header">
      <p>Covid Stats</p>
      <Link to="/continent-1">
        <BsArrowRightCircle />
      </Link>
    </div>
    <div className="card">
      <Link to="/continent-1">
        continent-1
      </Link>
    </div>
  </>
);

export default Home;
