import React from 'react';
import KeyNoteSection from '../components/sections/KeyNoteSection';
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Container from "@mui/material/Container/Container";
import GenericSection from "../components/sections/GenericSection";
import SectionHeader from "../components/sections/partials/SectionHeader";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import {Grid, Typography} from "@mui/material";

const data = [
    {
        title:'Micro/Nanosensors for Healthcare Applications',
        authorName: 'Prof. Takahito Ono',
        orgName: <>Department of Mechanical Systems Engineering Graduate School of Engineering, Tohoku University, Sendai, Japan<br/>
            Micro System Integration Center (μSiC), Tohoku University, Sendai, Japan</>,
        avatar: 'Ono2010.jpg',
        abstractFile: '/files/plentary/information Takahito Ono.doc',
        bioFile: '/files/plentary/biography Takahito Ono.docx',
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
                    <li>(Invited talk) Takahito Ono, Magneto-Mechanical Micro-Nano Devices with Electrodeposited Magnetostriction Films, ECS symposium, October 8-12, 2024 – Gothenburg, Sweden.</li>
                    <li>(Peer-reviewed Paper, total 310 papers )</li>
                    <li>(Paper) Naoki Inomata, T. Miyamoto, K. Okabe and T. Ono, Measurement of cellular thermal properties and their temperature dependence based on frequency spectra via an on-chip-integrated microthermistor, Lab on a Chip, 23 (2024) 2411-2420.</li>
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
        abstractFile: '/files/plentary/information_Kyeong-Sik Min.doc',
        bioFile: '/files/plentary/biography_Kyeong-Sik Min.docx',
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
        title:'High Performance MEMS Sensors',
        authorName: 'Prof. Dao Viet Dzung',
        orgName: <>
            Professor & Head, Mechanical Engineering, Griffith University<br/>
            Director, Mechatronics Engineering Program, Griffith University
        </>,
        avatar: 'dzungdao.jpg',
        abstractFile: '/files/plentary/information-Dzung Dao.doc',
        bioFile: '/files/plentary/biography-Dzung Dao.docx',
        abstract: <>
        <p>MEMS technology relates to research and development of micro/nano electro-mechanically integrated sensors and actuators fabricated based on the microelectronic technology with high accuracy and throughput.</p>
        <p>This work presents our innovative MEMS sensors developed based on Si and SiC MEMS technology. The focus will be on advanced sensing effects in semiconductor nanostructures, including piezoresistive, optoelectronic and thermoresistive effects.</p>
        <p>Compared to Si, SiC MEMS sensors are expected to work more reliably in harsh conditions, e.g. high temperature, aggressive corrosive environments thanks to its unique properties, such as larger bandgap, higher thermal stability, higher breakdown voltage, higher Young’s modulus than silicon. We recently have successfully developed mechanical, thermal and optical MEMS sensors with high sensitivity and large working temperature range [1,2]. For example, optoelectronic coupling in a SiC/Si heterojunction exhibited an ultra-high gauge factor of up to 58,000 which is the highest gauge factor reported for semiconductor-based mechanical sensors to date [1]. Interestingly, 3C/Si has been proven as a potential platform for highly sensitive and self-powered position photodetectors [3]. Our successful demonstration of mechanical, thermal and optical sensing concepts and devices could open a new door for the development of high-performance MEMS sensors from research point of view to a wide range of potential applications.</p>
        </>,
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
                        <li>2017 to 4/2023: Head, Mechanical Engineering Discipline, School of EBE, Griffith, AUSTRALIA.</li>
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
                        <li>Optoelectronic and Sensing effects in nanostructured materials, semiconductors</li>
                        <li>•	Micro/Nano Electromechanical Systems (MEMS), MEMS Sensors, Actuators, energy harvesters</li>
                        <li>Advanced Manufacturing: Micro/Nano machining technology, Additive manufacturing</li>
                        <li>Wireless sensor network</li>
                    </ul>
                </li>
                <li>
                    <strong>Publications: </strong>235 Journal papers, 190 Conference papers, 6 book/book-chapters
                </li>
                <li>
                    <strong>Publication Citations: </strong>7150 citations, <strong>H-index:</strong> 43 (Google scholar)
                </li>
                <li>
                    <strong>Patents</strong> (filed and granted): 18
                </li>
                <li>
                    <strong>Research Grants:</strong> > $11.5M (total). Grants received within the last 5 years are shown below:
                    <ol>
                        <li>ARC DP, Lead CI, 2022-2025, “Nano optoelectronic: towards an ultrasensitive sensing", $585k</li>
                        <li>ARC LIEF, CI, 2023, National Facility for Characterisation of Infrared Technologies, $690k</li>
                        <li>CCR (Geoinventions), 2023, “Robust sensors for geotechnical applications”, $35k</li>
                        <li>CCR (Dentroid), 2023, “Clamping mechanism for intraoral laser manipulator”, $25k</li>
                        <li>Griffith Infrastructure, Lead CI, 2022 "Etching facility for MEMS sensors fabrication", $280k</li>
                        <li>Griffith Sciences, CI, 2022, “Integrated Quantum Efficiency Measurements System”, $109k</li>
                        <li>Griffith Sciences, CI, 2022, “A set of 3D Laser Scanning Microscope System”, $90k</li>
                        <li>Griffith Sciences, CI, 2022, “Transient Plane Source Thermal Conductivity Analyser”, $90k</li>
                        <li>ARC LIEF, CI, 2022, Facility for enabling low thermal budget Si/SiGe technologies, $580k</li>
                        <li>IMCRC, Lead CI, 2021-2022, "Smart sensor system for soft soil engineering & safety", $125k</li>
                        <li>IMCRC, Lead CI, 2021-2022, Miniaturised laser manipulator for ultra-precise dentistry, $225k</li>
                        <li>ARC LIEF, CI, 2021, Femtoliter Liquid Deposition Facility, $183k</li>
                        <li>CSIRO-DFAT,	Lead CI, 2020-2022, “Low-power Wireless Flood Sensor Network”, $400k	</li>
                        <li>CCR (Dentroid, Australia), Lead CI, 2020-2022, $30k</li>
                        <li>IMCRC, CI, 2020-2022, “R2R printing for cost effective manufacturing of a Smart Patch for health monitoring”, $1,436,437</li>
                        <li>CCR (Industry: Overseas), CI, 2019-2020, “Ultra-sensitive pressure sensor”, $110k</li>
                        <li>Foundation for Australia-Japan Studies (FAJS) grant, lead CI, 2019-2020, “Superior Sensor Network (SSN) for Harsh Environments”, $145,000</li>
                        <li>Griffith Science Equipment round, lead CI, 2019, “Opto-Electro-Mechanical Measurement Suite”, $165,000</li>
                        <li>ARC LIEF project, CI, 2019, “A femtosecond laser micromachining facility”, $438k</li>
                        <li>Griffith University Infrastructure Grant, CI, 2019 (CI): $385k</li>
                        <li>Griffith University Infrastructure Grant, CI, 2019 (CI): $323k</li>
                        <li>ARC DP, CI, 2018-2021, “Magnetofluidic sample handling for enhanced PoC diagnosis”, $473k</li>
                        <li>ARC LP, Lead CI, 2017-2021, “Superior Silicon Carbide Nanoscale Sensors (SCANS) for Harsh Environments”, $563,000 ($160,000 from SPT Microtechnologies, USA)</li>
                        <li>IMCRC project, CI, 2017-2022, “Develop and manufacture a smart electric compressor”, $850,000 (50% from industry partner: SuperCool Australia)</li>
                        <li>ARC LIEF, CI, 2018, “Xe-plasma dual beam for advanced future materials”, $1,136k</li>
                        <li>Griffith University Infrastructure Grant (CI, 2017): $115k</li>
                    </ol>
                </li>
                <li>
                    <strong>HDR Supervision: </strong> I have successfully supervised to completion of 25 PhD students, all of them have secured good jobs in academia and industry. Notably, 3 of my recent graduates were awarded DECRA.
                </li>
                <li>
                    <strong>Awards/Recognition:</strong>
                    <ul>
                        <li>World's top 2% most-cited scientists in Applied Physics (Stanford rankings 2021-2022)</li>
                        <li>Top 1 researcher worldwide for publications & citations in SciVal Topic Cluster of Pressure Sensors, Sensors.</li>
                        <li>Vice Chancellor’s Research Excellence Award – Excellent Research Team, 2021</li>
                        <li>Pro Vice Chancellor’s Research Excellence Award – Excellence of Research Group, 2020</li>
                        <li>Best Paper Award, 5th SDM, Gold Coast, Australia, 6/2018.</li>
                        <li>Gold Coast City Mayor Award for outstanding contribution to Gold Coast City, 2016</li>
                        <li>Best Oral Presentation Award, ICNNE 2016, Paris, France, 6/2016. </li>
                        <li>Best Paper Award, 5th Bio4Apps, Gold Coast, Australia, 12//2016.</li>
                        <li>Best Paper Award, IEEE MHS2008, Nagoya, Japan, 10/2008.</li>
                        <li>Best Student Paper Award, APCOT2006, Singapore, 2006</li>
                    </ul>
                </li>
                <li>
                    <strong>Industry Collaborations:</strong>
                    <ul>
                        <li>2021-present, Geoinventions, Australia. Total funds received: $160k</li>
                        <li>2020-present, Dentroid. Total funds received: $250k</li>
                        <li>2019-2020, Rio Tinto (sponsor through the Foundation for Australia-Japan Studies). Project “Superior Sensor Network (SSN) for Harsh Environments”. Total funds: $145k</li>
                        <li>2017-2020, SPT Microtechnologies (USA) in my ARC LP "Superior Silicon Carbide Nanoscale Sensors (SCANS) for Harsh Environments".</li>
                        <li>2017-2020, SuperCool Asia Pacific Pty Ltd (Australia) in the Innovative Manufacturing CRC Project "Develop and manufacture a smart electric compressor for refrigeration and air conditioning on electric vehicles".</li>
                        <li>From 2003 to 2011, I collaborated with various companies in Japan to conduct R&D projects. These companies are Olympus Corp, Omron Corp, Konica-Minolta Inc, Tamagawa Seiki, Horiba Corp, Towa Corp, Microstone, and Tokairika Co Ltd. </li>
                    </ul>
                    Through these collaborations, I gained valuable experience working with industry professionals and was able to apply my research to real-world applications.
                </li>
                <li>
                    <strong>Editorial Board and Conference Committees</strong>
                    <ul>
                        <li>Discipline Expert (Mechanical & Mechatronics), EA Accreditation Panel, since 2015</li>
                        <li>Associate Editor, Sensors and Materials, MYU KK, Tokyo, Japan</li>
                        <li>Editorial Board Member, J. Adv. Nat. Sci: Nanosci. Nanotechnol., IOP, UK.</li>
                        <li>Editorial Board Member, Sensors Journal, MDPI </li>
                        <li>Editorial Board Member, J. Sensors, Hindawi Publishing Corporation. </li>
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
        abstractFile: '/files/plentary/information_prof. Congo.doc',
        bioFile: '/files/plentary/biography_prf. Congo.docx',
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
        abstractFile: '/files/plentary/information-Kun-Yu Lai.docx',
        bioFile: '/files/plentary/biography-Kun-Yu Lai.docx',
        abstract: `The extraordinary emission efficiency of InGaN quantum well (QW) has led to the thriving industry of solid-state lighting and laser diodes. Recently, the two dimensional nitride layer finds another promising application in surface-enhanced Raman spectroscopy (SERS), which is regarded as one of the most powerful biosensing technologies. In specific, the electrons confined by InGaN QWs can intensify the SERS signals by providing additional charge-transfer routes to the molecule/metal interface, as well as by inducing the localized surface plasmon resonance between the surface metal and QWs. These QW-contributed electrons allow every metal nanoparticle to be the SERS-active region (i.e. hot spot), not only increasing the Raman intensity, but also stabilizing the SERS signal. In this talk, I will share our recent studies on the SERS detection of single molecules and circulating tumor DNA for cancer diagnosis. Details on spectral characterizations and the potential for clinical applications will be presented.`,
        bio: <>Dr. Kun-Yu Lai is currently a professor in the Department of Optics and Photonics (DOP) at National Central University (NCU) in Taiwan. Prof. Lai received his Ph.D. degree in Electrical Engineering from North Carolina State University in USA in 2009. After working as the postdoctoral fellow in the Graduate Institute of Photonics and Optoelectronics at National Taiwan University in 2009-2011, he joined the faculty in DOP at NCU. Prof. Lai specializes in the growth/fabrication of novel III-nitride optoelectronic devices, including plasmonic biosensors and LEDs. He has published 56 articles in peer-reviewed SCI journals, with a total citation over 1700 times (H-index: 24). Detailed information on Prof. Lai’s research is available at: <a href={'http://kylai.cloudweb.com.tw/'} target={'_blank'}>http://kylai.cloudweb.com.tw/</a> </>
    },
    {
        title:'New transfer technique for graphene and other 2D materials on Si substrates for electronic devices',
        authorName: 'Dr. PHAM, Thanh Trung',
        orgName: 'University of Namur , Belgium',
        avatar: 'phamtrung.jpg',
        abstractFile: '/files/plentary/information_Pham Thanh Trung.docx',
        bioFile: '/files/plentary/biography_Pham Thanh Trung.docx',
        abstract: `Graphene has been proposed as a promising alternative to silicon-based electronics due to its outstanding electrical, optical, thermal, and mechanical properties [1-4]. It opens up new possibilities not only for fundamental physics research but also for applications. Since silicon is still the most important single-crystal substrate used for semiconductor devices and integrated circuits, integration of graphene into the current Si technology is highly desirable. A combination of graphene and silicon may overcome the traditional limitations in scaling down of devices that silicon based technology is facing [5]. In this context, graphene on Si might be one of the most promising candidates as a material for graphene-based technology beyond CMOS. Therefore, it is crucial to find a process to grow or transfer graphene directly on Si. However, direct growth of graphene on Si produces very poor crystalline quality and it is difficult to build vertial heterostructures. 
        To date, significant advances in graphene synthesis methods have been made and in particular, CVD (chemical vapor deposition) can produce graphene films with high structural quality on copper substrates (copper foils are commonly used for their low cost and high availability) [6, 7]. To expand the possible applications, chemical vapor deposition grown graphene needs to be transferred to appropriate substrate such as silicon wafer. Although enormous efforts are devoted to transfer graphene on various substrates using many different methods, the quality of the final product is still insufficient. In this context, we develop a new process under a combination of wet etching and dry transfer to obtain graphene on Si with a clean interface between the graphene and the substrate. Using various analysis techniques such as low energy electron diffraction, scanning electron microscopy, scanning tunneling microscopy/spectroscopy, Raman, Auger electron spectroscopy and X-ray photoelectron spectroscopy, we demonstrate that our transferred graphene on Si is continuous, clean and that it is very promising for device fabrication.`,
        bio: <>
            <h5>WORK EXPERIENCE</h5>
            <Grid container alignItems={"center"}>
                <Grid item xs={3}>From 08/2018 to present</Grid>
                <Grid item xs={9}>
                    <h5>Postdoctoral researcher</h5>
                    <p>  
                        University of Namur (https://unamur.be/) <br/>
                        61-Rue de Bruxelles, B-5000 Namur, Belgium <br/>
                        Project:  MBE synthesis and characterization of two-dimensional semiconductors
                    </p>
                </Grid>
                <Grid item xs={3}>From 03/2016 to 08/2018</Grid>
                <Grid item xs={9}>
                    <h5>Lecturer</h5>
                    <p>  
                    HCMC University of Technology and Education (https://hcmute.edu.vn/)<br/>
                    01- Vo Van Ngan street, Linh Chieu ward, Thu Duc District, Ho Chi Minh city, Vietnam<br/>
                    Role: Lecture on  Introduction to Materials Technology
                    </p>
                </Grid>
                <Grid item xs={3}>From 09/2002 to 11/2015</Grid>
                <Grid item xs={9}>
                    <Typography variant='body2'>Please view in attached file</Typography>
                </Grid>
            </Grid>
            <h5>EDUCATION AND TRAINING</h5>
            <Grid container alignItems={"center"}>
                <Grid item xs={3}>From 09/2011 to 09/2015</Grid>
                <Grid item xs={9}>
                    <h5>Doctoral study in Physics (Matter and Materials Physics)</h5>
                    <p>  
                        University of Namur (https://unamur.be/) <br/>
                        61-Rue de Bruxelles, B-5000 Namur, Belgium <br/>
                        PhD project:   Direct growth of graphitic carbon/graphene on Si(111) by using electron beam evaporation
                    </p>
                </Grid>
                <Grid item xs={3}>From 09/2003 to 09/2005</Grid>
                <Grid item xs={9}>
                    <h5>Master study in Physics and Electronics</h5>
                    <p>  
                    University of Science - Vietnam national university HCMC (https://en.hcmus.edu.vn/)<br/>
                    227 - Nguyen Van Cu street, District 5, Ho Chi Minh city, Vietnam<br/>
                    Master project: Simulation of Resonant Tunneling Diode (RTD) 
                    </p>
                </Grid>
                <Grid item xs={3}>From 09/1998 to 09/2002</Grid>
                <Grid item xs={9}>
                    <h5>Bachelor study in Physics and Electronics</h5>
                    <p>  
                    University of Science - Vietnam national university HCMC (https://en.hcmus.edu.vn/)<br/>
                    227 - Nguyen Van Cu street, District 5, Ho Chi Minh city, Vietnam<br/>
                    Bachelor project: Research and development of magnetic cards for library management 
                    </p>
                </Grid>
                <Grid item xs={3}>From 10/2012 to 12/2016</Grid>
                <Grid item xs={9}>
                    <Typography variant='body2'>Please view in attached file</Typography>
                </Grid>
            </Grid>
            <h5>ADDITIONAL INFORMATION</h5>
            <Grid container alignItems={"center"}>
                <Grid item xs={3}>Honors and awards</Grid>
                <Grid item xs={9}>
                    <ol>
                        <li>Excellent young scientist at SHTP Nanotechnology lab, Saigon Hi-Tech Park, Vietnam (2017-2018).</li>
                        <li>Fellowship of Vietnam government for four-year PhD study in Belgium (2011 - 2015).</li>
                        <li>Research fellowship from the University of Kaiserslautern, Germany (10/2008 - 04/2009).</li>
                        <li>The author of a solution winning the third prize of the contest on scientific technical creation in Ho Chi Minh city, Vietnam (2004).</li>
                    </ol>
                </Grid>
                <Grid item xs={3}>Publications</Grid>
                <Grid item xs={9}>
                    <ol>
                        <li>Trung T. Pham, P. Vancsó, M. Szendrő, K. Palotas et al., Higher-indexed Moiré patterns and surface states of MoTe2/graphene heterostructure grown by molecular beam epitaxy, npj 2D Materials and Applications 6, 48 (2022).</li>
                        <li>Lai Xuan Bach, Thi-Bich-Ngoc Dao, Trung T. Pham, Robert Sporken et al., Role of SnO2 nanoparticles for a self-forming barrier layer on a mild steel surface in Hydrochloric acid medium containing piper betle leaf extract, ACS Omega 7, 38061-38068 (2022).</li>
                        <li>Trung T. Pham, Roshan Castileno, Alexandre Felten, Robert Sporken, Study of surface oxidation and recovery of clean MoTe2 films,  Surfaces and Interfaces 28, 101681 (2022).</li>
                        <li>Duong Chi Trung, Trung T. Pham, Quoc Binh Phan Minh et al.,  The use of Piper Betle leaf extract for forming a barrier layer on steel surface in hydrochloric acid solution, Progress in Organic Coatings 158, 106340 (2021).</li>
                        <li>Thi Tan Pham, Thanh Ngoc Pham, Viorel Chihaia, Quang Anh Vu, Thuat T. Trinh, Trung T. Pham et al., How do the doping concentrations of N and B in graphene modify the water adsorption, RSC Advances  11, 19560 (2021).</li>
                    </ol>
                    <p>Please view 17 more in the attached file</p>
                </Grid>
                <Grid item xs={3}>Patents</Grid>
                <Grid item xs={9}>
                    <ol>
                        <li>Direct graphene transfer of dry contact (European patent (filed 02/2023) No. PAT2615126EP00) </li>
                        <li>New technology for micro- and nano-electronics (in preparation)</li>
                    </ol>
                </Grid>
                <Grid item xs={3}>References</Grid>
                <Grid item xs={9}>
                    <ol>
                        <li>Professor Robert SPORKEN (Director of LPME, University of Namur, Belgium)  E-mail: robert.sporken@unamur.be</li>
                        <li>Professor Luc HENRARD (University of Namur, Belgium) E-mail: luc.henrard@unamur.be</li>
                    </ol>
                </Grid>
            </Grid>
            <p>Please more information in the attached file</p>
        </>
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
