import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

import clone from '@/public/clone.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'B.tech',
    location: 'Jaipur, Rajasthan',
    description: 'Graduated from The LNM institute of information Technology',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer at 314e',
    location: 'Bangalore, Karnataka',
    description:
      'Key member in the development of a new and complex ATS and CRM product. Specialized in React, Redux, Kea.js, TypeScript, and utilized the Ant Design (antd) library for UI components. Responsible for writing comprehensive unit test cases for the UI, ensuring code quality and reliability. Iimplemented design changes to enhance the product visual appeal and usability. Contributed to the creation of new complex functionalities, enhancing the overall capability of the product. Regularly participated in bug fixing, ensuring a smooth and error-free user experience',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan/2022 - May/2023',
  },
  {
    title: 'Front-End Developer at Eder labs',
    location: 'Bangalore, Karnataka',
    description:
      'Sole Front End Engineer, responsible for codebase transition from Vue.js to React.js. achieving faster UI. Implemented new UI designs in React, ensuring efficiency and technological soundness. Collaborated with the design team to create visually appealing and robust interfaces. Integrated APIs, Auth0, Redux, and other libraries, enhancing functionality, state management, and security. Fixed 100% of bugs raised in production.',
    icon: React.createElement(CgWorkAlt),
    date: 'July/2023 - Jan/2024',
  },
] as const;

export const projectsData = [
  {
    title: 'EasyEscapes.com',
    description: 'I build a Hotel booking app.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Express', 'Typescript'],
    imageUrl: clone,
  },
  {
    title: 'Trend Tales',
    description: 'I build a blog app',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Tailwind',
      'Redux',
      'Express',
      'MongoDB',
    ],
    imageUrl: clone,
  },
  {
    title: 'Netflix Clone',
    description: 'I build a clone of Netflix',
    tags: ['React', 'Typescript', 'CSS', 'Less'],
    imageUrl: clone,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Vue.js',
  'Kea.js',
  'Lodash',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Framer Motion',
] as const;
