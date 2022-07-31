import React, { useEffect } from 'react';

import ReactRouterRoutes from './Routes';

const App = () => {
  useEffect(() => {
    const handleResize = () => {
      const html = document.getElementsByTagName('html')[0] as HTMLElement;
      html!.style.fontSize = `${(window.innerWidth / 1920) * 16}px`;
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <ReactRouterRoutes />
    </div>
  );
};

export default App;
