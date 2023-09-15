import React from 'react';
import Image from '../components/elements/Image';
import classNames from "classnames";
// import "../assets/agenda/resources/sheet.css"
import "./Program.css"
import {CardMedia, Tab, Tabs} from "@mui/material";
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
                                <h3>ICEBA Program at A Glance</h3>
                                <div className="ritz grid-container" dir="ltr">
                                    <table className="waffle overview" cellSpacing="0" cellPadding="0">
                                        <colgroup>
                                            <col style={{width: "132px"}}></col>
                                            <col style={{minWidth: "221px"}}></col>
                                            <col style={{width: "120px"}}></col>
                                        </colgroup>
                                        <tbody>
                                        <tr>
                                            <td className="s1 head">Date/Time</td>
                                            <td className="s1 head">Activity</td>
                                            <td className="s1 head">Room/Location</td>
                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="3">Saturday November 25, 2023</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">08:00 -- 18:00</td>
                                            <td className="s4" colSpan="2">Registration</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">08:45 - 09:00</td>
                                            <td className="s4">Opening</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3" dir="ltr">09:00 - 10:00</td>
                                            <td className="s4">Plenary Keynote 1</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:00 - 10:30</td>
                                            <td className="s4" colSpan="2">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">10:30 - 12:00</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">12:00 - 13:00</td>
                                            <td className="s4" colSpan="2">Lunch</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">13:00 - 14:00</td>
                                            <td className="s4">Plenary Keynote 2</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">14:00 - 15:00</td>
                                            <td className="s4">Poster Flash Talk</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">15:00 - 15:30</td>
                                            <td className="s4" colSpan="2">Tea/Coffee break</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">15:30 - 18:30</td>
                                            <td className="s4">Parallel Sessions</td>
                                            <td className="s5">TBA</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">18:30 - 20:30</td>
                                            <td className="s4" colSpan="2">Reception (Posters Display)</td>
                                        </tr>
                                        <tr style={{height: "20px"}}>

                                        </tr>
                                        <tr>

                                            <td className="s0  button-primary" colSpan="3">Sunday November 26, 2023</td>
                                        </tr>
                                        <tr>

                                            <td className="s3">All day</td>
                                            <td className="s4" colSpan="2">Meeting  of Program Committee for 5th ICEBA2024 and city tour</td>
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
                                    <Tab label="Oral Sessions" {...a11yProps(0)}/>
                                    <Tab label="Posters Session" {...a11yProps(1)}/>
                                </Tabs>
                                <div className={"tabsPanel"}>
                                    <TabPanel value={this.state.selectedPlace} index={0}>
                                        <div>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session 1- Applied Physics, Engineering Physics, Nuclear Engineering
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session 2. MEMS, Biosensors and Application
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session 3. Microelectronics, Embedded System and AI&IoT
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session 4. Computing Science, Simulation and Modeling
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}></tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Session 5. Biomedical Engineering and Medical devices
                                                        </td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>

                                            {/*            <td className="s1 button-secondary" dir="ltr" colSpan="2">Predictive and Autonomic Cloud Computing (Session Chair: Vincenzo De Maio)		</td>*/}

                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value={this.state.selectedPlace} index={1}>
                                        <div>
                                            <div className="ritz grid-container" dir="ltr">
                                                <table className="waffle" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col id="1554768505C0" style={{width: "94px"}}></col>
                                                        <col id="1554768505C1" style={{minWidth: "373px"}}></col>
                                                        <col id="1554768505C2" style={{width: "373px"}}></col>
                                                    </colgroup>
                                                    <tbody>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s0  button-primary" dir="ltr" colSpan="2">Poster Session - Saturday, November 25 afternoon 18:30 - 20:30 (PST) (During Reception)</td>

                                                    </tr>
                                                    <tr style={{height: "20px"}}>
                                                        <td className="s1 button-secondary" dir="ltr" colSpan="2">Le Vu Tuan Hung (VNUHCM-US,Vietnam), Chair <br/>Nguyen Van Toan (Tohoku Univ, Japan), Co- chair <br/>Kyeong-Sik Min (KMU& IKEEE, Korea), Co- chair</td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                                    <tr style={{height: "20px"}}>

                                                        <td className="s3" dir="ltr">6770</td>
                                                        <td className="s4" dir="ltr">
                                                        </td>
                                                        <td className="s5" dir="ltr">
                                                        </td>
                                                    </tr>
                                            {/*        /!*<tr style={{height: "20px"}}>*!/*/}

                                            {/*        /!*    <td className="s1 button-secondary" dir="ltr" colSpan="2">Chair: Dr. Jianwu Wang</td>*!/*/}

                                            {/*        /!*</tr>*!/*/}
                                            {/*        <tr style={{height: "20px"}}>*/}

                                            {/*            <td className="s3" dir="ltr">432</td>*/}
                                            {/*            <td className="s4" dir="ltr">An Effective Supplementation of Insufficient Data by Generative Adversarial Networks</td>*/}
                                            {/*            <td className="s5" dir="ltr">Abdulkabir Abdulraheem and Im Jung</td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">781</td>*/}
                                            {/*            <td className="s4">Communication and Energy Efficient Edge*/}
                                            {/*                Intelligence*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Sabtain Ahmad</td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">2621</td>*/}
                                            {/*            <td className="s4">Physics Informed Neural Networks: Reducing*/}
                                            {/*                Data Size Requirements via Hybrid Learning*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Charlotte Lew</td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">7972</td>*/}
                                            {/*            <td className="s4">Anomaly detection of high-dimensional data*/}
                                            {/*                based on Ensemble GANs with Dropout*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Wanghu Chen, Jilong Yao, Meilin Zhou, Jing Li*/}
                                            {/*                and Mengyang Shen*/}
                                            {/*            </td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">9907</td>*/}
                                            {/*            <td className="s4">Honey-CNT based Resistive Switching Device*/}
                                            {/*                for Neuromorphic Computing Application*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5 softmerge">Md Mehedi Hasan Tanim,*/}
                                            {/*                Abdi Yamil*/}
                                            {/*                Vicenciodelmoral, Zoe Templin, Xinghui Zhao and Feng*/}
                                            {/*                Zhao*/}
                                            {/*            </td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">5253</td>*/}
                                            {/*            <td className="s4">A Legal Analysis of Educational Data in the*/}
                                            {/*                Cloud*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Ben Cohen, Ashley Hu, Deisy Patino and Joel*/}
                                            {/*                Coffman*/}
                                            {/*            </td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">8329</td>*/}
                                            {/*            <td className="s4">Microservices vs Serverless Deployment in*/}
                                            {/*                AWS: A Case Study with an Image Processing*/}
                                            {/*                Application*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Raju Shrestha and Beebu Nisha</td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">9361</td>*/}
                                            {/*            <td className="s4">Analyzing Data Intensive Networks on Chips*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Junwei Zhang and Thomas G. Robertazzi</td>*/}
                                            {/*        </tr>*/}
                                            {/*        <tr style={{height: "20px"}}>*/}
                                            {/*            <td className="s3">5934</td>*/}
                                            {/*            <td className="s4">Geofence-Based Service Discovery in the*/}
                                            {/*                Computing Continuum*/}
                                            {/*            </td>*/}
                                            {/*            <td className="s5">Kurt Horvath, Dragi Kimovski, Christoph Uran,*/}
                                            {/*                Radu Prodan and Helmut Wöllik*/}
                                            {/*            </td>*/}
                                            {/*        </tr>*/}
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
