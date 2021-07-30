import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="header">
      <div className="sec1">
        <Link to="/">HOME</Link>
      </div>
      <div className="sec2">
        <div>LEUVEN - BELGIUM</div>
      </div>
    </div>
  );
};

export default Nav;
