import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/tours-section.scss';

const ToursSection = () => (
  <section styleName="section-tours">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Most popular tours
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front">
            FRONT
          </div>
          <div className="card__side card__side--back card__side--back-1">
            BACK
          </div>
        </div>
      </div>

      <div className="col-1-of-3">Col 1 of 3</div>
      <div className="col-1-of-3">Col 1 of 3</div>
    </div>
  </section>
);

export default CSSModules(ToursSection, styles, { allowMultiple: true });
