import React, { CSSProperties, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import linkArrow from './media/diagonal-arrow.png';

const Project = ({
  id,
  color,
  title,
  bg,
  desc
}: {
  id: string;
  color: string;
  title: string;
  bg: MediaImage;
  desc: string;
}) => {
  const [width, setWidth] = useState(4);
  const [backGroundImage, setBackGroundImage] = useState('');
  const [titleRotate, setTitleRotate] = useState('translate(0%, 50%) rotate(-90deg)');
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionVisibility, setDescriptionVisibility] =
    useState<CSSProperties['visibility']>('hidden');
  const [descriptionDisplay, setDescriptionDisplay] = useState('none');

  let descriptionTimer: ReturnType<typeof setTimeout>;
  useEffect(() => {
    if (showDescription) {
      descriptionTimer = setTimeout(() => setDescriptionVisibility('visible'), 200);
      setDescriptionDisplay('initial');
    } else {
      descriptionTimer = setTimeout(() => setDescriptionVisibility('hidden'));
      setDescriptionDisplay('none');
    }
    return function () {
      clearTimeout(descriptionTimer);
    };
  }, [showDescription]);

  const handleExpand = () => {
    setWidth(15);
    setBackGroundImage(
      'linear-gradient(135deg,' +
        color +
        ' 0% ,' +
        color +
        ' 35%, rgba(0,0,0,0) 100%), url("' +
        bg +
        '")'
    );
    setTitleRotate('rotate(0deg) translateY(120%)');
    setShowDescription(true);
  };

  const handleShrink = () => {
    setWidth(4);
    setBackGroundImage('');
    setTitleRotate('translate(0%, 50%) rotate(-90deg)');
    setShowDescription(false);
  };

  return (
    <div
      className="project"
      style={{ backgroundColor: color, width: `${width}%`, backgroundImage: backGroundImage }}
      onMouseOver={handleExpand}
      onMouseLeave={handleShrink}>
      <div className="project-title" style={{ transform: titleRotate }}>
        {title}
      </div>
      <div
        className="project-description"
        style={{ visibility: descriptionVisibility, display: descriptionDisplay }}>
        {desc}
        <br />
        <Link
          to={`/${id}`}
          className="links"
          style={{ fontSize: '1rem', fontWeight: '400', lineHeight: '3rem' }}>
          Read More
          <img
            src={linkArrow}
            alt=""
            className="link-arrow"
            style={{ height: '0.7rem', width: '0.7rem' }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Project;
