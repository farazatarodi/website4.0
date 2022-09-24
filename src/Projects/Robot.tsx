import React from 'react';

import linkArrow from '../media/diagonal-arrow.png';
import bg from '../media/title/robot.png';

const Robot = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Robot Path Simulator</div>
          <div className="pr-desc">April 2021</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Test</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Student</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            Python - PyTest
          </div>
          <div className="pr-link">
            <a
              className="links"
              href="https://github.com/farazatarodi/robot-simulator"
              target="_blank"
              rel="noreferrer">
              View Code
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

export default Robot;
