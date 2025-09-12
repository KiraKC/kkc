import React, { useState } from "react";
import './VProjectCard.css';
import classNames from 'classnames';
import { TagGroup } from './Tag';
import { ImSpades, ImHeart, ImClubs, ImDiamonds } from 'react-icons/im';

const colorSymbols = [ImSpades, ImHeart];
const blackSymbols = [ImClubs, ImDiamonds];
interface VProjectCardProps {
  bgColor: string;
  title?: string;
  subtitle?: React.ReactNode;
  description?: string;
  color: string;
  value: string | number;
  flipped: string;
  tags?: { text: string }[];
  link?: string;
}

function VProjectCard(props: VProjectCardProps) {
  const { bgColor, title, subtitle, description, color: symbolColor, value: cardVal, flipped: flippedbgColor, tags, link } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  
const [cSymbol] = useState(() => {
  const Icon = colorSymbols[Math.floor(Math.random() * colorSymbols.length)];
  return Icon;
});
const [bSymbol] = useState(() => {
  const Icon = blackSymbols[Math.floor(Math.random() * blackSymbols.length)];
  return Icon;
});

const CardSymbol = (symbolColor === "card-black" || symbolColor === "card-white") ? bSymbol : cSymbol;


  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip when clicking title
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="card-container" onClick={handleCardClick}>
      <div className={classNames("flip-card-inner", { 'flipped': isFlipped })}>
        <div className={classNames("card-side", "card-front", bgColor)}>
          <div className={symbolColor}>
          <div className="card-top">
            {cardVal} {CardSymbol && <CardSymbol />}
          </div>
          <div className="card-bottom">
            {cardVal} {CardSymbol && <CardSymbol />}
          </div>
          </div>
        </div>
        <div className={classNames("card-side", "card-back", flippedbgColor)}>
          <div className={symbolColor}>
            <div className="card-text">
              <div className="card-subtitle">{subtitle}</div>
              <a 
                className={link ? "card-title card-title-link" : "card-title"}
                onClick={handleTitleClick}
                style={{ cursor: link ? 'pointer' : 'default' }}
              >
                {title}
              </a>
              <div className="card-description">{description}</div>
            </div>
            <div className="vCard-tags">{tags && <TagGroup tags={tags} bordered={false} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VProjectCard;