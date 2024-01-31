import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Sponsor extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <h2 className={"center-content"}>Organization</h2>
            <ul className="list-reset">
              {/*<li><h4>Co-organizers</h4></li>*/}
              <li className="reveal-scale-up">
                <Image
                  src={require('./../../assets/images/KHTN.png')}
                  alt="University of Science (VNUHCM)"
                  title="University of Science (VNUHCM)"
                  width={150}
                  height={30} />
              </li>
              <li className="reveal-scale-up">
                <Image
                  src={require('./../../assets/images/tohoku-university-logo.png')}
                  alt="Tohoku University (Japan)"
                  title="Tohoku University (Japan)"
                  width={180}
                  height={39} />
              </li>
              <li className="reveal-scale-up">
                <Image
                    src={require('./../../assets/images/mtulogo.png')}
                    alt="Mien Tay Construction University (MTU)"
                    title="Mien Tay Construction University (MTU)"
                    width={65}
                    height={65} />
              </li>
            </ul>
            {/*<ul className="list-reset">*/}
            {/*  <li><h4>Co-Organizers</h4></li>*/}
            {/*  <li className="reveal-scale-up" data-reveal-delay="200">*/}
            {/*    <Image*/}
            {/*        src={require('./../../assets/images/kookmin.png')}*/}
            {/*        alt="Kookmin University (Korea)"*/}
            {/*        title="Kookmin University (Korea)"*/}
            {/*        width={100}*/}
            {/*        height={31} />*/}
            {/*  </li>*/}
            {/*  <li className="reveal-scale-up" data-reveal-delay="400">*/}
            {/*    <Image*/}
            {/*        src={require('./../../assets/images/Griffith_University_logo.png')}*/}
            {/*        alt="Griffith University (Australia)"*/}
            {/*        title="Griffith University (Australia)"*/}
            {/*        width={100}*/}
            {/*        height={30} />*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </section>
    );
  }
}

Sponsor.propTypes = propTypes;
Sponsor.defaultProps = defaultProps;

export default Sponsor;
