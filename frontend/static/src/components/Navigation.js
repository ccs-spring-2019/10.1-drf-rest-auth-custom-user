import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation (props) {
    return(
      <nav className="nav navbar-default">
        <div className="container-fluid">
          <ul className='nav navbar-nav'>
            <li><NavLink exact to='/' activeClassName="selected">Home</NavLink></li>
            <li><NavLink exact to='/about' activeClassName="selected">About</NavLink></li>
            <li><NavLink exact to='/portfolio' activeClassName="selected">Portfolio</NavLink></li>
            <li><NavLink exact to='/contacts' activeClassName="selected">Contacts</NavLink></li>
            <li><NavLink exact to='/references' activeClassName="selected">References</NavLink></li>
          </ul>
          {/* NavLink is a special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL */}
        </div>
      </nav>
    )
}

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
// exact: the active class/style will only be applied if the location is matched exactly
// strict: the trailing slash on a location's pathname will be taken into consideration when determining if the location matches the current URL
