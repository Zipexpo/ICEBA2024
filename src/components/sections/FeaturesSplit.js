import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Simplify your design process',
      paragraph: 'Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            {/*<SectionHeader data={sectionHeader} className="center-content reveal-from-top">*/}
            {/*  <div className="features-split-icon mb-24">*/}
            {/*    <Image*/}
            {/*      src={require('./../../assets/images/features-split-icon.svg')}*/}
            {/*      alt="Features split icon"*/}
            {/*      width={80}*/}
            {/*      height={80} />*/}
            {/*  </div>*/}
            {/*</SectionHeader>*/}
            <div className={splitClasses}>

              <div className="split-item reveal-from-top">
                <div className={"container-lg"} >
                  <h3 className="mt-0 mb-16">
                    The scope of ICEBA2023 Conference
                  </h3>
                  <p>
                    The purpose of the 4<sup >th</sup> ICEBA2023 is to link the researchers and scientists from Vietnam, Australia, and Asian countries in the field of Engineering Physics and microelectronics and semiconductors for their applications in biomedical engineering, health sciences, hi-tech agriculture, and smart cities.  Besides, we also contribute to promoting international cooperation activities on joint research projects and international co-publications.
                  </p>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">
                    The subject areas
                  </h3>
                  <p className="m-0">
                    Contributed papers <strong>must be the new research works</strong> and are solicited in the following subject areas (but not limited to):
                    <ul>
                      <li>Applied Physics, Engineering Physics, Electronic Engineering and Nuclear Engineering;</li>
                      <li>MEMS (MicroElectronMechanical System), Sensors, Biosensors and semiconducting devices;</li>
                      <li>Microelectronics, IC design, low consumption devices, Renewable Energy;</li>
                      <li>Computing Science, Simulations and Modeling;</li>
                      <li>Embedded systems, Internet of Things, Machine Learning, Artificial Intelligence;</li>
                      <li>Biomedical Engineering, Digital Microfluidics and their applications;</li>
                      <li>...</li>
                    </ul>
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/venueHolder.png')}
                      alt="Features split top 02"
                      width={344}
                      height={212} />
                  </div>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className={"container-lg reveal-from-top"} >
                  <p>
                    This year 4th ICEBA will be hosted at VNUHCM-University of Science, 227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  width: '139.77%',
  maxWidth: '139.77%',
  top: '-13.89%',
  left: '-16.47%'
}

const img02Style = {
  position: 'absolute',
  width: '140.91%',
  maxWidth: '140.91%',
  top: '-13.88%',
  left: '-24.43%'
}

const img03Style = {
  position: 'absolute',
  width: '141.48%',
  maxWidth: '141.48%',
  top: '-13.88%',
  left: '-16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
