import React from 'react'


const User = ({ firstName }) => (
  <div>
    <h2>First name:</h2>
    <p>{firstName}</p>
  </div>
);


const Countries = ({ data }) => (
  <div>
    <p>There are {data.length} countries in the api</p>
    {data.filter((item) => item.name === 'Afghanistan').map((country) => (
      <div key={country}>
        <div>
          {' '}
          <img src={country.flag} alt={country.name} />{' '}
        </div>
        <div>
          <h1>{country.name}</h1>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
        </div>
      </div>
    ))}
  </div>
);


/**
 * Lifecycle hooks + Static functional code.
 */
class Lifecycle extends React.Component {
  /**
   *
   */
  constructor (props) {
    super(props);

    console.log('1. Constructor');

    this.state = {
      firstName    : '',
      data         : [],
      day          : 1,
      congratulate : '',
    };
  }

  /**
   * Static function to be pure - No access to anything outside.
   * Improves writing async-compatible code without risking side effects.
   *
   * Goal here: ONLY compare current state with next props,
   * not anything inbetween that might have been written manually (memoizations).
   *
   * https://stackoverflow.com/questions/52886075/why-is-getderivedstatefromprops-is-a-static-method
   */
  static getDerivedStateFromProps (props, state) {
    const newFirstName = state.firstName || props.firstName;

    console.log('2. getDerivedStateFromProps', '1. ON: (Re)Render', props, state);

    // No access to 'this' as it's intended to be pure
    console.log(this);
    console.log(newFirstName);

    return {
      firstName: newFirstName,
    };
  }


  /**
   * Prevent updates if external concerns change (but it could also be handled differently).
   * Check best practices here, as to solely avoid rendering is not recommended.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', '2. ON: (Re)Render');
    console.log(nextProps, nextState);

    return (nextState.day <= 7);
  }

  /**
   * State change: Works via 'getDerivedStateFromProps' here.
   *
   * Best practice: Attach asynch code + impure functions (side effects) here.
   * https://stackoverflow.com/questions/52886075/why-is-getderivedstatefromprops-is-a-static-method
   */
  componentDidMount () {
    console.log('3. componentDidMount');

    // We can access component
    console.log(this);

    this.replaceFirstName();
    this.fetchFromApi();
  }
  
  /** 
   * Check for changes (external concerns?). 
   * Pass snapshot result, if any, to 'componentDidMount'.
   * https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
   */
  getSnapshotBeforeUpdate (prevProps, prevState) {
    const snapshot = null;

    console.log('getSnapshotBeforeUpdate', '4. ON: (Re)Render');
    console.log(prevProps, prevState);
    
    return snapshot;
  }
  
  /**
   * If snapshot data exists, can be passed to other (external)
   */
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', '5. ON: (Re)Render');
    console.log(prevProps, prevState, snapshot);
    
    if (snapshot) {
      // this.componentRef.prop = ...
    }
    
    // Last possible state minus one
    if (prevState.day === 7-1) {
      this.setState({
        congratulate: 'Congratulations, Week complete',
      })
    }
  }
  
  componentWillUnmount () {
    // Clean subscriptions, invalidate, ...
    console.warn('componentWillUnmount');
  }

  /**
   *
   */
  replaceFirstName () {
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      });
    }, 3000);
  }

  /**
   *
   */
  fetchFromApi () {
    const API_URL = 'https://restcountries.eu/rest/v2/all';

    fetch(API_URL)
      .then((response) => {
        console.log(response);

        return response.json()
      })
      .then((data) => {
        console.log(data);

        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * State change: Works via 'getDerivedStateFromProps' here.
   */
  handleClick (event) {
    const state = {
      firstName : 'CLICKY',
      day       : this.state.day + 1,
    };

    this.setState(state);
  }

  /**
   *
   */
  render () {
    console.log('render', '3. ON: (Re)Render');

    return (
      <div className='Lifecycle'>
        <h1>Lifecycle</h1>
        <p>See console</p>
        <br />
        <h4>Day: {this.state.day}</h4>
        <p>{this.state.congratulate}</p>
        <br />
        <User firstName={this.state.firstName} />
        <button onClick={this.handleClick.bind(this)}>Interact</button>
        <br />
        <Countries data={this.state.data} />
      </div>
    );
  }
}


export default Lifecycle;

