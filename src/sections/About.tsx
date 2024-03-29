import React, { useState } from 'react';

import Edu from '../Components/Edu';
import Skill from '../Components/Skill';
import '../css/About.css';
import { eduData, skillData } from '../data';

const About = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <section className="two" id="about">
      <div className="about1">
        <div className="text-wrapper">
          <div className="hello">Hello World,</div>
          <div className="me">
            I&apos;m Faraz, an electromechanical engineer and developer based in Ghent, Belgium.
            <br />
            As an engineer, I have worked in several part-time engineering jobs while studying and I
            was a full-time on-site engineer in Siemens for one year between my studies.
            <br />
            As a developer, alongside my part-time jobs I have participated in programming projects
            in different fields, such as data science and computer vision. I have experience with
            both high and low-level languages such as Python, JavaScript, C/C++, Java, VBA and
            Assembly. Currently, I invest most of my time in Python and JS as they are the most
            suitable for my projects. But, I&apos;m always up for a challenge and would love to take
            on new languages and projects in the near future.
            <br />
            I&apos;m looking for new opportunities to expand my experience and knowledge.
          </div>
          <div
            className="more"
            onClick={() => {
              const text = document.querySelector('.text-wrapper') as HTMLElement;
              const more = document.querySelector('.more') as HTMLElement;
              if (!clicked) {
                text!.style.overflowY = 'visible';
                more!.style.position = 'relative';
              } else {
                text!.style.overflowY = 'hidden';
                more!.style.position = 'absolute';
              }
              setClicked(!clicked);
            }}>
            {clicked ? '...less' : 'more...'}
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="skills-wrapper">
          <div className="skills-title">Skills</div>

          {/* skills components */}
          <div className="skills">
            {skillData.map((skill, index) => (
              <Skill
                skillData={skill}
                key={skill.text}
                showDivider={index !== skillData.length - 1}
              />
            ))}
          </div>
        </div>

        {/* education div */}
        <div className="edu">
          <div className="edu-title">Education</div>
          {eduData.map((edu) => (
            <Edu eduData={edu} key={edu.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
