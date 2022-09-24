import React from 'react';

import linkArrow from '../media/diagonal-arrow.png';
import bg from '../media/title/bb.jpg';

const BB = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Breaking Bad Character Search</div>
          <div className="pr-desc">April 2021</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Test</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Student</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            Python - Breaking Bad API - PyTest
          </div>
          <div className="pr-link">
            <a
              className="links"
              href="https://github.com/farazatarodi/breaking-bad-character-search"
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
      <div className="pr-row2">
        This test was requested as part of a python internship interview. The goal of this script is
        to return the list of episodes where certain characters have appeared together. It uses the
        Breaking Bad API (https://breakingbadapi.com/) to retrieve the needed information. The API
        has several endpoints but the one we are interested in is the episodes endpoint. The script
        uses the standard &apos;requests&apos; library in python to send a request to the API. The
        API sends back a JSON response that includes all information about the episodes. Then the
        script checks if the input character list is the sublist of each episode character list. If
        true, then the episode ID is added to a common episodes list. In the end, that list is used
        to display the information in the requested format. There was a pytest file provided to
        check the validity of the results. More info is available in the script file itself and the
        readme file.
      </div>
    </div>
  );
};

export default BB;
