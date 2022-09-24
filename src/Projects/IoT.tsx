import React from 'react';

import bg from '../media/title/iot.png';

const IoT = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">IoT Boards</div>
          <div className="pr-desc">2014 - 2015</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Academic</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Student</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            Raspberry Pi - Atmel Xplained - RIoTBoard
          </div>
        </div>
        <div className="pr-col2">
          <img src={bg} alt="" className="pr-title-image" />
        </div>
      </div>
      <div className="pr-row2">
        In the second year of my bachelor&apos;s program, I got interested in the topic of SBCs.
        After using a Raspberry Pi on the self-balancing robot, I got the idea to study the usage of
        SBCs in common household appliances. Back then, there were not so many options, so I started
        studying the Raspberry Pi. The university was able to provide me with an Atmel Xplained and
        I focused my studies on that area. In the middle of my research, the RIoTBoard was
        introduced and although I could not get my hands on it I made sure to get as much
        information as possible about it.
        <br />
        This research was done under the mechanical engineering department of the Sharif University
        of Technology. Due to its use in other projects, the paper is not public.
      </div>
    </div>
  );
};

export default IoT;
