import React from 'react';

interface SocialIconProps {
  href: string;
  imgSrc: string;
  alt: string;
  id: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, imgSrc, alt, id }) => (
  <a href={href} target="_blank" id={id}>
    <img src={imgSrc} alt={alt} />
  </a>
);

export default SocialIcon;
