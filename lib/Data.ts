import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';

import clone from '@/public/clone.png';
import chat_a_tale from '@/public/chat_a_tale.png';

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
    title: 'Software Developer at Eder labs',
    location: 'Bangalore, Karnataka',
    description:
      'As the sole Front-End Engineer, I was responsible for transitioning the codebase from Vue.js to React.js, aiming to achieve a faster UI. I implemented new UI designs in React, ensuring efficiency and technological soundness. Collaborating closely with the design team, I created visually appealing and robust interfaces. I seamlessly integrated APIs, Auth0, Redux, and other libraries to enhance functionality, state management, and security. Notably, I successfully addressed 100% of the bugs raised in production, contributing to a more stable and reliable application.',
    icon: React.createElement(CgWorkAlt),
    date: 'July/2023 - Jan/2024',
  },
  {
    title: 'Software Developer at 314e',
    location: 'Bangalore, Karnataka',
    description:
      "As a key member in the development of a new and complex ATS and CRM product, I specialized in React, Redux, Kea.js, TypeScript, and utilized the Ant Design (antd) library for UI components. My responsibilities included writing comprehensive unit test cases for the UI to ensure code quality and reliability. I implemented design changes to enhance the product's visual appeal and usability, contributing to an improved overall user experience. Additionally, I played a crucial role in the creation of new, complex functionalities, thereby enhancing the product's capabilities. I actively participated in bug fixing to ensure a smooth and error-free user experience. My commitment to maintaining the highest standards in development contributed to the success and robustness of the ATS and CRM product.",
    icon: React.createElement(CgWorkAlt),
    date: 'Jan/2022 - May/2023',
  },
  {
    title: 'B.tech',
    location: 'Jaipur, Rajasthan',
    description: 'Graduated from The LNM institute of information Technology',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
] as const;

export const projectsData = [
  {
    title: 'Chat-a-Tale',
    description:
      'The chat app developed using the MERN stack and Socket.IO enables users to securely authenticate, engage in group chats with real-time updates, and receive instant notifications for new messages and activities. Additionally, users can privately message others, benefit from a responsive design across devices, search for specific user, and admins have control chat room moderation.',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'Chakra UI',
      'Express',
      'JavaScript',
      'Socket.io',
    ],
    imageUrl: chat_a_tale,
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
    description:
      'The Netflix clone built with React, TypeScript, and related technologies offers a streamlined user experience reminiscent of the original platform. It includes features such as user authentication, personalized user profiles, a vast library of movies and shows with dynamic search and filtering options, responsive design for various devices. Users can enjoy seamless playback, and explore trending.',
    tags: ['React', 'Typescript', 'CSS', 'Less', 'Redux'],
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
