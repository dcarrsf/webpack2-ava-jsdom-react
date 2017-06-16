import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import './Header.scss';

/**
 * *******************************************************
 *
 *  The Header.jsx file contains the header functionality 
 *  for the SPA.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
class Header extends React.Component {
  
  render() {
    return (
      <header className='header row'>
        <div className='header__title col-sm-6'>
          <h1>The Red Planet Rovers</h1>
        </div>
        <div className='header__nav col-sm-6'>
          <Navbar selectedIndex={this.props.selectedIndex} />
        </div>
      </header>
    );
  }
}

export default Header;