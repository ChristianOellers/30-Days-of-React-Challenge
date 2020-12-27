import React, { useRef } from 'react'

/** 
 * Todo: How to read/write to outside reference?
 * - https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
 */
const References = (props) => {  
  const ref = useRef(null);
  const refTxt = useRef(null);
  const refOutside = useRef(props.watch);
  

  const onClick = () => {
    let val = ref.current.value;
    let content = refTxt.current.textContent;
    
    ref.current.focus();
    
    console.log(refOutside.current);
    console.log(ref.current.style);
    console.log(val, content);
  }

  return (
    <div className='References'>
      <h1 ref={refTxt}>Uncontrolled input data - useRef</h1>
      <input type='text' ref={ref} />
      <button onClick={onClick}>Get Input Data</button>
    </div>
  );
}


export default References;

