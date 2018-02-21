import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/home/about-section.scss';

import nat1Img from '../../../assets/img/nat-1-large.jpg';
import nat2Img from '../../../assets/img/nat-2-large.jpg';
import nat3Img from '../../../assets/img/nat-3-large.jpg';

const AboutSection = () => (
  <section styleName="about-section">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">
          You are going to fall in love with nature
        </h3>

        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque. Perferendis
          perspiciatis porro officia sed facere ratione vero veritatis
          cumque, quae, necessitatibus, omnis dolorum dignissimos!
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">
          Live adventures like you never have before
        </h3>

        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi nihil ea voluptates quas totam atque.
        </p>

        <a href="www.google.com" className="btn-text ">Learn more &rarr;</a>
      </div>

      <div className="col-1-of-2">
        <div styleName="composition">
          <img src={nat1Img} alt="" styleName="composition__photo composition__photo--p1" />
          <img src={nat2Img} alt="" styleName="composition__photo composition__photo--p2" />
          <img src={nat3Img} alt="" styleName="composition__photo composition__photo--p3" />
        </div>
      </div>
    </div>
  </section>
);

export default CSSModules(AboutSection, styles, { allowMultiple: true });
