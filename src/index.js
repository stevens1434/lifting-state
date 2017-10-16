import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import bodyParser from 'body-parser';
import _ from 'lodash';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
