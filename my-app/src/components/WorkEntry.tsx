import React from 'react';
import './WorkEntry.css';

interface WorkEntryProps {
  title: string;
  description: React.ReactNode;
  onClick: () => void;
}

const WorkEntry: React.FC<WorkEntryProps> = ({ title, description, onClick }) => {
  return (
    <div className="work-entry" onClick={onClick}>
      <div className="work-entry-title">{title}</div>
      <div className="work-entry-description">{description}</div>
    </div>
  );
};

export default WorkEntry;
