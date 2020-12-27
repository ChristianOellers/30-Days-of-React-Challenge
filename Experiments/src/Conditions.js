import React from 'react';


const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
);


class ConditionsView extends React.Component {

  constructor (props) {
    super(props);
    
    this.state = {
      countCalled : 0,
    };
  }

  /* Updating state in these methods will break due to infinite loop
  componentDidUpdate () {
    this.setState({
      countCalled : ++this.state.countCalled
    });
  }
  */


  render () {
    let {
      countCalled,
      title,
    } = {...this.props, ...this.state};

    const hasCalled = !!countCalled;
    
    // React.Fragment <>
    return (
      <>
        <h2 onClick={()=>this.setState({countCalled:++countCalled})}>{title}</h2>
        <p>{countCalled}</p>
        <div>{countCalled && <Button text={'Btn:' + countCalled} />}</div>
        
        {countCalled > 0 &&
          <Button text={String(hasCalled)} />
        }
      </>
    );
  }
}


/** 
 * Demo: Conditional rendering
 */
class Conditions extends React.Component {  

  constructor (props) {
    super(props);
    
    this.state = {
      isLoggedIn : false,
    };
  }


  handleClick (event) {
    const newState = {
      isLoggedIn : !this.state.isLoggedIn
    };

    console.log(newState, event);

    this.setState(newState);
  }  


  render () {
    const title = this.state.isLoggedIn ? 'Is logged in' : 'Not logged in';
    
    return (
      <div className='Conditions'>
        <h1>Conditional rendering</h1>
        <Button text='Click me' onClick={this.handleClick.bind(this)} />
        <br />
        <br />
        <hr />
        <ConditionsView title={title} />
        {!this.state.isLoggedIn && (
          <p>Not logged in</p>
        )}
      </div>
    );
  }
}


export default Conditions;

