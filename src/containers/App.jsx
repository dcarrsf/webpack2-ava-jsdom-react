import React from 'react';

// App components
import Header from '../components/header/Header.jsx';

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
      featured: -1
    };
  }

  // Lifecycle methods
  componentDidMount() {
    // ...
  }

  render() {
    return (
      <main className='main'>
        <Header />
      </main>
    );
  }
}

export default App;