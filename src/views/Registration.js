import React from "react";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Pricing from "../components/sections/Pricingv2";
import GenericSection from "../components/sections/GenericSection";
import ImportantDate from "../components/sections/ImportantDate";
import { registerLink } from "../utils/ulti";
import ButtonGroup from "../components/elements/ButtonGroup";

const fees = [
  {
    title: "",
    // 'title': 'Conference fee registration',
    // 'subtitle': 'Abstract book, coffee break, meals',
    list: [
      {
        price: [
          ["", "Free", ""],
          ["", "Free", ""],
        ],
        description: [
          "Plenary",
          "Invited speakers",
          "Program committee",
          "Scientific committee",
        ],
      },
      {
        price: [
          ["$", "150.00", "on-site $200"],
          ["", "3.000.000", "VNĐ"],
        ],
        description: ["Professors", "Researchers", "Lecturers"],
      },
      {
        price: [
          ["$", "75.00", "on-site $100"],
          ["", "1.500.000", "VNĐ"],
        ],
        description: ["Students and belong"],
      },
    ],
  },
];

const deadline = [
  { key: "Abstract submission and registration", date: "10 Jun 2024" },
  { key: "Conference payment fee", date: "10 October 2024", prefix: "before" },
];
class Keynote extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pricing
          pricingSwitcher={true}
          priceOutput={fees}
          priceNote={[``, ""]}
          sectionHeader={{
            title: "Conference fee registration",
            paragraph: (
              <>
                <h5>Abstract book, coffee break, meals</h5>
              </>
            ),
          }}
          link={registerLink}
          // extraContent={<div className={'center-content'}>
          //     <Button tag={'a'}
          //             color={'primary'}
          //             wide
          //             target={"_blank"}
          //             href={"https://web.cvent.com/event/0f9fb382-31de-4881-ac2f-d3a09f159ca7/websitePage:f5f1940b-980e-4398-96f6-3b681ef5e4a3"}>
          //     More information</Button></div>}
        />
        <ImportantDate topDivider event={deadline} />
        <GenericSection topOuterDivider>
          <h2 className={"mt-0 center-content"}>
            Important Author Information
          </h2>
          {/*<p>At least one author per paper must be registered as an AUTHOR at the full Member / Non-Member registration rate, regardless of whether or not they are students.</p>*/}
          <p>The author registration deadline is {deadline[0].date}.</p>
          <ul>
            <li>Each Author Registration is valid for ONE paper.</li>
            <li>
              If necessary, up to 4 additional papers can be purchased per
              author registration for an additional fee.
            </li>
            <li>
              Each paper may contain up to 2 additional pages for a fee of
              $100/page.
            </li>
            <li>
              Foreign authors/researchers/visitors can pay the registration fee
              directly at the front desk receptionist.
            </li>
          </ul>
          <p>
            For questions regarding paper submissions, please contact secretary
            at <a href={"mailto:iceba@hcmus.edu.vn"}>iceba@hcmus.edu.vn</a>.
          </p>
          {/*<p>*/}
          {/*    Visa letters can be generated by the IEEE registration system after the payment is made. If you need help, contact the Local Arrangement Chair, Dr. Ben McCamish (<a href={"mailto:b.mccamish@wsu.edu"}>b.mccamish@wsu.edu</a>).*/}
          {/*</p>*/}
        </GenericSection>
        <GenericSection topOuterDivider>
          <h2 className={"mt-0 center-content"}>Cancellation Policy</h2>
          <p>
            All refund/cancellation requests must be received in writing to
            registration by
            <span style={{ color: "red" }}>{deadline[1].date}</span>, 11:59 PM.
          </p>
          <p>
            You may only cancel your registration before the cancellation
            deadline. Author registration is not refundable.
          </p>
        </GenericSection>
        <HeroFull
          content={{
            title: (
              <a target="_blank" href={registerLink}>
                REGISTER NOW!
              </a>
            ),
            inside: (
              <>
                {/*<Button tag="a" target="_blank" color="primary" href="https://forms.gle/gRbujFsLi9fmRUe47">Registration</Button>*/}
                {/*<div>*/}
                {/*    <ButtonGroup>*/}
                {/*        <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/l5B041?RefId=Member">Member Registration</Button>*/}
                {/*        <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/Q8q2Z1?RefId=Non-Member">ACM Member Registration</Button>*/}
                {/*        <Button color="primary" tag={"a"} target="_blank" href="https://cvent.me/Q8q2Z1?RefId=Non-Member">Non-Member Registration</Button>*/}
                {/*        <br/>*/}
                {/*        <Button  style={{marginTop:32}} color="primary" tag={"a"} target="_blank" href="https://www.eventbrite.com/e/daac-2022-reducing-hpcs-carbon-footprint-tickets-477704636427">Registration link for DAAC 2022 workshop available for remote online participation</Button>*/}
                {/*    </ButtonGroup>*/}
                {/*</div>*/}

                {/*<div className={"center-content"}>*/}
                {/*    <Image src={require(`./../assets/images/NSF_4-Color_bitmap_Logo.png`)}*/}
                {/*           width={100}*/}
                {/*           height={100}/>*/}
                {/*</div>*/}
                {/*<Image src={require(`./../assets/images/paymentQR.jpg`)}*/}
                {/*       width={400}*/}
                {/*       height={400}/>*/}
              </>
            ),
          }}
        />
      </React.Fragment>
    );
  }
}

export default Keynote;
