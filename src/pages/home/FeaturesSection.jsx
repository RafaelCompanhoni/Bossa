import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/features-section.scss';

const FeaturesSection = () => (
  <section styleName="section-features">
    <i className="icon-basic-world" />
  </section>
);

export default CSSModules(FeaturesSection, styles, { allowMultiple: true });
