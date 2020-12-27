import React from 'react'


const higherOrderComponent = (Component) => {
  const style = {
    backgroundColor: 'red',
  };
  
  return (props) => {
    return <Component {...props} style={style} />
  }
}

//const SimpleComponent = ({ text }, ...rest) => {
const SimpleComponent = ({text, num, style}) => {
  return (
    <button style={style}>
      {text}
      {num || 0}
    </button>
  );
};


const ComplexComponent = higherOrderComponent(SimpleComponent);


/** 
 *
 */
class HigherOrder extends React.Component {  

  constructor (props) {
    super(props);
    
    this.state = {
    };
  }

  render () {
    return (
      <div className='HigherOrder'>
        <SimpleComponent text='Simple' />
        <SimpleComponent text='Simple' num='1' style={{color:'blue'}} />
        <ComplexComponent text='Complex' num='2' />
      </div>
    );
  }
}


export default HigherOrder;

