import React from 'react';
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
  // expand project
  const expand = () => {
    const project = document.querySelector('#' + id) as HTMLElement;
    const title = document.querySelector('#' + id + '-title') as HTMLElement;
    const desc = document.querySelector('#' + id + '-desc') as HTMLElement;

    // expand project width
    project.style.width = '15%';

    // set project bg
    project.style.backgroundImage =
      'linear-gradient(135deg,' +
      color +
      ' 0% ,' +
      color +
      ' 35%, rgba(0,0,0,0) 100%), url("' +
      bg +
      '")';

    // rotate title
    title!.style.transform = 'rotate(0deg) translateY(120%)';

    // show description
    desc!.style.animation = 'show 0.2s steps(1)';
    desc!.style.display = 'initial';
    desc!.style.visibility = 'visible';
  };

  // shrink project
  const shrink = () => {
    const project = document.querySelector('#' + id) as HTMLElement;
    const title = document.querySelector('#' + id + '-title') as HTMLElement;
    const desc = document.querySelector('#' + id + '-desc') as HTMLElement;

    // shrink project width
    project!.style.width = '4%';

    // unset project bg
    project!.style.backgroundImage = '';

    // rotate title
    title!.style.transform = 'translate(0%, 50%) rotate(-90deg)';

    // hide description
    desc!.style.animation = '';
    desc!.style.display = 'none';
    desc!.style.visibility = 'hidden';
  };

  return (
    <div
      id={`${id}`}
      className="project"
      style={{ backgroundColor: color }}
      onMouseOver={expand}
      onMouseLeave={shrink}>
      <div id={id + '-title'} className="project-title">
        {title}
      </div>
      <div id={id + '-desc'} className="project-description">
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
