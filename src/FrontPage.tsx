import React, { forwardRef, useEffect, useRef, useState } from 'react';

import Doggo from './Doggo';
import './css/FrontPage.css';
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

const App = forwardRef(() => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const git1Ref = useRef<HTMLDivElement>(null);
  const git2Ref = useRef<HTMLDivElement>(null);

  const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(0);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [lastScrollLeft, setLastScrollLeft] = useState<number>(0);
  const [dukeLeft, setDukeLeft] = useState<number>(100);
  const [dukeMirror, setDukeMirror] = useState<boolean>(false);
  const [dukeMoving, setDukeMoving] = useState<boolean>(false);
  const [dukeLegsOpen, setDukeLegsOpen] = useState<boolean>(false);

  let direction: 'left' | 'right';
  useEffect(() => {
    if (scrolling) {
      const container = containerRef.current;
      const git1 = git1Ref.current;
      const git2 = git2Ref.current;

      if (!container || !git1 || !git2) {
        return;
      }

      const scrollLeft = container.scrollLeft;
      if (scrollLeft > lastScrollLeft) {
        direction = 'right';
      } else {
        direction = 'left';
      }

      const newSectionNumber = scrollLeft / window.innerWidth;

      let walkingAnimationTimer: ReturnType<typeof setInterval>;

      // Check if fully scrolled
      if (Number.isInteger(newSectionNumber)) {
        if (newSectionNumber !== currentSectionNumber) {
          if (direction === 'left') {
            setDukeMirror(true);
            setDukeLeft((newSectionNumber + 0.95) * window.innerWidth);
            walkingAnimationTimer = setInterval(() => {
              setDukeLegsOpen((dukeLegsOpen) => !dukeLegsOpen);
            }, 100);
          } else if (direction === 'right') {
            setDukeMirror(false);
            setDukeLeft((newSectionNumber + 0.05) * window.innerWidth);
            walkingAnimationTimer = setInterval(() => {
              setDukeLegsOpen((dukeLegsOpen) => !dukeLegsOpen);
            }, 100);
          }
          setDukeMoving(true);
        }
        setCurrentSectionNumber(newSectionNumber);

        setTimeout(() => {
          clearInterval(walkingAnimationTimer);
          setDukeMoving(false);
        }, 800);
      }

      setLastScrollLeft(scrollLeft);
      setScrolling(false);

      const scrollRight = 4 * window.innerWidth - container.scrollLeft;

      git1!.style.transform = `translate(-${(scrollRight / window.innerWidth - 0.8) * 550}%, 0)`;
      git2!.style.transform = `translate(-${(scrollRight / window.innerWidth - 0.9) * 450}%, 100%)`;
    }
  }, [scrolling]);

  return (
    <div className="scroll-container" onScroll={() => setScrolling(true)} ref={containerRef}>
      <Navigation />
      <Home />
      <About />
      <Experiences />
      <Contact>
        <div id="git1" className="git" ref={git1Ref}>
          GET IN
        </div>
        <div id="git2" className="git" ref={git2Ref}>
          TOUCH
        </div>
      </Contact>
      <Doggo
        left={dukeLeft}
        setLeft={setDukeLeft}
        mirror={dukeMirror}
        setMirror={setDukeMirror}
        legsOpen={dukeLegsOpen}
        setLegsOpen={setDukeLegsOpen}
        moving={dukeMoving}
        setMoving={setDukeMoving}
        containerRef={containerRef}
      />
    </div>
  );
});

App.displayName = 'App';

export default App;
