import React, { Dispatch, SetStateAction } from 'react';

import '../css/ProjectDetailContainer.css';
import * as ProjectComponents from '../Projects';

import ProjectNavigation from './ProjectNavigation';

const ProjectDetailContainer = ({
  projectId,
  setShowProjectDetail
}: {
  projectId: string;
  setShowProjectDetail: Dispatch<SetStateAction<boolean>>;
}) => {
  type ProjectType = typeof ProjectComponents;
  const ProjectDetail = ProjectComponents[projectId as keyof ProjectType];

  return (
    <div className="project-detail-container">
      <ProjectNavigation setShowProjectDetail={setShowProjectDetail} />
      <ProjectDetail />
    </div>
  );
};

export default ProjectDetailContainer;
