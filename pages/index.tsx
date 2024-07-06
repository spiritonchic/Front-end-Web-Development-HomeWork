import React from 'react';
import ProfileImage from '../components/ProfileImage';
import HomeText from '../components/HomeText';

const Home: React.FC = () => (
  <div className="home">
    <p className="head-text">Ivan Ershov</p>
    <ProfileImage />
    <HomeText />
  </div>
);

export default Home;
