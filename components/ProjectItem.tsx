import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  href: string;
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
}) => (
  <div>
    <a href={href} target="_blank">
      <p>{title}</p>
      <Image src={imgSrc} alt={imgAlt} className="img-logo" />
    </a>
  </div>
);

export default ProjectItem;
