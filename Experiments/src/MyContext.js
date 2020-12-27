import React, { useContext } from 'react'

import {ThemeContext} from './ThemeContext';


function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  console.log(theme);

  return (
    <button>
      {theme.data}
    </button>
  );
}


/** 
 * 2 variants
 */
class MyContext extends React.Component {  
  render () {
    return (
      <div className='MyContext'>
        <ThemeContext.Consumer>
          {context => (
            <div>
              {context.data}
              <button onClick={context.changeContext} val='New Context'>
                Change context
              </button>
            </div>
          )}
        </ThemeContext.Consumer>
        
        <ThemedButton />
      </div>
    );
  }
}


export default MyContext;

