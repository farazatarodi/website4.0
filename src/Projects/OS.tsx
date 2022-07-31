import React from 'react';

import bg from '../media/title/os2.png';

import Nav from './Nav';

const OS = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Omran Soule Co.</div>
            <div className="pr-desc">2016 - 2017</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Part-time Job</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Full-stack Engineer / Python Developer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Python - JavaScript - CSS - HTML - VBA - SQL
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div className="pr-row2"></div>
      </div>
    </div>
  );
};

export default OS;
