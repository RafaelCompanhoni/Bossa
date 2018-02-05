/* eslint-disable */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/pages/home/stories-section.scss';

const StoriesSection = () => (
  <section styleName="section-stories">
    <div styleName="bg-video">
      <video styleName="bg-video__content" autoPlay muted loop>
        <source src="../../../assets/img/video.mp4" type="video/mp4" />
        <source src="../../../assets/img/video.webm" type="video/webm" />
      </video>
    </div>

    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">We make people genuinely happy</h2>
    </div>

    <div className="row">
      <div styleName="story">
        <figure styleName="story__shape">
          <img
            src="../../../assets/img/nat-8.jpg"
            alt="Person on a tour"
            styleName="story__img"
          />
          <figcaption styleName="story__caption">Mary Smith</figcaption>
        </figure>

        <div styleName="story__text">
          <h3 className="heading-tertiary">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            nihil ea voluptates quas totam atque. Perferendis perspiciatis porro
            officia sed facere ratione vero veritatis cumque, quae,
            necessitatibus, omnis dolorum dignissimos!
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div styleName="story">
        <figure styleName="story__shape">
          <img
            src="../../../assets/img/nat-9.jpg"
            alt="Person on a tour"
            styleName="story__img"
          />
          <figcaption styleName="story__caption">Jack Wilson</figcaption>
        </figure>

        <div styleName="story__text">
          <h3 className="heading-tertiary">
            WOW! My life is completely different now
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            nihil ea voluptates quas totam atque. Perferendis perspiciatis porro
            officia sed facere ratione vero veritatis cumque, quae,
            necessitatibus, omnis dolorum dignissimos!
          </p>
        </div>
      </div>
    </div>

    <div className="u-center-text u-margin-top-big">
      <a href="http://localhost:8081" className="btn-text">
        Discover all tours &rarr;
      </a>
    </div>
  </section>
);

export default CSSModules(StoriesSection, styles, { allowMultiple: true });
