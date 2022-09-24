import React from 'react';

const Skill = ({
  skillData,
  showDivider
}: {
  skillData: { logoSrc: string; text: string };
  showDivider: boolean;
}) => {
  return (
    <div>
      <span
        id={skillData.text}
        onMouseOver={() => {
          const skill = document.querySelector('#' + skillData.text) as HTMLElement;
          const logo = document.querySelector('.logo') as HTMLImageElement;

          // increase scale on hover
          skill.style.transform = 'scale(1.2, 1.2)';

          // set logo image
          logo.src = skillData.logoSrc;
        }}
        onMouseLeave={() => {
          const skill = document.querySelector('#' + skillData.text) as HTMLElement;

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
        {skillData.text}
      </span>
      {showDivider && <span> - </span>}
    </div>
  );
};

export default Skill;
