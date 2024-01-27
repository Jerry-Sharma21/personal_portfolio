'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '@/lib/Data';
import { useSectionInView } from '@/lib/Hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills: React.FC = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skills, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3
            dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
