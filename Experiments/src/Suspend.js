import React from 'react'


async function fetchData () {
  return await import('./LazyLoaded');
}


const LazyLoaded = React.lazy(async () => {
  console.log('React.lazy');

  return fetchData();
});


const Spinner = (props) => (
  <p>Loading ...</p>
);


/**
 * https://reactjs.org/docs/react-api.html#reactsuspense
 */
class Suspend extends React.Component {
  render () {
    return (
      <>
        <React.Suspense fallback={<Spinner />}>
          <div className='Suspend'>
            <LazyLoaded />
          </div>
        </React.Suspense>
      </>
    );
  }
}


export default Suspend;

