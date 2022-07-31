import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FrontPage from './FrontPage';
import * as Projects from './Projects';

const ReactRouterRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
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
  );
};

export default ReactRouterRoutes;
