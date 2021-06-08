import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav nav-pills">
    <li>
      <NavLink className="nav-link" activeClassName="active" to={'/'} exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink className="nav-link" activeClassName="active" to={'/movies'}>
        Movies
      </NavLink>
    </li>
  </nav>
);

export default Navigation;
