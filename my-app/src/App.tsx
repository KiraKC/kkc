import './App.css';
import ProjectsPage from './components/ProjectsPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import Loader from './components/Loader'; 
import React, { useState, useEffect } from 'react';
import NavMenu from './components/NavMenu';

export enum PageTypes {
  Main = "Main",
  About = "About",
  Projects = "Projects",
}

const pageContent = {
  [PageTypes.Main]: " Of cloudless climes and starry skies; / And all that's best of dark and bright  / Meet in her aspect and her eyes;  / Thus mellowed to that tender light / Which heaven to gaudy day denies.  ",
  [PageTypes.About]: " Let us go then, you and I, / When the evening is spread out against the sky / Like a patient etherized upon a table; / Let us go, through certain half-deserted streets, / The muttering retreats / Of restless nights in one-night cheap hotels / And sawdust restaurants with oyster-shells: / Streets that follow like a tedious argument / Of insidious intent / To lead you to an overwhelming question ... / Oh, do not ask, 'What is it?' / Let us go and make our visit. ",
  [PageTypes.Projects]: " Let us go then, you and I, / When the evening is spread out against the sky / Like a patient etherized upon a table; / Let us go, through certain half-deserted streets, / The muttering retreats / Of restless nights in one-night cheap hotels / And sawdust restaurants with oyster-shells: / Streets that follow like a tedious argument / Of insidious intent / To lead you to an overwhelming question ... / Oh, do not ask, 'What is it?' / Let us go and make our visit. ",
};

function App() {
  const savedPage = localStorage.getItem('lastLoadedPage') as PageTypes || PageTypes.Main;
  const [navPage, setNavPage] = useState<PageTypes>(savedPage);
  const [isLoading, setIsLoading] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('lastLoadedPage', navPage);
  }, [navPage]);

  const handlePageChange = (page: PageTypes) => {
    if (page !== navPage) {
      setTransitioning(true);
      setTimeout(() => {
        setNavPage(page);
        setTransitioning(false);
      }, 500); 
    }
  };

  const renderNavMenu = () => (
    <NavMenu currentPage={navPage} setNavPage={handlePageChange} />
  );

  const chooseNav = () => {
    switch (navPage) {  
      case PageTypes.Main:
        return <MainPage setNavPage={handlePageChange} update={pageContent[PageTypes.Main]} navMenu={renderNavMenu()} />;
      case PageTypes.About:
        return <AboutPage setNavPage={handlePageChange} update={pageContent[PageTypes.About]} navMenu={renderNavMenu()} />;
      case PageTypes.Projects:
        return <ProjectsPage setNavPage={handlePageChange} update={pageContent[PageTypes.Projects]} navMenu={renderNavMenu()} />;
      default:
        return <MainPage setNavPage={handlePageChange} update={pageContent[PageTypes.Main]} navMenu={renderNavMenu()} />;
    }
  };

  return (
    <div className={`App ${transitioning ? 'transitioning' : ''}`}>
      <div className={`loader-container ${!isLoading ? 'hidden' : ''}`}>
        <Loader />
      </div>
      <div className="content-container">
        {chooseNav()}
      </div>
      <div className="cinematic-overlay">
        <div className="grain"></div>
        <div className="outer-scratch"></div>
        <div className="inner-scratch"></div>
      </div>
    </div>
  );
}

export default App;