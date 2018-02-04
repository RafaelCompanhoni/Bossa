import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/home.scss';

import Header from './Header';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import ToursSection from './ToursSection';

const Home = () => (
  <div>
    <Header />
    <AboutSection />
    <FeaturesSection />
    <ToursSection />
  </div>
);

export default CSSModules(Home, styles);
