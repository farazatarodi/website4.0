import React, { Dispatch, SetStateAction } from 'react';

const ProjectNavigation = ({
  setShowProjectDetail
}: {
  setShowProjectDetail?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="header">
      <div className="sec1">
        <button
          onClick={() => setShowProjectDetail && setShowProjectDetail(false)}
          className="navigation-button">
          &#8592; BACK
        </button>
      </div>
      <div className="sec2">
        <div>GHENT - BELGIUM</div>
      </div>
    </div>
  );
};

export default ProjectNavigation;
