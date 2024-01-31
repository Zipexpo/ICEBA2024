import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import Roadmap from '../components/sections/Roadmap';
import Testimonial from '../components/sections/Testimonial';
import GenericSection from '../components/sections/GenericSection';
import Cta from '../components/sections/Cta';
// import some required elements
import Image from '../components/elements/Image';
import Input from '../components/elements/Input';
import ButtonGroup from '../components/elements/ButtonGroup';
import Button from '../components/elements/Button';
import {ButtonGroup as ButtonGroup2, Button as Button2} from "@mui/material";
import Modal from '../components/elements/Modal';
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';
import classNames from "classnames";
import ImportantDate from "../components/sections/ImportantDate";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container/Container";
import AutoSizer from "lp-react-virtualized-auto-sizer-react-18";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import 'react-pdf/dist/cjs/Page/AnnotationLayer.css';
import 'react-pdf/dist/cjs/Page/TextLayer.css';
import './pdfviewer.css';
import {submissionfullLink,submissionabstractLink} from "../utils/ulti";
import { Document, pdfjs, Page  } from 'react-pdf';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
            title: 'Paper Submission'
        };
        return (
            <React.Fragment>
                {/*<CssBaseline/>*/}
                <Container maxWidth="lg">
                    <GenericSection>
                        <h2>Call for Papers</h2>
                        <p>The purpose of the 5<sup >th</sup> ICEBA2024 is to link the researchers and scientists from Vietnam, Australia, and Asian countries in the field of Engineering Physics and microelectronics and semiconductors for their applications in biomedical engineering, health sciences, hi-tech agriculture, and smart cities.  Besides, we also contribute to promoting international cooperation activities on joint research projects and international co-publications.</p>

                        <p>ICEBA2024 will be hosted at VNUHCM-University of Science, Ho Chi Minh city, Vietnam and Mien Tay Construction University – MTU, Vietnam.</p>

                        <p>Authors are invited to submit original, unpublished research manuscripts related to
                            conference subjects.</p>

                        <p>Authors of accepted papers can opt into reproducible research decoration to publish according
                            to open science conventions; the details are described below.</p>

                    </GenericSection>
                    <GenericSection topDivider>
                        <h2>Topics of interest include (but not limited to)</h2>
                        <ul>
                            <li>Applied Physics, Engineering Physics, Electronic Engineering and Nuclear Engineering;
                            </li>
                            <li>MEMS (MicroElectronMechanical System), Sensors, Biosensors and semiconducting devices;
                            </li>
                            <li>Microelectronics, IC design, low consumption devices, Renewable Energy;</li>
                            <li>Computing Science, Simulations and Modeling;</li>
                            <li>Embedded systems, Internet of Things, Machine Learning, Artificial Intelligence, ...</li>
                            <li>Biomedical Engineering, Digital Microfluidics and their applications;</li>
                            <li>Geology and Civil Engineering;</li>
                            <li>Construction, Machines and Mechanical Engineering;</li>
                        </ul>
                    </GenericSection>
                    <GenericSection topDivider>
                        <h2>Paper Submission</h2>
                        <p>
                            Please submit your registration and abstract (around 200 words) via website or <a href = "mailto: 5iceba2024@gmail.com">5iceba2024@gmail.com</a> before <strong>July 10th , 2024</strong>.
                        </p>
                        <p>
                            Full paper for peer-review process for presentation (as template) must be submit before <strong>November 15th , 2024</strong>
                        </p>
                        {/*<p>*/}
                        {/*    All manuscripts will be reviewed and judged on correctness, originality, technical strength,*/}
                        {/*    rigor in analysis, quality of results, quality of presentation, and interest and relevance*/}
                        {/*    to the conference attendees.*/}
                        {/*</p>*/}
                        <p>
                            Forms and Formatting:
                            <ButtonGroup2 variant="contained" style={{marginLeft:5,marginRight:5}}>
                                <Button color={'primary'} href={require('../assets/files/5. 5ICEBA_oral and poster presentation information.doc')} target={'_blank'} className={'button'}
                                >Abstract template
                                </Button>
                                <Button2
                                    size="small"
                                    href={require('../assets/files/5. 5ICEBA_oral and poster presentation information.doc')}
                                    download
                                    className={'button'}
                                >
                                    <DownloadIcon />
                                </Button2>
                            </ButtonGroup2>
                            <ButtonGroup2 variant="contained" style={{marginLeft:5,marginRight:5}}>
                            <Button color={'primary'} href={require('../assets/files/6. ICEBA2024_ full paper template.docx')} target={'_blank'} className={'button'}
                            >Full paper template
                            </Button>
                            <Button2
                                size="small"
                                href={require('../assets/files/6. ICEBA2024_ full paper template.docx')}
                                download
                                className={'button'}
                            >
                                <DownloadIcon />
                            </Button2>
                        </ButtonGroup2>
                        </p>
                        <p>
                            Click here to submit: <Button color="primary"
                                                          style={{marginLeft:5,marginRight:5}}
                                                          tag={"a"} target="_blank"
                                                          href={submissionabstractLink}>ABSTRACT</Button>
                      <Button color="primary"
                                                          style={{marginLeft:5,marginRight:5}}
                                                          tag={"a"} target="_blank"
                                                          href={submissionfullLink}>FULL PAPER</Button>
                        </p>
                    </GenericSection>

                    <GenericSection topDivider>
                        <h2>Publications</h2>
                        <p><strong>The selected papers (from 4 to 8 pages)</strong> will be reviewed or recommended for publication in one of the below Scopus/SCIE/Scimago database Journal with your payment, such as:</p>
                        <ol style={{marginLeft:20}}>
                            <li>IEEJ Transactions on Electrical and Electronic Engineering (Scopus, Q3)</li>
                            <li>Special Issue of  Nanomaterials (MDPI, Scopus, IF:5.3, Q1)</li>
                            <li>Journal of Construction</li>
                            {/*<li>Nanomaterials (MDPI, Scopus, IF:5.3, Q1)</li>*/}
                        </ol>
                    </GenericSection>

                    <GenericSection>
                        <ImportantDate topDivider className="gradient-section" style={{paddingTop: 0}}
                                       topOuterDivider={false}/>
                    </GenericSection>
                    <Organization topDivider bottomDivider />
                    <Sponsor topDivider bottomDivider />
                    <GenericSection>
                        <Card sx={{ width:'100%' }} elevation={7}>
                            <CardContent>
                                <Box sx={{display:'flex', justifyContent:"space-between"}}>
                                    <Typography variant="h5" component="div">
                                        Call for paper flyer
                                    </Typography>
                                    <div>
                                        <IconButton href={require('../assets/files/2. Call For Papers_5thICEBA2024.pdf')}
                                                    download>
                                            <DownloadIcon />
                                        </IconButton>
                                        <IconButton href={require('../assets/files/2. Call For Papers_5thICEBA2024.pdf')}
                                        target={'_blank'}>
                                            <OpenInNewIcon />
                                        </IconButton>
                                    </div>
                                </Box>
                                <div style={{width:'100%',position:'relative',minHeight:100}}>
                                    <AutoSizer style={{width:'100%',height:'100%',position:'relative'}}>
                                        {({width,height}) => <div className="Example__container">
                                            <div className={'Example__container__document'}>
                                                <Document file={require('../assets/files/2. Call For Papers_5thICEBA2024.pdf')}
                                                          onLoadError={console.error}>
                                                    <Page pageNumber={1} width={width} height={height}/>
                                                </Document>
                                            </div></div>}
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
    maxWidth: '420px',
    margin: '0 auto'
}

export default Callforpaper;
