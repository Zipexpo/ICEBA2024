import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import GenericSection from "./GenericSection";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = { members: [], tpc: [] };
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
      "team section center-content",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "team-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    // const sectionHeader = {
    //   title: 'Meet the team - Lorem ipsum is placeholder text.',
    //   paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    // };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={"mb-32 mt-32"}>
              <SectionHeader
                data={{ title: "General Chairs" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Takahito Ono, Tohoku University-Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Van Hieu, Vietnam National University Ho Chi Minh
                    City
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Huynh Van Tuan, VNUHCM-University of Science, Vietnam
                  </li>
                </ul>
              </div>
            </div>
            <GenericSection topDivider>
              <SectionHeader
                data={{ title: "International Scientific Committee" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Takahito Ono, Tohoku University-Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Nguyen Van Hieu, Vietnam National University Ho Chi Minh
                    City
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Masaya Toda, Tohoku University- Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Chau Van Tao, VNUHCM-University of Science-Vietnam
                  </li>
                  
                  <li style={{ textAlign: "left" }}>
                    Do Hong Tuan, VNUHCM-UT & IEEE Vietnam Section
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Tran Tri Nang, Minnesota University-USA
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Philippe Durouchux, ESIEA-France
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Jan Schulz, Jade Univ. of Applied Sciences-Germany
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Dzung Dao, Griffith University-Australia
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Donghan Lee, Chungnam National University-Korea
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Jen-Inn Chyi, National Central University-Taiwan (R.O.C)
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Van Xuan, Mien Tay Construction University-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Le Vu Tuan Hung, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Kyeong-Sik Min, Kookmin University& IKEEE-Korea
                  </li>
                  <li style={{ textAlign: "left", listStyle: "none" }}>…</li>
                </ul>
              </div>
            </GenericSection>
            <GenericSection topDivider>
              <SectionHeader
                data={{ title: "Program Committee" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Huynh Van Tuan, VNUHCM-University of Science-Vietnam, Chair
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Van Toan, Tohoku University-Japan, Co-chair
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Truong Cong Bang, Mien Tay Construction University-Vietnam,
                    Co-chair
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Kun-Yu Lai, National Central University-Taiwan (R.O.C)
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Ching Tak Shing Congo, National Chung Hsing University-Taiwan (R.O.C)
                  </li>

                  <li style={{ textAlign: "left" }}>
                    Tran Thien Thanh, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Hoang Trang, VNUHCM-University of Technology-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Huynh Chan Khon, VNUHCM-International University-Vietnam;
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Vu The Dang, Osaka Metropolitan University-Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Chi Nhan, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Pham Thanh Trung, Namur University-Belgium
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Nguyen Hoang Nam, VNU Ha Noi-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Aie Boosong, RMUTK, Bangkok-Thailand
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Nguyen Phuc Vinh, Synopsys-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Quang Khoi, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Chi Linh, VNUHCM-University of Science-Vietnam
                  </li>
                </ul>
              </div>
            </GenericSection>
            <GenericSection topDivider>
              <SectionHeader
                data={{ title: "Publication Committee" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Takahito Ono, Tohoku University-Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                  Nguyen Van Hieu, Vietnam National University HCMC-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Masaya Toda, Tohoku University-Japan
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Huynh Van Tuan, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Van Xuan, Mien Tay Construction University-Vietnam
                  </li>
                </ul>
              </div>
            </GenericSection>
            <GenericSection topDivider>
              <SectionHeader
                data={{ title: " Local Organizing Committee" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Chi Nhan, VNUHCM-University of Science Vietnam, Chair
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Vo Hong Hai, VNUHCM-University of Science Vietnam, Co-chair
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Dao Huy Hoang, Mien Tay Construction University
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Ho Thanh Huy, VNUHCM-University of Science Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Huynh Thanh Nhan, VNUHCM-University of Science Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Do Duc Cuong, VNUHCM-University of Science Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Trinh Thi Ly, VNUHCM-University of Science Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Phan Thien Luan, NCHU-Taiwan (R.O.C)
                  </li>
                </ul>
              </div>
            </GenericSection>
            <GenericSection topDivider>
              <SectionHeader
                data={{ title: "Secretariats" }}
                className="center-content"
              />
              <div className={tilesClasses}>
                <ul style={{ width: 700 }}>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Phuoc Hoang Khang, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Hua Thi Hoang Yen, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Nguyen Vuong Thuy Ngan, VNUHCM-University of Science-Vietnam
                  </li>
                  <li style={{ textAlign: "left" }}>
                    Dinh Thi Lich, Mien Tay Construction University-Vietnam
                  </li>
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
