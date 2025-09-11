import React, { ReactNode, CSSProperties, useState, useEffect } from 'react';
import { Marquee } from 'dynamic-marquee-react';

interface VerticalMarqueeProps {
  children: ReactNode;
  style?: CSSProperties;
  pauseOnClick?: boolean;
  rate?: number;
  startOnScreen?: boolean;
  key?: any;
  onPauseChange?: (paused: boolean) => void;
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({
  children, 
  rate = -45, 
  startOnScreen = false,
  style = { height: '300px' },
  pauseOnClick = false,
  key,
  onPauseChange
}) => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    console.log("Marquee Key:", key);
  }, [key]);

  useEffect(() => {
    if (onPauseChange) onPauseChange(isPaused);
  }, [isPaused, onPauseChange]);

  return (
    <div
      style={style}
      onClick={() => pauseOnClick && setIsPaused(!isPaused)}
    >
      <Marquee
        rate={isPaused ? 0 : rate}
        upDown={true}
        startOnScreen={startOnScreen}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default VerticalMarquee;