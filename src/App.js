import './App.css';
import scroll from './down-arrow.png';

var timer;

const doggoCome = (e) => {
  const doggo = document.querySelector('.doggo');
  if (e.clientX < (window.innerWidth - doggo.offsetWidth) * 0.98) {
    doggo.style.left = e.clientX + 'px';
  }

  doggo.style.animation = 'bg 0.5s steps(1) infinite alternate';

  if (doggo.offsetLeft < e.clientX) {
    doggo.style.transform = 'translate(-50%) scaleX(1)';
  } else {
    doggo.style.transform = 'translate(-50%) scaleX(-1)';
  }

  clearTimeout(timer);

  timer = setTimeout(() => {
    if (
      doggo.offsetLeft <= e.clientX * 1.05 &&
      doggo.offsetLeft >= e.clientX * 0.95
    ) {
      console.log('yes');
      doggo.style.animation = 'ogbg 0s linear';
    }
  }, 1100);
};

function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <section className="one" id="home" onMouseMove={doggoCome}>
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
          <div className="name">Faraz Atarodi</div>
          <div className="title typing">
            {'{'}
            <span style={{ color: '#00ffcc' }}>developer</span>
            {'}'}
          </div>
          <div className="doggo-div">
            <div className="doggo"></div>
          </div>
          <img src={scroll} className="scroll-animation" alt=""></img>
        </section>
        <section className="two" id="about"></section>
      </div>
    </div>
  );
}

export default App;
