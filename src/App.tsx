import React, { useEffect } from 'react';

import FrontPage from './FrontPage';

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
      <FrontPage />
    </div>
  );
};

export default App;
