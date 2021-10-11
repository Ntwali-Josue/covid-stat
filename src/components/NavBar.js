import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import '../styles/NavBar.css';

const NavBar = () => (
  <>
    <div className="navbar">
      <IoIosArrowBack />
      <span className="nav-title">Covid Stats</span>
      <FiSettings />
    </div>
  </>
);

export default NavBar;
