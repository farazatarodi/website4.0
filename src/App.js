import Doggo from './Doggo';
import Skill from './Skill';
import Edu from './Edu';
import Project from './Project';
import ContactForm from './ContactForm';

// import media
import linkArrow from './media/diagonal-arrow.png';
import cv from './media/CV.pdf';
import python from './media/logos/python.png';
import scroll from './media/down-arrow.png';

// import css files
import './css/App.css';
import './css/Doggo.css';
import './css/One.css';
import './css/Two.css';
import './css/Three.css';
import './css/Four.css';

// bg image import
import two from './media/bg/2.0.png';
import four from './media/bg/4.0.png';
import av from './media/bg/av.png';
import bb from './media/bg/bb.png';
import board from './media/bg/board.png';
import disk from './media/bg/disk.png';
import ha from './media/bg/ha.png';
import iot from './media/bg/iot.png';
import iran from './media/bg/iran.png';
import mc from './media/bg/mc.png';
import os from './media/bg/os.png';
import qr from './media/bg/qr.png';
import robot from './media/bg/robot.png';
import siemens from './media/bg/siemens.png';
import task from './media/bg/task.png';
import vision from './media/bg/vision.png';

// scroll animations function
var oldLeft = 0;
var left = false;
var oldSec = 0;
var curSec = 0;
var startTimer = 0;
var walkTimer = 0;
var sRight = 0;

const scrollAnims = () => {
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
      doggo.offsetLeft === Math.ceil((curSec + 0.95) * window.innerWidth) ||
      doggo.offsetLeft === Math.ceil((curSec + 0.05) * window.innerWidth)
    ) {
      doggo.style.animation = 'ogbg 0s linear';
    }
  }, 1200);

  // right value for GIT
  sRight = 4 * window.innerWidth - container.scrollLeft;
  const git1 = document.querySelector('#git1');
  const git2 = document.querySelector('#git2');
  if (curSec > 2) {
    git1.style.transform = `translate(-${
      (sRight / window.innerWidth - 0.8) * 550
    }%, 0)`;
    git2.style.transform = `translate(-${
      (sRight / window.innerWidth - 0.9) * 450
    }%, 100%)`;
  }
};

// project data
const projectData = [
  {
    key: 1,
    id: 'siemens',
    color: '#FF5420',
    title: 'Siemens Healthineers',
    bg: siemens,
    desc: 'One year of full-time job at Siemens Healthineers as an ultrasound engineer',
  },
  {
    key: 2,
    id: 'os',
    color: '#F48636',
    title: 'Omran Soule Co.',
    bg: os,
    desc: 'Part-time job at Omran Soule Co. as a python developer and full stack engineer',
  },
  {
    key: 3,
    id: 'robot',
    color: '#F7EBE1',
    title: 'Robot Path Simulator',
    bg: robot,
    desc: 'A small script in Python that turns strings into movement commands for a robot',
  },

  {
    key: 4,
    id: 'iran',
    color: '#F7C69E',
    title: 'Iran Population Map',
    bg: iran,
    desc: 'An interactive population map of Iran using React, Python, Deck.gl and Mapbox',
  },

  {
    key: 5,
    id: 'iot',
    color: '#FECB4B',
    title: 'IoT Boards',
    bg: iot,
    desc: 'A study on the possibility of imlplementing SBCs into home appliences',
  },

  {
    key: 6,

    id: 'bb',
    color: '#3D6033',
    title: 'Breaking Bad Characters',
    bg: bb,
    desc: 'Another small script in Python that outputs episode numbers of Breaking Bad series based on provided charachter input',
  },

  {
    key: 7,
    id: 'mc',
    color: '#7CBD6B',
    title: 'Minecraft Farm Wiki',
    bg: mc,
    desc: 'A hobby website that deals with technical aspect of Minecraft',
  },

  {
    key: 8,
    id: 'vision',
    color: '#2F9A80',
    title: 'Computer Vision and Smart Assistant',
    bg: vision,
    desc: 'A system that gets inputs from the camera and adapts the assistant based on the situation',
  },

  {
    key: 9,
    id: 'four',
    color: '#00FFCC',
    title: 'Personal Website v4.0',
    bg: four,
    desc: 'This website! Created with React',
  },

  {
    key: 10,
    id: 'qr',
    color: '#30D9D9',
    title: 'Object and QR code Detection',
    bg: qr,
    desc: 'A Python project to navigate a drone based on the camera input and scan QR codes to gather points',
  },

  {
    key: 11,
    id: 'task',
    color: '#011936',
    title: 'Task Tracker',
    bg: task,
    desc: 'A simple task tracker in React',
  },

  {
    key: 12,
    id: 'two',
    color: '#323840',
    title: 'Personal Website v2.0',
    bg: two,
    desc: "Previous version of my personal website. It's in Vanilla JS",
  },

  {
    key: 13,
    id: 'disk',
    color: '#A3ACBF',
    title: 'Disk Sorter',
    bg: disk,
    desc: 'A disk sorter based on varying thicknesses of disks.',
  },

  {
    key: 14,
    id: 'av',
    color: '#252140',
    title: 'Autonomous Vehicle Components',
    bg: av,
    desc: "My bachelor's thesis. A study on different methods and components of autopilot systems with the goal of implementing said systems into ordinary vehicles",
  },

  {
    key: 15,
    id: 'ha',
    color: '#F7C8D6',
    title: 'Hamrahan Atebba Co.',
    bg: ha,
    desc: 'Part-time job at Hamrahan Atebba Co. as an IT manager and full stack engineer',
  },

  {
    key: 16,
    id: 'board',
    color: '#B3444F',
    title: 'Self-balancing robot',
    bg: board,
    desc: 'A self-balancing transportation robot',
  },
];

// Main
function App() {
  return (
    <div className="App">
      {/* container for scroll snap */}
      <div className="scroll-container" onScroll={scrollAnims}>
        {/* Header */}
        <div className="header">
          <div className="sec1">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#experiences">EXPERIENCES</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div className="sec2">
            <div>LEUVEN - BELGIUM</div>
          </div>
        </div>

        {/* 1. Home section */}
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
            <div className="skills-wrapper">
              <div className="skills-title">Skills</div>

              {/* skills components */}
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
                <span> - </span>
                <Skill id="Unity" />
              </div>
            </div>

            {/* education div */}
            <div className="edu">
              <div className="edu-title">Education</div>
              <Edu id="Sharif" />
              <Edu id="KUL" />
            </div>
          </div>

          {/* skill bg logo */}
          <img src={python} alt="" className="logo" />
        </section>

        {/* 3. Experiences section */}
        <section className="three" id="experiences">
          <div className="project-wrapper">
            {projectData.map(({ key, id, color, title, bg, desc }) => (
              <Project
                key={key}
                id={id}
                color={color}
                title={title}
                bg={bg}
                desc={desc}
              />
            ))}
          </div>
        </section>

        {/* 4. Contact section */}
        <section id="contact" className="four">
          <div className="contact-wrapper">
            {/* left side */}
            <div className="contact1">
              {/* info div */}
              <div className="details">
                Info
                <div style={{ fontSize: '2rem', fontWeight: '300' }}>
                  <a href="tel:+32492839028" className="links">
                    +32 492 83 92 28
                    <img src={linkArrow} alt="" className="link-arrow" />
                  </a>
                  <br />
                  <a
                    href="mailto:f.atarodi.contact@gmail.com"
                    className="links"
                  >
                    f.atarodi.contact@gmail.com
                    <img src={linkArrow} alt="" className="link-arrow" />
                  </a>
                </div>
              </div>

              {/* social div */}
              <div className="social">
                Social Media
                <div style={{ fontSize: '2rem', fontWeight: '300' }}>
                  <a
                    className="links"
                    href="https://www.linkedin.com/in/faraz-atarodi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <img src={linkArrow} alt="" className="link-arrow" />
                  </a>
                  <br />
                  <a
                    className="links"
                    href="https://www.facebook.com/f.atarodi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                    <img src={linkArrow} alt="" className="link-arrow" />
                  </a>
                </div>
              </div>

              {/* cv div */}
              <div className="cv">
                CV
                <div style={{ fontSize: '2rem', fontWeight: '300' }}>
                  <a
                    className="links"
                    href={cv}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                    <img src={linkArrow} alt="" className="link-arrow" />
                  </a>
                  <br />
                  <a
                    className="links"
                    href="https://drive.google.com/uc?export=download&id=1hBbmkl2GUX99TBsjXokvpR_5BnqFqzMS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download
                    <img
                      src={linkArrow}
                      alt=""
                      className="link-arrow"
                      target="_blank"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="contact2">
              {/* main form */}
              <div>Direct</div>
              <div style={{ height: '55%' }}>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* get in touch bg */}
          <div id="git1" className="GIT">
            GET IN
          </div>
          <div
            id="git2"
            className="GIT"
            style={{ transform: 'translate(0,100%)' }}
          >
            TOUCH
          </div>
        </section>

        {/* doggo section */}
        <Doggo />
      </div>
    </div>
  );
}

export default App;
