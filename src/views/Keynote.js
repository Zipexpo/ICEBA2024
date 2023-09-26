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
    // {
    //     title:'',
    //     authorName: 'Prof. Nguyen Huu Duc',
    //     orgName: 'Vietnam National University Hanoi',
    //     avatar: 'huuduc.jpg',
    //     abstract: `(will be updated)`,
    //     bio: `(will be updated)`
    // },{
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
        title:'',
        authorName: 'Prof. Kun-Yu Lai',
        orgName: 'National Central University- Taiwan (R.O.C)',
        avatar: 'kunyu.jpg',
        abstract: `(will be updated)`,
        bio: `(will be updated)`
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
