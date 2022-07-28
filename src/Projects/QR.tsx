import Nav from './Nav';
import bg from '../media/title/qr.png';

const QR = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Object and QR Code Detection</div>
            <div className="pr-desc">2015</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Academic</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Student</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Python - Java - Raspberry Pi - Arduino
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

export default QR;
