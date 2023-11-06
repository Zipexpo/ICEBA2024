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
        title:'Micro/Nanosensors for Healthcare Applications',
        authorName: 'Prof. Takahito Ono',
        orgName: <>Department of Mechanical Systems Engineering Graduate School of Engineering, Tohoku University, Sendai, Japan<br/>
            Micro System Integration Center (μSiC), Tohoku University, Sendai, Japan</>,
        avatar: 'Ono2010.jpg',
        abstract: <>
            <p>Miniature healthcare sensors are useful for patients with chronic diseases. For example, patients with diabetes need continuous monitoring of blood glucose levels and require small non-invasive sensors. Micro/nanosensors for healthcare can also help in the field of preventive medicine. By collecting biometric data and assessing individual health trends and risk factors, preventive measures can be taken to prevent the onset of diseases.</p>
            <p>We have developed non-invasive sensors and urine sensors using micro-nanofabrication technology for healthcare applications at home. Micro- and nano-mechanical transducers fabricated by microfabrication technology exhibit high mechanical Q-factors and are expected to be applied as high-sensitivity sensors. Non-invasive bio-magnetic sensors, non-invasive photoacoustic sensors and non-invasive in vivo radical sensors are being developed using these mechanical vibrators (1-4).</p>
            <p>Bio-magnetic sensors are intended to monitor health conditions by measuring magnetic fields emitted from the heart and brain, etc. Magnetic field resolution of nT to pT need to be measured, and compact sensors that can operate at room temperature are required. We are developing a magnetic sensor in which a magnetic material is formed on the cantilever and the effective spring of the cantilever is changed by magnetic forces (1,2). The magnetic material on the cantilever changes its magnetization in response to an external magnetic field, and the magnetic force between the cantilever and an external magnetic coil is changed by the "magnetic torque", resulting in a highly sensitive magnetic sensor ~ order of pT.</p>
            <p>Magnetic forces act between the magnetic material on the cantilever and the external magnetic material, altering the mechanical response. An externally placed coil and bias magnetic field can cause magnetic resonance in radical molecules in vivo and change the spin orientation of the radicals. In this process, a force acts on the magnetic material on the transducer. This force causes a change in the amplitude of the transducer, which allows it to operate as a radical sensor (3).</p>
            <p>Biosensors are being developed to measure biomarkers in urine with simplicity and high accuracy at home. Calorimetric biosensors, which measure the heat associated with chemical reactions, are known as one method of biosensors. Integration technology is developed for compact, highly sensitive thermistors that detect weak heat. To selectively detect specific biomarkers, we utilize enzymes and the heat associated with enzyme-catalyzed reactions. This calorimetric sensing is successfully used to detect glucose and protein (4).</p>
            <p>A resistance-changing biosensor that uses metal nanoparticles as a resistive element is studied. The sensor uses an enzyme-modified resistive element made of a mixture of metal nanoparticles and polymers, where the H2O2 produced as a result of the enzyme-catalyzed reaction is redoxed by the metal nanoparticles. The conductivity of the resistive element is changed. This method has been successfully used to detect creatinine (5).</p>
        </>,
        bio: <ol>
            <li><strong>Research Areas</strong>
                <ul>
                    <li>Nanoengineering and Nanotechnology</li>
                    <li>Micro/Nanosensor</li>
                    <li>Ultimate sensing</li>
                    <li>Functional material and processes</li>
                </ul>
            </li>
            <li><strong>Education</strong>
                <ul>
                    <li>Dr. Eng., March 1996, Graduate School of Engineering, Department of Precision Engineering, Tohoku University, Japan</li>
                    <li>Master of Science (Physics), March 1992, Graduate School of Science, Tohoku University, Japan</li>
                </ul>
            </li>
            <li><strong>Academic Activities</strong>
                <ul>
                    <li>Director, Micro System Integration Center (uSiC), Tohoku University</li>
                    <li>Director, MicroNanomachining Research Education Center, Tohoku University</li>
                    <li>Executive Committee of The Electrochemical Society (ECS), USA.</li>
                    <li>Editorial Board, Nature Microsystems & Nanoengineering</li>
                    <li>Editorial board, Institute of Physics (IOP), Journal of Micromechanics and Microengineering</li>
                    <li>Representative Member, Japan Society of Mechanical Engineers</li>
                    <li>Deputy Director, IEEJ Sensors and Micromachines Division Executive Committee</li>
                    <li>(Invited talk) Takahito Ono, Magneto-Mechanical Micro-Nano Devices with Electrodeposited Magnetostriction Films, ECS symposium, October 8-12, 2023 – Gothenburg, Sweden.</li>
                    <li>(Peer-reviewed Paper, total 310 papers )</li>
                    <li>(Paper) Naoki Inomata, T. Miyamoto, K. Okabe and T. Ono, Measurement of cellular thermal properties and their temperature dependence based on frequency spectra via an on-chip-integrated microthermistor, Lab on a Chip, 23 (2023) 2411-2420.</li>
                    <li>(Paper) H. Arisawa, H. Shim, S. Daimon, T. Kikkawa, Y. Oikawa, S. Takahashi, T. Ono, E. Saitoh, Observation of spin-current striction in a magnet, Nature Communication, 13 (2022) 2400.</li>
                </ul>
            </li>
            <li><strong>Research Achievements and Awards</strong><br/>
                He received Tokin Research Award from Tokin Science Foundation for the development of nanomechanical machines on 2005, also received MNC 2012 Paper Award, 15th International Microprocess and Nanotechnology Conference, IEEJ paper award 2019, Microsystem & Nanoengineering Award 2020, and IEEJ award 2022. He presented invite lectures over 60 at international conferences.
            </li>
        </ol>
    },
    {
        title:'Energy-efficient AI computing hardware by processing in memory and local learning',
        authorName: 'Prof. Kyeong-Sik Min',
        orgName: 'School of Electrical Engineering, Kookmin University, Seoul, Korea',
        avatar: 'sikmin.jpg',
        abstract: <>
            <p>
                Large Language Models (LLMs) such as GPT-4 are coming to our daily lives with excellent performance and infinite potential in the field of artificial intelligence. Their enormous size models should deal with a tremendous level of computational workloads that have never been experienced before. The heavy computation needs a huge amount of energy consumption that makes it impossible to sustain the LLMs in terms of computing energy efficiency in future.
            </p>
            <p>
                How can we improve the computing energy efficiency to keep the LLM’s energy consumption within a sustainable level? After the slowing down of Moore’s law and the end of voltage scaling, one way of reducing the computing energy is decreasing a physical distance between computing and memory units. Processing using memory or processing near memory can be useful to improve the computing energy efficiency by shortening the distance between the logic and memory parts. To explain this in detail, we review various memories including SRAMs, DRAMs, RRAMs, etc. for processing near and using memories to implement AI computing hardware, as conceptually indicated in Figures (a) and (b). Another way of energy-efficient AI computing is replacing the backpropagation algorithm with the local learning one. By doing so, the computational workload of training can be reduced drastically. Based on the discussion above, we can predict what technologies are needed and what direction they should evolve for implementing future AI hardware and summarize this talk.
            </p>
        </>,
        bio: <ol>
            <li>Research Areas
                <ul>
                    <li>Processing in memory</li>
                    <li>Neuromorphic circuits and systems</li>
                    <li>Memory circuits and systems</li>
                </ul>
            </li>
            <li>Education
                <li>Post doc: 12/2001-08/2002, University of Tokyo, Japan</li>
                <li>Ph.D: 03/1993-08/1997, KAIST, Korea</li>
                <li>Master: 03/1991-02/1993, KAIST, Korea</li>
                <li>Bachelor/Engineer: 03/1987-02/1991, Korea Univ., Korea</li>
            </li>
            <li>Academic Activities
                <br/><i>Members of academic society</i>
                <ul>
                    <li>Distinguished Service Award from Korea Semiconductor Industry Association (KSIA), Oct. 2023</li>
                    <li>President of Institute of Korean Electrical and Electronics Engineers (IKEEE), 2022</li>
                    <li>Chairperson of SoC Research Group in Institute of Electronics and Information Engineers (IEIE), 2021</li>
                    <li>Award of Excellence in Academy-Industry R&D Cooperation from Mayor of Seoul City, 2021</li>
                    <li>Grand Prize in Haedong Best Paper Award, IEIE, Journal of Semiconductor Technology and Science (JSTS), 2020</li>
                    <li>Distinguished Service Award from Ministry of Science and ICT of Korean Government, 2020</li>
                    <li>Academic Achievement Award, Institute of Korean Electrical and Electronics Engineers, Korea, 2015</li>
                    <li>Distinguished Service Award, Institute of Korean Electrical and Electronics Engineers, Korea, 2014</li>
                    <li>Chip Design Contest Award at Korean Conference on Semiconductors, 2012</li>
                    <li>CAD & Design Methodology Award at Korean Conference on Semiconductors, 2011</li>
                    <li>Chip Design Contest Award at Korean Conference on Semiconductors, 2011</li>
                    <li>Distinguished Service Award, Institute of Electronics and Information Engineers, Korea, 2011</li>
                </ul>
            </li>
        </ol>
    },
    {
        title:'',
        authorName: 'Prof. Dao Viet Dzung',
        orgName: <>
            Professor & Head, Mechanical Engineering, Griffith University<br/>
            Director, Mechatronics Engineering Program, Griffith University
        </>,
        avatar: 'dzungdao.jpg',
        abstract: `(will be updated)`,
        bio: <>
            <ul>
                <li>
                    <strong>Education/Qualifications</strong>
                    <ul>
                        <li>2003 PhD in Electro-Mechanical Systems, Ritsumeikan University, Japan</li>
                        <li>1997 M.Eng Mechanical Eng., Hanoi University of Science and Technology (HUST), Vietnam</li>
                        <li>1995 B.Eng Informatics-Mechanical Engineering, HUST, Vietnam</li>
                    </ul>
                </li>
                <li>
                    <strong>Professional History</strong>
                    <ul>
                        <li>2011 to present: Professor, School of Engineering & Built Environment, Griffith Uni, AUSTRALIA.</li>
                        <li>Apr 2007 to Dec 2011: Chair Professor, MEMS, Ritsumeikan University, JAPAN.</li>
                        <li>Apr 2006 to Mar. 2007: Lecturer, MEMS, Ritsumeikan University, JAPAN.</li>
                        <li>Apr 2003 to Mar 2006: Postdoctoral fellow, Ritsumeikan University, JAPAN.</li>
                        <li>Sept 1995 to Sept 1999: Lecturer, Mechanical Engineering, HUST, VIETNAM.</li>
                    </ul>
                </li>
                <li>
                    <strong>Teaching area: </strong>Mechanical and Mechatronics Engineering Design, Control Systems, Electrotechnics, Advanced Manufacturing, Kinematics and Dynamics
                </li>
                <li>
                    <strong>Research area</strong>
                    <ul>
                        <li>Advanced sensing effects in nanostructured materials, semiconductors</li>
                        <li>Micro/Nano Electromechanical Systems (MEMS), MEMS Sensors and Actuators</li>
                        <li>Advanced Manufacturing: Micro/Nano machining technology, Additive manufacturing</li>
                        <li>Wireless sensor network</li>
                    </ul>
                </li>
                <li>
                    <strong>Publications: </strong>230 Journal papers, 185 Conference papers, 6 book/book-chapters
                </li>
                <li>
                    <strong>Publication Citations: </strong>6000+ citations, <strong>H-index:</strong> 40
                </li>
                <li>
                    <strong>Patents</strong> (filed and granted): 17
                </li>
                <li>
                    <strong>Research Grants:</strong> $10.5M (total)
                </li>
                <li>
                    <strong>Postgraduate Supervision: </strong> 23 PhD candidates completed
                </li>
                <li>
                    <strong>Editorial Board and Conference Committees</strong>
                    <ul>
                        <li>Associate Editor, Sensors and Materials, Tokyo, Japan</li>
                        <li>Editorial Board Member, J. Adv. Nat. Sci: Nanosci. Nanotechnol., IOP, UK.</li>
                        <li>Editorial Board Member, Sensors Journal, MDPI (SCI indexed)</li>
                        <li>Editorial Board Member, J. Sensors, Hindawi Publishing Corporation.</li>
                        <li>Guest Editor, Sensors and Materials, Special Issue on Bio4Apps 2017, MYU KK, Japan</li>
                        <li>General Chair of the 5th Bio4Apps,2016, Gold Coast, Australia</li>
                        <li>General Chair, 5th Int’l Conf. on Sustainable Design and Manufacturing, Australia, June 2018.</li>
                    </ul>
                </li>
            </ul>
        </>
    },
    {
        title:'Biological matter recognition using micro-interdigitated electrode array and electrical impedance spectroscopy',
        authorName: 'Prof. Congo Tak Shing Ching',
        orgName: 'Graduate Institute of Biomedical Engineering, National Chung Hsing University, Taichung, Taiwan',
        avatar: 'Ching.jpg',
        abstract: <>
            <p>Nowadays, electrical potential, current, impedance, capacitance, etc. play an important role in our daily life, and these electrical parameters can actually have many applications. For example, electrical impedance spectroscopy (EIS) has been widely used for the characterization of (biological) substances. There are many applications of EIS, and the speaker cited his own research experience in applying EIS in E. coli. Identification and quantification, as well as characterization of microplastics.</p>
            <p>In my E. coli. identification and quantification study, a biorecognition-element-free interdigitated microelectrode (IDμE) sensor is designed and developed with good reliability and affordability. Results show that the designed sensor can identify E. coli with good selectivity using an impedance and capacitance of 7.69 MHz. At its optimum impedance of 1.3 kHz, the IDμE sensor can reliably quantify E. coli (Figure 2) in a range of measurement (103.2~106 cfu/mL), linearity (R2 = 0.97), sensitivity (18.15 kΩ/log (cfu/mL)), and limit of detection (103.2 cfu/mL). Therefore, the IDμE sensor developed possesses high potential for industrial and clinical applications.</p>
            <p>In my microplastics identification study, EIS measurements using IDμE confirmed the accurate identification of microplastic materials in question, by using self-normalized ratio between two characteristic frequencies of 7 MHz and 8.9 MHz, Z’f=7 MHz/Z’f=8.9 MHz. 3-kNN classifier built with the ratio Z’f=7 MHz/Z’f=8.9 MHz, and Z’f=8 MHz/Z’f=8.9 MHz, demonstrates accuracy upto 90% for the identification of single or both microplastic types in samples (Figure 4). These results confirm impedance spectroscopy, permitting rapid identification of microplastic without labelling and skillful techniques, as a potential rapid sensor.</p>
        </>,
        bio: <ol>
            <li>Research Areas:</li>
            Biomedical instrumentation design, biosensors, tissue bioimpedance, biomedical electronics, biomedical optoelectronic, AIoT healthcare, assistive healthcare technologies
            <li>Education:  <i>(month/year to month/year, university/institute, country)</i></li>
            <ul>
                <li>PhD in Bioengineering, University of Strathclyde, Glasgow, UK, 2005</li>
                <li>MPhil in Biomedical Engineering, The Hong Kong Polytechnic University, HK, 2002</li>
                <li>BSc in Prosthetics and Orthotics (First Class Honours), The Hong Kong Polytechnic University, HK, 1999</li>
            </ul>
            <li>Academic Activities:
                <br/><i>Members of academic society (name of society, position, where, when)</i>
                <ul>
                    <li>Member, Prosthetics and Orthotics Society of Taiwan, since 2016</li>
                    <li>Life Member, Taiwan Engineering Medicine Biology Association, since 2023</li>
                    <li>Life Member, Association of Chemical Sensors in Taiwan, since 2015</li>
                    <li>Life Member, Taiwan Rehabilitation Engineering and Assistive Technology Society, 2013</li>
                    <li>Life Member, The Chinese Institute of Engineers, Since 2013</li>
                    <li>Member, IEEE, since 2010</li>
                    <li>Member, IEEE Engineering in Medicine and Biology Society, since 2010</li>
                    <li>Life Member, World Association for Chinese Biomedical Engineers, since 2009</li>
                    <li>Member, International Association of Engineers (IAENG), since 2009</li>
                    <li>Life Member, Biomedical Engineering Society of the R.O.C., since 2008</li>
                    <li>Member, The Royal Society of Edinburgh Entrepreneurs' Club, since 2005</li>
                </ul>
                <i>Invited talks for International conference/workshop (name of talk, name of conference/workshop, where, when)</i>
                <ul>
                    <li>Keynote speaker of The International Symposium on Applied Science (ISAS 2023), 13-15 Oct 2023, Ho Chi Minh City, Vietnam</li>
                    <li>Keynote speaker of Rencontres du Vietnam: The first International Symposium of Nano Life Science: Nano Biotechnology, Biosensor, Computation (NanoBioCoM2023), 17-19 Sep 2023, ICISE, Quy Nhon, Vietnam</li>
                    <li>Keynote speaker of International Symposium on Medical Devices and Technology 2023, 27-28 Aug 2023, Johor, Malaysia</li>
                    <li>Plenary speaker of The 3rd International Workshop on Engineering Physics, IC-MEMS-Sensors and Their Applications (3rdIWEMA2022), 25-26 Nov 2022, Ho Chi Minh City, Vietnam</li>
                    <li>Keynote speaker of IEEE The 2nd International Conference on Intelligent Cybernetics Technology & Applications 2022 (IEEE ICICyTA 2022), 15-16 Dec 2022, Bandung, Indonesia</li>
                    <li>Invited speaker of International Joint Symposium on Applied Mathematics, Science and Technology, 01 Dec 2022, Taichung, Taiwan</li>
                    <li>Invited speaker of The 38th SENSOR SYMPOSIUM, 9-11 Nov 2021, Japan</li>
                    <li>Keynote speaker of The International Symposium on Applied Science 2021, 15-17 Oct 2021, Ho Chi Minh City, Vietnam</li>
                    <li>Keynote speaker of The Fifth International Conference on Biological Information and Biomedical Engineering (BIBE2021), 20-22 Jul 2021, Hangzhou, China</li>
                    <li>Keynote speaker of the 3rd International Conference on Bioscience and Medical Engineering (ICBME2021), 29-30 Jun 2021, Johor Bahru, Malaysia</li>
                    <li>Invited speaker of Distinguished Lecture Series, Universiti Teknologi Malaysia, 12 Nov 2020, Malaysia</li>
                    <li>Plenary speaker of International Convention on Rehabilitation Engineering and Technology (i-CREATe 2020), 5-7 Nov 2020, Taipei, Taiwan</li>
                    <li>Keynote speaker of International Conference on Biological Information and Biomedical Engineering (BIBE 2018), 6-8 Jul 2018, Shanghai, China</li>
                    <li>Keynote speaker of The 2nd International Conference on Biomedical and Biological Engineering (BBE2017), 26-28 May 2017, Guilin, China</li>
                    <li>Keynote speaker of The International Conference on Biological Engineering and Pharmacy (BEP2016), 9-11 Dec 2016, Shanghai, China</li>
                    <li>Keynote speaker of The International Conference on Biomedical and Biological Engineering (BBE2016), 15-17 Jul 2016, Shanghai, China</li>
                    <li>Invited speaker of The 11th Annual IEEE International Conference on Nano/Micro Engineered and Molecular Systems, 17-20 April 2016, Matsushima Bay and Sendai MEMS City, Japan</li>
                </ul>
                <i>Visiting researcher/professor (university/institute, where, when)</i>
                <ul>
                  <li>Visiting Professor, Department of Physics and Electronic Engineering University of Science (Vietnam National University of Hochiminh City), Vietnam, 06/2019 – 07/2019</li>
                  <li>Honorary Professor, Department of Health and Physical Education The Education University of Hong Kong, Hong Kong, 11/2016 – 10/2019</li>
                </ul>
            </li>
            <li>Research Achievements and Awards:
                <a href={'https://www.bme.nchu.edu.tw/members/tsching/index.htm'} target={'_blank'}>
                    <ul>
                        <li>Research projects (2010-now): Chief of Project</li>
                        <li>Intellectual Property</li>
                        <li>Research Awards</li>
                        <li>Research Awards</li>
                    </ul>
                </a>
            </li>
            <li>
                <a href={'https://www.bme.nchu.edu.tw/members/tsching/index.htm'} target={'_blank'}>
                    ISI/Scopus/SCIE Selected Publications (2010-Now)
                </a>
            </li>
        </ol>
    },
    {
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
