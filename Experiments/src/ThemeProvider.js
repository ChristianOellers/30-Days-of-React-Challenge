import React from 'react';

import {ThemeContext} from './ThemeContext';


class ThemeProvider extends React.Component {
  state = {
    example: 'EXAMPLE'
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          data : this.state.example,
          changeContext : event => { 
            this.setState({example: event.target.getAttribute('val')}) 
          },
        }}
      >
      {this.props.children}
      </ThemeContext.Provider>
    );
  }
}


export default ThemeProvider;

