import React from 'react';

import '../css/Home.css';
import scroll from '../media/down-arrow.png';

const Home = () => {
  return (
    <section className="one" id="home">
      {/* Content */}
      <div className="name">Faraz Atarodi</div>
      <div className="title typing">
        {'{'}
        <span style={{ color: '#00ffcc' }}>developer</span>
        {'}'}
      </div>

      {/* Scroll right animation */}
      <div className="scroll-animation">
        <div>
          Hold Shift
          <br />& Scroll
        </div>
        <img src={scroll} alt=""></img>
      </div>
    </section>
  );
};

export default Home;
