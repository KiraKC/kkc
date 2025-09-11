import React from 'react';
import './CreditItem.css'; // Import the CSS file

interface CreditItemProps {
  name?: string;
  role?: string;
  details?: React.ReactNode;
  image?: string;
}

function CreditItem({ name, role, image, details }: CreditItemProps) {
  return (
    <div className="credit-item-container">
     <div className="credit-item-role">{role}</div>
      <div className="credit-item-title">{name}</div>
            {image && <img src={image} alt={`${name} image`} className="credit-image" />}
        <div className="credit-item-details">{details}</div>


    </div>
  );
}

export default CreditItem;