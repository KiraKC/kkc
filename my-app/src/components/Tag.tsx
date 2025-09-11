import React from 'react';
import './Tag.css';

interface TagProps {
  text: string;
  color?: 'blur' | 'black';
  bordered?: boolean;
}

interface TagGroupProps {
  tags: TagProps[];
  className?: string;
  bordered?: boolean;
}

export const Tag: React.FC<TagProps> = ({ text, color = 'blur', bordered }) => (
  <div className={`tag ${color} ${bordered && color === 'blur' ? 'tag-blur-bordered' : ''}`}>
    <span className="tag-text">{text}</span>
  </div>
);

export const TagGroup: React.FC<TagGroupProps> = ({ tags, className, bordered }) => (
  <div className={`tag-group ${className || ''}`}>
    {tags.map((tag, index) => (
      <Tag key={index} {...tag} bordered={bordered} />
    ))}
  </div>
);
