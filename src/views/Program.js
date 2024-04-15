import React from "react";
import Image from "../components/elements/Image";
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
                  5th ICEBA 2024 Program at A Glance{" "}
                  <Button2
                    size="small"
                    href={require("../assets/files/Booklet_ Abstract and Program ICEBA2024.pdf")}
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
                          1st day of Conference (December 8, Friday)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">07:30 - 08:45</td>
                        <td className="s4">
                          Registration (Check list, nameplate,
                          Abstract&Program,etc.)
                        </td>
                        <td className="s5">
                          -Lobby of conference room: Building I, University of
                          Science, HCM city, Vietnam. -The secretary
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
                      {/*<tr>*/}

                      {/*    <td className="s3" dir="ltr">08:45 - 09:00</td>*/}
                      {/*    <td className="s4">Opening</td>*/}
                      {/*    <td className="s5" rowSpan={2}>Hall I</td>*/}
                      {/*</tr>*/}
                      <tr>
                        <td className="s3" dir="ltr">
                          09:00 - 09:10
                        </td>
                        <td className="s4">1. Introduce Guests (MC)</td>
                        <td className="s5" rowSpan="2">
                          MC: Dr. Ho Thanh Huy (VNUHCM-US)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">09:10 - 09:25</td>
                        <td className="s4">
                          2. Welcome speeches:
                          <Typography variant={"subtitle2"}>
                            - Welcome speech from the president of VNUHCM-US:
                            Prof. Tran Le Quan;
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Speech from Co-General Chair of 5th ICEBA2024:
                            Prof. Takahito Ono and Prof. Nguyen Van Hieu;
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Speech from Program Chair of 5th ICEBA2024: Prof.
                            Huynh Van Tuan.
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">09:25 - 09:35</td>
                        <td className="s4">
                          3. Offer the gift for invited speakers
                          <Typography variant={"subtitle2"}>
                            - Plenary talks
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            - Invited talks
                          </Typography>
                        </td>
                        <td className="s5">VNUHCM-US</td>
                      </tr>
                      <tr>
                        <td className="s3">09:40 - 09:50</td>
                        <td className="s4">
                          4. The MoU signing ceremony for the host of the 6th
                          ICEBA2025 conference in 2025
                        </td>
                        <td className="s5">
                          VNUHCM-University of Science, Tohoku
                          University-Ono/Toda Lab and National Central
                          University (Taiwan)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">09:50 - 10:00</td>
                        <td className="s4">Coffee break</td>
                        <td className="s5">Lobby</td>
                      </tr>
                      <tr>
                        <td className="s3">10:00 - 11:50</td>
                        <td className="s4" colSpan={2}>
                          5. Plenary and Invited Session:
                          <span style={{ fontWeight: "normal" }}>
                            15 min for talk and 5 min for discussion
                          </span>
                          <Typography variant={"subtitle2"}>
                            Chair: Prof. Takahito Ono (Tohoku University, Japan)
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            Co-Chair: Prof. Nguyen Van Hieu (VNUHCM, Vietnam)
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            Link google meet for online:{" "}
                            <a
                              href={"https://meet.google.com/zeb-ddeo-ukh"}
                              target={"_blank"}
                            >
                              https://meet.google.com/zeb-ddeo-ukh
                            </a>
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">10:00 - 10:20</td>
                        <td className="s4">
                          . Plenary #1 (code: PL-01). Prof. Takahito Ono
                          <Typography variant={"subtitle2"}>
                            Tohoku University, Japan
                          </Typography>
                        </td>
                        <td className="s5">
                          Micro/Nanosensors for Healthcare Applications
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">10:20 - 10:40</td>
                        <td className="s4">
                          . Plenary #2 (code: PL-02)(online) Prof. Dao Viet
                          Dzung
                          <Typography variant={"subtitle2"}>
                            Griffith University, Australia
                          </Typography>
                        </td>
                        <td className="s5">High Performance MEMS Sensors</td>
                      </tr>
                      <tr>
                        <td className="s3">10:40 - 11:00</td>
                        <td className="s4">
                          . Plenary #3 (code: PL-03) Prof. Kyeong-Sik Min
                          <Typography variant={"subtitle2"}>
                            Kookmin University, Seoul, Korea
                          </Typography>
                        </td>
                        <td className="s5">
                          Energy-efficient AI computing hardware by processing
                          in memory and local learning
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:00 - 11:15</td>
                        <td className="s4">
                          . Plenary #4 (code: PL-04) (online) Dr. Pham Thanh
                          Trung
                          <Typography variant={"subtitle2"}>
                            NISM, University of Namur, Belgium
                          </Typography>
                        </td>
                        <td className="s5">
                          New transfer technique for graphene and other 2D
                          materials on Si substrates for electronic devices
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:15 - 11:30</td>
                        <td className="s4">
                          . Plenary #5 (code: PL-05) (online) Prof. Congo Tak
                          Shing Ching
                          <Typography variant={"subtitle2"}>
                            National Chung Hsing University, Taiwan
                          </Typography>
                        </td>
                        <td className="s5">
                          Biological matter recognition using
                          micro-interdigitated electrode array and electrical
                          impedance spectroscopy
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:30 - 11:50</td>
                        <td className="s4">
                          . Plenary #6 (code: PL-06) Prof. Kun-Yu Lai
                          <Typography variant={"subtitle2"}>
                            DOP, National Central University, Taiwan
                          </Typography>
                        </td>
                        <td className="s5">
                          InGaN quantum well: A new material for
                          surface-enhanced Raman spectroscopy
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">11:40 - 12:30</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            2. POSTER SESSION
                          </Typography>
                          <strong>
                            Lobby of Conference Hall I, Building I, 227 Nguyen
                            Van Cu Str., District 5, HCMC
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">12:30 - 13:30</td>
                        <td className="s4" colSpan="2">
                          Lunch
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">14:00 - 16:30</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            3. PARALLEL SESSION
                          </Typography>
                          <strong>Invited talk:</strong> 20 min (15 min for talk
                          and 5 min for discussion);
                          <br />
                          <strong>Oral presentation:</strong> 15min (12 min for
                          talk and 3 min for discussion)
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">17:00 - 17:30</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            4. MEETING OF PROGRAM COMMITTEE FOR 6th ICEBA2024
                          </Typography>
                          Room B40, Building I, 227 Nguyen Van Cu Str., District
                          5, HCMC <br />
                          Participant: Scientific Committee, Program Committee,
                          Local Committee and other guests
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">18:00 - 21:00</td>
                        <td className="s8" colSpan="2">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            5. DINNER PARTY
                          </Typography>
                          <strong>241 Restaurant</strong>
                          <br />
                          <a
                            hreaf="https://www.google.com/maps/dir//241+restaurant/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31752f1893432449:0x764552857a6a56b2?sa=X&ved=2ahUKEwj-os72xuWCAxW4r1YBHfqZAd4Q9Rd6BAgYEAA"
                            target="_blank"
                          >
                            45 Phạm Viết Chánh Street, Ward Nguyễn Cư Trinh,
                            District 1, Hồ Chí Minh City
                          </a>
                          <br />
                          (Departure at 17:45 by walk)
                          <br />
                          Participant: VIP Guests, Invited speakers, Scientific
                          Committee, Program Committee, Local Committee,
                          Participantsetc.
                          <br />
                          Program: The summary of 5iceba2024, Poster prize,
                          Thanks gifts, Closing remarks and Dinner.
                        </td>
                      </tr>
                      <tr style={{ height: "20px" }}></tr>
                      <tr>
                        <td className="s0  button-primary" colSpan="3">
                          2nd day of Conference (December 9, Saturday): Tutorial
                          Session and City tour
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">07:30 - 07:50</td>
                        <td className="s4">Registration</td>
                        <td className="s5">
                          Lobby of E.303 (Building E, 3rd floor)
                        </td>
                      </tr>
                      <tr>
                        <td className="s8 closeleft" colSpan="3">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            1.TUTORIAL SESSION (for teaching assistants,
                            students, engineers,…){" "}
                          </Typography>
                          Room: E.303, Building 3, 3rd Floor, 227 Nguyen Van Cu
                          Str., District 5, HCMC
                          <br />
                          - Chair: Prof. Nguyen Van Toan (Tohoku University)
                          <br />- Technical Assistant: Mr. Tran Hoang Nhut and
                          Ms. Nguyen Ngoc Thao Nhi
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">08:00 - 09:00</td>
                        <td className="s4">
                          Tutorial #1
                          <Typography variant={"subtitle2"}>
                            Prof. Nguyen Van Toan (Tohoku University)
                          </Typography>
                        </td>
                        <td className="s5">
                          Nanoengineered micro-supercapacitors for self-powered
                          wireless sensing systems
                        </td>
                      </tr>
                      <tr>
                        <td className="s3">09:00 - 10:00</td>
                        <td className="s4">
                          Tutorial #2
                          <Typography variant={"subtitle2"}>
                            Prof. Prof. Kyeong-Sik Min (KMU, Korea)
                          </Typography>
                        </td>
                        <td className="s5">
                          Energy-efficient AI computing hardware by processing
                          in memory and local learning
                        </td>
                      </tr>
                      <tr>
                        <td className="s8 closeleft" colSpan="3">
                          <Typography variant={"subtitle1"} color={"primary"}>
                            2. CITY TOUR: Can Gio Mangrove Guided Forest Trip{" "}
                            <span
                              style={{ fontSize: "initial", color: "black" }}
                            >
                              (Optional)
                            </span>
                          </Typography>
                          (Around 60km far from VNUHCM-University of Science) by
                          BonPhuong Tour Company
                          <ul>
                            <li>
                              Ticket: 750000 VNĐ/person (Pay onsite at December
                              8th)
                            </li>
                            <li>
                              Send email for registration before December 5th
                              2024:{" "}
                              <a href="mailto: iceba@hcmus.edu.vn">
                                iceba@hcmus.edu.vn
                              </a>{" "}
                              (Ms. Hoang Yen)
                            </li>
                            <li>
                              More information:{" "}
                              <a
                                href={
                                  "https://tourbonphuong.com/tour-1-ngay-can-gio"
                                }
                                target={"_blank"}
                              >
                                https://tourbonphuong.com/tour-1-ngay-can-gio
                              </a>
                            </li>
                          </ul>
                          <table>
                            <tbody>
                              <tr>
                                <td>09:00</td>
                                <td>
                                  {" "}
                                  Pick up at University of Science (227 Nguyen
                                  Van Cu Street, District 5)
                                  <br />
                                  <ul>
                                    <li>Transportation by bus and ferry.</li>
                                    <li>
                                      See and take pictures of wild monkeys at
                                      Monkey Island (>1000 animals).
                                    </li>
                                    <li>
                                      Experience the Hoa Ca Crocodile Sanctuary.
                                    </li>
                                    <li>
                                      Explore mangrove forests and Sac Forest
                                      (named is a "floating base" in the
                                      resistance war).
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>12:00</td>
                                <td>
                                  {" "}
                                  Lunch at local restaurant.
                                  <br />
                                  Visit the 30/4 Beach and Hang Duong Seafoods
                                  Market.
                                </td>
                              </tr>
                              <tr>
                                <td>15:00</td>
                                <td> Departure for downtown</td>
                              </tr>
                              <tr>
                                <td>17:00-18:00</td>
                                <td> Arrive at University of Science.</td>
                              </tr>
                            </tbody>
                          </table>
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
                                Room B40 (4th floor, Building B), 227 Nguyen Van
                                Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Vo Luong Hong Phuoc
                                (VNUHCM-University of Science, Vietnam);
                                <br />
                                - Co-Chair: Asst. prof. Vu The Dang (Osaka
                                Metropolitan University, Japan);
                                <br />- Secretary: Nguyen Duy Khanh
                              </td>
                            </tr>
                            <tr className={"top"}>
                              <td className="s1 head">Schedule</td>
                              <td className="s1 head">
                                Name of invited speakers
                              </td>
                              <td className="s1 head">Title of talks</td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S1-01-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Vo Luong Hong Phuoc (VNUHCM-US, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Developing a Smart Water Quality Monitoring
                                System Using IoT Technologies
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:40
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S1-02-I
                                <Typography variant={"subtitle2"}>
                                  Asst. prof. Vu The Dang (Osaka Metropolitan
                                  University, Japan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Application of energy-resolving neutron imaging
                                to major-component analyses of materials using
                                four-channel superconducting detector.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:40 - 15:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-01-O
                                <Typography variant={"subtitle2"}>
                                  Doan Thi Thanh Nhan
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Self-absorption correction, gross-alpha
                                radioactivity measurements using gas
                                proportional counter
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-02-O
                                <Typography variant={"subtitle2"}>
                                  Nguyen Bui Trung Kien (VNUHCN- University of
                                  Science)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Strain Effect on the Anomalous Hall Conductivity
                                of Fe bcc
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:30 - 15:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-03-O
                                <Typography variant={"subtitle2"}>
                                  Pham Nguyen Duy Phuong
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Interpretation of logging while drilling (LWD)
                                documentation at the gray well, East mine Cuu
                                Long Basin.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:45 - 16:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-04-O
                                <Typography variant={"subtitle2"}>
                                  Doan Thi Thanh Nhan
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Preliminary study on radon concentrations in the
                                South Plain of Vietnam's groundwater
                                aquifers.Concentrations of radon in Tien Giang
                                province's groundwater aquifers
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:00 - 16:15
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-05-O
                                <Typography variant={"subtitle2"}>
                                  Nguyen Duc Anh
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Simulating Climate Impacts on Rice
                                Agroecosystems in An Giang Province: Pests,
                                Yield, and Resources
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:15 - 16:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S1-06-O
                                <Typography variant={"subtitle2"}>
                                  Huynh Thanh Tuan
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                The influence of water- based drilling mud and
                                oil-based drilling mud on well logging in Nam
                                Con Son Basin.
                              </td>
                            </tr>
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
                                Room: B41 (4th floor, Building B), 227 Nguyen
                                Van Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Le Vu Tuan Hung (VNUHCM-US,
                                Vietnam);
                                <br />
                                - Co-Chair: Prof. Kun Yu Lai (NCU-Taiwan) ;
                                <br />- Secretary: Nguyen Anh Thu
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S2-01-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Le Vu Tuan Hung (VNUHCM-US, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Role of semiconductor and metal nanoparticles
                                heterojunction in enhancing the SERS signal for
                                detection the banned chemical trace in food,
                                drug, and cosmetic.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:40
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S2-02-I
                                <Typography variant={"subtitle2"}>
                                  Dr. Nguyen Quang Khoi (VNUHCM-US, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Study of steady state thermal model for white
                                LEDs thermal management application at
                                encapsulant level
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:40 - 15:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S2-03-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Nguyen Hoang Nam (Hanoi VNU-University
                                  of Science, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Development of wound healing techniques using
                                stem-cell spray gun and bio-nanomembranes
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S2-01-O`}
                                <Typography variant={"subtitle2"}>
                                  Dr. Nguyen Van Men (AGU)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Plasmon properties in spin polarized
                                double-layer graphene structures
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:30 - 15:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S2-02-O`}
                                <Typography variant={"subtitle2"}>
                                  Dr. Nguyen Thi Thanh Van
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Design and numerical analysis of an active
                                Micro-T sinusoidal mixer with integrated
                                microelectrode cavity.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:45 - 16:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S2-03-O`}
                                <Typography variant={"subtitle2"}>
                                  Dr. Do Duc Cuong
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Large Enhancement of Intrinsic Spin Hall
                                Conductivity of β-W Based Alloys
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:00 - 16:15
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S2-04-O`}
                                <Typography variant={"subtitle2"}>
                                  Cu Duy Thanh (NCU- Taiwan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                High-Reflectivity Mo/Si Multilayer Mirrors for
                                EUV Applications Fabricated by Ion Beam
                                Sputtering
                              </td>
                            </tr>
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
                                Room: B42 (4th floor, Building B), 227 Nguyen
                                Van Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Nguyen Van Toan (Tohoku Univ,
                                Japan);
                                <br />
                                - Co-Chair: Prof. Nguyen Van Hieu
                                (VNUHCM,Vietnam);
                                <br />- Secretary: Nguyen Hoang Quan-MSc
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S3-01-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Nguyen Van Hieu (VNUHCM, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Using ML for determine the optimal size of the
                                heat sink for high performance of Thermoelectric
                                generators (TEGs) in the Aquaponic farm.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:40
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S3-02-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Nguyen Van Toan (Tohoku Univ.- Japan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Nanoengineered micro-supercapacitors for
                                self-powered wireless sensing systems
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:40 - 15:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S3-03-I
                                <Typography variant={"subtitle2"}>
                                  Dr. Hitoshi Nishino (Tamagawa Holdings Co.,
                                  Japan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                A high-precision 3-dimensional micro-mirror
                                actuated by piezo-actuators
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S3-01-O`}
                                <Typography variant={"subtitle2"}>
                                  Dr. Sura Nguyen (THSM, Mexico)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Characterizing joule heating effects on carbon
                                nanofibers: Calculating the temperature
                                coefficient of resistance for precise
                                nanostructure growth control
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:30 - 15:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S3-02-O`}
                                <Typography variant={"subtitle2"}>
                                  Zhijian Zhao (Japan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                High-sensitivity magnetic field sensor using
                                magnetic torque
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:45 - 16:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S3-03-O`}
                                <Typography variant={"subtitle2"}>
                                  Yi-Hsiu KAO (Japan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Enzyme-based Chemiresistive Creatinine Biosensor
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:00 - 16:15
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S3-04-O`}
                                <Typography variant={"subtitle2"}>
                                  Nguyen Hoang Quan
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                A power management circuit of Thermoelectric
                                Generator (TEGs) using wakeup-timer IC toward
                                the applications in green agriculture
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:30 - 16:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S3-05-O`}
                                <Typography variant={"subtitle2"}>
                                  Dr. Tran Ngoc Dang Khoa (IUH)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                High-sensitivity magnetic field sensor using
                                magnetic torque
                              </td>
                            </tr>
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
                                Room: E205 (2nd floor, Building E), 227 Nguyen
                                Van Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Kyeong-Sik Min (KMU, Korea);
                                <br />
                                - Co-Chair: Dr. Nguyen Chi Nhan (VNUHCM-US,
                                Vietnam) ;<br />- Secretary: Nguyen Phuoc Hoang
                                Khang-MSc.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S4-01-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Hoang Trang (VNUHCM-UT, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                A Novel Framework, methods of AI to Optimize in
                                Designing Analog IC
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:40
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S4-02-I
                                <Typography variant={"subtitle2"}>
                                  Dr. Nguyen Chi Nhan (VNUHCM-US, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Predicting the content of toxic substances in
                                aquaculture water using machine learning
                                approaches
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:40 - 15:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S4-03-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Truong Ngoc Son (HCM University of
                                  Technology and Education, Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Optimized memristor crossbar array for
                                neuromorphic computing system
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:35
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S4-04-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Jongsun Kim (School of Electronic &
                                  Electrical Engineering, Hongik University,
                                  Korea)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Design of on-chip clock generators for energy
                                efficient chiplet-based systems
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:35 - 15:50
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S4-01-O`}
                                <Typography variant={"subtitle2"}>
                                  Nguyen Hoang Trong
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                An Efficient Design of 45nm Charge-Pump
                                Phase-Locked Loop Architecture for Sub-1G IoT
                                Applications
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:50 - 16:05
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S4-02-O`}
                                <Typography variant={"subtitle2"}>
                                  Lu Trung Tin
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Enhanced Fuzzy Logic Control for Overcoming
                                Intrinsic Resistance in Inverted Pendulum
                                Systems
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:05 - 16:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S4-03-O`}
                                <Typography variant={"subtitle2"}>
                                  Phan Tan Phuc
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Optimizing Solar Energy Efficiency in Zero
                                Energy House: An Incremental Conductance
                                MPPT-Based Approach
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:20 - 16:35
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S4-04-O`}
                                <Typography variant={"subtitle2"}>
                                  Tran Thi Linh
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Naturalistic Driving Action Recognition and
                                Driver Drowsiness Detection System
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                16:35 - 16:50
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                {`Oral S4-05-O`}
                                <Typography variant={"subtitle2"}>
                                  Lam Hong Phuc
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Energy Management Strategy for Decarnbonized
                                Energy Sources in DC Residential Microgrid
                              </td>
                            </tr>
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
                                Room: E206 (2nd floor, Building E), 227 Nguyen
                                Van Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Huynh Van Tuan (VNUHCM-US,
                                Vietnam);
                                <br />
                                - Co-Chair: Dr. Do Duc Cuong(VNUHCM-US, Vietnam)
                                ;<br />- Secretary: Dr. Trinh Thi Ly.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S5-01-I
                                <Typography variant={"subtitle2"}>
                                  Dr. Vo Hong Hai (VUHCM-US)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Development of an FPGA-Based Pulse-Height
                                Analyzer for Scintillation Detectors in Gamma
                                Energy Spectroscopy
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:35
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S5-01-O
                                <Typography variant={"subtitle2"}>
                                  Dr. Le Nguyen Hoa Tien
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Calculating the Wave Propagation in Cu Lao Dung
                                Mangrove Forest (Soc Trang) using WAPROMAN model
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:35 - 14:50
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S5-02-O
                                <Typography variant={"subtitle2"}>
                                  Huynh Thanh Nhan
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Estimation of thickness samples using gamma
                                scattering techniques based on Machine learning
                                approach
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S5-03-O
                                <Typography variant={"subtitle2"}>
                                  Huynh Quoc Viet
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Applied the Maximal Overlap Discrete Wavelet
                                Transform and Short Time Fourier Transform
                                layers for classify the electroencephalogy of
                                schizophrenia patients
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:30 - 15:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S5-04-O
                                <Typography variant={"subtitle2"}>
                                  Phan Tung Anh
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Optimization of power calculation using LQR
                                control, stability analysis with Lyapunov
                                Equation and Sensor fault monitoring for Wind
                                Turbines
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:45 - 16:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S5-05-O
                                <Typography variant={"subtitle2"}>
                                  Tran Hoang Nhut
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Detection and diagnosis of rice leaf disease
                                using deep convolutional neural network.
                              </td>
                            </tr>

                            <tr style={{ height: "20px" }}></tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s0  button-primary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Session 6. Biomedical Engineering and Medical
                                devices
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="3"
                              >
                                Room: B.43 (4th floor, Building B), 227 Nguyen
                                Van Cu Str., District 5, HCMC
                                <br />
                                - Chair: Prof. Pham Thi Thu Hien
                                (VNUHCM-UI,Vietnam);
                                <br />
                                - Co-Chair: Dr. Huynh Chan Khon
                                (VNUHCM-IU,Vietnam);
                                <br />- Secretary: Nguyen Thi Tu Trinh.
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:00 - 14:20
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S6-01-I
                                <Typography variant={"subtitle2"}>
                                  Prof. Pham Thi Thu Hien (VNUHCM-UI,Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Detection and classification of breast cancer
                                utilizing polarization images and artificial
                                intelligence (AI) model
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:20 - 14:40
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Invited talk S6-02-I
                                <Typography variant={"subtitle2"}>
                                  Dr. Huynh Chan Khon (VNUHCM-IU,Vietnam)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Development of electrowetting on dieletric based
                                digital microfluidic platform toward automated
                                molecular biology assay
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                14:40 - 14:55
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S6-01-O
                                <Typography variant={"subtitle2"}>
                                  Dinh Thanh Dat
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                A Novel Cancer Cells Recognizer Tracking
                                Starvation-Induced Lipid Trafficking into
                                Mitochondria
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:00 - 15:15
                              </td>
                              <td
                                className="s4"
                                style={{ textAlign: "center" }}
                                colSpan={2}
                              >
                                Coffee break{" "}
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:15 - 15:30
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S6-02-O
                                <Typography variant={"subtitle2"}>
                                  Hua Thi Hoang Yen
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Denoising And Enhancing Image Quality For
                                Detection Accuracy In Mammograms
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:30 - 15:45
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S6-03-O
                                <Typography variant={"subtitle2"}>
                                  Le, Thi Thu Ngoc (Taiwan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Maintaining the Postharvest Fruit Quality using
                                UV-C LED System
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                15:45 - 16:00
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                Oral S6-04-O
                                <Typography variant={"subtitle2"}>
                                  Phan Thien Luan (Taiwan)
                                </Typography>
                              </td>
                              <td className="s5" dir="ltr">
                                {" "}
                                Development of a handheld impedance analyzer
                                using AD5941
                              </td>
                            </tr>
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
                                Poster Session - Friday, December 08 afternoon
                                11:40 - 12:30
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td
                                className="s1 button-secondary"
                                dir="ltr"
                                colSpan="2"
                              >
                                - Chair: Prof. Vu Thi Hanh Thu (VNUHCM-US,
                                Vietnam);
                                <br />
                                - Co-Chair: Dr.Nguyen Quang Khoi (VNUHCM-US,
                                Vietnam);
                                <br />- Technical Assistant: Huynh Thanh
                                Nhan-MSc (VNUHCM-US, Vietnam);
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 1
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S1.01-P, S1.02-P, S1.03-P, S1.04-P, S1.05-P,
                                S1.06-P, S1.07-P;
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 2
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S2.01-P, S2.02-P, S2.03-P, S2.04-P, S2.05-P,
                                S2.06-P;
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 3
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S3.01-P, S3.02-P, S3.03-P;
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 4
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S4.01-P, S4.02-P, S4.03-P;
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 5
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S5.01-P, S5.02-P, S5.03-P;
                              </td>
                            </tr>
                            <tr style={{ height: "20px" }}>
                              <td className="s3" dir="ltr">
                                From Session 6
                              </td>
                              <td className="s4" dir="ltr">
                                {" "}
                                S6.01-P, S6.02-P, S6.03-P;
                              </td>
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
