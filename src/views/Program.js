import React from 'react';
import Image from '../components/elements/Image';
import classNames from "classnames";
// import "../assets/agenda/resources/sheet.css"
import "./Program.css"
import {CardMedia, Tab, Tabs, Typography} from "@mui/material";
import {a11yProps, TabPanel} from "../components/elements/TabPanel";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import GenericSection from "../components/sections/GenericSection";

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: 0
        }
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
            'hero section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'hero-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        return (
            <React.Fragment>
                <section
                    {...props}
                    className={outerClasses}
                    id="overview"
                >
                    <div className="container">
                        <div className={innerClasses}>
                            <div className="hero-content">
                                <h3>4th ICEBA 2023 Program at A Glance</h3>
                                <div className="ritz grid-container" dir="ltr">
                                    <table className="waffle overview" cellSpacing="0" cellPadding="0">
                                        <colgroup>
                                            <col style={{width: "132px"}}></col>
                                            <col style={{minWidth: "120px"}}></col>
                                            <col style={{width: "221px"}}></col>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td className="s1 head">Date/Time</td>
                                            <td className="s1 head">Contents/Program</td>
                                            <td className="s1 head">Note</td>
                                        </tr>
                                        <tr>
                                            <td className="s0  button-primary" colSpan="3">1st day of Conference (December 8, Friday)</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 - 08:45</td>
                                            <td className="s4">Registration (Check list, nameplate,
                                                Abstract&Program,etc.)</td>
                                            <td className="s5">
                                                -Lobby of conference room: Building I,
                                                University of Science, HCM city,
                                                Vietnam.
                                                -The secretary
                                            </td>
                                        </tr>
                                        <tr>
                                            {/*<td className="s3">08:45 -- 09:00</td>*/}
                                            <td className="s8 closeleft" colSpan="3">
                                                <Typography variant={'subtitle1'} color={'primary'}>1.OPENING CEREMONY &PLENARY SESSION</Typography>
                                                <strong>Conference Hall, Building I, 227 Nguyen Van Cu Str., District 5, HCMC</strong>
                                            </td>
                                        </tr>
                                        {/*<tr>*/}

                                        {/*    <td className="s3" dir="ltr">08:45 - 09:00</td>*/}
                                        {/*    <td className="s4">Opening</td>*/}
                                        {/*    <td className="s5" rowSpan={2}>Hall I</td>*/}
                                        {/*</tr>*/}
                                        <tr>
                                            <td className="s3" dir="ltr">09:00 - 09:10</td>
                                            <td className="s4">1. Introduce Guests (MC)</td>
                                            <td className="s5" rowSpan="2">MC: Dr. Ho Thanh Huy
                                                (VNUHCM-US)
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="s3">09:10 - 09:25</td>
                                            <td className="s4">2. Welcome speeches:
                                                <Typography variant={'subtitle2'}>
                                                - Welcome speech from the Vice president of VNUHCM-US: Prof. Tran Minh Triet;
                                                </Typography>
                                                <Typography variant={'subtitle2'}>
                                                - Speech from Co-General Chair of 4th ICEBA2023: Prof. Takahito Ono and Prof. Nguyen Van Hieu;
                                                </Typography>
                                                <Typography variant={'subtitle2'}>
                                                    - Speech from Program Chair of 4th ICEBA2023: Prof. Huynh Van Tuan.
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="s3">09:25 - 09:35</td>
                                            <td className="s4">
                                                3. Offer the gifts for invited speakers
                                                <Typography variant={'subtitle2'}>
                                                    - Plenary talks
                                                </Typography>
                                                <Typography variant={'subtitle2'}>
                                                    - Invited talks
                                                </Typography>
                                            </td>
                                            <td className="s5">Vice President of VNUHCM-US</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">09:40 - 09:50</td>
                                            <td className="s4">4. The MoA signing ceremony for the
                                                Co/join Organizing 6ICEBA2025</td>
                                            <td className="s5">VNUHCM-University of Science and National Central University- Taiwan</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">09:50 - 10:00</td>
                                            <td className="s4">Coffee break</td>
                                            <td className="s5">Lobby</td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >10:00 - 11:50</td>
                                            <td className="s4" colSpan={2}>5. Plenary and Invited Session:
                                                <span style={{fontWeight:'normal'}}>15 min for talk and 5 min for discussion</span>
                                                <Typography variant={'subtitle2'}>
                                                    Chair: Prof. Takahito Ono (Tohoku University, Japan)
                                                </Typography>
                                                <Typography variant={'subtitle2'}>
                                                    Co-Chair: Prof. Nguyen Van Hieu (VNUHCM, Vietnam)
                                                </Typography>
                                                <Typography variant={'subtitle2'}>
                                                    Link google meet for online: (will be updated)
                                                </Typography>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >10:00 - 10:20</td>
                                            <td className="s4">. Plenary #1 (code: PL-01).
                                                Prof. Takahito Ono
                                                <Typography variant={'subtitle2'}>
                                                    Tohoku University, Japan
                                                </Typography>
                                            </td>
                                            <td className="s5">Micro/Nanosensors for Healthcare
                                                Applications</td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >10:20 - 10:40</td>
                                            <td className="s4">. Plenary #2 (code: PL-02)(online)
                                                Prof. Dao Viet Dzung
                                                <Typography variant={'subtitle2'}>
                                                    Griffith University, Australia
                                                </Typography>
                                            </td>
                                            <td className="s5">High Performance MEMS Sensors
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >10:40 - 11:00</td>
                                            <td className="s4">. Plenary #3 (code: PL-03)
                                                Prof. Kyeong-Sik Min
                                                <Typography variant={'subtitle2'}>
                                                    Kookmin University, Seoul, Korea
                                                </Typography>
                                            </td>
                                            <td className="s5">Energy-efficient AI computing
                                                hardware by processing in memory and
                                                local learning
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >11:00 - 11:15</td>
                                            <td className="s4">. Plenary #4 (code: PL-04)
                                                Dr. Pham Thanh Trung
                                                <Typography variant={'subtitle2'}>
                                                    NISM, University of Namur, Belgium
                                                </Typography>
                                            </td>
                                            <td className="s5">New transfer technique for graphene
                                                and other 2D materials on Si substrates
                                                for electronic devices
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >11:15 - 11:30</td>
                                            <td className="s4">. Plenary #5 (code: PL-05)
                                                Prof. Congo Tak Shing Ching
                                                <Typography variant={'subtitle2'}>
                                                    National Chung Hsing University, Taiwan
                                                </Typography>
                                            </td>
                                            <td className="s5">Biological matter recognition using
                                                micro-interdigitated electrode array and
                                                electrical impedance spectroscopy
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" >11:30 - 11:50</td>
                                            <td className="s4">. Plenary #6 (code: PL-06)
                                                Prof.  Kun-Yu Lai
                                                <Typography variant={'subtitle2'}>
                                                    DOP, National Central University, Taiwan
                                                </Typography>
                                            </td>
                                            <td className="s5">InGaN quantum well: A new material for surface-enhanced Raman spectroscopy
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3">11:40 - 12:30</td>
                                            <td className="s8" colSpan="2">
                                                <Typography variant={'subtitle1'} color={'primary'}>2. POSTER SESSION</Typography>
                                                <strong>Lobby of Conference Hall I, Building I, 227 Nguyen Van Cu Str., District 5, HCMC</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3">12:30 - 13:30</td>
                                            <td className="s4" colSpan="2">Lunch</td>
                                        </tr>
                                        <tr>
                                            <td className="s3">14:00 - 16:30</td>
                                            <td className="s8" colSpan="2">
                                                <Typography variant={'subtitle1'} color={'primary'}>3. PARALLEL SESSION</Typography>
                                                <strong>Invited talk:</strong> 20 min (15 min for talk and 5 min for discussion);<br/>
                                                <strong>Oral presentation:</strong> 15min (12 min for talk and 3 min for discussion)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3" rowSpan={2}>17:00 - 17:30</td>
                                            <td className="s8" colSpan="2">
                                                <Typography variant={'subtitle1'} color={'primary'}>4. MEETING OF PROGRAM COMMITTEE FOR 5th ICEBA2024</Typography>
                                                Room: …, Building I, 227 Nguyen Van Cu Str., District 5, HCMC
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s8" colSpan="2">
                                                <ul>
                                                    <li>Representative of VNUHCM-University of Science</li>
                                                    <li>Representative of Tohoku University, Japan</li>
                                                    <li>Representative of IEEE Vietnam Chapter</li>
                                                    <li>Representative of IKEEE Korea</li>
                                                    <li>Representative of HSIA Vietnam</li>
                                                    <li>Program Committee of 4th ICEBA2023 and Others</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3">18:00 - 21:00</td>
                                            <td className="s8" colSpan="2">
                                                <Typography variant={'subtitle1'} color={'primary'}>5. DINNER PARTY</Typography>
                                                <strong>Phuc An Khang Restaurant (German Beer)</strong><br/>
                                                (Departure at 17:45 by walk)
                                            </td>
                                        </tr>
                                        <tr style={{height: "20px"}}>

                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="3">2nd day of Conference (December 9, Saturday)
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 - 08:15</td>
                                            <td className="s4">Registration</td>
                                            <td className="s5">Lobby of E.303 (Building E, 3rd
                                                floor)</td>
                                        </tr>
                                        <tr>
                                            <td className="s8 closeleft" colSpan="3" >
                                                <Typography variant={'subtitle1'} color={'primary'}>1.TUTORIAL SESSION (for teaching assistants, students, engineers,…) </Typography>
                                                Room: E.303, Building 3, 3rd Floor, 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                - Chair: Prof. Nguyen Van Toan (Tohoku University)<br/>
                                                - Technical Assistant:
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="s3">08:00 - 09:00</td>
                                            <td className="s4">Tutorial #1</td>
                                            <td className="s5">TBC</td>
                                        </tr>
                                        <tr>
                                            <td className="s3">09:00 - 10:00</td>
                                            <td className="s4">Tutorial #2</td>
                                            <td className="s5">TBC</td>
                                        </tr>
                                        <tr>
                                            <td className="s8 closeleft" colSpan="3" >
                                                <Typography variant={'subtitle1'} color={'primary'}>2. CITY TOUR: Can Gio Mangrove Guided Forest Trip <span style={{fontSize:'initial', color:'black'}}>(Optional)</span></Typography>
                                                (Around 60km far from VNUHCM-University of Science, by car, 8hours)<br/><br/>
                                                Visit Can Gio Mangrove forest, enjoy a trip to Monkey Island, spot an abundance of wildlife in
                                                the forest, driving on a cano boat and enjoy local foods
                                                <table>
                                                    <tbody>
                                                    <tr>
                                                        <td>09:00</td><td> Pick up at hotel</td></tr>
                                                    <tr><td>10:00-12:00</td><td> Transportation and Can Gio ferry (from downtown to Can Gio rural district)</td></tr>
                                                    <tr><td>12:00-16:00</td><td> Lunch, sightseeing tours</td></tr>
                                                    <tr><td>16:00-18:00</td><td> Return downtown of HCMC.</td></tr>
                                                    <tr><td>Around 18:30</td><td>Hotel</td>
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


                        <div className={innerClasses} style={{paddingTop:0}}>
                            <div className="hero-content">
                                <Tabs value={this.state.selectedPlace}
                                      onChange={(event, newValue) => this.setState({selectedPlace: newValue})} centered>
                                    <Tab label="PARALLEL SESSION" {...a11yProps(0)}/>
                                    <Tab label="Posters Session" {...a11yProps(1)}/>
                                </Tabs>
                                <div className={"tabsPanel"}>
                                    <TabPanel value={this.state.selectedPlace} index={0}>
                                        <div>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle overview" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col style={{width: "120px"}}></col>
                                                        <col style={{minWidth: "170px"}}></col>
                                                        <col style={{minWidth: "170px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">Session 1. Applied Physics, Engineering Physics, Nuclear Engineering</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room B40 (4th floor, Building B), 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Vo Luong Hong Phuoc (VNUHCM-University of Science, Vietnam);<br/>
                                                            - Co-Chair: Asst. prof. Vu The Dang (Osaka Metropolitan University, Japan);<br/>
                                                            - Secretary: Nguyen Duy Khanh
                                                        </td>
                                                    </tr>
                                                    <tr className={'top'}>
                                                        <td className="s1 head">Schedule</td>
                                                        <td className="s1 head">Name of invited speakers</td>
                                                        <td className="s1 head">Title of talks</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S1-01-I
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Vo Luong Hong Phuoc
                                                                (VNUHCM-US, Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Developing a Smart Water Quality Monitoring System Using IoT Technologies
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S1-02-I
                                                            <Typography variant={'subtitle2'}>
                                                                Asst. prof. Vu The Dang (Osaka Metropolitan University, Japan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Application of energy-resolving neutron imaging to major-component analyses of materials using four-channel superconducting detector.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Oral S1-01-O
                                                            <Typography variant={'subtitle2'}>
                                                                Doan Thi Thanh Nhan
                                                                (Center for Nuclear Technologies)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Self-absorption correction, gross-alpha radioactivity measurements using gas proportional counter
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> Oral S1-02-O
                                                            <Typography variant={'subtitle2'}>
                                                                Nguyen Bui Trung Kien
                                                                (VNUHCN- University of Science)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Strain Effect on the Anomalous Hall Conductivity of Fe bcc
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> Oral S1-03-O
                                                            <Typography variant={'subtitle2'}>
                                                                Pham Nguyen Duy Phuong
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Interpretation of logging while drilling (LWD) documentation at the gray well, East mine Cuu Long Basin.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> Oral S1-04-O
                                                            <Typography variant={'subtitle2'}>
                                                                Doan Thi Thanh Nhan
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Preliminary study on radon concentrations in the South Plain of Vietnam's groundwater aquifers.Concentrations of radon in Tien Giang province's groundwater aquifers
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> Oral S1-05-O
                                                            <Typography variant={'subtitle2'}>
                                                                Nguyen Duc Anh
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Simulating Climate Impacts on Rice Agroecosystems in An Giang Province: Pests, Yield, and Resources
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:15 - 16:30</td>
                                                        <td className="s4" dir="ltr"> Oral S1-06-O
                                                            <Typography variant={'subtitle2'}>
                                                                Huynh Thanh Tuan
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> The influence of water- based drilling mud and oil-based drilling mud on well logging in Nam Con Son Basin.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">Session 2. Semiconductor Technologies, Materials, Device and Related
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room: B41 (4th floor, Building B), 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Le Vu Tuan Hung (VNUHCM-US, Vietnam);<br/>
                                                            - Co-Chair: Prof. Kun Yu Lai (NCU-Taiwan) ;<br/>
                                                            - Secretary: Nguyen Anh Thu
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S2-01-I
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Le Vu Tuan Hung (VNUHCM-US, Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Role of semiconductor and metal nanoparticles heterojunction in enhancing the SERS signal for detection the banned chemical trace in food, drug, and cosmetic.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S2-02-I
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Nguyen Quang Khoi
                                                                (VNUHCM-US, Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Study of steady state thermal model for white LEDs thermal management application at encapsulant level
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Invited talk S2-03-I
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Nguyen Hoang Nam (Hanoi VNU-University of Science, Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Development of wound healing techniques using stem-cell spray gun and bio-nanomembranes
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S2-01-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Nguyen Van Men (AGU)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Plasmon properties in spin polarized double-layer graphene structures
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> {`Oral S2-02-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Nguyen Thi Thanh Van
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Design and numerical analysis of an active Micro-T sinusoidal mixer with integrated microelectrode cavity.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> {`Oral S2-03-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Do Duc Cuong
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Large Enhancement of Intrinsic Spin Hall Conductivity of β-W Based Alloys
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> {`Oral S2-04-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Cu Duy Thanh (NCU- Taiwan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> High-Reflectivity Mo/Si Multilayer Mirrors for EUV Applications Fabricated by Ion Beam Sputtering
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">
                                                            Session 3. MEMS, Biosensors and Application
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room: B42 (4th floor, Building B), 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Nguyen Van Toan (Tohoku Univ, Japan);<br/>
                                                            - Co-Chair: Prof. Nguyen Van Hieu (VNUHCM,Vietnam);<br/>
                                                            - Secretary: Nguyen Hoang Quan-MSc (Hand phone: 0938551383)
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S3-01-I
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Nguyen Van Hieu (VNUHCM,
                                                                Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Using ML for determine the optimal size of the heat sink for high performance of Thermoelectric generators (TEGs) in the Aquaponic farm.
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S3-02-I
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Nguyen Van Toan (Tohoku Univ.-
                                                                Japan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Nanoengineered micro-supercapacitors
                                                            for self-powered wireless sensing systems
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Invited talk S3-03-I
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Hitoshi Nishino (Tamagawa
                                                                Holdings Co., Japan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> A high-precision 3-dimensional micro-mirror actuated by piezo-actuators
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S3-01-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Sura Nguyen (THSM, Mexico)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Characterizing joule heating effects on carbon nanofibers: Calculating the temperature coefficient of resistance for precise nanostructure growth control
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> {`Oral S3-02-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Zhijian Zhao (Japan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> High-sensitivity magnetic field sensor using magnetic torque
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> {`Oral S3-03-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Yi-Hsiu KAO (Japan)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Enzyme-based Chemiresistive Creatinine Biosensor
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> {`Oral S3-04-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Nguyen Hoang Quan
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> A power management circuit of Thermoelectric Generator (TEGs) using  wakeup-timer IC toward the applications in green agriculture
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:15 - 16:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S3-05-O`}
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Tran Ngoc Dang Khoa (IUH)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> High-sensitivity magnetic field sensor using magnetic torque
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">
                                                            Session 4. Microelectronics, Embedded System and AI&IoT
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room: ….. Building I, 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Kyeong-Sik Min (KMU, Korea);<br/>
                                                            - Co-Chair: Dr. Nguyen Chi Nhan (VNUHCM-US, Vietnam) ;<br/>
                                                            - Technical Assistant: ….
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S4-01
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Hoang Trang (VNUHCM-UT,
                                                                Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> A Novel Framework, methods of AI to
                                                            Optimize in Designing Analog IC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S4-02
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Nguyen Chi Nhan (VNUHCM-US,
                                                                Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Invited talk S4-03
                                                            <Typography variant={'subtitle2'}>

                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S4 - 01`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> {`Oral S4 - 02`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> {`Oral S4 - 03`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> {`Oral S4 - 04`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:15 - 16:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S4 - 05`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">
                                                            Session 5. Computing Science, Simulation and Modeling
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room: ….. Building I, 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Huynh Van Tuan (VNUHCM-US,Vietnam);<br/>
                                                            - Co-Chair: Dr. Do Duc Cuong(VNUHCM-US,Vietnam) ;<br/>
                                                            - Technical Assistant: ….
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S5-01
                                                            <Typography variant={'subtitle2'}>

                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S5-02
                                                            <Typography variant={'subtitle2'}>
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Invited talk S5-03
                                                            <Typography variant={'subtitle2'}>

                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S5 - 01`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> {`Oral S5 - 02`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> {`Oral S5 - 03`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> {`Oral S5 - 04`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:15 - 16:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S5 - 05`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>

                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="3">
                                                            Session 6. Biomedical Engineering and Medical devices
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="3">
                                                            Room: ….. Building I, 227 Nguyen Van Cu Str., District 5, HCMC<br/>
                                                            - Chair: Prof. Pham Thi Thu Hien (VNUHCM-UI,Vietnam);<br/>
                                                            - Co-Chair: Dr. Huynh Chan Khon (VNUHCM-IU,Vietnam);<br/>
                                                            - Technical Assistant: ….
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:00 - 14:20</td>
                                                        <td className="s4" dir="ltr"> Invited talk S6-01
                                                            <Typography variant={'subtitle2'}>
                                                                Prof. Pham Thi Thu Hien (VNUHCM-UI,Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Detection and classification of breast
                                                            cancer utilizing polarization images
                                                            and artificial intelligence (AI) model
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:20 - 14:40</td>
                                                        <td className="s4" dir="ltr"> Invited talk S6-02
                                                            <Typography variant={'subtitle2'}>
                                                                Dr. Huynh Chan Khon (VNUHCM-IU,Vietnam)
                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> Development of electrowetting on
                                                            dieletric based digital microfluidic
                                                            platform toward automated molecular
                                                            biology assay
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">14:40 - 15:00</td>
                                                        <td className="s4" dir="ltr"> Invited talk S6-03
                                                            <Typography variant={'subtitle2'}>

                                                            </Typography>
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:00 - 15:15</td>
                                                        <td className="s4" style={{textAlign:'center'}} colSpan={2}>Coffee break </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:15 - 15:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S6 - 01`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:30 - 15:45</td>
                                                        <td className="s4" dir="ltr"> {`Oral S6 - 02`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">15:45 - 16:00</td>
                                                        <td className="s4" dir="ltr"> {`Oral S6 - 03`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:00 - 16:15</td>
                                                        <td className="s4" dir="ltr"> {`Oral S6 - 04`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">16:15 - 16:30</td>
                                                        <td className="s4" dir="ltr"> {`Oral S6 - 05`}
                                                        </td>
                                                        <td className="s5" dir="ltr"> TBC
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
                                                <table className="waffle overview" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col style={{width: "200px"}}></col>
                                                        <col style={{minWidth: "270px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Poster Session - Friday, December 08 afternoon 11:40 - 12:30</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">- Chair: Prof. Vu Thi Hanh Thu (VNUHCM-US, Vietnam);<br/>
                                                            - Co-Chair: Dr.Nguyen Quang Khoi (VNUHCM-US, Vietnam);<br/>
                                                            - Technical Assistant: Huynh Thanh Nhan-MSc (VNUHCM-US, Vietnam);</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 1</td>
                                                        <td className="s4" dir="ltr"> S1.01-P, S1.02-P, S1.03-P, S1.04-P, S1.05-P, S1.06-P, S1.07-P;
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 2</td>
                                                        <td className="s4" dir="ltr"> S2.01-P, S2.02-P, S2.03-P, S2.04-P, S2.05-P, S2.06-P;
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 3</td>
                                                        <td className="s4" dir="ltr"> S3.01-P, S3.02-P, S3.03-P;
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 4</td>
                                                        <td className="s4" dir="ltr"> S4.01-P, S4.02-P, S4.03-P;
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 5</td>
                                                        <td className="s4" dir="ltr"> S5.01-P, S5.02-P, S5.03-P;
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s3" dir="ltr">From Session 6</td>
                                                        <td className="s4" dir="ltr"> S6.01-P, S6.02-P, S6.03-P;
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
    maxWidth: '420px',
    margin: '0 auto'
}

export default Program;
