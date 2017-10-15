import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import StarRating from './starRating';

const App = () => (
  <div>
    <Clock />
    <StarRating totalStars={7} starsSelected={3} />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
