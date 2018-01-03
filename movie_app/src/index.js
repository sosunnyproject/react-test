import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM renders one element inside the element called 'root' in html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
