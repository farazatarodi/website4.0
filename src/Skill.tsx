import React, { useState } from 'react';

const Skill = ({
  skillData,
  showDivider
}: {
  skillData: { logoSrc: string; text: string };
  showDivider: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleMoveLogo = (e: React.MouseEvent) => {
    setLeft(e.pageX);
    setTop(e.pageY);
  };

  return (
    <div style={{ position: 'static' }}>
      <span
        id={skillData.text}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={(e) => handleMoveLogo(e)}
        style={isHovering ? { transform: 'scale(1.2, 1.2)' } : { transform: 'scale(1, 1)' }}>
        {skillData.text}
      </span>
      {showDivider && <span> - </span>}
      {isHovering && (
        <img
          src={skillData.logoSrc}
          alt=""
          className="logo"
          style={{ left: `${left}px`, top: `${top}px` }}
        />
      )}
    </div>
  );
};

export default Skill;
