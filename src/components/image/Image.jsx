import React from 'react';
import './Image.scss';

/**
 * *******************************************************
 *
 *  The Image.jsx file contains the image functionality 
 *  for the SPA.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
const Image = ({src}) => {
    return (
      <img className='image' src={src}/>
    );
}

export default Image;