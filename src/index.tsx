// @flow

import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './app';


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}


const rootElement: HTMLElement = document.getElementById( 'root' )!;

if ( rootElement.hasChildNodes() ) {
  hydrate( <App />, rootElement );
} 
else {
  render( <App />, rootElement );
}

