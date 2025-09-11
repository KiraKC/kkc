import React, { useState, useRef, useEffect } from "react";
import './HProjectCard.css';
import { TagGroup } from './Tag';

interface HProjectCardProps {
  bgImage: string;
  projectTitle: string;
  projectDescription: React.ReactNode;
  tags?: { text: string }[]; 
}

const HProjectCard: React.FC<HProjectCardProps> = ({ bgImage, projectTitle, projectDescription, tags }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(true);
    setHovered(false); 
  }; 

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setClicked(false); 
  };

  const handleMouseEnter = () => {
    if (!clicked) setHovered(true); 
  };

  const handleMouseLeave = () => {
    if (!clicked) setHovered(false); 
  };

  const handleTouchStart = () => setHovered(true); 

  const handleTouchEnd = () => {
    if (!clicked) handleClick(); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setClicked(false);
        setHovered(false); 
      }
    };

    const handleTouchOutside = (event: TouchEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setClicked(false); 
        setHovered(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`hcard-container ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hcard-wrapper">
        <div 
          className="hcard-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className={`hcard-content ${hovered ? 'hovered' : ''}`}>
          <div className="overlay">
          </div>
          {clicked && (
            <div className="hcard-details clicked">
              <div className="hproject-title">{projectTitle}</div>
              <div className="hproject-description">{projectDescription}</div>
              {tags && <TagGroup tags={tags} />}
            </div>
          )}
        </div>
        {clicked && (
          <button className="close-btn-hcard" onClick={handleClose}>&times;</button>
        )}
      </div>
    </div>
  );
}

export default HProjectCard;