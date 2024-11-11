import React from "react";
import Image from "../components/elements/Image";
import * as moment from "moment";
import classNames from "classnames";
// import "../assets/agenda/resources/sheet.css"
import "./Program.css";
import {
  CardMedia,
  Tab,
  Tabs,
  Typography,
  Button as Button2,
  Card,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { a11yProps, TabPanel } from "../components/elements/TabPanel";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import GenericSection from "../components/sections/GenericSection";
import AutoSizer from "lp-react-virtualized-auto-sizer-react-18";
import "./pdfviewer.css";
import { Document, pdfjs, Page } from "react-pdf";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: 0,
    };
  }

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
      "hero section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    return (
      <React.Fragment>
        <section {...props} className={outerClasses} id="overview">
          <div className="container">
            <div className={innerClasses}>
              <Card sx={{ width: "100%" }} elevation={7}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4" component="div">
                  5th ICEBA 2024 Program at A Glance
                  </Typography>
                  <div>
                    <IconButton
                      href={require("../assets/files/2.Program_ICEBA2024_updated_v3.docx")}
                      download
                    >
                      <DownloadIcon />
                    </IconButton>
                    <IconButton
                      href={require("../assets/files/2.Program_ICEBA2024_updated_v3.pdf")}
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
                            file={require("../assets/files/2.Program_ICEBA2024_updated_v3.pdf")}
                            onLoadError={console.error}
                          >
                            {[2,3,4,5,6,7,8,9,10,11].map(d=><Page key={d}
                              pageNumber={d}
                              width={width}
                              height={height}
                            />)}
                          </Document>
                        </div>
                      </div>
                    )}
                  </AutoSizer>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

// inline style
const formStyle = {
  maxWidth: "420px",
  margin: "0 auto",
};

export default Program;

function getTime(h, m, am) {
  let a = moment().hours(h).minutes(m);
  a.add(am, "m");
  return a.format("hh:mm");
}
