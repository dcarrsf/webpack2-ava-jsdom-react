import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.scss';

/**
 * *******************************************************
 *
 *  The Navbar.jsx file contains the navigation menu functionality 
 *  used in the header component.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;