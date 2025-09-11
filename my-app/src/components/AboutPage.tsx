import './AboutPage.css'
import React from 'react';
import HProjectCard from './HProjectCard';
import Marquee from "react-fast-marquee";
import { PageTypes } from '../App';
import classNames from 'classnames';

import pointeShot from '../images_gifs/commercial-shot.png';
import mirrorshadow from '../images_gifs/1330.jpg';
import blurImage from '../images_gifs/3-optimize.gif';

import coppeliaLift from '../images_gifs/coppelia_lift_bw.jpg';
import gif6 from '../images_gifs/jpg/pretend_to_think.jpeg';
import gif3 from '../images_gifs/1.png';

interface AboutPageProps {
  update: string;
  setNavPage: (nav: PageTypes) => void;
  navMenu: React.ReactNode;
}
const AcademiaContent = (
  <div>
    <b>Research:</b> <i>Imagination & Cognition</i>
    <br/>
    <br/>B.Sc. Imagination & Computer Science
    <br/>M.A. American Studies (film)
  </div>
);

const dancerResume = (
  <div style={{textAlign: 'left'}}>
    <b>Freelance Artist & Teacher</b> 
    <br/> started professional career at Ballet RI in 2021.
    Stage and screen experience in ballet & contemporary
    <br/>
    <div style={{textAlign: 'right'}}>  <i >résumé available upon request</i> <br/>
</div>
  </div>
);

const directContent = (
  <div>
    art direction · videography
    <br/>
    for freelance projects & communications work
  </div>
);  

const screenContent = (
  <div>
    performer in commericals & shorts
  </div>
);

const techContent = (
  <div style={{textAlign: 'left'}}>    
      <b>Currently: AI & Data Associate</b> 
    <br/>development & technical project management experience at
    Apple, VR Lab, Amazon Studios <br/>
    <div style={{textAlign: 'right'}}>  <i >résumé available upon request</i> <br/>
  </div>
  </div>  
);

const writingContent = (
  <div>
    working on it...
  </div>
);

function AboutPage({ update, setNavPage, navMenu }: AboutPageProps) {
  let sqTest = classNames("squares", "horizontal-scroll-wrapper");

  return (
    <div className="about-body">
    <div className="about-sticky-container">

    <Marquee className={"marquee"} pauseOnHover={true} play={true} speed={30} >
    {update}</Marquee>
      <div onClick={() => {setNavPage(PageTypes.Main)}} className="aboutPage-title">kira</div>
      {navMenu}
</div>
      <div className="About-projects-wrapper">
        <div className="About-Projects-title"> 
          I work on art, imagination, and technology
          across mediums, disciplines, and industries
          <br/>
       </div>
      <div className="hProjects-card-wrapper">


        <HProjectCard projectTitle={"Dance Artist"} bgImage={coppeliaLift} 
        projectDescription={dancerResume} />
        <HProjectCard projectTitle={"Code · Design"} bgImage={mirrorshadow} 
        projectDescription={techContent} />
        <HProjectCard projectTitle={"Directing"} bgImage={blurImage} 
        projectDescription={directContent} />    
        <HProjectCard projectTitle={"Academic"} bgImage={gif6} 
        projectDescription={AcademiaContent} />            
        <HProjectCard projectTitle={"Screen"} bgImage={pointeShot} 
        projectDescription={screenContent} />
        <HProjectCard projectTitle={"Writing"} bgImage={gif3} 
        projectDescription={writingContent} />
      </div>
      </div>

    </div>
  );
}

export default AboutPage;

