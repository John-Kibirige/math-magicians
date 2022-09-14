/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='home'>
        <h1>Math Magicians</h1>
      </NavLink>
      <div className='nav-links'>
        <NavLink
          to='home'
          className={({ isActive }) => (isActive ? 'activated' : '')}>
          Home{' '}
        </NavLink>
        <NavLink
          to='calculator'
          className={({ isActive }) => (isActive ? 'activated' : '')}>
          Calculator
        </NavLink>
        <NavLink
          to='quote'
          className={({ isActive }) => (isActive ? 'activated' : '')}>
          Quote
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
