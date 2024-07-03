import React from 'react';
import ProfileImage from './ProfileImage';
import HomeText from './HomeText';

const Home: React.FC = () => (
  <div className="home">
    <p className="head-text">Ivan Ershov</p>
    <ProfileImage />
    <HomeText />
  </div>
);

export default Home;
