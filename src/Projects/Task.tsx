import Nav from './Nav';
import bg from '../media/title/task.png';
import linkArrow from '../media/diagonal-arrow.png';

const Task = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Task Tracker</div>
            <div className="pr-desc">March 2021</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Hobby</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Web Developer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              React - JSON Server
            </div>
            <div className="pr-link">
              <a
                className="links"
                href="https://github.com/farazatarodi/react-task-tracker"
                target="_blank"
                rel="noreferrer"
              >
                View Code
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

export default Task;
