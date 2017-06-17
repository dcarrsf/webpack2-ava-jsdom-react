import React from 'react';
// import './Header.scss';

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
      <header className='header'>
        <div className='header__title'>
          <h1>The Red Rover</h1>
        </div>
      </header>
    );
  }
}

export default Header;