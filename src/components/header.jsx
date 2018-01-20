import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../styles/header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div styleName="clock">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default CSSModules(Header, styles);
