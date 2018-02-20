import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/booking-section.scss';

const BookingSection = () => (
  <section styleName="section-booking">
    <div className="row">
      <div styleName="book">
        <div styleName="book__form">
          <form action="http://localhost:8081" className="form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start booking now</h2>
            </div>

            <div className="form__group">
              <input id="name" type="text" className="form__input" placeholder="Full name" required />
            </div>

            <div className="form__group">
              <input id="email" type="email" className="form__input" placeholder="Email address" required />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default CSSModules(BookingSection, styles, { allowMultiple: true });
