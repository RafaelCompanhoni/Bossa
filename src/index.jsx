import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import ColorPicker from './colorPicker';
import PeopleList from './peopleList';

const App = () => (
  <div>
    <Clock />
    <ColorPicker />
    <PeopleList count={10} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
