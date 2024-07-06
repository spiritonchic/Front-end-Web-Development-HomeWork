import React from 'react';
import Image, { StaticImageData } from "next/image";

interface SkillItemProps {
    src: StaticImageData;
    alt: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ src, alt }) => (
    <Image src={src} alt={alt} className="img-logo" />
);

export default SkillItem;
