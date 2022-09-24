import React from 'react';

const Edu = ({ eduData }: { eduData: { text: string; logoSrc: string; link: string } }) => {
  return (
    <div>
      <img src={eduData.logoSrc} alt="" />
      <a
        href={eduData.link}
        className="links"
        style={{
          fontSize: '1.2rem',
          fontWeight: '400',
          marginLeft: '1rem',
          lineHeight: '1.7rem'
        }}
        target="_blank"
        rel="noreferrer">
        {eduData.text}
      </a>
    </div>
  );
};

export default Edu;
