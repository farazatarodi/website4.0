import React, { CSSProperties, useState, useEffect } from 'react';

import ProjectDetailContainer from './components/ProjectDetailContainer';
import linkArrow from './media/diagonal-arrow.png';

const Project = ({
  projectContent
}: {
  projectContent: {
    id: string;
    color: string;
    title: string;
    bg: MediaImage;
    desc: string;
  };
}) => {
  const [width, setWidth] = useState(4);
  const [backGroundImage, setBackGroundImage] = useState('');
  const [titleRotate, setTitleRotate] = useState('translate(0%, 50%) rotate(-90deg)');
  const [showDescription, setShowDescription] = useState(false);
  const [descriptionVisibility, setDescriptionVisibility] =
    useState<CSSProperties['visibility']>('hidden');
  const [descriptionDisplay, setDescriptionDisplay] = useState('none');
  const [showProjectDetail, setShowProjectDetail] = useState(false);

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
        projectContent.color +
        ' 0% ,' +
        projectContent.color +
        ' 35%, rgba(0,0,0,0) 100%), url("' +
        projectContent.bg +
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
      style={{
        backgroundColor: projectContent.color,
        width: `${width}%`,
        backgroundImage: backGroundImage
      }}
      onMouseEnter={handleExpand}
      onMouseLeave={handleShrink}>
      <div className="project-title" style={{ transform: titleRotate }}>
        {projectContent.title}
      </div>
      <div
        className="project-description"
        style={{ visibility: descriptionVisibility, display: descriptionDisplay }}>
        {projectContent.desc}
        <br />
        <button
          onClick={() => {
            handleShrink();
            setShowProjectDetail(true);
          }}
          className="links"
          style={{
            fontSize: '1rem',
            fontWeight: '400',
            marginTop: '1rem',
            background: 'none',
            border: 'none',
            textShadow: '-1px 1px 5px rgb(0 0 0 / 30%), 1px -1px 5px rgb(0 0 0 / 30%)'
          }}>
          Read More
          <img
            src={linkArrow}
            alt=""
            className="link-arrow"
            style={{ height: '0.7rem', width: '0.7rem' }}
          />
        </button>
      </div>
      {showProjectDetail && (
        <ProjectDetailContainer
          projectId={projectContent.id}
          setShowProjectDetail={setShowProjectDetail}
        />
      )}
    </div>
  );
};

export default Project;
