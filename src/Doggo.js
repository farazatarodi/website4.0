import bone from './media/bone.png';

// doggo follow function
var timer;

const doggoCome = (e) => {
  const doggo = document.querySelector('.doggo');
  const container = document.querySelector('.scroll-container');
  const bone = document.querySelector('.bone');

  // Get mouse position
  var mouseX = container.scrollLeft + e.clientX;
  var mouseY = e.clientY;

  // Check if within limits
  if (
    e.pageX < window.innerWidth - doggo.offsetWidth &&
    e.pageX > (window.innerWidth - doggo.offsetWidth) * 0.05
  ) {
    // set doggo position
    doggo.style.left = mouseX + 'px';

    // set doggo animation
    doggo.style.animation = 'bg 0.5s steps(1) infinite alternate';

    // set doggo direction
    if (doggo.offsetLeft < mouseX) {
      doggo.style.transform = 'translate(-50%) scaleX(1)';
    } else {
      doggo.style.transform = 'translate(-50%) scaleX(-1)';
    }

    // set timer for sitting position
    clearTimeout(timer);

    timer = setTimeout(() => {
      if (
        doggo.offsetLeft <= mouseX * 1.05 &&
        doggo.offsetLeft >= mouseX * 0.95
      ) {
        doggo.style.animation = 'ogbg 0s linear';
      }
    }, 1100);
  }

  //set bone position
  if (e.pageY > window.innerHeight * 0.8) {
    bone.style.visibility = 'visible';
    bone.style.left = mouseX + 'px';
    bone.style.top = mouseY - window.innerHeight * 0.8 + 'px';
  } else {
    bone.style.visibility = 'hidden';
  }
};

const Doggo = () => {
  return (
    <div className="doggo-div" onMouseMove={doggoCome}>
      <div className="doggo"></div>
      <img className="bone" src={bone} alt=""></img>
    </div>
  );
};

export default Doggo;
