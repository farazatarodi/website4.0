import sharif from './media/logos/sharif.png';
import kul from './media/logos/kuleuven.png';

const Edu = ({ id }) => {
  var text = '';
  var logoSrc;
  if (id === 'KUL') {
    text = 'M.Sc. in Electromechanical Engineering from KU Leuven';
    logoSrc = kul;
  } else if (id === 'Sharif') {
    text =
      'B.Sc. in Mechatronics Engineering from Sharif University of Technology';
    logoSrc = sharif;
  }
  return (
    <div>
      <img src={logoSrc} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default Edu;
