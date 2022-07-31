import React from 'react';

import pic1 from '../media/self-balancing-robot.jpg';
import bg from '../media/title/board.png';

import Nav from './Nav';

const Board = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Self-Balancing Robot</div>
            <div className="pr-desc">2013 - 2014</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Academic</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Student</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Python - C - Arduino - Raspberry Pi - Various Sensors
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div
          className="pr-row2"
          style={{
            borderBottom: '1px white solid',
            paddingBottom: '2rem'
          }}>
          During my second semester of the bachelor&apos;s program, I was approached by one of my
          fellow classmates to take part in his project as a CAD designer. His goal was to develop a
          working prototype of a self-balancing transportation robot. To explain the concept of this
          robot it is best to do with an example, imagine a segway and a hoverboard having a baby.
          The key characteristics of this robot were the absence of a handlebar and self-balancing
          aided controlling. I started designing the basic chassis and my 3 teammates worked on the
          components and the programming. After some time due to my interest in programming, I took
          the role of Arduino programmer while still working on the CAD designs. My job was to
          program the Arduino based on the schematics in such a way that it stores the values from
          the sensors in a database. That database was later used to command the motors.
          <br />
          We worked with several electronic components including but not limited to the Arduino,
          gyroscopes, stepper motors and their drivers, proximity sensors, and power boards. The
          most challenging part of the process in my opinion was programming the Arduino to act as a
          PID controller. It was a task that I was not familiar with and I had to research and
          experiment heavily to achieve an acceptable result.
          <br />
          This experience was my first opportunity to work alongside qualified and knowledgeable
          teammates under the supervision of helpful professors. As a young student, I learned the
          values of teamwork, team scheduling, and project management.
          <br />
          Unfortunately due to limited funding, we were not able to build a prototype capable of
          transporting passengers but we were extremely close.
          <br />
        </div>
        <img
          src={pic1}
          alt="self-balancing robot prototype"
          style={{
            width: '50%',
            marginTop: '2rem'
          }}
        />
      </div>
    </div>
  );
};

export default Board;
