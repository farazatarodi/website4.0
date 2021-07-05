import './App.css';
import scroll from './media/down-arrow.png';
import Doggo from './Doggo';
import Skill from './Skill';
import python from './media/python.png';

// scroll direction function
var oldLeft = 0;
var left = false;
var oldSec = 0;
var curSec = 0;
var startTimer = 0;
var walkTimer = 0;

const scrollDirection = () => {
  const container = document.querySelector('.scroll-container');
  const doggo = document.querySelector('.doggo');

  // Find direction of scroll
  if (oldLeft > container.scrollLeft) {
    left = true;
  } else if (oldLeft < container.scrollLeft) {
    left = false;
  }
  oldLeft = container.scrollLeft;

  // Calculate current section number
  curSec = container.scrollLeft / window.innerWidth;

  // Check if fully scrolled
  if (Number.isInteger(curSec)) {
    if (curSec !== oldSec) {
      // Set transition to 0s
      doggo.style.transition = 'left 0s linear';

      // Set initial position
      if (left) {
        doggo.style.left = (curSec + 1.05) * window.innerWidth + 'px';
      } else {
        doggo.style.left = (curSec - 0.05) * window.innerWidth + 'px';
      }

      // Set animation back to  1s
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        doggo.style.transition = 'left 1s linear';
        doggo.style.animation = 'bg 0.5s steps(1) infinite alternate';

        // Photo and position based on direction
        if (left) {
          doggo.style.left = (curSec + 0.95) * window.innerWidth + 'px';
          doggo.style.transform = 'translate(-50%) scaleX(-1)';
        } else {
          doggo.style.left = (curSec + 0.05) * window.innerWidth + 'px';
          doggo.style.transform = 'translate(-50%) scaleX(1)';
        }
      }, 100);
    }
    oldSec = curSec;
  }

  // clear timer
  clearTimeout(walkTimer);

  // Set timer for sitting position photo
  walkTimer = setTimeout(() => {
    if (
      doggo.offsetLeft === (curSec + 0.95) * window.innerWidth ||
      doggo.offsetLeft === (curSec + 0.05) * window.innerWidth
    ) {
      doggo.style.animation = 'ogbg 0s linear';
    }
  }, 1200);
};

// Main
function App() {
  return (
    <div className="App">
      {/* container for scroll snap */}
      <div className="scroll-container" onScroll={scrollDirection}>
        {/* 1. Home section */}
        <section className="one" id="home">
          {/* Header */}
          <div className="header">
            <div className="sec1">
              <a href="#home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#projects">PROJECTS</a>
              <a href="#contact">CONTACT</a>
            </div>
            <div className="sec2">
              <div>LEUVEN - BELGIUM</div>
            </div>
          </div>

          {/* Content */}
          <div className="name">Faraz Atarodi</div>
          <div className="title typing">
            {'{'}
            <span style={{ color: '#00ffcc' }}>developer</span>
            {'}'}
          </div>

          {/* Scroll right animation */}
          <img src={scroll} className="scroll-animation" alt=""></img>
        </section>

        {/* 2. About section */}
        <section className="two" id="about">
          <div className="about1">
            <div className="text-wrapper">
              <div className="hello">Hello World,</div>
              <div className="me">
                I'm Faraz Atarodi, an electromechanical engineer and developer
                based in Leuven, Belgium.
                <br />
                As an engineer, I have worked in several part-time engineering
                jobs while studying and I was a full-time on-site engineer in
                Siemens for one year between my studies.
                <br />
                As a developer, alongside my part-time jobs I have participated
                in programming projects in different fields, such as data
                science and computer vision. I have experience with both high
                and low-level languages such as Python, JavaScript, C/C++, Java,
                VBA and Assembly. Currently, I invest most of my time in Python
                and JS as they are the most suitable for my projects. But, I'm
                always up for a challenge and would love to take on new
                languages and projects in the near future.
                <br />
                I'm looking for new opportunities to expand my experience and
                knowledge.
              </div>
            </div>
          </div>
          <div className="about2">
            <div className="edu">
              <div className="edu-title">Education</div>
              <div className="bsc">
                B.Sc. in Mechatronics Engineering from Sharif University of
                Technology
              </div>
              <div className="msc">
                M.Sc. in Electromechanical Engineering from KU Leuven
              </div>
            </div>
            <div className="skills-wrapper">
              <div className="skills-title">Skills</div>
              <div className="skills">
                <Skill id="Python" />
                <span> - </span>
                <Skill id="React" />
                <span> - </span>
                <Skill id="JavaScript" />
                <span> - </span>
                <Skill id="CSS" />
                <span> - </span>
                <Skill id="HTML" />
                <span> - </span>
                <Skill id="PHP" />
                <span> - </span>
                <Skill id="Java" />
                <span> - </span>
                <Skill id="C1" />
                <span> - </span>
                <Skill id="VBA" />
                <span> - </span>
                <Skill id="C2" />
              </div>
            </div>
          </div>
          <img src={python} alt="" className="logo" />
        </section>
        <Doggo />
      </div>
    </div>
  );
}

export default App;
