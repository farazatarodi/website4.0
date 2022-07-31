import React from 'react';

import c2 from './media/logos/c#.png';
import c from './media/logos/c.png';
import css from './media/logos/css.png';
import html from './media/logos/html.png';
import java from './media/logos/java.png';
import js from './media/logos/js.png';
import php from './media/logos/php.png';
import python from './media/logos/python.png';
import react from './media/logos/react.png';
import unity from './media/logos/unity.png';
import vba from './media/logos/vba.png';

const Skill = ({ id }: { id: string }) => {
  let text = '';
  let logoSrc = c;
  if (id === 'C1') {
    text = 'C/C++';
  } else if (id === 'C2') {
    text = 'C#';
  } else {
    text = id;
  }

  if (id === 'C1') {
    logoSrc = c;
  } else if (id === 'C2') {
    logoSrc = c2;
  } else if (id === 'CSS') {
    logoSrc = css;
  } else if (id === 'HTML') {
    logoSrc = html;
  } else if (id === 'Java') {
    logoSrc = java;
  } else if (id === 'JavaScript') {
    logoSrc = js;
  } else if (id === 'PHP') {
    logoSrc = php;
  } else if (id === 'Python') {
    logoSrc = python;
  } else if (id === 'React') {
    logoSrc = react;
  } else if (id === 'Unity') {
    logoSrc = unity;
  } else if (id === 'VBA') {
    logoSrc = vba;
  }

  return (
    <span
      id={id}
      onMouseOver={() => {
        const skill = document.querySelector('#' + id) as HTMLElement;
        const logo = document.querySelector('.logo') as HTMLImageElement;

        // increase scale on hover
        skill.style.transform = 'scale(1.2, 1.2)';

        // set logo image
        logo.src = logoSrc;
      }}
      onMouseLeave={() => {
        const skill = document.querySelector('#' + id) as HTMLElement;

        // decrease scale on leave
        skill.style.transform = 'scale(1, 1)';

        // hide logo cursor
        const logo = document.querySelector('.logo') as HTMLImageElement;
        logo.style.display = 'none';
      }}
      onMouseMove={(e) => {
        const logo = document.querySelector('.logo') as HTMLImageElement;

        // show and move logo cursor
        logo.style.display = 'block';
        logo.style.left = e.pageX + 'px';
        logo.style.top = e.pageY + 'px';
      }}>
      {text}
    </span>
  );
};

export default Skill;
