import React from 'react';

import linkArrow from '../media/diagonal-arrow.png';
import bg from '../media/title/iran.png';

const Iran = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Iran Population Map</div>
          <div className="pr-desc">Winter 2021</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Hobby Project</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Developer</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            React - Mapbox - deck.gl - Python - CSS - HTML - Excel - CSV - JSON
          </div>
          <div className="pr-link">
            <a
              className="links"
              href="https://farazatarodi.github.io/IranPopulationMap/"
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

export default Iran;
