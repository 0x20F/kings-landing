import React from 'react'
import ReactDOM from 'react-dom'

import App from './app/App'
import 'styles/app'


// Setup particles.js
import pJS from './app/lib/particles';
import options from './app/lib/particleOptions';

pJS('particles-container', options);




ReactDOM.render(<App/>, document.getElementById('root'))