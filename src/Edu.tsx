import React from 'react';

import kul from './media/logos/kuleuven.png';
import sharif from './media/logos/sharif.png';

const Edu = ({ id }: { id: string }) => {
  let text = '';
  let logoSrc;
  let link = '';

  if (id === 'KUL') {
    text = 'M.Sc. in Electromechanical Engineering from KU Leuven';
    logoSrc = kul;
    link =
      'https://onderwijsaanbod.kuleuven.be/opleidingen/e/CQ_52921897.htm#activetab=diploma_omschrijving';
  } else if (id === 'Sharif') {
    text = 'B.Sc. in Mechatronics Engineering from Sharif University of Technology';
    logoSrc = sharif;
    link = 'http://www.en.sharif.edu/';
  }

  return (
    <div>
      <img src={logoSrc} alt="" />
      <a
        href={link}
        className="links"
        style={{
          fontSize: '1.2rem',
          fontWeight: '400',
          marginLeft: '1rem',
          lineHeight: '1.7rem'
        }}
        target="_blank"
        rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Edu;
