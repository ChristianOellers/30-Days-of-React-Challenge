import React from 'react'


/** 
 * Demo: States
 */
class Home extends React.Component {  
  constructor (props) {
    super(props);
    
    this.state = {
      count: 0,
    };
    
    // Demo: Depending on how it's called in the rendering, you might need to bind 'this'.
    // Note that this can be vastly simplified and is a bad practice.
    // https://stackoverflow.com/questions/33973648/react-this-is-undefined-inside-a-component-function
    this.handleChange = this.handleChange.bind(this);
  }


  handleClick (event) {
    const newState = {
      count : this.state.count + 1
    };

    console.log(newState);

    this.setState(newState);
  }


  // Todo - 'nativeEvent' seems bad practice?
  handleChange (event) {
    const data = event.nativeEvent.data;

    console.log(data, this);

    // Uncaught TypeError: Cannot read property 'setState' of undefined
    // this.setState(data);
  }
  

  render () {
    const count = this.state.count;
    const infoText = this.state.count < 3 ? 'Increase val' : 'Decrease val';
    
    console.info('RENDER');

    return (
      <div className='Home'>
        <h1>Home</h1>
        <p>Form library playground</p>
        <br />
        <hr />

        <h2>React state</h2>
        
        {/* 'this' does not exist */}
        {/* Uncontrolled component - Only default value exist */}
        <input type='text' name='val2' defaultValue={count} onChange={this.handleChange} />

        {/* Controlled component - Auto-updates value */}
        <input type='text' name='val1' value={count} onChange={this.handleChange} />

        {/* 'this' exists - 2 variants */}
        <button onClick={()=>this.handleClick()}>{infoText}</button>
        <button onClick={this.handleClick.bind(this)}>{infoText}</button>
      </div>
    );
  }
}


export default Home;

