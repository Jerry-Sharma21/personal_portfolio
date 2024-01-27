'use client';
import React from 'react';
import { motion } from 'framer-motion';

import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/Hooks';

const About: React.FC = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Mechanical</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{' '}
        <span className="font-medium">front-end web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
          React, Typescript, Node.js / Express.js and MongoDB
        </span>
        . I am also familiar with Vue.js, Next.js and React Native. I am always
        looking to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy online
        gaming, road trips, podcasts and playing with my Cat. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">
          human history and ancient civilizations.
        </span>
      </p>
    </motion.section>
  );
};

export default About;
