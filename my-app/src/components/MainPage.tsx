// MainPage.tsx
import './MainPage.css';
import React from 'react';
import Marquee from "react-fast-marquee";
import { PageTypes } from '../App';

interface MainPageProps {
  update: string;
  setNavPage: (nav: PageTypes) => void;
  navMenu: React.ReactNode;
}

function MainPage({ update, setNavPage, navMenu }: MainPageProps) {
  return (
    <div className="main-body">
      <div className="main-sticky-container">
        <Marquee className="marquee" pauseOnHover={true} play={true} speed={30}>
          {update}
        </Marquee>
        <div onClick={() => setNavPage(PageTypes.Main)} className="mainpage-title">kira</div>
        {navMenu}
      </div>
      <div className="main-categories">
         <div className="category">K.</div>
        <div className="category">Clarke</div>

      </div>
    </div>
  );
}

export default MainPage;