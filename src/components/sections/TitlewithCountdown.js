import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
// import Button from '../elements/Button';
import Image from "../elements/Image";
import Countdown from "../elements/Countdown";
// import Button from "@mui/material/Button/Button";
import { ButtonGroup, CardMedia, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "../elements/Button";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

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
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      noTop && "pt-0i",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className={"cover-hero"}>
          <Box
            className={"cover-hero-image"}
            sx={{
              backgroundImage: {
                xs: `url(${require("./../../assets/images/landing4.png")})`,
                sm: `url(${require("./../../assets/images/landing3.png")})`,
              },
            }}
          ></Box>
          <div className={"cover-hero-cover"}></div>
          {/* <div className={"cover-hero-video"}>
              <video autoPlay muted loop id="coverVideo">
                <source src={require('./../../assets/images/orangebackground.webm')} type="video/webm"/>
              </video>
            </div> */}
          <div className={"hero-text container"}>
            <div className={"reveal-from-left"}>
              <h1 className="mt-0 mb-16 text-shadow text-color-secondary">
                ICEBA2024
              </h1>
              <h4
                className="mt-0 mb-16"
                style={{ color: "rgb(78 78 78)", backgroundColor: "white" }}
              >
                The 5th International Conference on Engineering, Physics,
                MEMS-Biosensors and Applications:
                <p
                  className="text-sm md:text-xs"
                  style={{ fontStyle: "italic" }}
                >
                  Cooperation in R&D, technical transfer & 5 year anniversary
                </p>
              </h4>
              <p
                className="mt-0 mb-32"
                style={{ backgroundColor: "rgb(255 252 185 / 44%)" }}
              >
                November 11, 2024 - Ho Chi Minh City, Vietnam
                <br />
                November 12, 2024 - Vinh Long Province, Vietnam
              </p>
              <Countdown date={new Date("11/11/2024")} />
              {/* <Button
                tag="a"
                color="secondary"
                href={require("../../assets/files/1. Announcement of 5thICEBA2024.pdf")}
                target={"_blank"}
                className={"mt-16"}
              >
                Official Announcement
              </Button> */}
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
