import React from 'react';
import ReactDOM from 'react-dom';

// project
import App from './App';
import Providers from './providers/Providers';
import * as serviceWorker from './serviceWorker';

const root: HTMLElement | null = document.getElementById('root');
const app = (
  <Providers>
    <App />
  </Providers>
);

if (root) {
  ReactDOM.render(app, root);
}

serviceWorker.register();
