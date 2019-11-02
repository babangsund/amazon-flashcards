import React from 'react';
import ReactDOM from 'react-dom';

// project
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
