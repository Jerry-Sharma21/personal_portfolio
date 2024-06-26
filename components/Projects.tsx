'use client';
import React from 'react';

import Project from './Project';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/Data';
import { useSectionInView } from '@/lib/Hooks';

const Projects: React.FC = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section className="scroll-mt-28 mb-28" id="projects" ref={ref}>
      <SectionHeading>My Personal Projects</SectionHeading>
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
