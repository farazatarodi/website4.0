import Nav from './Nav';
import bg from '../media/title/disk.png';
import pic1 from '../media/self-balancing-robot.jpg';

const Disk = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Disk Sorter</div>
            <div className="pr-desc">2019</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Academic</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Mechanical Engineer/CAD Designer/Project Manager
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div
          className="pr-row2"
          style={{
            borderBottom: '1px white solid',
            paddingBottom: '2rem',
          }}
        ></div>
        <img
          src={pic1}
          alt="self-balancing robot prototype"
          style={{
            width: '50%',
            marginTop: '2rem',
          }}
        />
      </div>
    </div>
  );
};

export default Disk;
