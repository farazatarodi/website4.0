import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route } from 'react-router-dom';

// import project pages
import AV from './Projects/AV';
import BB from './Projects/BB';
import Board from './Projects/Board';
import Disk from './Projects/Disk';
import Four from './Projects/Four';
import HA from './Projects/HA';
import IoT from './Projects/IoT';
import Iran from './Projects/Iran';
import MC from './Projects/MC';
import OS from './Projects/OS';
import QR from './Projects/QR';
import Robot from './Projects/Robot';
import Siemens from './Projects/Siemens';
import Task from './Projects/Task';
import Two from './Projects/Two';
import Vision from './Projects/Vision';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" element={<App />} />
      <Route path="/av" element={<AV />} />
      <Route path="/bb" element={<BB />} />
      <Route path="/board" element={<Board />} />
      <Route path="/disk" element={<Disk />} />
      <Route path="/four" element={<Four />} />
      <Route path="/ha" element={<HA />} />
      <Route path="/iot" element={<IoT />} />
      <Route path="/iran" element={<Iran />} />
      <Route path="/mc" element={<MC />} />
      <Route path="/os" element={<OS />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/robot" element={<Robot />} />
      <Route path="/siemens" element={<Siemens />} />
      <Route path="/task" element={<Task />} />
      <Route path="/two" element={<Two />} />
      <Route path="/vision" element={<Vision />} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
