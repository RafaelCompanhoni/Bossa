import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/home/booking-section.scss';

const BookingSection = () => (
  <section styleName="booking-section">
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

            <div className="form__group u-margin-bottom-medium">
              <input id="email" type="email" className="form__input" placeholder="Email address" required />
            </div>

            <div className="form__group u-margin-bottom-medium">
              <div className="form__radio-group">
                <label htmlFor="small" className="form__radio-label">
                  <input type="radio" className="form__radio-input" name="size" id="small" />
                  <span className="form__radio-button" />
                  Small tour group
                </label>
              </div>

              <div className="form__radio-group">
                <label htmlFor="large" className="form__radio-label">
                  <input type="radio" className="form__radio-input" name="size" id="large" />
                  <span className="form__radio-button" />
                  Large tour group
                </label>
              </div>
            </div>

            <div className="form__group">
              <button className="btn btn--green">Next step &rarr;</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default CSSModules(BookingSection, styles, { allowMultiple: true });
