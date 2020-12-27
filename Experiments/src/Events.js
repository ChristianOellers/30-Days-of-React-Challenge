import React from 'react'


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


class Events extends React.Component {  

  constructor (props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {temperature: 0};
  }
  
  
  handleClick = (event) => {
    event.preventDefault();

    alert('Welcome to 30 Days Of React Challenge');
  }
  
  
  handleChange = (event) => {
    this.setState({temperature: event.target.value});
  }


  render () {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    
    return (
      <div className='Events'>
        
        <a href='/events' onClick={this.handleClick}>
          Click me
        </a>
        <br />
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <br />
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <label htmlFor='temperature'>Temperature</label>
            <input name='temperature' onChange={this.handleChange} value={temperature} />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
        
      </div>
    );
  }
}


export default Events;

