import React from 'react'


/**
 * https://reactjs.org/docs/render-props.html
 */
class RenderProps extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleAction = this.handleAction.bind(this);
  }
  
  
  handleAction () {
    console.log('handleAction', this);

    this.setState({
      text: Math.random() * 100,
    });
  }
  

  render () {
    return (
      <div className='RenderProps'>
        <h1>Render Props</h1>
        <button onClick={this.handleAction}>Render</button>
        <br />
        {this.props.render(this.state)}
      </div>
    );
  }
}


export default RenderProps;

