import React from 'react';
import TitlewithCountdown from '../components/sections/TitlewithCountdown';
import Sponsor from '../components/sections/Sponsor';
import FloatFeaturesSplit from '../components/sections/FloatFeaturesSplit';
import ImportantDate from '../components/sections/ImportantDate';
import Social from '../components/sections/Social';
import Cta from '../components/sections/Cta';
import {TwitterTimelineEmbed} from "react-twitter-embed";
import Organization from "../components/sections/Organization";
import {submissionabstractLink} from "../utils/ulti";
import Button from "../components/elements/Button";
import {Card, Grid} from "@mui/material";
import FeaturesSplit from "../components/sections/FeaturesSplit";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TitlewithCountdown imageFill noTop className="illustration-section-01" />
        <FloatFeaturesSplit invertMobile imageFill className="illustration-section-03" />
        <FeaturesSplit invertMobile imageFill className="illustration-section-03 sub-color-section" />
          <div className={"container"}>
          <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ImportantDate  topDivider className={"gradient-section-h pr-32"} />
              </Grid>
              <Grid item xs={12} md={6}>
                  <Organization bottomDivider />
                  <Sponsor topDivider />
              </Grid>
          </Grid>
          </div>
         {/*<Social topDivider bottomDivider />*/}
      </React.Fragment>
    );
  }
}

export default Home;
