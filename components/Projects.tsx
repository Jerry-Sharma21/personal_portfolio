import React from 'react';

import Project from './Project';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/Data';

const Projects: React.FC = () => {
  return (
    <section className="scroll-mt-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
