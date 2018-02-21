import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/components/home/footer.scss';
import logo from '../../../assets/img/logo-green-2x.png';

const Footer = () => (
  <footer styleName="footer">
    <div styleName="footer__logo-box">
      <img styleName="footer__logo" src={logo} alt="Full logo" />
    </div>

    <div className="row">
      <div className="col-1-of-2">
        <div styleName="footer__navigation">
          <ul styleName="footer__list">
            <li styleName="footer__item">
              <a href="/" styleName="footer__link">Company</a>
            </li>
            <li styleName="footer__item">
              <a href="/" styleName="footer__link">Contact us</a>
            </li>
            <li styleName="footer__item">
              <a href="/" styleName="footer__link">Careers</a>
            </li>
            <li styleName="footer__item">
              <a href="/" styleName="footer__link">Privacy Policy</a>
            </li>
            <li styleName="footer__item">
              <a href="/" styleName="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-1-of-2">
        <div styleName="footer__copyright">
          Built on <a href="/" styleName="footer__link">Advanced CSS and Sass</a>. Copyright &copy; by JS. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis id nisl ut risus tincidunt suscipit. Donec augue enim, porttitor in lectus quis, commodo sollicitudin nunc. Etiam suscipit
          justo sit amet interdum ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae
        </div>
      </div>
    </div>
  </footer>
);

export default CSSModules(Footer, styles, { allowMultiple: true });
