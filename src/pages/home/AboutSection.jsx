import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/about-section.scss';

const AboutSection = () => (
  <section styleName="section-about">
    <div className="u-center-text u-margin-bottom-8">
      <h2 styleName="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        Text content
      </div>
      <div className="col-1-of-2">
        Image composition
      </div>
    </div>
  </section>
);

export default CSSModules(AboutSection, styles);
