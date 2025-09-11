import './ProjectsPage.css';
import React, { useState, useEffect } from 'react';
import VProjectCard from './VProjectCard';
import Marquee from "react-fast-marquee";
import { PageTypes } from '../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import { EffectCards } from 'swiper/modules';
import WorkEntry from './WorkEntry';
import CreditModal from './CreditModal';
import HProjectCard from './HProjectCard';

/*TODO: SWIPER change based on screen size*/
interface ProjectsPageProps {
  update: string;
  setNavPage: (nav: PageTypes) => void;
  navMenu: React.ReactNode;
}

const swiperSlides1 = [
  { value: 8, color: "card-white",     
    bgColor: "tv-app-bg", 
    flipped: "tv-app-flip-bg", 
    title: "XFN Platform", 
    subtitle: " tv app operations",
     tags: [
      { text: 'code' },
      { text: 'project management' },
      { text: 'data' }
]},
  
    { value: "K", color: "card-blue", bgColor: "portfolio-bg", flipped: "portfolio-flip-bg" ,
    title: "kirakellyclarke", 
    subtitle: "portfolio",
    tags: [
      { text: 'design' },
      { text: 'code' },
     { text: 'react.js' },
       { text: 'concept' }],
    link: 'kirakellyclarke.com' ,
  },
  
   { value: "A", color: "card-red", bgColor: "nlptitle-bg", flipped: "nlp-bg" ,
    title: "gender in review", 
    subtitle: "NLP + film",
    tags: [
      { text: 'design' },
      { text: 'code' },
     { text: 'collaboration' }]
  },
  { value: "J", color: "card-white",     
    bgColor: "biz-bg", 
    flipped: "black-bg", 
    title: "Business AI", 
    subtitle: "earnings call AI tool",
     tags: [
      { text: 'programmer' },
      { text: 'agile' },
    { text: '2025' },]},
  { value: 10, color: "card-red", 
    bgColor: "bip-bg", 
    flipped: "bip-flip" , 
    title: "brownpolicy.org",
    subtitle: (
      <a href="https://www.fullstackatbrown.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
      pro bono web dev 
      </a>
    ),
    tags: [
      { text: 'web' },
      { text: 'designer' },
      { text: 'programmer' },
      ],
    link: 'https://brownpolicy.org' ,},

  { value: "Q",
    color: "card-red", 
    bgColor: "hackathome-bg", 
    flipped: "hackflip-bg", 
    title: "hack @ home", 
    subtitle: "virtual hackathon",
    tags: [
      { text: 'logistics co-lead' },
      { text: 'organizer' },],
    link: 'https://fullstackatbrown.github.io/hack-at-home/' 
   },
  { value: "J", color: "card-white", bgColor: "romy-bg", flipped: "pink-bg",
    title: "work-in-progress", 
    subtitle: "reverse alignment",
    tags: [
      { text: 'AI Alignment' },
      { text: 'TEAM' },
    { text: '2025' }],
    link: 'https://disi.org' 
  }

];

const swiperSlides2 = [
  { 
    value: 5, 
    color: "card-white", 
    bgColor: "ballet-front-bg", 
    flipped: "ballet-flip-bg", 
    title: "ballet @ brown", 
    subtitle: "official video",
    tags: [
      { text: 'producer' },
      { text: 'director' },
      { text: 'editor' },],
    link: 'https://youtu.be/joFm9fHihJo?si=ILKgzlLeevYBd9TD' 
  },

  { value: 7, color: "card-red", bgColor: "surrealism-bg", flipped: "surrealism-flip-bg" ,
    title: "Article",
    subtitle: "f/w 22/23  analysis",
    tags: [
      { text: 'writer' },
      { text: 'research' },
      { text: 'graphic design' }

      ]
  },
    { value: 8, color: "card-white", bgColor: "swearer-bg", flipped: "swearer-flip-bg", 
    title: "video series", 
    subtitle: "community engagement",
    tags: [
      { text: 'videographer' },
      { text: 'editor' },
     { text: 'concept' }],
    link: 'https://youtube.com/playlist?list=PLPzGGKKT-Z_FVzEKojfPXDh4knJhHmHeS&si=91ke0iqJ5b_naMSs' 
  },
  { value: 7, color: "card-red", bgColor: "mirrorshadow-bg", flipped: "mirror-flip-bg" ,
    title: "mirrorshadow", 
    subtitle: "choreography",
    tags: [
      { text: 'videographer' },
      { text: 'director' },
     { text: 'choreo' }]
  },
  { value: "Q", color: "card-white", bgColor: "gentileschi-bg", flipped: "eurypyle-bg" },
    { value: 2, color: "card-black", bgColor: "can-you-see-me-bg", flipped: "cysm-flip-bg" ,
    title: "can you see me",
   subtitle: "dance film",

    tags: [
      { text: 'director' },
      { text: 'creative' },
    { text: 'videographer' }]

  }
];

const swiperSlides3 = [
    { value: 10, color: "card-white", bgColor: "baller-bg", flipped: "baller-ina-bg" ,
    title: "dance artist",
   subtitle: "ballet & contemporary",

    tags: [
      { text: 'ballet' },
      { text: 'independent' },
     { text: 'art' }],
  },
   { value: "J", color: "card-white", bgColor: "ballerine-bg", flipped: "ballerine1-bg" ,
    title: "tv commercial",
   subtitle: "major ticketing platform",

    tags: [
      { text: 'dancer' },
      { text: 'nation-wide' },
     { text: 'ballet' }],
  },
  { value: 7, color: "card-white", bgColor: "contemp-bg", flipped: "contempo-bg" ,
    title: "teaching",
   subtitle: "beginner & adv. ballet",

    tags: [
      { text: 'ballet class' },
      { text: 'freelance' },
    { text: 'study' }]
  },
  { value: "A", color: "card-blue", bgColor: "winter-bg", flipped: "winter-flip-bg" ,
    title: "winter intensive",
   subtitle: "annual ballet program",

    tags: [
      { text: 'teacher' },
      { text: 'organizer' },
    { text: 'admin' }],
     link: 'https://sites.google.com/view/hamilton-city-ballet-holiday/about-holiday-classes' 

  },
  { value: "Q", color: "card-red", bgColor: "herodias-bg", flipped: "brisbane-bg" }


];

interface WorkEntry {
  title: string;
  description: React.ReactNode;
  bgType: 'black' | 'white';
  textColor: 'black-text' | 'white-text';
  image?: string; // Make image optional
  tags?: { text: string, color?: string }[];
  modalContent: (imageUrl?: string) => React.ReactNode; // Make imageUrl optional
}

const workEntries: WorkEntry[] = [
  {
    title: "Imagination",
    description: (<>An ongoing research project on the cognitive & computational processes behind the human imagination and on what might constitute an artificial imagination
    </>),

    bgType: 'black',
    textColor: 'white-text',
    tags: [
      { text: 'research' },
      { text: 'writing' },
      { text: 'AI & IP' },
      { text: 'cognitive science' }

    ],
    modalContent: (imageUrl) => (
      <div className="work-modal-content">
        <div className="modal-fixed-content">
          {imageUrl && (
            <div className="work-modal-image-container">
              <img 
                src={imageUrl}
                alt="Project"
                className="work-modal-image"
              />
            </div>
          )}
        </div>
        <div className="work-modal-details">
          <div className="work-title">Research Focus</div>
          <div className="work-description">
            I am deeply interested in the cognitive & computational processes behind the human imagination, the possibility for 
            Artificial Imagination, and the implications in the discourse on Intellectual Property. 
            
          <br/>
            <br/>
            Previous outcomes include an independent interdisciplinary undergraduate major
            and an honors thesis — on the possibility for
            Imagination’s mechanistic role in the Predictive Processing Framework — which, compiled from research across
            ML, neuroscience, philosophy, and psychology, argues for the deliniation 
            of imagination as a <i>sui generis</i> faculty distinct from perception, even in the PPF.
            Most recently, I took part in the <a href="https://disi.org"> Diverse Intelligences Summer Institute </a> at the 
            University of St Andrews as an Academic Fellow.
                        <br/>
          </div>
          <div className="work-details">
          <div>Status: Ongoing</div>
          <div>Outcome: Honors Thesis & Independent Concentration</div>
          <div>Institution: Brown University</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Equal",
    description: "Experimentation with Natural Language Processing models that identify gender biases in film reviews",
    bgType: 'black',
    textColor: 'white-text',
    tags: [
      { text: 'code' },
      { text: 'AI'},
      { text: 'Data' },
      { text: 'Film Reviews' }
    ],
    modalContent: (imageUrl) => (
      <div className="work-modal-content">
        <div className="modal-fixed-content">
          {imageUrl && ( 
            <div className="work-modal-image-container">
              <img 
                src={imageUrl}
                alt="Project"
                className="work-modal-image"
              />
            </div>
          )}
        </div>
        <div className="work-modal-details">
          <div className="work-title">Code Project</div>
          <div className="work-medium">Natural Language Processing Models</div>
          <div className="work-description">
          Having worked in creative and technical capacities at major streaming services, I became increasinlgy interested in the ways media, strategy, and technolgoy intersect. One byproduct of this fascination was this experimentation with Natural Language Processing models that identify gender biases in film reviews through embedding analyses. 
          </div>
          <div className="work-details">
            <div>Topics: AI, Culture, Film, Gender, Language, Society</div>
            <div>Formats: word2vec | vanilla LSTM | BiLSTM </div>
            <div>Subject: Deep Learning</div>
            <div>With: Adwith Mukherjee</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Beauty/Ugliness",
    description: "An exploration of the value of ugliness through literary and philsophical texts and its applications in current cultural contexts",
    bgType: 'black',
    textColor: 'white-text',
    tags: [
      { text: 'research' },
      { text: 'writing' },
      { text: 'concept' },
      { text: 'cultural studies' }

    ],
    modalContent: (imageUrl) => (
      <div className="work-modal-content">
        <div className="modal-fixed-content">
          {imageUrl && ( 
            <div className="work-modal-image-container">
              <img 
                src={imageUrl}
                alt="Project"
                className="work-modal-image"
              />
            </div>
          )}
        </div>
        <div className="work-modal-details">
          <div className="work-title">Ugliness</div>
          <div className="work-medium">Research</div>
          <div className="work-description">
          <div>Decoding theoretical analyses (ugliness as salience, ugliness as demarcation of exclusion, and aesthetics as ethics) and applying them to current cultural contexts. This research and writing project is suffering heavily from writer's block. </div>
          </div>
          <div className="work-details">
          <div>Format: Essays</div>
          <div>Status: Ongoing</div>
          <div>Literature: Art History, Literature, Philosophy</div>
          </div>
        </div>
      </div>
    )
  }
];

const horizontalProjects = [
  {
    projectTitle: "Coming Soon",
    projectDescription: "In the meantime, Lee Miller by Man Ray",
    bgImage: "https://i.pinimg.com/564x/fb/62/01/fb62013f7864881a00ae65506b1da776.jpg",
    tags: [
      { text: 'photography' },
      { text: '1929' },
      { text: 'archive' }
    ]
  
  },
  {
    projectTitle: "Lee Miller",
    projectDescription: "(1929) by Man Ray ",
    bgImage: "https://i.pinimg.com/564x/fb/62/01/fb62013f7864881a00ae65506b1da776.jpg"
  },

  {
    projectTitle: "Coming Soon",
    projectDescription: "Lee Miller by Man Ray",
    bgImage: "https://i.pinimg.com/564x/fb/62/01/fb62013f7864881a00ae65506b1da776.jpg"
  },
  {
    projectTitle: "Coming Soon",
    projectDescription: "(1921) by John William Godward",
      bgImage: "https://64.media.tumblr.com/f277ece3929b545bfed3419539d21153/tumblr_o9k3o0ylIh1ux1u51o2_r2_500.jpg"
  },
    {
      projectTitle: "Eurypyle",
      projectDescription: "Under Construction",
      bgImage: "https://64.media.tumblr.com/f277ece3929b545bfed3419539d21153/tumblr_o9k3o0ylIh1ux1u51o2_r2_500.jpg"
    }
  ];

function ProjectsPage({ update, setNavPage, navMenu }: ProjectsPageProps) {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);

  const handleWorkClick = (index: number) => {
    setSelectedWork(index);
  };

  useEffect(() => {
    const horizontalSection = document.querySelector('.horizontal-scroll-wrapper');
    if (!horizontalSection) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const isTrackPad = Math.abs(e.deltaX) !== 0;
      const delta = isTrackPad ? e.deltaX : e.deltaY;
      
      const scrollAmount = delta * 2;
      
      horizontalSection.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    };

    (horizontalSection as HTMLElement).addEventListener('wheel', handleWheel, { passive: false });
    return () => (horizontalSection as HTMLElement).removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="projects-body">
      <div className="projects-sticky-container">
        <Marquee className="marquee" pauseOnHover={true} play={true} speed={30}>
          {update}
        </Marquee>
        <div onClick={() => setNavPage(PageTypes.Main)} className="projectsPage-title">kkc</div>
        {navMenu}
      </div>

        <div className="Projects-Projects-title">
          tech & design · story · movement
        </div>
        <div className="vProjects-card-wrapper">
        <Swiper effect="cards"  grabCursor={true} modules={[EffectCards]}>
          {swiperSlides1.map((slide, index) => (
            <SwiperSlide key={index}>
              <VProjectCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper effect="cards" grabCursor={true} modules={[EffectCards]}>
          {swiperSlides2.map((slide, index) => (
            <SwiperSlide key={index}>
              <VProjectCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
          <Swiper effect="cards" grabCursor={true} modules={[EffectCards]}>
          {swiperSlides3.map((slide, index) => (
            <SwiperSlide key={index}>
              <VProjectCard {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      <div className="Projects-Projects-title">
       selected works
      </div>

      <div className="work-entries">
        {workEntries.map((entry, index) => (
          <WorkEntry
            key={index}
            title={entry.title}
            description={entry.description}
            onClick={() => handleWorkClick(index)}
          />
        ))}
      </div>

      {selectedWork !== null && (
        <CreditModal
          title={workEntries[selectedWork].title}
          bgColor={workEntries[selectedWork].bgType}
          contentColor={workEntries[selectedWork].textColor}
          content={workEntries[selectedWork].modalContent(workEntries[selectedWork].image ?? '')}
          toggleModal={() => setSelectedWork(null)}
          className={"modal-scrollable"}
          tags={workEntries[selectedWork].tags}
        />
      )}

<div className="more-projects-title">
       more projects
      </div>

      <div className="horizontal-scroll-section">
        <div className="horizontal-scroll-wrapper">
          {horizontalProjects.map((project, index) => (
            <div className="scroll-item" key={index}>
              <HProjectCard
                bgImage={project.bgImage}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;