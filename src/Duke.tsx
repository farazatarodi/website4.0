import React, { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

import sittingImage from './media/duke/0.png';
import legsOpenImage from './media/duke/1.png';
import legsCloseImage from './media/duke/2.png';
import boneImage from './media/duke/bone.png';

const Duke = ({
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

  const dukeCome = (e: { clientX: number; clientY: number; pageX: number; pageY: number }) => {
    const container = containerRef.current;
    const duke = dukeRef.current;

    if (!container || !duke) {
      return;
    }

    // Get mouse position
    const mouseX = container.scrollLeft + e.clientX;
    const mouseY = e.clientY;

    if (duke!.offsetLeft < mouseX) {
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
      className="duke-div"
      onMouseMove={(e) => {
        dukeCome(e);
      }}>
      <div
        className="duke"
        onClick={() => window.open('https://www.google.com/search?q=samoyed')}
        style={{
          left: `${left}px`,
          transform: mirror ? 'translateX(-50%) scaleX(-1)' : ' translateX(-50%)'
        }}
        ref={dukeRef}>
        {moving ? (
          legsOpen ? (
            <div
              className="duke-image"
              style={{
                backgroundImage: `url(${legsOpenImage})`
              }}
            />
          ) : (
            <div
              className="duke-image"
              style={{
                backgroundImage: `url(${legsCloseImage})`
              }}
            />
          )
        ) : (
          <div
            className="duke-image"
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

export default Duke;
