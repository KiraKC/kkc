import React from 'react';
import './ContactMenu.css';

interface ContactMenuProps {
  episodeText: string;
  episodeInfoText: string;
  titleText: string;
  titleInfoText: string;
  titleInfoTextLink: any;
  id: string;
  hoveredEpisode: string | null;
  setHoveredEpisode: (id: string | null) => void;
  onClick?: () => void; 
}

function ContactMenu({ episodeText, episodeInfoText, titleText, titleInfoText, titleInfoTextLink, id, hoveredEpisode, setHoveredEpisode, onClick }: ContactMenuProps) {
  const handleMouseEnter = (episodeId: string) => {
    setHoveredEpisode(episodeId);
  };

  const handleMouseLeave = () => {
    setHoveredEpisode(null);
  };

  const episodeStyle = (episodeId: string) => ({
    opacity: hoveredEpisode && hoveredEpisode !== episodeId ? 0.3 : 1,
    transition: 'opacity 0.3s ease'
  });

  return (
    <div className="contact-menu"> 
      <div className="episodes scrollable-episodes">
        <div
          className="episode"
          style={episodeStyle(id)}
          onMouseEnter={() => handleMouseEnter(id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="info-flexbox">
            <div className="info_small">{episodeText}</div>
            <div className="info_small_detail">{episodeInfoText}</div>
          </div>
          <div className="title-flexbox">
            <div className="title">{titleText}</div>
            <div className="lines">
              <div className="dashed"></div>
            </div>
            {onClick ? (
              <div className="title_info" onClick={onClick}>{titleInfoText}</div>
            ) : (
              <a className="title_info" href={titleInfoTextLink}>{titleInfoText}</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMenu;
