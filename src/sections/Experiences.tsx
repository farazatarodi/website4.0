import React from 'react';

import Project from '../Project';
import projectData from '../data';

const Experiences = () => {
  return (
    <section className="three" id="experiences">
      <div className="project-wrapper">
        {projectData.map(
          ({
            key,
            id,
            color,
            title,
            bg,
            desc
          }: {
            key: number;
            id: string;
            color: string;
            title: string;
            bg: MediaImage;
            desc: string;
          }) => (
            <Project key={key} id={id} color={color} title={title} bg={bg} desc={desc} />
          )
        )}
      </div>
    </section>
  );
};

export default Experiences;
