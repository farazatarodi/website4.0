import React, { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

import sittingImage from './media/doggo/0.png';
import legsOpenImage from './media/doggo/1.png';
import legsCloseImage from './media/doggo/2.png';
import boneImage from './media/doggo/bone.png';

const Doggo = ({
  left,
  setLeft,
  mirror,
  setMirror,
  moving,
  setMoving,
  legsOpen,
  setLegsOpen,
  containerRef
}: {
  left: number;
  setLeft: Dispatch<SetStateAction<number>>;
  mirror: boolean;
  setMirror: Dispatch<SetStateAction<boolean>>;
  moving: boolean;
  setMoving: Dispatch<SetStateAction<boolean>>;
  legsOpen: boolean;
  setLegsOpen: Dispatch<SetStateAction<boolean>>;
  containerRef: RefObject<HTMLDivElement | null>;
}) => {
  const dukeRef = useRef<HTMLDivElement>(null);

  const [animation, setAnimation] = useState(false);
  const [boneVisibility, setBoneVisibility] = useState(false);
  const [boneLeft, setBoneLeft] = useState(0);
  const [boneTop, setBoneTop] = useState(0);

  let walkingAnimationTimer: ReturnType<typeof setInterval>;
  useEffect(() => {
    if (animation) {
      clearInterval(walkingAnimationTimer);

      setMoving(true);
      walkingAnimationTimer = setInterval(() => {
        setLegsOpen((legsOpen) => !legsOpen);
      }, 100);

      setTimeout(() => {
        clearInterval(walkingAnimationTimer);
        setMoving(false);
        setAnimation(false);
      }, 900);
    }
  }, [animation]);

  const doggoCome = (e: { clientX: number; clientY: number; pageX: number; pageY: number }) => {
    const container = containerRef.current;
    const doggo = dukeRef.current;

    if (!container || !doggo) {
      return;
    }

    // Get mouse position
    const mouseX = container.scrollLeft + e.clientX;
    const mouseY = e.clientY;

    if (doggo!.offsetLeft < mouseX) {
      setMirror(false);
    } else {
      setMirror(true);
    }
    setLeft(mouseX);
    setAnimation(true);

    if (e.pageY > window.innerHeight * 0.8) {
      setBoneVisibility(true);
      setBoneLeft(mouseX);
      setBoneTop(mouseY - window.innerHeight * 0.8);
    } else {
      setBoneVisibility(false);
    }
  };

  return (
    <div
      className="doggo-div"
      onMouseMove={(e) => {
        doggoCome(e);
      }}>
      <div
        className="doggo"
        onClick={() => window.open('https://www.google.com/search?q=samoyed')}
        style={{
          left: `${left}px`,
          transform: mirror ? 'translateX(-50%) scaleX(-1)' : ' translateX(-50%)'
        }}
        ref={dukeRef}>
        {moving ? (
          legsOpen ? (
            <div
              className="doggo-image"
              style={{
                backgroundImage: `url(${legsOpenImage})`
              }}
            />
          ) : (
            <div
              className="doggo-image"
              style={{
                backgroundImage: `url(${legsCloseImage})`
              }}
            />
          )
        ) : (
          <div
            className="doggo-image"
            style={{
              backgroundImage: `url(${sittingImage})`
            }}
          />
        )}
      </div>

      <img
        className="bone"
        src={boneImage}
        alt=""
        style={{
          visibility: boneVisibility ? 'visible' : 'hidden',
          left: `${boneLeft}px`,
          top: `${boneTop}px`
        }}
      />
    </div>
  );
};

export default Doggo;
