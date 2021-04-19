import './App.css';
import wrench from './wrench.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <section className="one">
          <div className="name typing">
            <span>faraz.</span>
            <span style={{ color: '#00FFCC' }}>is()</span>
            <span>;</span>
          </div>
          <div className="drop-down">
            <h1 className="selected">
              <img
                src={wrench}
                style={{ height: '5rem', filter: 'invert(0.8)' }}
              ></img>
              developer
            </h1>
            <h1>awesome</h1>
            <h1>cool</h1>
            <h1>handsome</h1>
          </div>
        </section>
      </div>
      <div className="bar"></div>
    </div>
  );
}

export default App;
