import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
