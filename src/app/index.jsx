import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

import Clock from '../clock';

const App = () => (
  <div>
    <h1 styleName="app-title">Bossa CMS</h1>
    <Clock />
  </div>
);

export default CSSModules(App, styles);
