import './css/index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import * as Projects from './Projects';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/av" element={<Projects.AV />} />
        <Route path="/bb" element={<Projects.BB />} />
        <Route path="/board" element={<Projects.Board />} />
        <Route path="/disk" element={<Projects.Disk />} />
        <Route path="/four" element={<Projects.Four />} />
        <Route path="/ha" element={<Projects.HA />} />
        <Route path="/iot" element={<Projects.IoT />} />
        <Route path="/iran" element={<Projects.Iran />} />
        <Route path="/mc" element={<Projects.MC />} />
        <Route path="/os" element={<Projects.OS />} />
        <Route path="/qr" element={<Projects.QR />} />
        <Route path="/robot" element={<Projects.Robot />} />
        <Route path="/siemens" element={<Projects.Siemens />} />
        <Route path="/task" element={<Projects.Task />} />
        <Route path="/two" element={<Projects.Two />} />
        <Route path="/vision" element={<Projects.Vision />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
