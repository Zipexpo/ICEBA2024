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
} from "@mui/material";
import { a11yProps, TabPanel } from "../components/elements/TabPanel";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import GenericSection from "../components/sections/GenericSection";
import DownloadIcon from "@mui/icons-material/Download";

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
              <div className="hero-content">
                <h3>
                  5th ICEBA 2024 Program at A Glance
                  <Button2
                    size="small"
                    href={require("../assets/files/2.Program_ICEBA2024_updated_v2.docx")}
                    download
                    className={"button"}
                  >
                    <DownloadIcon />
                  </Button2>
                </h3>
                <div className="ritz grid-container" dir="ltr">
                  <table
                    className="waffle overview"
                    cellSpacing="0"
                    cellPadding="0"
                  >
                    <colgroup>
                      <col style={{ width: "132px" }}></col>
                      <col style={{ minWidth: "120px" }}></col>
                      <col style={{ width: "221px" }}></col>
                    </colgroup>
                    <tbody>
                      <tr>
                        <td className="s1 head">Date/Time</td>
                        <td className="s1 head">Contents/Program</td>
                        <td className="s1 head">Note</td>
                      </tr>
                      <tr>
                        <td className="s0  button-primary" colSpan="3">
                          November 10 (Sunday) at Ho Chi Minh City
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">12:00-18:00</td>
                        <td className="s4" colSpan="2">
                          Registration
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">17:00-18:00</td>
                        <td className="s4">
                          Meeting of Program Committee and Chair/co-chair
                          session of ICEBA2024
                        </td>
                        <td className="s5">
                          VNUHCM- University of Science (227 Nguyen Van Cu,
                          District 5, HCM city)
                        </td>
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                      <tr>
                        <td className="s0  button-primary" colSpan="3">
                          November 11 (Monday) at Ho Chi Minh City and Vinh Long
                          Province
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">07:30-07:45</td>
                        <td className="s4">
                          Registration (Check list, nameplate,
                          Abstract&Program,etc.)
                        </td>
                        <td className="s5">
                          -Lobby of conference room: Building I, University of
                          Science, HCM city, Vietnam. <br />
                          -The secretary
                        </td>
                      </tr>
                      <tr>
                        {/*<td className="s3">08:45 -- 09:00</td>*/}
                        <td className="s8 closeleft" colSpan="3">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            1.OPENING CEREMONY &PLENARY SESSION
                          </Typography>
                          <strong>
                            Conference Hall, Building I, 227 Nguyen Van Cu Str.,
                            District 5, HCMC
                          </strong>
                        </td>
                      </tr>

                      <tr>
                        <td className="s3" dir="ltr">
                          08:00-08:10
                        </td>
                        <td className="s4">1. Introduce Guests (MC)</td>
                        <td className="s5" rowSpan="2">
                          MC
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">08:10-08:25</td>
                        <td className="s4">
                          2. Welcome speeches:
                          <Typography variant={"subtitle2"}>
                            - Welcome speech from the president of VNUHCM-US;
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Speech from Co-General Chairs of ICEBA2024;
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Speech from Program Chair of ICEBA2024;
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">08:25-08:35</td>
                        <td className="s4">
                          3. Offer the gift for invited speakers
                          <Typography variant={"subtitle2"}>
                            - Plenary invited talks
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Invited talks.
                          </Typography>
                        </td>
                        <td className="s5">Vice President of VNUHCM-US</td>
                      </tr>
                      <tr>
                        <td className="s3">08:40-08:50</td>
                        <td className="s4">
                          4. Announcement for the 6th ICEBA2025 in Taiwan
                        </td>
                        <td className="s5">Program Committee of ICEBA2024</td>
                      </tr>
                      <tr>
                        <td className="s3">08:50-09:00</td>
                        <td className="s4">Coffee break</td>
                        <td className="s5">Lobby</td>
                      </tr>
                      <tr>
                        <td className="s3">09:00-10:50</td>
                        <td className="s4" colSpan={2}>
                          5. Plenary and Invited Session:
                          <span style={{ fontWeight: "normal" }}>
                            15 min for talk and 5 min for discussion
                          </span>
                          <Typography variant={"subtitle2"}>Chair:</Typography>
                          <Typography variant={"subtitle2"}>
                            Co-Chair:
                          </Typography>
                          {/* <Typography variant={"subtitle2"}>
                            Link google meet for online:
                            <a
                              href={"https://meet.google.com/zeb-ddeo-ukh"}
                              target={"_blank"}
                            >
                              https://meet.google.com/zeb-ddeo-ukh
                            </a>
                          </Typography> */}
                        </td>
                      </tr>
                      <tr>
                        <td className="s3"></td>
                        <td className="s4">
                          . Plenary #1 (code: PL-01).
                          {/* <Typography variant={"subtitle2"}>
                            Tohoku University, Japan
                          </Typography> */}
                        </td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s3"></td>
                        <td className="s4">. Plenary #2 (code: PL-02).</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s3"></td>
                        <td className="s4">. Plenary #3 (code: PL-03).</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s3"></td>
                        <td className="s4">. Plenary #4 (code: PL-04).</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s3"></td>
                        <td className="s4">. Plenary #5 (code: PL-05).</td>
                        <td className="s5">Will be updated</td>
                      </tr>

                      <tr>
                        <td className="s3" rowSpan={8}>
                          11:00 - 11:30
                        </td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            2. POSTER SESSION
                          </Typography>
                          <strong>
                            Lobby of Conference Hall I, Building I, 227 Nguyen
                            Van Cu Str., District 5, HCMC
                          </strong>
                          <br />- Chair:
                          <br />- Co-Chair:
                          <br />- Technical Assistant:
                        </td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 1</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 2</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 3</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 4</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 5</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 6</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s4">From Session 7</td>
                        <td className="s5">Will be updated</td>
                      </tr>
                      <tr>
                        <td className="s3">11:45-12:45</td>
                        <td className="s4" colSpan="2">
                          Lunchtime
                        </td>
                      </tr>
                      <tr>
                        <td className="s8 closeleft" colSpan="3">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            4. TRANSPORTATION FOR VINH LONG PROVINCE (MTU)
                          </Typography>
                          <strong>13:00-16:00</strong> Transportation for Vinh
                          Long Province (110 km, by Limousine bus)
                          <br />
                          <strong>16:00-18:00</strong> Sightseeing in Vinh Long
                          city
                          <br />
                          <strong>18:00-21:00</strong> Check in and dinner
                        </td>
                      </tr>

                      <tr style={{ height: "20px" }}></tr>
                      <tr>
                        <td className="s0  button-primary" colSpan="3">
                          November 12 (Tuesday) at Vinh Long Province and Ho Chi
                          Minh City
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">08:00-11:00</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            1. PARALLEL SESSION
                          </Typography>
                          <strong>
                            at Mien Tay Construction University, Vinh Long
                            province.
                          </strong>
                          <br />
                          <strong>Invited talk:</strong> 20 min (15 min for talk
                          and 5 min for discussion);
                          <br />
                          <strong>Oral presentation:</strong> 15min (12 min for
                          talk and 3 min for discussion)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:20-12:30</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            2. CLOSING CEREMONY
                          </Typography>
                          Location:…………….., Building I, MTU
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:20-11:30</td>
                        <td className="s4">1. Introduce Guests</td>
                        <td className="s5">MC</td>
                      </tr>
                      <tr>
                        <td className="s3">11:30-11:50</td>
                        <td className="s4">
                          2. Closing Remarks:
                          <Typography variant="subtitle1">
                            - From the president of MTU; <br />- Report of
                            ICEBA2024;
                          </Typography>
                        </td>
                        <td className="s5"></td>
                      </tr>
                      <tr>
                        <td className="s3">11:50-12:10</td>
                        <td className="s4">
                          3. The 5-Year Anniversary of ICEBA
                          <Typography variant="subtitle1">
                            - Speech from the president of VNUHCM-US;
                            <br />
                            - MoA Signing Ceremony;
                            <br />- Gifts for VIPs, Guests
                          </Typography>
                        </td>
                        <td className="s5"></td>
                      </tr>
                      <tr>
                        <td className="s3">12:10-12:20</td>
                        <td className="s4">
                          4. Outstanding Oral and poster presentation
                        </td>
                        <td className="s5"></td>
                      </tr>
                      <tr>
                        <td className="s3">11:20-11:30</td>
                        <td className="s4">
                          5. Welcome to ICEBA2025 in Taiwan
                        </td>
                        <td className="s5">
                          Co-chair Program ofICEBA2025 (NCU- Taiwan)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">12:30-13:30</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            3. FAREWELL LUNCH PARTY
                          </Typography>
                          <strong>MTU, Vinh Long Province</strong>
                        </td>
                      </tr>

                      <tr>
                        <td className="s3">14:00-17:00</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            4. TRANSPORTATION FOR HO CHI MINH CITY
                          </Typography>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className={innerClasses} style={{ paddingTop: 0 }}>
              <div className="hero-content">
                <Tabs
                  value={this.state.selectedPlace}
                  onChange={(event, newValue) =>
                    this.setState({ selectedPlace: newValue })
                  }
                  centered
                >
                  <Tab label="PARALLEL SESSION" {...a11yProps(0)} />
                  <Tab label="Posters Session" {...a11yProps(1)} />
                </Tabs>
                <div className={"tabsPanel"}>
                  <TabPanel value={this.state.selectedPlace} index={0}>
                    <div>
                      <div className="ritz grid-container" dir="ltr">
                        <table
                          className="waffle overview"
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <colgroup>
                            <col style={{ width: "120px" }}></col>
                            <col style={{ minWidth: "170px" }}></col>
                            <col style={{ minWidth: "170px" }}></col>
                          </colgroup>
                          <tbody>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 1. Applied Physics, Engineering Physics,
                                Nuclear Engineering
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            <tr className={"top"}>
                              <td className="s1 head">Schedule</td>
                              <td className="s1 head">
                                Name of invited speakers
                              </td>
                              <td className="s1 head">Title of talks</td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S1-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S1-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 2. Semiconductor Technologies,
                                Materials, Device and Related
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S2-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S2-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 3. MEMS, Biosensors and Application
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S3-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S3-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 4. Microelectronics, Embedded System and
                                AI&IoT
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S4-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S4-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 5. Computing Science, Simulation and
                                Modeling
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S5-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S5-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}

                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 6. Civil and Geology Engineering
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S6-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S6-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 7. Geology & Civil Engineering and
                                Construction, Machines & Mechanical Engineering
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room ….… , MTU <br />
                                Chair: &nbsp; Co-Chair: &nbsp;Secretary:
                              </td>
                            </tr>
                            {[1, 2, 3].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(8, 0, (i - 1) * 20)}-
                                  {getTime(8, 0, i * 20)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Invited talk S7-0{i}-I
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                09:00 - 09:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break
                              </td>
                            </tr>

                            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                              <tr style={{ height: "20px" }}>
                                <td className="s3" dir="ltr">
                                  {getTime(9, 15, (i - 1) * 15)}-
                                  {getTime(9, 15, i * 15)}
                                </td>
                                <td className="s4" dir="ltr">
                                  Oral S7-0{i}-O
                                  {/* <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography> */}
                                </td>
                                <td className="s5" dir="ltr">
                                  Will be updated
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel value={this.state.selectedPlace} index={1}>
                    <div>
                      <div className="ritz grid-container" dir="ltr">
                        <table
                          className="waffle overview"
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <colgroup>
                            <col style={{ width: "200px" }}></col>
                            <col style={{ minWidth: "270px" }}></col>
                          </colgroup>
                          <tbody>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="2"
                              >
                                Poster Session - November 11 afternoon 11:00 -
                                11:30
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="2"
                              >
                                - Chair: ...
                                <br />
                                - Co-Chair: ...
                                <br />- Technical Assistant: ...
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 1
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 2
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 3
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 4
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 5
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 6
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 7
                              </td>
                              <td className="s4" dir="ltr"></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabPanel>
                </div>
              </div>
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
