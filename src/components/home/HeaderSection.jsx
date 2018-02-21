import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/home/header-section.scss';
import logo from '../../../assets/img/logo-white.png';

const Header = () => (
  <div styleName="header-section">
    <div styleName="header-section__logo-box">
      <img styleName="header-section__logo" src={logo} alt="Logo" />
    </div>

    <div styleName="header-section__text-box">
      <h1 styleName="heading-primary">
        <span styleName="heading-primary--main">Outdoors</span>
        <span styleName="heading-primary--sub">is where life happens</span>
      </h1>

      <a href="/" className="btn btn--white">Discover our tours</a>
    </div>
  </div>
);

export default CSSModules(Header, styles);
