import React from 'react';
import KeyNoteSection from '../components/sections/KeyNoteSection';
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Container from "@mui/material/Container/Container";
import GenericSection from "../components/sections/GenericSection";
import SectionHeader from "../components/sections/partials/SectionHeader";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";

const data = [
    {
        title:'',
        authorName: 'Prof. Takahito Ono',
        orgName: 'Tohoku University-Japan',
        avatar: 'Ono2010.jpg',
        abstract: `(will be updated)`,
        bio: `(will be updated)`
    },
    {
        title:'',
        authorName: 'Prof. Nguyen Huu Duc',
        orgName: 'Vietnam National University Hanoi',
        avatar: 'huuduc.jpg',
        abstract: `(will be updated)`,
        bio: `(will be updated)`
    },
    // {
    //     title:'',
    //     authorName: 'Prof. Chau Van Tao',
    //     orgName: 'VNUHCM-University of Science, HCMC, Vietnam',
    //     avatar: 'Chu Vn To.jpg',
    //     abstract: `(will be updated)`,
    //     bio: `(will be updated)`
    // },
    {
        title:'',
        authorName: 'Prof. Kyeong-Sik Min',
        orgName: 'Kook Min University- Korea',
        avatar: 'sikmin.jpg',
        abstract: `(will be updated)`,
        bio: `(will be updated)`
    },{
        title:'',
        authorName: 'Prof. Dao Viet Dzung',
        orgName: 'Griffith University- Australia',
        avatar: 'dzungdao.jpg',
        abstract: `(will be updated)`,
        bio: `(will be updated)`
    },{
        title:'InGaN quantum well: A new material for surface-enhanced Raman spectroscopy',
        authorName: 'Prof. Kun-Yu Lai',
        orgName: 'Department of Optics and Photonics, National Central University, TAIWAN',
        avatar: 'kunyu.jpg',
        abstract: `The extraordinary emission efficiency of InGaN quantum well (QW) has led to the thriving industry of solid-state lighting and laser diodes. Recently, the two dimensional nitride layer finds another promising application in surface-enhanced Raman spectroscopy (SERS), which is regarded as one of the most powerful biosensing technologies. In specific, the electrons confined by InGaN QWs can intensify the SERS signals by providing additional charge-transfer routes to the molecule/metal interface, as well as by inducing the localized surface plasmon resonance between the surface metal and QWs. These QW-contributed electrons allow every metal nanoparticle to be the SERS-active region (i.e. hot spot), not only increasing the Raman intensity, but also stabilizing the SERS signal. In this talk, I will share our recent studies on the SERS detection of single molecules and circulating tumor DNA for cancer diagnosis. Details on spectral characterizations and the potential for clinical applications will be presented.`,
        bio: <>Dr. Kun-Yu Lai is currently a professor in the Department of Optics and Photonics (DOP) at National Central University (NCU) in Taiwan. Prof. Lai received his Ph.D. degree in Electrical Engineering from North Carolina State University in USA in 2009. After working as the postdoctoral fellow in the Graduate Institute of Photonics and Optoelectronics at National Taiwan University in 2009-2011, he joined the faculty in DOP at NCU. Prof. Lai specializes in the growth/fabrication of novel III-nitride optoelectronic devices, including plasmonic biosensors and LEDs. He has published 56 articles in peer-reviewed SCI journals, with a total citation over 1700 times (H-index: 24). Detailed information on Prof. Lai’s research is available at: <a href={'http://kylai.cloudweb.com.tw/'} target={'_blank'}>http://kylai.cloudweb.com.tw/</a> </>
    },

]

class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                {data.map(d=><KeyNoteSection key={d.authorName} invertMobile imageFill className="illustration-section-03" content={d}/>)}
                {/*<CssBaseline/>*/}
                {/*<HeroFull content={{title:<a target="_blank" href="https://forms.gle/gRbujFsLi9fmRUe47">Upcoming!</a>,*/}
                {/*    inside:<>*/}
                {/*        <Image src={require(`./../assets/images/venue/inside1.jpg`)}*/}
                {/*               width={800}*/}
                {/*               height={400}/>*/}
                {/*    </>}}/>*/}
            </React.Fragment>
        );
    }
}

export default Keynote;
