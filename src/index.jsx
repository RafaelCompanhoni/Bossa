import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './components/clock';
import ColorPicker from './components/colorPicker';

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
