import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import { Grid } from "@mui/material";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

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
      "clients section reveal-fade",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "clients-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={innerClasses}>
                <h2 className={"center-content"}>Technical Supports</h2>
                <ul className="list-reset">
                  <li className="reveal-scale-up">
                    <Image
                      src={require("./../../assets/images/ieej-logo-b.jpg")}
                      alt="Institute Electrical Engineer of Japan (IEEJ, Japan)"
                      width={80}
                      height={39}
                    />
                  </li>
                  <li className="reveal-scale-up" data-reveal-delay="200">
                    <Image
                      src={require("./../../assets/images/IEEE_VN_Logo_Rect.jpg")}
                      alt="IEEE Vietnam Section"
                      width={150}
                      height={30}
                    />
                  </li>
                  <li className="reveal-scale-up" data-reveal-delay="200">
                    <Image
                      src={require("./../../assets/images/IKEEE.jpg")}
                      alt="Institute of Korean Electrical& Electronic Engineers (IKEEE, Korea)"
                      width={200}
                      height={31}
                    />
                  </li>
                  <li className="reveal-scale-up" data-reveal-delay="400">
                    <Image
                      src={require("./../../assets/images/HSIA.png")}
                      alt="Ho Chi Minh Semiconducting Industrial Association (HSIA)"
                      width={100}
                      height={30}
                    />
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={innerClasses}>
                <h2 className={"center-content"}>Sponsors</h2>
                <ul className="list-reset">
                  <li className="reveal-scale-up">
                    <Image
                      src={require("./../../assets/images/sonpsor-smater.jpg")}
                      alt="SMARTer- NCHU- Taiwan"
                      width={160}
                      height={39}
                    />
                  </li>
                  <li className="reveal-scale-up">
                    <Image
                      src={require("./../../assets/images/redsun.jpg")}
                      alt="Redsun - Vietnam"
                      width={250}
                      height={50}
                    />
                  </li>
                  <li className="reveal-scale-up">
                    <Image
                      src={require("./../../assets/images/mantis.jpg")}
                      alt="Mantis - Vietnam"
                      width={120}
                      height={39}
                    />
                  </li>
                  <li className="reveal-scale-up">
                    <Image
                      src={require("./../../assets/images/ITO.jpg")}
                      alt="ITO - Vietnam"
                      width={140}
                      height={43}
                    />
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

Sponsor.propTypes = propTypes;
Sponsor.defaultProps = defaultProps;

export default Sponsor;
