import React from 'react';
import meImage from '../assets/img/me.png';

const ProfileImage: React.FC = () => (
  <div className="image">
    <img src={meImage} alt="Ivan Ershov" className="img-me" />
  </div>
);

export default ProfileImage;
