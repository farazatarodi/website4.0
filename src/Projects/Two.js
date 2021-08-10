import Nav from './Nav';
import bg from '../media/title/2.0.png';
import linkArrow from '../media/diagonal-arrow.png';

const Two = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Personal Website V2.0</div>
            <div className="pr-desc">February 2021</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Hobby</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Web Designer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              JavaScript - CSS - HTML
            </div>
            <div className="pr-link">
              <a
                className="links"
                href="https://farazatarodi.github.io/website2.0/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
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

export default Two;
