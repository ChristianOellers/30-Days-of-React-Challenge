import React from 'react';

import Navigation from './Navigation';
import ThemeProvider from './ThemeProvider';


class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
  }
}


export default App;

