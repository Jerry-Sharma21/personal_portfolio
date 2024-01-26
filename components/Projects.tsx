'use client';
import React, { useEffect } from 'react';

import Project from './Project';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/Data';
import { useSectionInView } from '@/lib/Hooks';

const Projects: React.FC = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
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
