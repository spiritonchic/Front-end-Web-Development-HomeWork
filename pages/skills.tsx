import React from 'react';
import SkillItem from '../components/SkillItem';
import javaLogo from '../public/assets/img/java.png';
import pythonLogo from '../public/assets/img/python.png';
import cppLogo from '../public/assets/img/c++.png';
import jsLogo from '../public/assets/img/js.png';
import sqliteLogo from '../public/assets/img/sqlite.png';

const Skills: React.FC = () => (
    <div>
        <div className="skills">
            <p className="head-text">My Skills</p>
            <div className="row1">
                <SkillItem src={javaLogo} alt="Java" />
                <SkillItem src={pythonLogo} alt="Python" />
            </div>
            <div className="row2">
                <SkillItem src={cppLogo} alt="C++" />
                <SkillItem src={jsLogo} alt="Javascript" />
                <SkillItem src={sqliteLogo} alt="Sqlite" />
            </div>
        </div>
    </div>
);

export default Skills;
