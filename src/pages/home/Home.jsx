import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/home.scss';

import Header from './Header';
import AboutSection from './AboutSection';

const Home = () => (
  <div>
    <Header />
    <AboutSection />
  </div>
);

export default CSSModules(Home, styles);
