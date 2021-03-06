import React from 'react';

import bone from './media/doggo/bone.png';

// doggo follow function
let timer: ReturnType<typeof setTimeout>;

const doggoCome = (e: { clientX: number; clientY: any; pageX: number; pageY: number }) => {
  const doggo = document.querySelector('.doggo') as HTMLElement;
  const container = document.querySelector('.scroll-container');
  const bone = document.querySelector('.bone') as HTMLElement;

  // Get mouse position
  const mouseX = container!.scrollLeft + e.clientX;
  const mouseY = e.clientY;

  // Check if within limits
  if (
    e.pageX < window.innerWidth - doggo!.offsetWidth &&
    e.pageX > (window.innerWidth - doggo!.offsetWidth) * 0.05
  ) {
    // set doggo position
    doggo!.style.left = mouseX + 'px';

    // set doggo animation
    doggo!.style.animation = 'bg 0.5s steps(1) infinite alternate';

    // set doggo direction
    if (doggo!.offsetLeft < mouseX) {
      doggo!.style.transform = 'translate(-50%) scaleX(1)';
    } else {
      doggo!.style.transform = 'translate(-50%) scaleX(-1)';
    }

    // set timer for sitting position
    clearTimeout(timer);

    timer = setTimeout(() => {
      if (doggo.offsetLeft <= mouseX * 1.05 && doggo.offsetLeft >= mouseX * 0.95) {
        doggo.style.animation = 'ogbg 0s linear';
      }
    }, 1100);
  }

  //set bone position
  if (e.pageY > window.innerHeight * 0.8) {
    bone!.style.visibility = 'visible';
    bone!.style.left = mouseX + 'px';
    bone!.style.top = mouseY - window.innerHeight * 0.8 + 'px';
  } else {
    bone!.style.visibility = 'hidden';
  }
};

const Doggo = () => {
  return (
    <div className="doggo-div" onMouseMove={doggoCome}>
      <div
        className="doggo"
        onClick={() => window.open('https://www.google.com/search?q=samoyed')}></div>
      <img className="bone" src={bone} alt=""></img>
    </div>
  );
};

export default Doggo;
