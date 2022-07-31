import React from 'react';

import Doggo from './Doggo';
import './css/App.css';
import './css/Doggo.css';
import './css/One.css';
import './css/Two.css';
import './css/Three.css';
import './css/Four.css';
import './css/mobile.css';
import './css/project.css';
import Navigation from './Navigation';
import About from './sections/About';
import Contact from './sections/Contact';
import Experiences from './sections/Experiences';
import Home from './sections/Home';

// scroll animations function
let oldLeft = 0;
let left = false;
let oldSec = 0;
let curSec = 0;
let startTimer: ReturnType<typeof setTimeout>;
let walkTimer: ReturnType<typeof setTimeout>;
let sRight = 0;

const scrollAnims = () => {
  const container = document.querySelector('.scroll-container') as HTMLElement;
  const doggo = document.querySelector('.doggo') as HTMLElement;

  // Find direction of scroll
  if (oldLeft > container!.scrollLeft) {
    left = true;
  } else if (oldLeft < container!.scrollLeft) {
    left = false;
  }
  oldLeft = container!.scrollLeft;

  // Calculate current section number
  curSec = container!.scrollLeft / window.innerWidth;

  // Check if fully scrolled
  if (Number.isInteger(curSec)) {
    if (curSec !== oldSec) {
      // Set transition to 0s
      doggo!.style.transition = 'left 0s linear';

      // Set initial position
      if (left) {
        doggo!.style.left = (curSec + 1.05) * window.innerWidth + 'px';
      } else {
        doggo!.style.left = (curSec - 0.05) * window.innerWidth + 'px';
      }

      // Set animation back to  1s
      clearTimeout(startTimer);
      startTimer = setTimeout(() => {
        doggo!.style.transition = 'left 1s linear';
        doggo!.style.animation = 'bg 0.5s steps(1) infinite alternate';

        // Photo and position based on direction
        if (left) {
          doggo!.style.left = (curSec + 0.95) * window.innerWidth + 'px';
          doggo!.style.transform = 'translate(-50%) scaleX(-1)';
        } else {
          doggo!.style.left = (curSec + 0.05) * window.innerWidth + 'px';
          doggo!.style.transform = 'translate(-50%) scaleX(1)';
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
      doggo!.offsetLeft === Math.round((curSec + 0.95) * window.innerWidth) ||
      doggo!.offsetLeft === Math.round((curSec + 0.05) * window.innerWidth)
    ) {
      doggo!.style.animation = 'ogbg 0s linear';
    }
  }, 1200);

  // right value for GIT
  sRight = 4 * window.innerWidth - container!.scrollLeft;
  const git1 = document.querySelector('#git1') as HTMLElement;
  const git2 = document.querySelector('#git2') as HTMLElement;
  if (curSec > 2) {
    git1!.style.transform = `translate(-${(sRight / window.innerWidth - 0.8) * 550}%, 0)`;
    git2!.style.transform = `translate(-${(sRight / window.innerWidth - 0.9) * 450}%, 100%)`;
  }
};

// Main
const App = () => {
  // more boolean

  return (
    <div className="scroll-container" onScroll={scrollAnims}>
      <Navigation />
      <Home />
      <About />
      <Experiences />
      <Contact />
      <Doggo />
    </div>
  );
};

export default App;
