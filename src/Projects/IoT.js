import Nav from './Nav';
import bg from '../media/title/iot.png';
import paper from '../media/Faraz_Atarodi-Bachelor_Thesis.pdf';
import linkArrow from '../media/diagonal-arrow.png';

const IoT = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">IoT Boards</div>
            <div className="pr-desc">2014 - 2015</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Academic</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Student</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Raspberry Pi - Atmel Xplained - RIoTBoard
            </div>
            <div className="pr-link">
              <a
                className="links"
                href={paper}
                target="_blank"
                rel="noreferrer"
              >
                View Paper
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
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

export default IoT;
