import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top space-between text-xxs" style={{alignItems:'flex-start'}}>
              {/*<Logo />*/}
              <div className="footer-block">
                <div className="footer-block-title">Address</div>
                <p>227 Nguyen Van Cu Street, District 5, Ho Chi Minh city, Vietnam.</p>
              </div>
              <div className="footer-block">
                <div className="footer-block-title">Email</div>
                <a href = "mailto: 5iceba2024@gmail.com">5iceba2024@gmail.com</a>
              </div>
              <div className="footer-block">
                <div className="footer-block-title">Contact</div>
                <p>Office of Faculty of Physics and Engineering Physics, A Building</p>
              </div>
              {/*<FooterSocial />*/}
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              {/*<FooterNav />*/}
              <div className="footer-copyright">&copy; 2024 ICEBA2024, all rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
