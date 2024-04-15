import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { Card, CardContent } from "@mui/material";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

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
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "Simplify your design process",
      paragraph:
        "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.",
    };

    return (
      <section {...props} className={outerClasses}>
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
                <div className={"container-md"}>
                  <h3 className="mb-16 center-content">
                    The scope of ICEBA2024 Conference
                  </h3>
                  <p>
                    The purpose of the 5<sup>th</sup> ICEBA2024 is to link the
                    researchers and scientists from Vietnam and countries around
                    the world, especially Asian countries, in the fields of
                    Engineering, Physics, microelectronics, semiconductors, and
                    electronic engineering for their applications in biomedical
                    engineering, health sciences, hi-tech agriculture, and smart
                    cities. Besides, we also contribute to promoting
                    international cooperation activities by joining research
                    projects and international co-publications and proposing
                    good solutions and applied technology for the development of
                    the Mekong Delta area.
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
  position: "absolute",
  width: "139.77%",
  maxWidth: "139.77%",
  top: "-13.89%",
  left: "-16.47%",
};

const img02Style = {
  position: "absolute",
  width: "140.91%",
  maxWidth: "140.91%",
  top: "-13.88%",
  left: "-24.43%",
};

const img03Style = {
  position: "absolute",
  width: "141.48%",
  maxWidth: "141.48%",
  top: "-13.88%",
  left: "-16.47%",
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
