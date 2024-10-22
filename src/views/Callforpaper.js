import React from "react";
// import section header
import SectionHeader from "../components/sections/partials/SectionHeader";
// import sections
import HeroFull from "../components/sections/HeroFull";
import Team from "../components/sections/Team";
import Roadmap from "../components/sections/Roadmap";
import Testimonial from "../components/sections/Testimonial";
import GenericSection from "../components/sections/GenericSection";
import Cta from "../components/sections/Cta";
// import some required elements
import Image from "../components/elements/Image";
import Input from "../components/elements/Input";
import ButtonGroup from "../components/elements/ButtonGroup";
import Button from "../components/elements/Button";
import { ButtonGroup as ButtonGroup2, Button as Button2 } from "@mui/material";
import Modal from "../components/elements/Modal";
import Accordion from "../components/elements/Accordion";
import AccordionItem from "../components/elements/AccordionItem";
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container/Container";
import AutoSizer from "lp-react-virtualized-auto-sizer-react-18";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import "react-pdf/dist/cjs/Page/AnnotationLayer.css";
import "react-pdf/dist/cjs/Page/TextLayer.css";
import "./pdfviewer.css";
import { submissionfullLink, submissionabstractLink } from "../utils/ulti";
import { Document, pdfjs, Page } from "react-pdf";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Organization from "../components/sections/Organization";
import Sponsor from "../components/sections/Sponsor";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

class Callforpaper extends React.Component {
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

    const genericSection04Header = {
      title: "Paper Submission",
    };
    return (
      <React.Fragment>
        {/*<CssBaseline/>*/}
        <Container maxWidth="lg">
          <GenericSection>
            <h2>Call for Papers</h2>
            <p>
              The purpose of the 5<sup>th</sup> ICEBA2024 is to link the
              researchers and scientists from Vietnam and countries around the
              world, especially Asian countries, in the fields of engineering,
              physics, microelectronics, semiconductors, and electronic
              engineering for their applications in biomedical engineering,
              health sciences, hi-tech agriculture, and smart cities. Besides,
              we also promote international cooperation by joining research
              projects and international co-publications and proposing good
              solutions and applied technology for developing the Mekong Delta
              area.
            </p>

            <p>
              Authors are invited to submit original, unpublished research
              manuscripts related to conference subjects.
            </p>

            <p>
              Authors of accepted papers can opt into reproducible research
              decoration to publish according to open science conventions; the
              details are described below.
            </p>
          </GenericSection>
          <GenericSection topDivider>
            <h2>
              Contributed papers must be the new research works and are
              solicited in the following subject areas (but not limited to):
            </h2>
            <ul>
              <li>
                Engineering, Engineering Physics, and Electrical & Electronic
                Engineering;
              </li>
              <li>Medical Physics and Nuclear Engineering;</li>
              <li>
                MEMS (MicroElectronMechanical System), Sensors, Biosensors and
                semiconducting devices;
              </li>
              <li>
                Microelectronics, IC design, low consumption devices, Renewable
                Energy;
              </li>
              <li>Computing Science, Simulations and Modeling;</li>
              <li>
                Embedded systems, Internet of Things, Machine Learning,
                Artificial Intelligence, ...
              </li>
              <li>Civil and Geology Engineering;</li>
              <li>Architecture, Urban planning and Construction;</li>
            </ul>
          </GenericSection>
          <GenericSection topDivider>
            <h2>Paper Submission</h2>
            <p>
              Please submit your registration and abstract via&nbsp;
              <a
                target="_blank"
                href="https://easychair.org/conferences/?conf=5thiceba2024"
              >
                EasyChair
              </a>{" "}
              before &nbsp;<strong>June 10th , 2024</strong>.
            </p>
            <p>
              Full paper for peer-review process must be submited via the
              website of the Journal before <strong>July 10th , 2024</strong>
            </p>

            <p>
              Click here to submit:
              <Button
                color="primary"
                style={{ marginLeft: 5, marginRight: 5 }}
                tag={"a"}
                target="_blank"
                href={submissionabstractLink}
              >
                ABSTRACT
              </Button>
              {/* <Button
                color="primary"
                style={{ marginLeft: 5, marginRight: 5 }}
                tag={"a"}
                target="_blank"
                href={submissionfullLink}
              >
                FULL PAPER
              </Button> */}
            </p>
            <p>
              Click here to get the template:
              <Button
                color="secondary"
                style={{ marginLeft: 5, marginRight: 5 }}
                tag={"a"}
                target="_blank"
                href={"https://phys.hcmus.edu.vn/ICEBA2024/files/ICEBA2024_poster_template_final.pptx"}
                download
              >
                POSTER
              </Button>
              <Button
                color="secondary"
                style={{ marginLeft: 5, marginRight: 5 }}
                tag={"a"}
                target="_blank"
                href={"https://phys.hcmus.edu.vn/ICEBA2024/files/ICEBA2024_PaperNumber_final.pptx"}
                download
              >
                PRESETATION 
              </Button>
            </p>
          </GenericSection>

          <GenericSection topDivider>
            <h2>Publications</h2>
            <p>
              Full paper for review process of publication (use template) must
              be submit before November 30th , 2024. Publications: The selected
              papers (from 4 to 8 pages) will be reviewed and recommended in one
              of 03 below Scopus/SCIE/Scimago database Journal (1,2,3) or
              Vietnamese Journal (4) with fee such as:
            </p>
            <ol style={{ marginLeft: 20 }}>
              <li>
                The special issue of ICEBA2024 on IEEJ Transactions on
                Electrical and Electronic Engineering (Japan, Scopus-Q3);
              </li>
              <li>
                The special issue of ICEBA2024 on Applied Science (MDPI, Scopus,
                IF:5.3, Q1);
              </li>
              <li>
                IEEJ Transactions on Sensors and Micromachines (Japan,
                Scopus-Q4);
              </li>
              <li>
                Journal of Construction (Ministry of Construction, Vietnam, ISSN
                2734-9888);
              </li>
              {/*<li>Nanomaterials (MDPI, Scopus, IF:5.3, Q1)</li>*/}
            </ol>
          </GenericSection>

          <GenericSection>
            <ImportantDate
              topDivider
              className="gradient-section"
              style={{ paddingTop: 0 }}
              topOuterDivider={false}
            />
          </GenericSection>
          <Organization topDivider bottomDivider />
          <Sponsor topDivider bottomDivider />
          <GenericSection>
            <Card sx={{ width: "100%" }} elevation={7}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h5" component="div">
                    Call for paper flyer
                  </Typography>
                  <div>
                    <IconButton
                      href={require("../assets/files/3.Call For Papers_ICEBA2024_Apr25.pdf")}
                      download
                    >
                      <DownloadIcon />
                    </IconButton>
                    <IconButton
                      href={require("../assets/files/3.Call For Papers_ICEBA2024_Apr25.pdf")}
                      target={"_blank"}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </div>
                </Box>
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    minHeight: 100,
                  }}
                >
                  <AutoSizer
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    {({ width, height }) => (
                      <div className="Example__container">
                        <div className={"Example__container__document"}>
                          <Document
                            file={require("../assets/files/3.Call For Papers_ICEBA2024_Apr25.pdf")}
                            onLoadError={console.error}
                          >
                            <Page
                              pageNumber={1}
                              width={width}
                              height={height}
                            />
                          </Document>
                        </div>
                      </div>
                    )}
                  </AutoSizer>
                </div>
              </CardContent>
            </Card>
          </GenericSection>
        </Container>
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto",
};

export default Callforpaper;
