import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
// import Button from '../elements/Button';
import Image from '../elements/Image';
import Countdown from '../elements/Countdown';
// import Button from "@mui/material/Button/Button";
import {ButtonGroup, CardMedia} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import Button from "../elements/Button";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class TitlewithCountdown extends React.Component {

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
      noTop,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      noTop && 'pt-0i',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className={"cover-hero"}>
            <div className={"cover-hero-image"} style={{backgroundImage:`url(${require('./../../assets/images/header.JPG')})`}}>

            </div>
            <div className={"cover-hero-cover"}>

            </div>
            <div className={"cover-hero-video"}>
              <video autoPlay muted loop id="coverVideo">
                <source src={require('./../../assets/images/orangebackground.webm')} type="video/webm"/>
              </video>
            </div>
            <div className={"hero-text container"}>
              <div className={"reveal-from-left"}>
                <h1 className="mt-0 mb-16 text-shadow text-color-secondary">
                  ICEBA2024
                </h1>
                <h3 className="mt-0 mb-16" style={{color:"white"}}>
                  The 5th International Conference on Engineering Physics, MEMS-Biosensors and Applications
                </h3>
                <h4 className="mt-0 mb-16" style={{color:"white"}}>
                5 years anniversary
                </h4>
                <p className="mt-0 mb-32">
                  November 10, 2024 - VNUHCM-University of Science
                  227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam
                  November 11-12, 2024 - MienTay Construction University
                  20B Pho Co Dieu Str., Ward 3, Vinh Long city, Việt Nam

                </p>
                <Countdown date={new Date('11/10/2024')}/>
                <Button
                    tag="a" color="secondary"
                    href={require('../../assets/files/1. Announcement of 5thICEBA2024.pdf')} target={'_blank'}
                    className={'mt-16'}
                >Official Announcement
                </Button>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

TitlewithCountdown.propTypes = propTypes;
TitlewithCountdown.defaultProps = defaultProps;

export default TitlewithCountdown;
