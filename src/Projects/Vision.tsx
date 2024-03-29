import React from 'react';

import bg from '../media/title/vision.jpg';

const Vision = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Computer Vision and Smart Assistant</div>
          <div className="pr-desc">2016</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Academic</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Student</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            Python - Raspberry Pi - OpenCV - MotionEye - OpenAI - Arduino
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

export default Vision;
