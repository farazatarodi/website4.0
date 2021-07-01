import './App.css';
import scroll from './down-arrow.png';

function App() {
  return (
    <div className="App">
      <div className="scroll-container">
        <section className="one" id="home">
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
          <img src={scroll} className="scroll-animation" alt=""></img>
        </section>
        <section className="two" id="about"></section>
      </div>
    </div>
  );
}

export default App;
