import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/av" component={AV} />
        <Route path="/bb" component={BB} />
        <Route path="/board" component={Board} />
        <Route path="/disk" component={Disk} />
        <Route path="/four" component={Four} />
        <Route path="/ha" component={HA} />
        <Route path="/iot" component={IoT} />
        <Route path="/iran" component={Iran} />
        <Route path="/mc" component={MC} />
        <Route path="/os" component={OS} />
        <Route path="/qr" component={QR} />
        <Route path="/robot" component={Robot} />
        <Route path="/siemens" component={Siemens} />
        <Route path="/task" component={Task} />
        <Route path="/two" component={Two} />
        <Route path="/vision" component={Vision} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
