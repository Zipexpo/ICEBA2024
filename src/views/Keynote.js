import React from "react";
import KeyNoteSection from "../components/sections/KeyNoteSection";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import Container from "@mui/material/Container/Container";
import GenericSection from "../components/sections/GenericSection";
import SectionHeader from "../components/sections/partials/SectionHeader";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import { Grid, Typography } from "@mui/material";

const data = [
  {
    title: "",
    authorName: "Prof. Takahito Ono",
    orgName: (
      <>
        Department of Mechanical Systems Engineering Graduate School of
        Engineering, Tohoku University, Sendai, Japan
        <br />
        Micro System Integration Center (μSiC), Tohoku University, Sendai, Japan
      </>
    ),
    avatar: "Ono2010.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography Takahito Ono.docx",
    abstract: <></>,
    bio: (
      <ol>
        <li>
          <strong>Research Areas</strong>
          <ul>
            <li>Nanoengineering and Nanotechnology</li>
            <li>Micro/Nanosensor</li>
            <li>Ultimate sensing</li>
            <li>Functional material and processes</li>
          </ul>
        </li>
        <li>
          <strong>Education</strong>
          <ul>
            <li>
              Dr. Eng., March 1996, Graduate School of Engineering, Department
              of Precision Engineering, Tohoku University, Japan
            </li>
            <li>
              Master of Science (Physics), March 1992, Graduate School of
              Science, Tohoku University, Japan
            </li>
          </ul>
        </li>
        <li>
          <strong>Academic Activities</strong>
          <ul>
            <li>
              Director, Micro System Integration Center (uSiC), Tohoku
              University
            </li>
            <li>
              Director, MicroNanomachining Research Education Center, Tohoku
              University
            </li>
            <li>
              Executive Committee of The Electrochemical Society (ECS), USA.
            </li>
            <li>Editorial Board, Nature Microsystems & Nanoengineering</li>
            <li>
              Editorial board, Institute of Physics (IOP), Journal of
              Micromechanics and Microengineering
            </li>
            <li>
              Representative Member, Japan Society of Mechanical Engineers
            </li>
            <li>
              Deputy Director, IEEJ Sensors and Micromachines Division Executive
              Committee
            </li>
            <li>
              (Invited talk) Takahito Ono, Magneto-Mechanical Micro-Nano Devices
              with Electrodeposited Magnetostriction Films, ECS symposium,
              October 8-12, 2024 – Gothenburg, Sweden.
            </li>
            <li>(Peer-reviewed Paper, total 310 papers )</li>
            <li>
              (Paper) Naoki Inomata, T. Miyamoto, K. Okabe and T. Ono,
              Measurement of cellular thermal properties and their temperature
              dependence based on frequency spectra via an on-chip-integrated
              microthermistor, Lab on a Chip, 23 (2024) 2411-2420.
            </li>
            <li>
              (Paper) H. Arisawa, H. Shim, S. Daimon, T. Kikkawa, Y. Oikawa, S.
              Takahashi, T. Ono, E. Saitoh, Observation of spin-current
              striction in a magnet, Nature Communication, 13 (2022) 2400.
            </li>
          </ul>
        </li>
        <li>
          <strong>Research Achievements and Awards</strong>
          <br />
          He received Tokin Research Award from Tokin Science Foundation for the
          development of nanomechanical machines on 2005, also received MNC 2012
          Paper Award, 15th International Microprocess and Nanotechnology
          Conference, IEEJ paper award 2019, Microsystem & Nanoengineering Award
          2020, and IEEJ award 2022. He presented invite lectures over 60 at
          international conferences.
        </li>
      </ol>
    ),
  },
  {
    title: "Four-side buttable CMOS imaging modules for CT systems ",
    authorName: "Prof. Tran Tri Nang",
    orgName: (
      <>
        College of Science and Technology, University of Minnesota, USA
        <br />
        Ecosolar International
      </>
    ),
    avatar: "trantrinang.jpg",
    abstractFile: "/files/plentary/Tran's Abstract.doc",
    bioFile: "#",
    abstract: `A CMOS-based four-side buttable imaging module  is proposed for the CT systems such as computed tomography, tomosynthesis and  security airport   inspection scheme . We call this imaging unit a “four-side buttable  CMOS module” , due to the fact that these imaging modules are abutted together to form an X-ray imager which can in turn be employed in an imaging system similar to the computed tomography or CT scan. That is, the X-ray beams are rotated around the patient; and the beams and the X-ray imagers are positioned in the opposite position in relation to the patient or the object.  
Regarding the components of the four-side buttable CMOS imaging modules , all the photodiodes, transistors and read-out electronics  are  made using single crystal silicon - allowing potential high yield, thus low cost; and high electronic performance in terms of speed and noise. The pixels and thus the  modules can be operated in the low resolution mode (fluoroscopy) and high resolution mode (radiography). In the proposed configuration, small size single crystal silicon CMOS modules are abutted together side-by-side to form a large X-ray imager.  Spaces between modules are kept at less than the width of the pixels. Interconnections and the read-out schemes could be arranged at the top, the bottom or on the side walls of the modules. Each CMOS pixel uses an N-well to P- substrate photodiode to integrate photo-generated charge  and employs a thin oxide capacitor in parallel  with the photodiode to increase  the maximum charge handling capacity of the pixel.  The signal charge is read out to a common signal line using  two series connected NMOS transistors which are controlled by row and column  scanning registers integrated on the imager array. Another unique feature of our circuit design is the pixel element includes at least one configurable transistor in order to implement desirable functions, for example scanning circuitry  and amplification circuitry. The configurable transistor is independent of the pair of switching transistors.    All the devices and  read-out electronics are made using single crystal silicon and the read-out electronics are buried underneath sensing areas. 
In the proposed modules, structured phosphors are used. Different techniques of making structured  phosphors will also be discussed.
`,

    bio: (
      <>
        Dr. Nang Tran received his PhD in solid state materials and device
        physics from Osaka Prefecture University in Japan in 1979 and did his
        postdoctoral research at Harvard University and the University of
        California, Irvine. Dr. Tran has spent 28 years in industry working on
        thin film solar cells, transparent conducting oxides, medical
        electronics, and data storage. His main technical achievements are the
        co-invention of a direct x-ray digital radiography detector, a major
        breakthrough for digital mammography in 1990, and the co-invention of
        transparent conducting ZnO film doped with group III elements in 1983.
        At present, most of the commercial thin film photovoltaic solar modules
        have at least one layer of this oxide in the device configuration.
        During his tenure with the industry, Dr. Tran was instrumental in
        winning funding for several multimillion-dollar research projects and
        brought in multimillion-dollar licensing royalties to companies based on
        his inventions. He was also an invited speaker, a committee member of
        international conferences, and a lecturer at seminars and workshops. Dr.
        Tran currently serves as an adjunct professor with the University of
        Minnesota, and has served as a visiting professor at universities in
        Vietnam and Japan. He has received more than 62 patents. Products based
        on his inventions have received many awards, including the prestigious
        Research and Development 100, Photonic Circle of Excellence. Dr. Tran
        was also the co-founder of Ecosolar International, a consulting company
        on solar energy, thin films, teleradiography, and water filtration
        systems. Dr. Tran is a senior life member of the IEEE, and was selected
        for inclusion in numerous volumes of Who's Who in America, Who's Who in
        Science and Engineering, Who's Who in the Midwest, Who's Who in the
        World, Who's Who in Finance and Industry, and Who's Who in Finance and
        Business.
      </>
    ),
  },
  {
    title: "",
    authorName: "Prof. Kyeong-Sik Min",
    orgName:
      "School of Electrical Engineering, Kookmin University, Seoul, Korea",
    avatar: "sikmin.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography_Kyeong-Sik Min.docx",
    abstract: <></>,
    bio: (
      <ol>
        <li>
          Research Areas
          <ul>
            <li>Processing in memory</li>
            <li>Neuromorphic circuits and systems</li>
            <li>Memory circuits and systems</li>
          </ul>
        </li>
        <li>
          Education
          <li>Post doc: 12/2001-08/2002, University of Tokyo, Japan</li>
          <li>Ph.D: 03/1993-08/1997, KAIST, Korea</li>
          <li>Master: 03/1991-02/1993, KAIST, Korea</li>
          <li>Bachelor/Engineer: 03/1987-02/1991, Korea Univ., Korea</li>
        </li>
        <li>
          Academic Activities
          <br />
          <i>Members of academic society</i>
          <ul>
            <li>
              Distinguished Service Award from Korea Semiconductor Industry
              Association (KSIA), Oct. 2023
            </li>
            <li>
              President of Institute of Korean Electrical and Electronics
              Engineers (IKEEE), 2022
            </li>
            <li>
              Chairperson of SoC Research Group in Institute of Electronics and
              Information Engineers (IEIE), 2021
            </li>
            <li>
              Award of Excellence in Academy-Industry R&D Cooperation from Mayor
              of Seoul City, 2021
            </li>
            <li>
              Grand Prize in Haedong Best Paper Award, IEIE, Journal of
              Semiconductor Technology and Science (JSTS), 2020
            </li>
            <li>
              Distinguished Service Award from Ministry of Science and ICT of
              Korean Government, 2020
            </li>
            <li>
              Academic Achievement Award, Institute of Korean Electrical and
              Electronics Engineers, Korea, 2015
            </li>
            <li>
              Distinguished Service Award, Institute of Korean Electrical and
              Electronics Engineers, Korea, 2014
            </li>
            <li>
              Chip Design Contest Award at Korean Conference on Semiconductors,
              2012
            </li>
            <li>
              CAD & Design Methodology Award at Korean Conference on
              Semiconductors, 2011
            </li>
            <li>
              Chip Design Contest Award at Korean Conference on Semiconductors,
              2011
            </li>
            <li>
              Distinguished Service Award, Institute of Electronics and
              Information Engineers, Korea, 2011
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    title: "",
    authorName: "Prof. Dao Viet Dzung",
    orgName: (
      <>
        Professor & Head, Mechanical Engineering, Griffith University
        <br />
        Director, Mechatronics Engineering Program, Griffith University
      </>
    ),
    avatar: "dzungdao.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography-Dzung Dao.docx",
    abstract: <></>,
    bio: (
      <>
        <ul>
          <li>
            <strong>Education/Qualifications</strong>
            <ul>
              <li>
                2003 PhD in Electro-Mechanical Systems, Ritsumeikan University,
                Japan
              </li>
              <li>
                1997 M.Eng Mechanical Eng., Hanoi University of Science and
                Technology (HUST), Vietnam
              </li>
              <li>
                1995 B.Eng Informatics-Mechanical Engineering, HUST, Vietnam
              </li>
            </ul>
          </li>
          <li>
            <strong>Professional History</strong>
            <ul>
              <li>
                2017 to 4/2023: Head, Mechanical Engineering Discipline, School
                of EBE, Griffith, AUSTRALIA.
              </li>
              <li>
                2011 to present: Professor, School of Engineering & Built
                Environment, Griffith Uni, AUSTRALIA.
              </li>
              <li>
                Apr 2007 to Dec 2011: Chair Professor, MEMS, Ritsumeikan
                University, JAPAN.
              </li>
              <li>
                Apr 2006 to Mar. 2007: Lecturer, MEMS, Ritsumeikan University,
                JAPAN.
              </li>
              <li>
                Apr 2003 to Mar 2006: Postdoctoral fellow, Ritsumeikan
                University, JAPAN.
              </li>
              <li>
                Sept 1995 to Sept 1999: Lecturer, Mechanical Engineering, HUST,
                VIETNAM.
              </li>
            </ul>
          </li>
          <li>
            <strong>Teaching area: </strong>Mechanical and Mechatronics
            Engineering Design, Control Systems, Electrotechnics, Advanced
            Manufacturing, Kinematics and Dynamics
          </li>
          <li>
            <strong>Research area</strong>
            <ul>
              <li>
                Optoelectronic and Sensing effects in nanostructured materials,
                semiconductors
              </li>
              <li>
                • Micro/Nano Electromechanical Systems (MEMS), MEMS Sensors,
                Actuators, energy harvesters
              </li>
              <li>
                Advanced Manufacturing: Micro/Nano machining technology,
                Additive manufacturing
              </li>
              <li>Wireless sensor network</li>
            </ul>
          </li>
          <li>
            <strong>Publications: </strong>235 Journal papers, 190 Conference
            papers, 6 book/book-chapters
          </li>
          <li>
            <strong>Publication Citations: </strong>7150 citations,{" "}
            <strong>H-index:</strong> 43 (Google scholar)
          </li>
          <li>
            <strong>Patents</strong> (filed and granted): 18
          </li>
          <li>
            <strong>Research Grants:</strong> > $11.5M (total). Grants received
            within the last 5 years are shown below:
            <ol>
              <li>
                ARC DP, Lead CI, 2022-2025, “Nano optoelectronic: towards an
                ultrasensitive sensing", $585k
              </li>
              <li>
                ARC LIEF, CI, 2023, National Facility for Characterisation of
                Infrared Technologies, $690k
              </li>
              <li>
                CCR (Geoinventions), 2023, “Robust sensors for geotechnical
                applications”, $35k
              </li>
              <li>
                CCR (Dentroid), 2023, “Clamping mechanism for intraoral laser
                manipulator”, $25k
              </li>
              <li>
                Griffith Infrastructure, Lead CI, 2022 "Etching facility for
                MEMS sensors fabrication", $280k
              </li>
              <li>
                Griffith Sciences, CI, 2022, “Integrated Quantum Efficiency
                Measurements System”, $109k
              </li>
              <li>
                Griffith Sciences, CI, 2022, “A set of 3D Laser Scanning
                Microscope System”, $90k
              </li>
              <li>
                Griffith Sciences, CI, 2022, “Transient Plane Source Thermal
                Conductivity Analyser”, $90k
              </li>
              <li>
                ARC LIEF, CI, 2022, Facility for enabling low thermal budget
                Si/SiGe technologies, $580k
              </li>
              <li>
                IMCRC, Lead CI, 2021-2022, "Smart sensor system for soft soil
                engineering & safety", $125k
              </li>
              <li>
                IMCRC, Lead CI, 2021-2022, Miniaturised laser manipulator for
                ultra-precise dentistry, $225k
              </li>
              <li>
                ARC LIEF, CI, 2021, Femtoliter Liquid Deposition Facility, $183k
              </li>
              <li>
                CSIRO-DFAT, Lead CI, 2020-2022, “Low-power Wireless Flood Sensor
                Network”, $400k{" "}
              </li>
              <li>CCR (Dentroid, Australia), Lead CI, 2020-2022, $30k</li>
              <li>
                IMCRC, CI, 2020-2022, “R2R printing for cost effective
                manufacturing of a Smart Patch for health monitoring”,
                $1,436,437
              </li>
              <li>
                CCR (Industry: Overseas), CI, 2019-2020, “Ultra-sensitive
                pressure sensor”, $110k
              </li>
              <li>
                Foundation for Australia-Japan Studies (FAJS) grant, lead CI,
                2019-2020, “Superior Sensor Network (SSN) for Harsh
                Environments”, $145,000
              </li>
              <li>
                Griffith Science Equipment round, lead CI, 2019,
                “Opto-Electro-Mechanical Measurement Suite”, $165,000
              </li>
              <li>
                ARC LIEF project, CI, 2019, “A femtosecond laser micromachining
                facility”, $438k
              </li>
              <li>
                Griffith University Infrastructure Grant, CI, 2019 (CI): $385k
              </li>
              <li>
                Griffith University Infrastructure Grant, CI, 2019 (CI): $323k
              </li>
              <li>
                ARC DP, CI, 2018-2021, “Magnetofluidic sample handling for
                enhanced PoC diagnosis”, $473k
              </li>
              <li>
                ARC LP, Lead CI, 2017-2021, “Superior Silicon Carbide Nanoscale
                Sensors (SCANS) for Harsh Environments”, $563,000 ($160,000 from
                SPT Microtechnologies, USA)
              </li>
              <li>
                IMCRC project, CI, 2017-2022, “Develop and manufacture a smart
                electric compressor”, $850,000 (50% from industry partner:
                SuperCool Australia)
              </li>
              <li>
                ARC LIEF, CI, 2018, “Xe-plasma dual beam for advanced future
                materials”, $1,136k
              </li>
              <li>
                Griffith University Infrastructure Grant (CI, 2017): $115k
              </li>
            </ol>
          </li>
          <li>
            <strong>HDR Supervision: </strong> I have successfully supervised to
            completion of 25 PhD students, all of them have secured good jobs in
            academia and industry. Notably, 3 of my recent graduates were
            awarded DECRA.
          </li>
          <li>
            <strong>Awards/Recognition:</strong>
            <ul>
              <li>
                World's top 2% most-cited scientists in Applied Physics
                (Stanford rankings 2021-2022)
              </li>
              <li>
                Top 1 researcher worldwide for publications & citations in
                SciVal Topic Cluster of Pressure Sensors, Sensors.
              </li>
              <li>
                Vice Chancellor’s Research Excellence Award – Excellent Research
                Team, 2021
              </li>
              <li>
                Pro Vice Chancellor’s Research Excellence Award – Excellence of
                Research Group, 2020
              </li>
              <li>Best Paper Award, 5th SDM, Gold Coast, Australia, 6/2018.</li>
              <li>
                Gold Coast City Mayor Award for outstanding contribution to Gold
                Coast City, 2016
              </li>
              <li>
                Best Oral Presentation Award, ICNNE 2016, Paris, France, 6/2016.{" "}
              </li>
              <li>
                Best Paper Award, 5th Bio4Apps, Gold Coast, Australia, 12//2016.
              </li>
              <li>Best Paper Award, IEEE MHS2008, Nagoya, Japan, 10/2008.</li>
              <li>Best Student Paper Award, APCOT2006, Singapore, 2006</li>
            </ul>
          </li>
          <li>
            <strong>Industry Collaborations:</strong>
            <ul>
              <li>
                2021-present, Geoinventions, Australia. Total funds received:
                $160k
              </li>
              <li>2020-present, Dentroid. Total funds received: $250k</li>
              <li>
                2019-2020, Rio Tinto (sponsor through the Foundation for
                Australia-Japan Studies). Project “Superior Sensor Network (SSN)
                for Harsh Environments”. Total funds: $145k
              </li>
              <li>
                2017-2020, SPT Microtechnologies (USA) in my ARC LP "Superior
                Silicon Carbide Nanoscale Sensors (SCANS) for Harsh
                Environments".
              </li>
              <li>
                2017-2020, SuperCool Asia Pacific Pty Ltd (Australia) in the
                Innovative Manufacturing CRC Project "Develop and manufacture a
                smart electric compressor for refrigeration and air conditioning
                on electric vehicles".
              </li>
              <li>
                From 2003 to 2011, I collaborated with various companies in
                Japan to conduct R&D projects. These companies are Olympus Corp,
                Omron Corp, Konica-Minolta Inc, Tamagawa Seiki, Horiba Corp,
                Towa Corp, Microstone, and Tokairika Co Ltd.{" "}
              </li>
            </ul>
            Through these collaborations, I gained valuable experience working
            with industry professionals and was able to apply my research to
            real-world applications.
          </li>
          <li>
            <strong>Editorial Board and Conference Committees</strong>
            <ul>
              <li>
                Discipline Expert (Mechanical & Mechatronics), EA Accreditation
                Panel, since 2015
              </li>
              <li>
                Associate Editor, Sensors and Materials, MYU KK, Tokyo, Japan
              </li>
              <li>
                Editorial Board Member, J. Adv. Nat. Sci: Nanosci. Nanotechnol.,
                IOP, UK.
              </li>
              <li>Editorial Board Member, Sensors Journal, MDPI </li>
              <li>
                Editorial Board Member, J. Sensors, Hindawi Publishing
                Corporation.{" "}
              </li>
              <li>
                General Chair of the 5th Bio4Apps,2016, Gold Coast, Australia
              </li>
              <li>
                General Chair, 5th Int’l Conf. on Sustainable Design and
                Manufacturing, Australia, June 2018.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "",
    authorName: "Prof. Congo Tak Shing Ching",
    orgName:
      "Graduate Institute of Biomedical Engineering, National Chung Hsing University, Taichung, Taiwan",
    avatar: "Ching.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography_prf. Congo.docx",
    abstract: <></>,
    bio: (
      <ol>
        <li>Research Areas:</li>
        Biomedical instrumentation design, biosensors, tissue bioimpedance,
        biomedical electronics, biomedical optoelectronic, AIoT healthcare,
        assistive healthcare technologies
        <li>
          Education:{" "}
          <i>(month/year to month/year, university/institute, country)</i>
        </li>
        <ul>
          <li>
            PhD in Bioengineering, University of Strathclyde, Glasgow, UK, 2005
          </li>
          <li>
            MPhil in Biomedical Engineering, The Hong Kong Polytechnic
            University, HK, 2002
          </li>
          <li>
            BSc in Prosthetics and Orthotics (First Class Honours), The Hong
            Kong Polytechnic University, HK, 1999
          </li>
        </ul>
        <li>
          Academic Activities:
          <br />
          <i>
            Members of academic society (name of society, position, where, when)
          </i>
          <ul>
            <li>
              Member, Prosthetics and Orthotics Society of Taiwan, since 2016
            </li>
            <li>
              Life Member, Taiwan Engineering Medicine Biology Association,
              since 2023
            </li>
            <li>
              Life Member, Association of Chemical Sensors in Taiwan, since 2015
            </li>
            <li>
              Life Member, Taiwan Rehabilitation Engineering and Assistive
              Technology Society, 2013
            </li>
            <li>Life Member, The Chinese Institute of Engineers, Since 2013</li>
            <li>Member, IEEE, since 2010</li>
            <li>
              Member, IEEE Engineering in Medicine and Biology Society, since
              2010
            </li>
            <li>
              Life Member, World Association for Chinese Biomedical Engineers,
              since 2009
            </li>
            <li>
              Member, International Association of Engineers (IAENG), since 2009
            </li>
            <li>
              Life Member, Biomedical Engineering Society of the R.O.C., since
              2008
            </li>
            <li>
              Member, The Royal Society of Edinburgh Entrepreneurs' Club, since
              2005
            </li>
          </ul>
          <i>
            Invited talks for International conference/workshop (name of talk,
            name of conference/workshop, where, when)
          </i>
          <ul>
            <li>
              Keynote speaker of The International Symposium on Applied Science
              (ISAS 2023), 13-15 Oct 2023, Ho Chi Minh City, Vietnam
            </li>
            <li>
              Keynote speaker of Rencontres du Vietnam: The first International
              Symposium of Nano Life Science: Nano Biotechnology, Biosensor,
              Computation (NanoBioCoM2023), 17-19 Sep 2023, ICISE, Quy Nhon,
              Vietnam
            </li>
            <li>
              Keynote speaker of International Symposium on Medical Devices and
              Technology 2023, 27-28 Aug 2023, Johor, Malaysia
            </li>
            <li>
              Plenary speaker of The 3rd International Workshop on Engineering
              Physics, IC-MEMS-Sensors and Their Applications (3rdIWEMA2022),
              25-26 Nov 2022, Ho Chi Minh City, Vietnam
            </li>
            <li>
              Keynote speaker of IEEE The 2nd International Conference on
              Intelligent Cybernetics Technology & Applications 2022 (IEEE
              ICICyTA 2022), 15-16 Dec 2022, Bandung, Indonesia
            </li>
            <li>
              Invited speaker of International Joint Symposium on Applied
              Mathematics, Science and Technology, 01 Dec 2022, Taichung, Taiwan
            </li>
            <li>
              Invited speaker of The 38th SENSOR SYMPOSIUM, 9-11 Nov 2021, Japan
            </li>
            <li>
              Keynote speaker of The International Symposium on Applied Science
              2021, 15-17 Oct 2021, Ho Chi Minh City, Vietnam
            </li>
            <li>
              Keynote speaker of The Fifth International Conference on
              Biological Information and Biomedical Engineering (BIBE2021),
              20-22 Jul 2021, Hangzhou, China
            </li>
            <li>
              Keynote speaker of the 3rd International Conference on Bioscience
              and Medical Engineering (ICBME2021), 29-30 Jun 2021, Johor Bahru,
              Malaysia
            </li>
            <li>
              Invited speaker of Distinguished Lecture Series, Universiti
              Teknologi Malaysia, 12 Nov 2020, Malaysia
            </li>
            <li>
              Plenary speaker of International Convention on Rehabilitation
              Engineering and Technology (i-CREATe 2020), 5-7 Nov 2020, Taipei,
              Taiwan
            </li>
            <li>
              Keynote speaker of International Conference on Biological
              Information and Biomedical Engineering (BIBE 2018), 6-8 Jul 2018,
              Shanghai, China
            </li>
            <li>
              Keynote speaker of The 2nd International Conference on Biomedical
              and Biological Engineering (BBE2017), 26-28 May 2017, Guilin,
              China
            </li>
            <li>
              Keynote speaker of The International Conference on Biological
              Engineering and Pharmacy (BEP2016), 9-11 Dec 2016, Shanghai, China
            </li>
            <li>
              Keynote speaker of The International Conference on Biomedical and
              Biological Engineering (BBE2016), 15-17 Jul 2016, Shanghai, China
            </li>
            <li>
              Invited speaker of The 11th Annual IEEE International Conference
              on Nano/Micro Engineered and Molecular Systems, 17-20 April 2016,
              Matsushima Bay and Sendai MEMS City, Japan
            </li>
          </ul>
          <i>
            Visiting researcher/professor (university/institute, where, when)
          </i>
          <ul>
            <li>
              Visiting Professor, Department of Physics and Electronic
              Engineering University of Science (Vietnam National University of
              Hochiminh City), Vietnam, 06/2019 – 07/2019
            </li>
            <li>
              Honorary Professor, Department of Health and Physical Education
              The Education University of Hong Kong, Hong Kong, 11/2016 –
              10/2019
            </li>
          </ul>
        </li>
        <li>
          Research Achievements and Awards:
          <a
            href={"https://www.bme.nchu.edu.tw/members/tsching/index.htm"}
            target={"_blank"}
          >
            <ul>
              <li>Research projects (2010-now): Chief of Project</li>
              <li>Intellectual Property</li>
              <li>Research Awards</li>
              <li>Research Awards</li>
            </ul>
          </a>
        </li>
        <li>
          <a
            href={"https://www.bme.nchu.edu.tw/members/tsching/index.htm"}
            target={"_blank"}
          >
            ISI/Scopus/SCIE Selected Publications (2010-Now)
          </a>
        </li>
      </ol>
    ),
  },
  {
    title: "",
    authorName: "Prof. Kun-Yu Lai",
    orgName:
      "Department of Optics and Photonics, National Central University, TAIWAN",
    avatar: "kunyu.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography-Kun-Yu Lai.docx",
    abstract: ``,
    bio: (
      <>
        Dr. Kun-Yu Lai is currently a professor in the Department of Optics and
        Photonics (DOP) at National Central University (NCU) in Taiwan. Prof.
        Lai received his Ph.D. degree in Electrical Engineering from North
        Carolina State University in USA in 2009. After working as the
        postdoctoral fellow in the Graduate Institute of Photonics and
        Optoelectronics at National Taiwan University in 2009-2011, he joined
        the faculty in DOP at NCU. Prof. Lai specializes in the
        growth/fabrication of novel III-nitride optoelectronic devices,
        including plasmonic biosensors and LEDs. He has published 56 articles in
        peer-reviewed SCI journals, with a total citation over 1700 times
        (H-index: 24). Detailed information on Prof. Lai’s research is available
        at:{" "}
        <a href={"http://kylai.cloudweb.com.tw/"} target={"_blank"}>
          http://kylai.cloudweb.com.tw/
        </a>{" "}
      </>
    ),
  },
  {
    title: "",
    authorName: "Assoc. Prof. Nguyen Van Toan",
    orgName: "Tohoku University-Japan",
    avatar: "Nguyen-Toan-2.png",
    abstractFile: "#",
    bioFile: "#",
    abstract: ``,
    bio: <></>,
  },
  {
    title: "",
    authorName: "Mr. Nguyen Phuc Vinh",
    orgName: "GTM-Synopsys-Vietnam",
    avatar: "vinhpnguyen.jpg",
    abstractFile: "#",
    bioFile: "#",
    abstract: ``,
    bio: <></>,
  },
  {
    title: "",
    authorName: "Prof. Masaya Toda",
    orgName: "Graduate School of Engineering, Tohoku University-Japan",
    avatar: "masayatoda.jpg",
    abstractFile: "#",
    bioFile:
      "https://www.r-info.tohoku.ac.jp/en/cf7d273aa12829d6a143a50f971b9891.html",
    abstract: ``,
    bio: <></>,
  },
  {
    title: "",
    authorName: "Dr. Pham Thanh Trung",
    orgName: "Namur University-Belgium",
    avatar: "trungpham.jpg",
    abstractFile: "#",
    bioFile: "#",
    abstract: ``,
    bio: <></>,
  },
];

class Keynote extends React.Component {
  render() {
    return (
      <React.Fragment>
        {data.map((d) => (
          <KeyNoteSection
            key={d.authorName}
            invertMobile
            imageFill
            className="illustration-section-03"
            content={d}
          />
        ))}
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
