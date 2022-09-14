/*eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>
        <h1>Math Magicians</h1>
      </NavLink>
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='calculator'>Calculator</NavLink>
        <NavLink to='quote'>Quote</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
