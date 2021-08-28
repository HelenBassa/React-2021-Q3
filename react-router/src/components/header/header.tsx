import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <header className="container header">
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink
              exact
              activeClassName="active"
              className="header__item"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              className="header__item"
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
