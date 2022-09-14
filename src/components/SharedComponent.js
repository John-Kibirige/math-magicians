import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const SharedComponent = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default SharedComponent;
