import React from 'react';
import meImage from '../public/assets/img/me.png';
import Image from "next/image";

const ProfileImage: React.FC = () => (
  <div className="image">
    <Image src={meImage} alt="Ivan Ershov" className="img-me" />
  </div>
);

export default ProfileImage;
