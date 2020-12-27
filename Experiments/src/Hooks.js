import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'

/** 
 * https://reactjs.org/docs/hooks-effect.html
 *
 * Decouples state logic from lifecycles and simplifies use for bug-free apps.
 * Recommended to use multiple effects for each concern.
 *
 * Runs after every render/update, similar to lifecycle methods:
 * - componentDidMount, componentDidUpdate, componentWillUnmount
 *
 * Added parameter checks IF to run at all:
 * If 'count' does not change, then nothing happens.
 */
const Hooks = () => {  
  const [count, setCount] = useState(0);
  
  const url = 'https://restcountries.eu/rest/v2/all'
  const data = useFetch(url)
  
  
  const minusOne = () => {
    console.log('-1');
    setCount(count - 1);
  }
  
  /**
   * Runs + Cleans up immediately.
   */
  useEffect(() => {
    console.warn('useEffect (static)');
    document.title = `You clicked ${count} times`;
    
    // Runs after every render/update (not just unmount)
    return function cleanup() {
      console.warn('Clean after running effect');
    }
  }, [count]);


  /**
   * Runs + Cleans up delayed.
   *
   * Without external state dependency, it's less error prone;
   * and the effect interval does not need to reset on each change.
   */
  useEffect(() => {
    console.log('useEffect');
    
    const id = setInterval(() => {
      console.log('setInterval');
      setCount(c => c + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);


  return (
    <div className='Hooks'>
      <h1>Hooks</h1>
      <h2>useState</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={minusOne}>Sub 1</button>
      <br />
      <div>
      {String(data)}
      </div>
    </div>
  );
}


export default Hooks;

