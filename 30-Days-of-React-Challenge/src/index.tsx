// @flow

/**
 * Application entry point to serve app, handle environments
 * and caching (ServiceWorker -> not implemented here).
 */

import React from 'react';
import { hydrate, render } from 'react-dom';

import './env-dev';
import App from './components/app';

const rootElement: HTMLElement | null = document.getElementById('root');

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
  } else {
    render(<App />, rootElement);
  }
}
