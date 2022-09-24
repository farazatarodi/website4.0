import React from 'react';

import Project from '../Project';
import { projectData } from '../data';

import '../css/Experiences.css';

const Experiences = () => {
  return (
    <section className="three" id="experiences">
      <div className="project-wrapper">
        {projectData.map((project) => (
          <Project projectContent={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
