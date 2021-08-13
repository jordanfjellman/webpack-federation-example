import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const name = 'Shell';
const title = `Hello from the ${name}!`;

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();
