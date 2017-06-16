import React from 'react';
import { render } from 'react-dom';
import App from './containers/App.jsx';

/**
 * *******************************************************
 *
 *  Bundling entry-point for the app.
 *  The render function draws the app to the 'app' div.
 * 
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
// create new element
const div = document.createElement('div');
div.setAttribute('id', 'app');

// insert before scripts
const script = document.body.getElementsByTagName('script')[0];
document.body.insertBefore(div, script);

// render the app!
render(
  <App/>, 
  document.getElementById('app')
);
