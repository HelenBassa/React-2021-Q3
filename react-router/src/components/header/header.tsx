import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              activeClassName="active-link"
              className="nav-button"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active-link"
              className="nav-button"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
