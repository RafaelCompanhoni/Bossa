import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/shared/navigation.scss';

const Header = () => (
  <div styleName="navigation">
    <h1>NAVIGATION</h1>
  </div>
);

export default CSSModules(Header, styles);
