import React from 'react';

// App components
import Header from '../components/header/Header.jsx';

// SASS 
import './App.scss';
import '../_sass/vendor/bootstrap-grid.scss'; // Just the grid from Bootstrap

/**
 * *******************************************************
 *
 *  The app component is currently our primary container.
 * 
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
class App extends React.Component {
  // Init...
  constructor(props) {
    super(props);
    // State
    this.state = {
      photos: null,
      featured: null
    };
  }

  // Lifecycle methods
  componentDidMount() {
    // ...
  }

  render() {
    return (
      <main>
        <Header />
      </main>
    );
  }
}

export default App;