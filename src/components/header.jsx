import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/header.scss';

const Header = () => (
  <div styleName="header">
    <div styleName="logo-box">
      <img styleName="logo" src="assets/img/logo-white.png" alt="Logo" />
    </div>

    <div styleName="text-box">
      <h1 styleName="heading-primary">
        <span styleName="heading-primary-main">Outdoors</span>
        <span styleName="heading-primary-sub">is where life happens</span>
      </h1>

      {
        // eslint-disable-next-line
      }<a href="#" styleName="btn-white">Discover our tours</a>
    </div>
  </div>
);

export default CSSModules(Header, styles);
