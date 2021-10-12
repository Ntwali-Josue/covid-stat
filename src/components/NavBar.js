import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

const NavBar = () => (
  <>
    <div className="navbar">
      <Link to="/" className="links">
        <IoIosArrowBack />
      </Link>
      <span className="nav-title">Covid Stats</span>
      <FiSettings />
    </div>
  </>
);

export default NavBar;
