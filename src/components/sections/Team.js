import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import GenericSection from "./GenericSection";

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state ={members:[],tpc:[]}
    }

    componentDidMount() {
        // csv(universityData).then(un=>{
        //     let dict = {};
        //     un.forEach(u=>{
        //         dict[u.Short] = u;
        //     });
        //     csv(membersData).then(mem=>{
        //         mem.forEach(d=>{
        //             if (dict[d.Affiliation]){
        //                 d.Affiliation_logo = `./image/${dict[d.Affiliation].Short}.jpg`;
        //                 d.Affiliation = dict[d.Affiliation].Full;
        //             }
        //         })
        //         this.setState({members:groups(mem,d=>d.Category)});
        //     })
        // })
        //     .then(()=>csv(tpcData).then(data=>{
        //         this.setState(({tpc:data}))
        // }))
    }

    render() {
        // const {members} = this.state;
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            pushLeft,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'team section center-content',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'team-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        const tilesClasses = classNames(
            'tiles-wrap',
            pushLeft && 'push-left'
        );

        // const sectionHeader = {
        //   title: 'Meet the team - Lorem ipsum is placeholder text.',
        //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        // };

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <div className={innerClasses}>
                        <div className={"mb-32 mt-32"}>
                            <SectionHeader data={{title:'General Chairs'}} className="center-content" />
                            <div className={tilesClasses}>
                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}>Takahito Ono, Tohoku University-Japan</li>
                                    <li style={{textAlign:'left'}}>Huynh Van Tuan, Vietnam National University Ho Chi Minh City</li>
                                    <li style={{textAlign:'left'}}>Nguyen Van Hieu, Vietnam National University Ho Chi Minh City</li>
                                </ul>
                            </div>
                        </div>
                        <GenericSection topDivider>
                            <SectionHeader data={{title:'Scientific Committee'}} className="center-content" />
                            <div className={tilesClasses}>
                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}>Takahito Ono, Tohoku University-Japan</li>
                                    <li style={{textAlign:'left'}}>Chau Van Tao, VNUHCM-University of Science-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Masaya Toda, Tohoku University- Japan</li>
                                    <li style={{textAlign:'left'}}>Do Hong Tuan, VNUHCM-UT & IEEE Vietnam Section</li>
                                    <li style={{textAlign:'left'}}>Nguyen Van Hieu, Vietnam National University HCMC</li>
                                    <li style={{textAlign:'left'}}>Le Vu Tuan Hung, VNUHCM-University of Science-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Kyeong-Sik Min, Kookmin University& IKEEE-Korea</li>
                                    <li style={{textAlign:'left'}}>Ching Tak Shing Congo, National Chung Hsing University-Taiwan (R.O.C)</li>
                                    <li style={{textAlign:'left'}}>Jen-Inn Chyi, National Central University-Taiwan (R.O.C)</li>
                                    <li style={{textAlign:'left'}}>Nguyen Hoang Nam, VNU Ha Noi-University of Science-Vietnam</li>
                                </ul>
                            </div>
                        </GenericSection>
                        <GenericSection topDivider>
                            <SectionHeader data={{title:'Program Committee'}} className="center-content" />
                            <div className={tilesClasses}>
                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}>Huynh Van Tuan, VNUHCM-University of Science-Vietnam, Chair</li>
                                    <li style={{textAlign:'left'}}>Truong Cong Bang, MTU-Vietnam, Co-chair</li>
                                    <li style={{textAlign:'left'}}>Nguyen Van Toan, Japan, Co-chair</li>
                                    <li style={{textAlign:'left'}}>Tran Thien Thanh, VNUHCM-University of Science-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Hoang Trang, VNUHCM-University of Technology-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Kun-Yu Lai, National Central University-Taiwan</li>
                                    <li style={{textAlign:'left'}}>Huynh Chan Khon, VNUHCM-International University-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Vu The Dang, Osaka Metropolitan University-Japan</li>
                                    <li style={{textAlign:'left'}}>Dau Van, Griffith University-Australia</li>
                                    <li style={{textAlign:'left'}}>Nguyen Chi Nhan, VNUHCM-University of Science-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Nguyen Van Men, VNUHCM- An Giang University-Vietnam</li>
                                    <li style={{textAlign:'left'}}>Nguyen Quang Khoi, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}>Nguyen Chi Linh, VNUHCM-US Vietnam</li>
                                </ul>
                            </div>
                        </GenericSection>
                        <GenericSection topDivider>
                            <SectionHeader data={{title:'Publication Committee'}} className="center-content" />
                            <div className={tilesClasses}>
                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}>Takahito Ono, Tohoku University-Japan</li>
                                    <li style={{textAlign:'left'}}>Nguyen Van Hieu, Vietnam National University HCMC, Vietnam</li>
                                    <li style={{textAlign:'left'}}>Huynh Van Tuan, VNUHCM-University of Science-Vietnam</li>
                                </ul>
                            </div>
                        </GenericSection>
                        <GenericSection topDivider>
                            <SectionHeader data={{title:' Local Organizing Committee'}} className="center-content" />
                            <div className={tilesClasses}>

                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}> Nguyen Chi Nhan, VNUHCM-US Vietnam, Chair</li>
                                    <li style={{textAlign:'left'}}> Vo Hong Hai, VNUHCM-US Vietnam, Co-chair</li>
                                    <li style={{textAlign:'left'}}> Dao Huy Hoang, MTU Vietnam</li>
                                    <li style={{textAlign:'left'}}> Ho Thanh Huy, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}> Huynh Thanh Nhan, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}> Do Duc Cuong, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}> Trinh Thi Ly, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}> Phan Thien Luan, NCHU-Taiwan (R.O.C)</li>
                                </ul>
                            </div>
                        </GenericSection>
                        <GenericSection topDivider>
                            <SectionHeader data={{title:'Secretariats'}} className="center-content" />
                            <div className={tilesClasses}>
                                <ul style={{width:700}}>
                                    <li style={{textAlign:'left'}}>Nguyen Phuoc Hoang Khang, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}><strong>Hua Thi Hoang Yen, VNUHCM-US Vietnam</strong></li>
                                    <li style={{textAlign:'left'}}>Nguyen Vuong Thuy Ngan, VNUHCM-US Vietnam</li>
                                    <li style={{textAlign:'left'}}>Dinh Thi Lich, MTU Vietnam</li>
                                </ul>
                            </div>
                        </GenericSection>
                    </div>
                </div>
            </section>
        );
    }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
