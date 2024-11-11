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
    abstractFile: "https://phys.hcmus.edu.vn/ICEBA2024/files/plentary/Tran's Abstract.doc",
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
    title: "Micro/Nanomechanical Sensors for Health and IoT",
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
    abstract: <>The importance of cyber-physical systems and energy-saving technologies is increasing due to the current progress of the information and communication society. We are conducting research on microsystems and their application development as fundamental technologies for these future societies on the basis of nanotechnology. A sensor system was developed to recognize complex gas systems by detecting and learning about gases response with a nanomechanical sensor array. A resistance-detected biosensor for simple health care at home was also developed. A high-sensitivity vibration-type magnetic sensor was also developed. It can monitor the state of motors in a non-contact manner. An actuator operated by spin current was also developed to realize future compact systems.</>,
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
    title: "Edge Artificial Intelligence (AI) Mega Trends and AI Solutions in IC Design Automation",
    authorName: "Mr. Nguyen Phuc Vinh-Msc",
    orgName: "ARA-Synopsys-Vietnam",
    avatar: "vinhpnguyen.jpg",
    abstractFile: "#",
    bioFile: "#",
    abstract: `The rapid advancement of large language models (LLMs) such as ChatGPT, LLaMA and other lightweight LLMs, has revolutionized various fields, from natural language processing to Artificial Intelligence (AI) - driven applications. The talk will address the new era of pervasive intelligence, driven by ubiquitous AI, Silicon proliferation, and Software-defined systems. It then covers the key emerging technologies such as AI Compute, Edge-AI, AI-driven design automation, heterogeneous systems, next generation of computing architectures, etc that fuel the massive digital transformation towards the pervasive intelligence. In this keynote, we will explore the impact of Evolution of AI Compute, Edge-AI, addressing the unique challenges and opportunities they present on server based, on-device and edge-device for AI applications. The speaker will also share what we can do to stay at the forefront of these innovations.`,
    bio: <>
    <ol>
      <li>
        <strong>Research Areas</strong>
        <ul>
          <li>Artificial Intelligence in Electronic Design Aid</li>
          <li>Low power Design & Methodology</li>
        </ul>
      </li>
      <li>
        <strong>Education</strong>
        <ul>
          <li>Master: 2018, University of Science – VNU HCMC, Vietnam</li>
          <li>Bachelor: 2005, University of Science – VNU HCMC, Vietnam</li>
        </ul>
      </li>
      <li>
        <strong>Academic Activities:</strong>
        Member of Faculty Council, Electronics & Communications Faculty, University of Science – VNU HCMC.
      </li>
      <li>
        <strong>Selected publications: </strong>
        A Low-Power ASIC Implementation of Multi-Core OpenSPARC T1 Processor on 90nm CMOS Process, 2018 IEEE 12th International Symposium on Embedded Multicore/Many-core Systems-on-Chip (MCSoC)
      </li>
    </ol>
</>,
  },{
    title: "The influence of tides on LoRa communications in self meshing sensor nodes in coastal and near shore waters",
    authorName: "Prof. Schulz Jan",
    orgName: "Jade University of Applied Sciences, Wilhelmshaven, Germany",
    avatar: "janschulz.jpg",
    abstractFile: "#",
    bioFile: "#",
    abstract: `LoRa communication is an interesting application for in-field self-meshing sensor networks. In addition to the used antenna technology a couple of environmental effects have an important impact on signal strength and transmission loss. By this, these parameters determine reliability, influence the amount of transferred data and set the framework for the overall performance.
Here we show the range impact of a diurnal tide in a wadden sea area on a LoRa communication over 12,5 km. The tidal range has a clearly verifiable influence on the Fresnel zone of the signal propagation.
`,
    bio: <>
    <ol>
      <li>
        <strong>Research Areas: </strong>
        Maritime technology, Sensor networks, Marine imaging, Underwater vehicles and platforms, Data products
      </li>
      <li>
        <strong>Education</strong>
        <ul>
        <li>02/2022: Professor for Marine technology at Jade University of Applied Sciences, Wilhelmshaven, Germany</li>
        <li>06/2011: Senior scientist at the University of Oldenburg, Working group ‘Marine Sensor Systems’, campus Wilhelmshaven, Germany</li>
        <li>06/2009: Vice section head at the ‘Institute of Marine Resources’, Bremerhaven, Germany</li>
        <li>02/2007: PhD degree in marine biology and technological development ‘Spatio-temporal distribution patterns of zooplankton a methids to detect them’ </li>
        <li>10/2002 – 06/2009: System developer and researcher at Alfred Wegener Institute for Polar and Marine Research, Bremerhaven, Germany</li>
        <li>02/2001: Diploma in biological sciences at University of Hannover, Germany</li>
        </ul>
      </li>
      <li>
        <strong>Academic Activities:</strong>
        Teaching in Biological oceanography, Off-shore systems, Data and Statistics, Chemistry, Marine optics, Software development for research activities
      </li>
      <li>
        <strong>Research Achievements and Awards:</strong>
        Various projects and actions
      </li>
      <li>
        <strong>Selected publications: </strong>
        <a href="https://www.researchgate.net/profile/Jan-Schulz-6 ">https://www.researchgate.net/profile/Jan-Schulz-6 </a>
      </li>
    </ol>
  </>,
  },
  {
    title: "High-resolution imaging using superconducting sensor under pulsed neutrons",
    authorName: "Prof. Takekazu Ishida",
    orgName: "Osaka Metropolitan University, Japan",
    avatar: "Ishida.png",
    abstractFile: "#",
    bioFile: "#",
    abstract: `Various types of superconducting detectors have been used in the wide fields successfully because of their superior specifications such as high sensitivity, high-speed operation, high resolution, and small energy dissipation. Previously developed superconducting detectors to date include a superconducting transition edge sensor (TES) [1], a superconducting nanowire single photon detector (SNSPD) [2], and a microwave kinetic inductance detector (MKID) [3]. However, the superconducting detector has rarely been applied to detect charge-neutral neutrons. A current-biased kinetic inductance detector (CB-KID) [4] proposed by us is a kind of the superconducting detectors. It utilizes a rapid instantaneous reduction in the local Cooper pair density ns in a tiny hot spot of the nanowire stripline in a very short length Δℓ (≪ total length ℓ). Only a tiny fractional kinetic inductance is relevant to generate a signal in CB-KID.                                                  
While it looks similar to a superconducting nanowire single-photon detector (SNSPD) in configuration, but a feeding bias current can be much smaller than the critical current of fine sensing nanowire at an arbitrarily chosen operating temperature. A pair of pulsed-voltage signals produced at the hot spot starts to propagate over a long distance more than ℓ=100 m toward two end electrodes with opposite polarities. The CB-KID can in principle detect any sort of external stimuli through local energy dissipation in the detector. 
The CB-KID system for neutron applications has been developed using intense pulsed neutrons at Japan Proton Accelerator Research Complex (J-PARC). Earlier approaches focused on a CB-KID operation as the independent-pixel-based imaging with the aid of superconducting digital electronics [5], a superconducting delay-line method was instead proposed by utilizing a time-to-digital converter (Kalliope-I) as the readout circuit [6]. Two-dimensional orthogonal-meanderlines work to identify a hot-spot position (x,y) to reproduce an image using a delay time between two output-signal timestamps. A long meandered stripline in CB-KID does not owe to kinetic inductance as distinct from other kinetic inductance detectors, but works just as an impedance-matched delay-line waveguide for propagating the signals. A large number of pixels can remarkably be composed with only four-channel readouts. This is highly preferential in applying superconductive devices at a cryogenic temperature because the heat flow through leads can be suppressed remarkably. The CB-KID can be used for neutron transmission imaging with a 10B conversion layer, where we used to place a test sample at the cryogenic temperature near CB-KID to avoid image blurring arising from beam divergence in our earlier studies [7,8]. We consider that a Wood’s metal alloy (Bi 50wt.%, Pb 25wt.%, Sn 12.5wt.%, Cd 12.5wt.%) is a good sample to demonstrate the usefulness of the CB-KID imager. This alloy has a low melting temperature of 75.2°C. One of the four different phases of the Wood’s metal is a Cd-rich needle-like precipitate (width∼25 µm and length∼5 mm in average) and can be a good candidate of test a neutron detector. We observed an impressive sequential change in the fine mosaic structure of Cd needles after repeated solidification of the Wood’s metal from a melt. 
A spatial resolution of a superconducting neutron imager has systematically been studied using a standard Gd Siemens star made of 5-μm thick Gd (Paul Scherrer Institute). It has 128 Gd spokes radially extending outward from the center. The minimum distance between two adjacent spokes is 8.6 m at the central area. This is suitable to find a spatial resolution of CB-KID imaging. We conclude that the spatial resolution of neutron image using the Siemens star was estimated as d=2πr/128 ∼ 10 µm by finding a minimum circumference radius (r), on which two adjacent Gd spokes can be resolved separately [9]. The CB-KID readout electronics has two roles (Role-I and Role-II). Role-I is 2D imaging and Role-II is time-dependent spectroscopy with the aid of time-of-flight method. High-resolution time-of-flight measurement with CB-KID under pulsed neutrons enables us to know a wavelength of a neutron precisely. This is useful to conduct a transmission spectroscopy of materials. We consider that the CB-KID method becomes worth utilizing for various purposes in various different fields. 
Acknowledgements
This work is partially supported by Grant-in-Aid for Scientific Research (A) (JP16H0245, JP21H04666) and Grant-in-Aid for Early-Career Scientists (JP21K14566, JP23K13690) from JSPS. The neutron irradiation experiments at the Materials and Life Science Experimental Facility (MLF) of the J- PARC were conducted under the support of MLF project program (No. 2021P0501). 
`,
    bio: <>
    <ol>
      <li>
        <strong>Research Areas: </strong>
        <ul>
          <li>Superconductivity</li>
          <li>Vortex physics on superconductors</li>
          <li>Application of superconductive devices</li>
        </ul>
      </li>
      <li>
        <strong>Education</strong>
        <ul>
        <li>Ph.D: 1982 Kyoto University</li>
        <li>Master: 1978 Kyoto University</li>
        <li>Bachelor/Engineer: 1976 Tohoku University</li>
        </ul>
      </li>
      <li>
        <strong>Academic Activities:</strong>
        <ul>
          <li>2018 – Present date   Guest Professor at Division of Quantum and Radiation Engineering, Osaka Prefecture University (Osaka Metropolitan University)</li>
          <li>2017 - 2018   Director at NanoSquare Research Institute, Osaka Prefecture University</li>
          <li>2005 - 2018   Director at Institute for Nanofabrication Research, Osaka Prefecture University</li>
          <li>2002 – 2018   Professor at Department of Physics and Electronics, Osaka Prefecture University</li>
          <li>1994 – 2004   Chairman at High Tc Superconductivity Committee of JAERII (Tokai, Japan)</li>
          <li>1993 - 2001   Associate Professor at Department of Physics and Electronics, Osaka Prefecture University</li>
          <li>1992 Visiting Professor at National Institute for Standards and Technology (Boulder, USA)</li>
          <li>1991   Visiting Professor at Kernforschung Zentrum Karlsruhe (Karlsruhe, Germany)</li>
          <li>1991-1993   Associate Professor at Department of Physic, Ibaraki University</li>
          <li>1989   Visiting Researcher at National Institute for Standards and Technology (Boulder, USA)</li>
          <li>1983 – 1991   Assistant Professor at Department of Physics, Ibaraki University </li>
          <li>1983   Researcher at Institute for Chemical Research, Kyoto University</li>
          <li>1982 - 1983   JSPS Fellowship Researcher supported from JSPS</li>
        </ul>
      </li>
      <li>
        <strong>Research Achievements and Awards:</strong>
        <ul>
          <li>2021 – 2024   Leader of KAKENHI Kiban (A) Project</li>
          <li>2016 – 2020   Leader of KAKENHI Kiban (A) Project</li>
          <li>2011 – 2017   Leader of KAKENHI Kiban (S) Project</li>
          <li>2007 – 2010   Leader of KAKENHI Kiban (A) Project</li>
          <li>2002 – 2008   Leader of CREST Research Team Project</li>
        </ul>
      </li>
      <li>
        <strong>Selected publications: </strong>
        <ol>
          <li>T. Ishida et al., J Low Temp Phys 214, 152 (2024), “Neutron Transmission CB-KID Imager Using Samples Placed at Room Temperature”.</li>
          <li>T. D. Vu et al., J Phys Conf Ser in press (2024), “Neutron transmission imaging system with a superconducting kinetic inductance detector”. </li>
          <li>M. Hayashi et al., J Phys Conf Ser in press (2024), “Restoration of Vector Magnetization Image from Vector Scanning-SQUID Microscope Measurement”.</li>
          <li>H. Shishido et al., J Phys Conf Ser 2545, 012020 (2023), “Crystalline Orientation of CaF2 window determined by Neutron Transmission Imaging using a Delay Line Current-Biased Kinetic-Inductance Detector”.</li>
          <li>T. D. Vu et al., J Phys Conf Ser2545, 012019 (2023), “Superconducting neutron transmission imaging for investigating a sequential change in phase separations of low-melting Wood's metal”</li>
          <li>H. Shishido et al., J. Appl. Cryst.56, 1 (2023), “Orientation mapping of YbSn3 single crystals based on Bragg-dip analysis using a delay-line superconducting sensor”.</li>
          <li>T. D. Vu et al., J Phys Conf Ser 2323, 012028 (2022), “Narrow-area Bragg-edge transmission of iron samples using superconducting neutron sensor”.</li>
          <li>H. Shishido et al., J Phys Conf Ser 2323, 12029 (2022), “Neutron Imaging toward Epithermal Regime using a Delay Line Current-Biased Kinetic-Inductance Detector”.</li>
          <li>T.D. Vu et al., Supercond. Sci. Technol., 34, 015010 (2021), “Homogeneity of neutron transmission imaging over a large sensitive area with a four-channel superconducting detector”.</li>
          <li>T.D. Vu et al., Nucl. Inst. Methods Phys. Res., A 1006, 165411 (2021), “Practical tests of neutron transmission imaging with a superconducting kinetic-inductance sensor”.</li>
          <li>H. Shishido et al., J. Phys. Conf. Ser. 1975, 012023 (2021), “Neutron Imaging for Intermetallic Alloys using a Delay Line Current-Biased Kinetic-Inductance Detector”.</li>
          <li>H. Shishido et al., IEEE Transactions on Applied Superconductivity, 31(9), 1-5 (2021), “High Spatial Resolution Neutron Transmission Imaging Using a Superconducting Two-Dimensional Detector”.</li>
          <li>T. Ishida, IEICE Tran. Electron. E103-C(5), 198 (2020), “Superconducting Neutron Detectors and Their Application to Imaging”.</li>
          <li>T. Koyama and T. Ishida, J. Phys. Conf. Ser. 1293, 012050 (2019), “Ginzburg-Landau theory for the operation principle of superconducting delay-line inductance detectors”.</li>
          <li>T.D. Vu et al., J. Phys. Conf. Ser. 1293,012051 (2019), “Temperature dependent characteristics of neutron signals from a current-biased Nb nanowire detector with 10B converter”.</li>
          <li>Y. Iizawa et al., Supercon. Sci. Tech., 32, 125009 (2019), “Energy-resolved neutron imaging with high spatial resolution using a superconducting delay-line kinetic inductance detector”.</li>
          <li>Y. Miki et al. J. Phys. Conf. Ser. 1054, 012054 (2018), “Neutron signal features of Nb-based kinetic inductance detector with 10B convertor”.</li>
          <li>T. Koyama and T. Ishida, J. Phys. Conf. Ser. 1054, 012055 (2018), “Electrodynamic theory for the operation principle of a superconducting kinetic inductance stripline detector”.</li>
          <li>Y. Iizawa et al. J. Phys. Conf. Ser. 1056, 012054 (2018), “Physical characteristics of delay-line current-biased kinetic inductance detector”.</li>
          <li>H. Shishido et al., Phys. Rev. Applied 10, 0440440-1_10 (2018), “High-Speed Neutron Imaging Using a Current-Biased Delay-Line Detector of Kinetic Inductance”.</li>
          <li>Y. Miki et al., J. Phys.: Conf. Series 1054, 012054 (2018). “Neutron signal features of Nb-based kinetic inductance detector with 10B convertor”.</li>
          <li>T. Koyama and T. Ishida, J. Phys.: Conf. Series 1054, 012055 (2018), “Electrodynamic theory for the operation principle of a superconducting kinetic inductance stripline detector”.</li>
          <li>Y. Iizawa et al., J. Phys.: Conf. Series 1056, 012054 (2018). “Physical characteristics of delay-line current-biased kinetic inductance detector”.</li>
          <li>S. Miyajima et al., Nuclear Inst. and Methods in Physics Research, A, 842, 71 (2017), “Neutron Flux Spectrum Revealed by Nb-based Current-Biased Kinetic Inductance Detector with a 10B Conversion Layer”.</li>
          <li>T. D. Vu et al., Journal of Physics Conference Series 871(1):012021 (2017) “Vector sensor for scanning SQUID microscopy”.</li>
          <li>H. Miyoshi et al., , Journal of Physics Conference Series 871(1):012021 (2017) “Simulations of vortices in a star-shaped plate with an artificial pin”.</li>
          <li>A. Ito et al., Journal of Physics Conference Series 871(1):012021 (2017) “Numerical restoration of surface vortices in Nb films measured by a scanning SQUID microscope”.</li>
          <li>N. Fujita et al., Journal of Physics: Conf. Series 807, 052014 (2017), “Fractional vortices in a nano-scaled superconducting composite structure (d-dot) with a twin boundary”.</li>
          <li>T. D. Vu et al., Physica C, 533, pp. 44-48 (2017) “Vortex distribution in small star-shaped Mo80Ge20 plate”.</li>
          <li>H. Matsumoto et al., Physica C, 530, pp. 46-50 (2016) “Vortex distribution in amorphous Mo80Ge20 plates with artificial pinning center”.</li>
          <li>H. Miyoshi et al., Physics Procedia 81, 89 – 92 (2016) “Ginzburg-Landau calculations of star-shaped Mo80Ge20 superconducting small plates”.</li>
          <li>H. Matsumoto et al., Physics Procedia 81 (2016) 93 – 96, “Ginzburg-Landau calculations of circular Mo80Ge20 plates with sector defect”.</li>
          <li>A. Bozbey et al., IEICE Transactions on Electronics, E99C, 676-682 (2016) “Development of a neutron imager based on superconducting detectors”.</li>
          <li>H. Shishido et al., IEEE Xplore Superconductive Electronics Conference (ISEC), 2015, DR-O17 1-3 (2015), “Current-biased kinetic inductance detector for neutrons”.</li>
          <li>S. Miyajima et al., IEEE Xplore Superconductive Electronics Conference (ISEC), 2015, DR-P21 pp.1-3 (2015), “Coincidence detection of double-layered current-biased kinetic inductance detectors using a 20 ps pulsed laser”.</li>
          <li>H. Shishido et al., Applied Physics Letters, 107,.232601_1-4 (2015), “Neutron detection using a current biased kinetic inductance detector”.</li>
          <li>N. Fujita et al., Physica C: Superconductivity and its Applications, 518, art. no. 1252851, pp. 44-46 (2015) “Twin boundary effects on spontaneous half-quantized vortices in superconducting composite structures (d-dot's)”.</li>
          <li>H. Shishido et al., Applied Physics Express, 8 (11), art. no. 113101 (2017) “Ambient temperature epitaxial growth of MgB2 thin films with a Mg buffer layer”.</li>
          <li>H. Shishido et al. Physics Procedia, 75, pp. 405-412 (2017), “Semi-Epitaxial SmB6 Thin Films Prepared by the Molecular Beam Epitaxy”.</li>
          <li>Y. Narukami et al., , IEEE Transactions on Applied Superconductivity, 25, 6995946 (2015), “20 ps pulsed laser irradiation to current-biased kinetic inductance detector made of Nb nanowires”.</li>
          <li>N. Yoshioka et al., Journal of Low Temperature Physics, 176 (3-4), pp. 273-278 (2014) , “Four-channel current-biased kinetic inductance detectors using MgB2 nanowires for sensing pulsed laser irradiation”.</li>
          <li>T. Ishida et al., IEEE Transactions on Applied Superconductivity, 25, 7051246 (2015), “Toward neutron radiography using two arrays of Nb-based current-biased kinetic inductance detectors with 10B converter sandwiched in-between”.</li>
        </ol>
      </li>
    </ol>
  </>,
  },
  {
    title: "Atmospheric Radical Detection via Nanomechanical Magnetic Cantilever",
    authorName: "Prof. Masaya Toda",
    orgName: "Graduate School of Engineering, Tohoku University-Japan",
    avatar: "masayatoda.jpg",
    abstractFile: "#",
    bioFile:
      "https://www.r-info.tohoku.ac.jp/en/cf7d273aa12829d6a143a50f971b9891.html",
    abstract: `One of the most interesting properties of nano-diamonds is the photoluminescence from crystal defects called nitrogen vacancy centers (NVC), and the optically detected magnetic resonance (ODMR) spectrum emitted from NVC in nano-diamond is highly sensitive to external magnetic fields and stress changes. In our research, we introduce a novel cantilever-type force probe enhanced with a nano-diamond nitrogen vacancy color centers (NVCs). Nano-diamonds are embedded in the SiO2 layer on the Si cantilever surface. When the cantilever vibrates upward and downward, compressive and tensile stresses are alternately applied to the surface nano-diamond. The ODMR spectrum of NVC was measured with confocal microscope. In this experiment, the peaks were split into four (2 by 2) by adjusting one of four crystal axis of the ensemble NVC and the static magnetic field axis. The peak shift was measured by comparing fluorescence spectra with and without stress. As a result, the peak shift was observed due to the stress generated by the vibration of the cantilever. In addition, the peak shifts depend on the stress applied to the diamond by changing the vibration amplitude of the cantilever. `,
    bio: <></>,
  },
  {
    title: "A Rapid Cancer Diagnosis by Nitride Surface-Enhanced Raman Spectroscopy",
    authorName: "Prof. Kun-Yu Lai",
    orgName:
      "Department of Optics and Photonics, National Central University, TAIWAN",
    avatar: "kunyu.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography-Kun-Yu Lai.docx",
    abstract: `Cancer is fatal, but can be cured if detected early. Tracking circulating tumor DNA (ctDNA), released from abnormal cells into the blood, is a promising tactic for cancer diagnosis. Although technically feasible, unambiguously identifying ctDNA is a challenging and demanding task. This is because the task often entails four complicated steps, i.e., surface functionalization, probe immobilization, fluorescent labeling and probe-target hybridization. Each step requires multiple hours to complete the binding between functional molecules. To capture the target quickly, we present a linker-free, label-free, hybrid-free DNA detection by surface-enhanced Raman spectroscopy (SERS), using InGaN quantum wells (QWs) as a performance booster. This is realized by tuning the band gaps of QWs, within which the confined electrons resonate with those vibrating on the roughened Al surface and the oligonucleotide. The QW-Al-DNA resonance results in a selective amplification of specific SERS signals, allowing us to identify four distinct ctDNAs responsible for pancreatic, thyroid, lung, and breast cancers.  `,
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
    title: "Bioimpedance sensing for detection in various fields",
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
    title: "Low-power AI computing circuits with emerging memories",
    authorName: "Prof. Kyeong-Sik Min",
    orgName:
      "School of Electrical Engineering, Kookmin University, Seoul, Korea",
    avatar: "sikmin.jpg",
    abstractFile: "#",
    bioFile: "/files/plentary/biography_Kyeong-Sik Min.docx",
    abstract: <>The imminent Internet-of-Things (IoT) era demands a vast network of sensors and edge devices to enhance human life, generating unprecedented volumes of unstructured data. Conventional cloud-based processing of this data poses significant energy challenges, potentially leading to unsustainable levels of power consumption in data centers and communication networks. This paper explores low-power AI computing circuits utilizing emerging memories as a solution to this impending energy crisis. We focus on processing-in-memory techniques for edge computing and IoT sensors, which can dramatically reduce data transmission to centralized servers. By departing from the energy-inefficient Von Neumann architecture, these approaches offer substantial improvements in computing energy efficiency. Our research investigates various emerging memory technologies and their crossbar arrays, with a particular emphasis on memristor crossbars, as promising candidates for realizing energy-efficient edge intelligence. We present novel circuit designs that leverage these technologies to enable in-memory computing, significantly reducing power consumption while maintaining computational performance. This work addresses the challenges and opportunities in integrating emerging memories into AI circuits, paving the way for ultra-low-power AI systems that can support the expanding IoT ecosystem without compromising on performance or functionality.</>,
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
  // {
  //   title: "",
  //   authorName: "Prof. Dao Viet Dzung",
  //   orgName: (
  //     <>
  //       Professor & Head, Mechanical Engineering, Griffith University
  //       <br />
  //       Director, Mechatronics Engineering Program, Griffith University
  //     </>
  //   ),
  //   avatar: "dzungdao.jpg",
  //   abstractFile: "#",
  //   bioFile: "/files/plentary/biography-Dzung Dao.docx",
  //   abstract: <></>,
  //   bio: (
  //     <>
  //       <ul>
  //         <li>
  //           <strong>Education/Qualifications</strong>
  //           <ul>
  //             <li>
  //               2003 PhD in Electro-Mechanical Systems, Ritsumeikan University,
  //               Japan
  //             </li>
  //             <li>
  //               1997 M.Eng Mechanical Eng., Hanoi University of Science and
  //               Technology (HUST), Vietnam
  //             </li>
  //             <li>
  //               1995 B.Eng Informatics-Mechanical Engineering, HUST, Vietnam
  //             </li>
  //           </ul>
  //         </li>
  //         <li>
  //           <strong>Professional History</strong>
  //           <ul>
  //             <li>
  //               2017 to 4/2023: Head, Mechanical Engineering Discipline, School
  //               of EBE, Griffith, AUSTRALIA.
  //             </li>
  //             <li>
  //               2011 to present: Professor, School of Engineering & Built
  //               Environment, Griffith Uni, AUSTRALIA.
  //             </li>
  //             <li>
  //               Apr 2007 to Dec 2011: Chair Professor, MEMS, Ritsumeikan
  //               University, JAPAN.
  //             </li>
  //             <li>
  //               Apr 2006 to Mar. 2007: Lecturer, MEMS, Ritsumeikan University,
  //               JAPAN.
  //             </li>
  //             <li>
  //               Apr 2003 to Mar 2006: Postdoctoral fellow, Ritsumeikan
  //               University, JAPAN.
  //             </li>
  //             <li>
  //               Sept 1995 to Sept 1999: Lecturer, Mechanical Engineering, HUST,
  //               VIETNAM.
  //             </li>
  //           </ul>
  //         </li>
  //         <li>
  //           <strong>Teaching area: </strong>Mechanical and Mechatronics
  //           Engineering Design, Control Systems, Electrotechnics, Advanced
  //           Manufacturing, Kinematics and Dynamics
  //         </li>
  //         <li>
  //           <strong>Research area</strong>
  //           <ul>
  //             <li>
  //               Optoelectronic and Sensing effects in nanostructured materials,
  //               semiconductors
  //             </li>
  //             <li>
  //               • Micro/Nano Electromechanical Systems (MEMS), MEMS Sensors,
  //               Actuators, energy harvesters
  //             </li>
  //             <li>
  //               Advanced Manufacturing: Micro/Nano machining technology,
  //               Additive manufacturing
  //             </li>
  //             <li>Wireless sensor network</li>
  //           </ul>
  //         </li>
  //         <li>
  //           <strong>Publications: </strong>235 Journal papers, 190 Conference
  //           papers, 6 book/book-chapters
  //         </li>
  //         <li>
  //           <strong>Publication Citations: </strong>7150 citations,{" "}
  //           <strong>H-index:</strong> 43 (Google scholar)
  //         </li>
  //         <li>
  //           <strong>Patents</strong> (filed and granted): 18
  //         </li>
  //         <li>
  //           <strong>Research Grants:</strong> > $11.5M (total). Grants received
  //           within the last 5 years are shown below:
  //           <ol>
  //             <li>
  //               ARC DP, Lead CI, 2022-2025, “Nano optoelectronic: towards an
  //               ultrasensitive sensing", $585k
  //             </li>
  //             <li>
  //               ARC LIEF, CI, 2023, National Facility for Characterisation of
  //               Infrared Technologies, $690k
  //             </li>
  //             <li>
  //               CCR (Geoinventions), 2023, “Robust sensors for geotechnical
  //               applications”, $35k
  //             </li>
  //             <li>
  //               CCR (Dentroid), 2023, “Clamping mechanism for intraoral laser
  //               manipulator”, $25k
  //             </li>
  //             <li>
  //               Griffith Infrastructure, Lead CI, 2022 "Etching facility for
  //               MEMS sensors fabrication", $280k
  //             </li>
  //             <li>
  //               Griffith Sciences, CI, 2022, “Integrated Quantum Efficiency
  //               Measurements System”, $109k
  //             </li>
  //             <li>
  //               Griffith Sciences, CI, 2022, “A set of 3D Laser Scanning
  //               Microscope System”, $90k
  //             </li>
  //             <li>
  //               Griffith Sciences, CI, 2022, “Transient Plane Source Thermal
  //               Conductivity Analyser”, $90k
  //             </li>
  //             <li>
  //               ARC LIEF, CI, 2022, Facility for enabling low thermal budget
  //               Si/SiGe technologies, $580k
  //             </li>
  //             <li>
  //               IMCRC, Lead CI, 2021-2022, "Smart sensor system for soft soil
  //               engineering & safety", $125k
  //             </li>
  //             <li>
  //               IMCRC, Lead CI, 2021-2022, Miniaturised laser manipulator for
  //               ultra-precise dentistry, $225k
  //             </li>
  //             <li>
  //               ARC LIEF, CI, 2021, Femtoliter Liquid Deposition Facility, $183k
  //             </li>
  //             <li>
  //               CSIRO-DFAT, Lead CI, 2020-2022, “Low-power Wireless Flood Sensor
  //               Network”, $400k{" "}
  //             </li>
  //             <li>CCR (Dentroid, Australia), Lead CI, 2020-2022, $30k</li>
  //             <li>
  //               IMCRC, CI, 2020-2022, “R2R printing for cost effective
  //               manufacturing of a Smart Patch for health monitoring”,
  //               $1,436,437
  //             </li>
  //             <li>
  //               CCR (Industry: Overseas), CI, 2019-2020, “Ultra-sensitive
  //               pressure sensor”, $110k
  //             </li>
  //             <li>
  //               Foundation for Australia-Japan Studies (FAJS) grant, lead CI,
  //               2019-2020, “Superior Sensor Network (SSN) for Harsh
  //               Environments”, $145,000
  //             </li>
  //             <li>
  //               Griffith Science Equipment round, lead CI, 2019,
  //               “Opto-Electro-Mechanical Measurement Suite”, $165,000
  //             </li>
  //             <li>
  //               ARC LIEF project, CI, 2019, “A femtosecond laser micromachining
  //               facility”, $438k
  //             </li>
  //             <li>
  //               Griffith University Infrastructure Grant, CI, 2019 (CI): $385k
  //             </li>
  //             <li>
  //               Griffith University Infrastructure Grant, CI, 2019 (CI): $323k
  //             </li>
  //             <li>
  //               ARC DP, CI, 2018-2021, “Magnetofluidic sample handling for
  //               enhanced PoC diagnosis”, $473k
  //             </li>
  //             <li>
  //               ARC LP, Lead CI, 2017-2021, “Superior Silicon Carbide Nanoscale
  //               Sensors (SCANS) for Harsh Environments”, $563,000 ($160,000 from
  //               SPT Microtechnologies, USA)
  //             </li>
  //             <li>
  //               IMCRC project, CI, 2017-2022, “Develop and manufacture a smart
  //               electric compressor”, $850,000 (50% from industry partner:
  //               SuperCool Australia)
  //             </li>
  //             <li>
  //               ARC LIEF, CI, 2018, “Xe-plasma dual beam for advanced future
  //               materials”, $1,136k
  //             </li>
  //             <li>
  //               Griffith University Infrastructure Grant (CI, 2017): $115k
  //             </li>
  //           </ol>
  //         </li>
  //         <li>
  //           <strong>HDR Supervision: </strong> I have successfully supervised to
  //           completion of 25 PhD students, all of them have secured good jobs in
  //           academia and industry. Notably, 3 of my recent graduates were
  //           awarded DECRA.
  //         </li>
  //         <li>
  //           <strong>Awards/Recognition:</strong>
  //           <ul>
  //             <li>
  //               World's top 2% most-cited scientists in Applied Physics
  //               (Stanford rankings 2021-2022)
  //             </li>
  //             <li>
  //               Top 1 researcher worldwide for publications & citations in
  //               SciVal Topic Cluster of Pressure Sensors, Sensors.
  //             </li>
  //             <li>
  //               Vice Chancellor’s Research Excellence Award – Excellent Research
  //               Team, 2021
  //             </li>
  //             <li>
  //               Pro Vice Chancellor’s Research Excellence Award – Excellence of
  //               Research Group, 2020
  //             </li>
  //             <li>Best Paper Award, 5th SDM, Gold Coast, Australia, 6/2018.</li>
  //             <li>
  //               Gold Coast City Mayor Award for outstanding contribution to Gold
  //               Coast City, 2016
  //             </li>
  //             <li>
  //               Best Oral Presentation Award, ICNNE 2016, Paris, France, 6/2016.{" "}
  //             </li>
  //             <li>
  //               Best Paper Award, 5th Bio4Apps, Gold Coast, Australia, 12//2016.
  //             </li>
  //             <li>Best Paper Award, IEEE MHS2008, Nagoya, Japan, 10/2008.</li>
  //             <li>Best Student Paper Award, APCOT2006, Singapore, 2006</li>
  //           </ul>
  //         </li>
  //         <li>
  //           <strong>Industry Collaborations:</strong>
  //           <ul>
  //             <li>
  //               2021-present, Geoinventions, Australia. Total funds received:
  //               $160k
  //             </li>
  //             <li>2020-present, Dentroid. Total funds received: $250k</li>
  //             <li>
  //               2019-2020, Rio Tinto (sponsor through the Foundation for
  //               Australia-Japan Studies). Project “Superior Sensor Network (SSN)
  //               for Harsh Environments”. Total funds: $145k
  //             </li>
  //             <li>
  //               2017-2020, SPT Microtechnologies (USA) in my ARC LP "Superior
  //               Silicon Carbide Nanoscale Sensors (SCANS) for Harsh
  //               Environments".
  //             </li>
  //             <li>
  //               2017-2020, SuperCool Asia Pacific Pty Ltd (Australia) in the
  //               Innovative Manufacturing CRC Project "Develop and manufacture a
  //               smart electric compressor for refrigeration and air conditioning
  //               on electric vehicles".
  //             </li>
  //             <li>
  //               From 2003 to 2011, I collaborated with various companies in
  //               Japan to conduct R&D projects. These companies are Olympus Corp,
  //               Omron Corp, Konica-Minolta Inc, Tamagawa Seiki, Horiba Corp,
  //               Towa Corp, Microstone, and Tokairika Co Ltd.{" "}
  //             </li>
  //           </ul>
  //           Through these collaborations, I gained valuable experience working
  //           with industry professionals and was able to apply my research to
  //           real-world applications.
  //         </li>
  //         <li>
  //           <strong>Editorial Board and Conference Committees</strong>
  //           <ul>
  //             <li>
  //               Discipline Expert (Mechanical & Mechatronics), EA Accreditation
  //               Panel, since 2015
  //             </li>
  //             <li>
  //               Associate Editor, Sensors and Materials, MYU KK, Tokyo, Japan
  //             </li>
  //             <li>
  //               Editorial Board Member, J. Adv. Nat. Sci: Nanosci. Nanotechnol.,
  //               IOP, UK.
  //             </li>
  //             <li>Editorial Board Member, Sensors Journal, MDPI </li>
  //             <li>
  //               Editorial Board Member, J. Sensors, Hindawi Publishing
  //               Corporation.{" "}
  //             </li>
  //             <li>
  //               General Chair of the 5th Bio4Apps,2016, Gold Coast, Australia
  //             </li>
  //             <li>
  //               General Chair, 5th Int’l Conf. on Sustainable Design and
  //               Manufacturing, Australia, June 2018.
  //             </li>
  //           </ul>
  //         </li>
  //       </ul>
  //     </>
  //   ),
  // },
  // {
  //   title: "",
  //   authorName: "Assoc. Prof. Nguyen Van Toan",
  //   orgName: "Tohoku University-Japan",
  //   avatar: "Nguyen-Toan-2.png",
  //   abstractFile: "#",
  //   bioFile: "#",
  //   abstract: ``,
  //   bio: <></>,
  // },
  // {
  //   title: "",
  //   authorName: "Dr. Pham Thanh Trung",
  //   orgName: "Namur University-Belgium",
  //   avatar: "trungpham.jpg",
  //   abstractFile: "#",
  //   bioFile: "#",
  //   abstract: ``,
  //   bio: <></>,
  // },
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
