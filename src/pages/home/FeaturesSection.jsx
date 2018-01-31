import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/features-section.scss';

const FeaturesSection = () => (
  <section styleName="section-features">
    <div className="row">
      <div className="col-1-of-4" styleName="feature-box">
        <i styleName="feature-box__icon" className="icon-basic-world" />

        <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>

        <p className="feature-box__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque.
        </p>
      </div>

      <div className="col-1-of-4" styleName="feature-box">
        <i styleName="feature-box__icon" className="icon-basic-compass" />

        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>

        <p className="feature-box__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque.
        </p>
      </div>

      <div className="col-1-of-4" styleName="feature-box">
        <i styleName="feature-box__icon" className="icon-basic-map" />

        <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>

        <p className="feature-box__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque.
        </p>
      </div>

      <div className="col-1-of-4" styleName="feature-box">
        <i styleName="feature-box__icon" className="icon-basic-heart" />

        <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>

        <p className="feature-box__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque.
        </p>
      </div>
    </div>
  </section>
);

export default CSSModules(FeaturesSection, styles, { allowMultiple: true });
