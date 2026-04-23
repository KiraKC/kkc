import React, { useState, useEffect } from 'react';
import { PageTypes } from '../App';
import CreditModal from './CreditModal';
import ContactMenu from './ContactMenu'; 
import VerticalMarquee from './VerticalMarquee';
import './NavMenu.css';
import { Typewriter } from 'react-simple-typewriter';
import { DateTime } from 'luxon';
import CreditItem from './CreditItem';
import filmOperatorImage from '../images_gifs/film-operator.gif'; 
import portraitImage1 from '../images_gifs/jpg/kira_blur.jpg'; 
import portraitImage2 from '../images_gifs/jpg/kkc_contemp.jpg';
import commercialImage from '../images_gifs/commercial-shot.png';

interface NavMenuProps {
  currentPage: PageTypes;
  setNavPage: (nav: PageTypes) => void;
}

const credits = [
  { name: "\"Kira, Chariots of Fire\"", 
    role: 'PHOTOGRAPHS', 
     details: (
       <>
       2025. by 
         <a href="https://www.jacobsaffarian.com/" target="_blank" rel="noopener noreferrer"> Jacob Saffarian</a>
         <br />
         <i>with Svenja Capitain & Amelia Doğan</i> 
         <br />
         West Sands, St Andrews, Scotland
       </>
     ),
      image: portraitImage1 },

     { name: 'Portfolio', 
    role: 'WEBSITE', 
    details:"designed and created from scratch by KKC", image: undefined },
    
    
    { name: '"The Love Song of J. Alfred Prufrock"', 
    role: 'POEM 01', details: "1911. by T.S. Eliot", image: undefined },    
     { name: '"Commercial"', 
    role: 'STILL', 
    details: ( <>by Rodrigo Prieto
               <br />
                The Elgin & Winter Garden Theatres, Toronto, Canada</>
    ), image: commercialImage },  

  { name: '"She Walks in Beauty"', 
    role: 'POEM 02', details: "1814. by Lord Byron", image: undefined },   
  { name: '"Contemporary Portraits"', 
    role: 'PHOTOGRAPHS', 
    details: ( <>2025. by Alex N Chen
               <br />
                St Andrews, Scotland</>
    ), image: portraitImage2 },  
    { name: '"Training to become film operator"', 
    role: 'LOADER', 
    details: "1943. Netherlands Institute for Sound & Vision, modified by KKC", image: filmOperatorImage },
];

const contactMenus = [
  // {
  //   id: "a",
  //   episodeText: "Ep. 1",
  //   episodeInfoText: "MAIL",
  //   titleText: "General Inquiries",
  //   titleInfoText: "email me"  },
  {
    id: "b",
    episodeText: "Ep. 1",
    episodeInfoText: "LINKEDIN",
    titleText: "Professional",
    titleInfoText: "/in/kkc",
    titleInfoTextLink: "https://www.linkedin.com/in/kira-k-clarke",
  },
  {
    id: "c",
    episodeText: "Ep. 2",
    episodeInfoText: "SUBSTACK",
    titleText: "Writing",
    titleInfoText: "@shethinksso",
    titleInfoTextLink: "https://shethinksso.substack.com",
  },
  {
    id: "d",
    episodeText: "Ep. 3",
    episodeInfoText: "PINTEREST",
    titleText: "Inspiration",
    titleInfoText: "@kirakellyclarke",
    titleInfoTextLink: "https://www.pinterest.com/kirakellyclarke/_saved",
  },
  {
    id: "e",
    episodeText: "01.",
    episodeInfoText: "HOME PAGE",
    titleText: "Welcome",
    titleInfoText: "kkc",
    titleInfoTextLink: null,
    onClick: (setNavPage: (arg0: PageTypes) => any) => setNavPage(PageTypes.Main),
  },
  {
    id: "f",
    episodeText: "02.",
    episodeInfoText: "ABOUT PAGE",
    titleText: "Profile",
    titleInfoText: "about",
    titleInfoTextLink: null,
    onClick: (setNavPage: (arg0: PageTypes) => any) => setNavPage(PageTypes.About),
  },
  {
    id: "g",
    episodeText: "03.",
    episodeInfoText: "PROJECT PAGE",
    titleText: "Ideas & Records",
    titleInfoText: "projects",
    titleInfoTextLink: null,
    onClick: (setNavPage: (arg0: PageTypes) => any) => setNavPage(PageTypes.Projects),
  },
];

function NavMenu({ currentPage, setNavPage }: NavMenuProps) {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [hoveredEpisode, setHoveredEpisode] = useState<string | null>(null);
  const [cursor, setCursor] = useState(true);
  const [timezone, setTimezone] = useState('Los Angeles/America/Los_Angeles');
  const date = DateTime.now().setZone(timezone);

  useEffect(() => {
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(currentTimezone);
  }, []);

  useEffect(() => {
    if (showModal1 || showModal2) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal1, showModal2]);

  const handleDone = () => {
    setCursor(false);
  };

  return (
    <div className="nav-menu-wrapper">
      <div onClick={() => setNavPage(PageTypes.About)} className={currentPage === PageTypes.About ? "selected" : ""}>about</div>
      <div onClick={() => setNavPage(PageTypes.Projects)} className={currentPage === PageTypes.Projects ? "selected" : ""}>projects</div>
      <div className={showModal1 ? "selected" : ""} onClick={() => setShowModal1(true)}>contact</div>
      <div className={showModal2 ? "selected" : ""} onClick={() => setShowModal2(true)}>credits</div>

      {showModal1 && (
        <CreditModal 
          toggleModal={setShowModal1} 
          title="contact" 
          bgColor="white" 
          contentColor="black-text" 
          content={
            <div className='episodes-container'>
              <div className='gradient-overlay'></div>
              <div className="contact-subtitle"> 
              <br/>
                <Typewriter 
                  words={["FADE IN:", `INT. BUREAU - ${date.toFormat('MM/dd/yy')}:`, "Season 1:"]} 
                  loop={0} 
                  cursor={cursor}
                  cursorStyle="|" 
                  typeSpeed={25}
                  onLoopDone={handleDone}
                />       
              </div>   

            <div className="contact-subtitle"> 
              {/* <br />
              HUMAN #1:
              <br />
              Biens placés, biens choisis... */}
            </div>

              {contactMenus.slice(0, 3).map((menu) => (
                <ContactMenu
                  key={menu.id}
                  id={menu.id}
                  episodeText={menu.episodeText}
                  episodeInfoText={menu.episodeInfoText}
                  titleText={menu.titleText}
                  titleInfoText={menu.titleInfoText}
                  titleInfoTextLink={menu.titleInfoTextLink}
                  hoveredEpisode={hoveredEpisode}
                  setHoveredEpisode={setHoveredEpisode}
                />
              ))}
              <br/>

              <div className="divider"></div>
              <br/>
              <br />

              <div className="contact-subtitle"> 

                <Typewriter 
                  words={["FADE IN:", `INT. PORTFOLIO - ${date.toFormat("hh:mm a")}:`, "Season 2:"]} 
                  loop={0} 
                  cursor={cursor}
                  cursorStyle="|" 
                  typeSpeed={25}
                  onLoopDone={handleDone}
                />       
              </div>   

            <div className="contact-subtitle"> 
              <br />
              Thank you for visiting! <br /> design & code by yours truly
            </div>

              {contactMenus.slice(3).map((menu) => (
                <ContactMenu
                  key={menu.id}
                  id={menu.id}
                  episodeText={menu.episodeText}
                  episodeInfoText={menu.episodeInfoText}
                  titleText={menu.titleText}
                  titleInfoText={menu.titleInfoText}
                  titleInfoTextLink={menu.titleInfoTextLink}
                  hoveredEpisode={hoveredEpisode}
                  setHoveredEpisode={setHoveredEpisode}
                  onClick={() => menu.onClick && menu.onClick(setNavPage)}
                />
              ))}
              <br/>
              <br/>
              <br/>
            </div>
          } 
        />
      )}

      {showModal2 && (
        <CreditModal 
          toggleModal={setShowModal2} 
          title="credits" 
          bgColor="black" 
          contentColor="white-text"
          content={
            <div className="vertical-marquee-container">
              <VerticalMarquee rate={-50} startOnScreen={true} pauseOnClick={true}>
                {credits.map((credit, index) => (
                  <CreditItem 
                    key={index} 
                    name={credit.name} 
                    role={credit.role} 
                    details={credit.details}
                    { ...(credit.image ? { image: credit.image } : {}) }
                  />
                ))}
              </VerticalMarquee>
            </div>
          }
        />
      )}
    </div>
  );
}

export default NavMenu;
