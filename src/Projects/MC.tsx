import React from 'react';

import linkArrow from '../media/diagonal-arrow.png';
import bg from '../media/title/mc.png';

const MC = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Minecraft Farm Wiki</div>
          <div className="pr-desc">2020 - Present</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Freelance</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Web Developer / Designer</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            JavaScript - CSS - WordPress - PHP
          </div>
          <div className="pr-link">
            <a
              className="links"
              href="https://minecraftfarms.net/"
              target="_blank"
              rel="noreferrer">
              View Website
              <img src={linkArrow} alt="" className="link-arrow" />
            </a>
          </div>
        </div>
        <div className="pr-col2">
          <img src={bg} alt="" className="pr-title-image" />
        </div>
      </div>
      <div className="pr-row2"></div>
    </div>
  );
};

export default MC;
