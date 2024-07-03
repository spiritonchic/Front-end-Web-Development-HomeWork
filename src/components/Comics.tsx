import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import loadingImg from '../assets/img/loading.gif';

interface ComicsProps {
  email: string;
}

interface comicsResponse {
  img: string;
  alt: string;
  title: string;
  year: number;
  month: number;
  day: number;
}

const Comics: React.FC<ComicsProps> = ({ email }) => {
  const [comicData, setComicData] = useState<comicsResponse | null>(null);

  useEffect(() => {
    const fetchComic: () => Promise<void> = async () => {
      try {
        const idResponse : Response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
        const idData : string = await idResponse.json();
        const comicResponse : Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${idData}`);
        const comicData : comicsResponse = await comicResponse.json();
        setComicData(comicData);
      } catch (error) {
        console.error('Error fetching comic:', error);
      }
    };

    fetchComic();
  }, [email]);

  if (!comicData) {
    return (
      <div className="comics">
        <p className="head-text">Comics</p>
        <img id="comic-img" className="comic-img" src={loadingImg} alt="Loading..." />
      </div>
    );
  }

  const secureData: (data: string) => string = (data: string) => {
    return DOMPurify.sanitize(data, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: []
    })
}

  const secureTitle : string = secureData(comicData.title);
  const secureAlt : string = secureData(comicData.alt);

  return (
    <div className="comics">
      <p className="head-text">Comics</p>
      <p id="comic-title" className="comics-text">{secureTitle}</p>
      <img id="comic-img" className="comic-img" src={comicData.img} alt={secureAlt} />
      <p id="comic-date" className="comics-text">{`${comicData.year}-${comicData.month}-${comicData.day}`}</p>
    </div>
  );
};

export default Comics;
