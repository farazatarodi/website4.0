import Nav from './Nav';
import bg from '../media/title/siemens.jpg';

const Siemens = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Siemens Healthineers</div>
            <div className="pr-desc">2018 - 2019</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Full-time Job</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">On-site Ultrasound Engineer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Siemens Ultrasound Machines
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div className="pr-row2"></div>
      </div>
    </div>
  );
};

export default Siemens;
