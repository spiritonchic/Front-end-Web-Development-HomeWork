import React from 'react';

interface SkillItemProps {
    src: string;
    alt: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ src, alt }) => (
    <img src={src} alt={alt} className="img-logo" />
);

export default SkillItem;
