import React from 'react'
import ReactDOM from 'react-dom'

/** 
 * Better solution would be to use an empty ID for the portal to go to.
 * https://reactjs.org/docs/portals.html
 */
class Portals extends React.Component {  

  render () {
    const domNode = document.getElementById('root');
    
    return ReactDOM.createPortal(
      this.props.children,
      domNode
    );
  }
}


export default Portals;

