import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import ColorPicker from './colorPicker';

const App = () => (
  <div>
    <Clock />
    <ColorPicker />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
