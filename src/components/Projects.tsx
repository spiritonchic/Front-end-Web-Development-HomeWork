import React from 'react';
import ProjectItem from './ProjectItem';
import starWarriorsLogo from '../assets/img/starWarriors.png';
import earthWalkersLogo from '../assets/img/earthWalkers.png';
import toGetHerLogo from '../assets/img/toGetHer.png';
import frenaLogo from '../assets/img/frena.png';

const Projects: React.FC = () => (
  <div>
    <div className="projects">
      <p className="head-text-2">My Games</p>
      <div className="row3">
        <ProjectItem
          href="https://spiritonchic.github.io/StarWarriors/"
          imgSrc={starWarriorsLogo}
          imgAlt="Star warriors"
          title="Star warriors"
        />
        <ProjectItem
          href="https://spiritonchic.github.io/EarthWalkers/"
          imgSrc={earthWalkersLogo}
          imgAlt="Earth walkers"
          title="Earth walkers"
        />
      </div>
      <div className="row3">
        <ProjectItem
          href="https://github.com/Depiflaks/PyGameProject/"
          imgSrc={toGetHerLogo}
          imgAlt="ToGetHer"
          title="ToGetHer"
        />
        <ProjectItem
          href="https://drive.google.com/file/d/172uCDIIx1tVtG8SxfWZEmS2cx_0-M-Uc/view?usp=drive_link"
          imgSrc={frenaLogo}
          imgAlt="Frena"
          title="Frena"
        />
      </div>
    </div>
  </div>
);

export default Projects;
