import React from 'react';

import Project from '../Project';
import projectData from '../data';

import '../css/Experiences.css';

const Experiences = () => {
  return (
    <section className="three" id="experiences">
      <div className="project-wrapper">
        {projectData.map(
          ({
            id,
            color,
            title,
            bg,
            desc
          }: {
            id: string;
            color: string;
            title: string;
            bg: MediaImage;
            desc: string;
          }) => (
            <Project key={id} id={id} color={color} title={title} bg={bg} desc={desc} />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
