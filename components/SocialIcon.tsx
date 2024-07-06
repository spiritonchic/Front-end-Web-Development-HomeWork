import React from 'react';
import Image, { StaticImageData } from "next/image";

interface SocialIconProps {
  href: string;
  imgSrc: StaticImageData;
  alt: string;
  id: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, imgSrc, alt, id }) => (
  <a href={href} target="_blank" id={id}>
    <Image src={imgSrc} alt={alt} />
  </a>
);

export default SocialIcon;
