import React, { useReducer } from 'react'


function initReducer(initialCount) {
  console.log('initReducer', initialCount);
  
  return {count: initialCount};
}

function reducer(state, action) {
  console.log('initReducer', state, action);
  
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return initReducer(action.payload);
    default:
      throw new Error();
  }
}


function Counter({initialCount, message}) {
  const [state, dispatch] = useReducer(reducer, initialCount, initReducer);
  
  console.log('Counter', initialCount, message);
  
  return (
    <>
      {message} <br />
      Count: {state.count}
      <br />
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}


/** 
 * https://reactjs.org/docs/hooks-reference.html#usereducer
 */
const HooksReducer = () => {  
  return (
    <div className='HooksReducer'>
      <h1>Hooks + Reducer</h1>
      <Counter initialCount={0} message='Counter message' />
    </div>
  );
}


export default HooksReducer;

