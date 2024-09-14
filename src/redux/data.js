import projectImage1 from '../assets/images/works/1.png';
import projectImage2 from '../assets/images/works/2.png';
import projectImage3 from '../assets/images/works/3.png';
import projectImage4 from '../assets/images/works/4.png';
import projectImage5 from '../assets/images/works/5.png';
import projectImage6 from '../assets/images/works/6.png';

import jsIcon from '../assets/images/skills/jsIcon.png';
import tsIcon from '../assets/images/skills/tsIcon.png';
import rubyIcon from '../assets/images/skills/rubyIcon.png';
import htmlIcon from '../assets/images/skills/htmlIcon.png';
import cssIcon from '../assets/images/skills/cssIcon.png';
import scssIcon from '../assets/images/skills/scssIcon.png';

import reactIcon from '../assets/images/skills/reactIcon.png';
import reduxIcon from '../assets/images/skills/reduxIcon.png';
import nextIcon from '../assets/images/skills/nextIcon.png';
import rorIcon from '../assets/images/skills/rorIcon.png';
import tailwindIcon from '../assets/images/skills/tailwindIcon.png';
import threeIcon from '../assets/images/skills/threeIcon.png';

import gitIcon from '../assets/images/skills/gitIcon.png';
import pgIcon from '../assets/images/skills/pgIcon.png';
import postmanIcon from '../assets/images/skills/postmanIcon.png';
import prismaIcon from '../assets/images/skills/prismaIcon.png';
import jestIcon from '../assets/images/skills/jestIcon.png';
import rspecIcon from '../assets/images/skills/rspecIcon.png';

import teamworkIcon from '../assets/images/skills/teamworkIcon.png';
import mentoringIcon from '../assets/images/skills/mentoringIcon.png';
import remotePairIcon from '../assets/images/skills/remotePairIcon.png';
import criticalThinkingIcon from '../assets/images/skills/criticalThinkingIcon.png';
import problemSolvingIcon from '../assets/images/skills/problemSolvingIcon.png';

import dockerIcon from '../assets/images/skills/dockerIcon.png';
import mysqlIcon from '../assets/images/skills/mysqlIcon.png';
import mongoIcon from '../assets/images/skills/mongodbIcon.png';
import firebaseIcon from '../assets/images/skills/firebaseIcon.png';
import nodeIcon from '../assets/images/skills/nodeIcon.png';
import bootstrapIcon from '../assets/images/skills/bootstrapIcon.png';
import nestIcon from '../assets/images/skills/nestIcon.png';
import clerkIcon from '../assets/images/skills/clerkIcon.png';
import aiIcon from '../assets/images/skills/googleAIIcon.png';

export const bio = "I'm a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don't hesitate to contact me.";

export const skills = [
  {
    title: 'Languages',
    list: [
      {
        name: 'JavaScript',
        icon: jsIcon,
      },
      {
        name: 'HTML',
        icon: htmlIcon,
      },
      {
        name: 'CSS',
        icon: cssIcon,
      },
      {
        name: 'SCSS',
        icon: scssIcon,
      },
      {
        name: 'TypeScript',
        icon: tsIcon,
      },
      {
        name: 'Ruby',
        icon: rubyIcon,
      },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    list: [
      {
        name: 'React',
        icon: reactIcon,
      },
      {
        name: 'NextJS',
        icon: nextIcon,
      },
      {
        name: 'ExpressJS',
        icon: nodeIcon,
      },
      {
        name: 'Ruby on Rails',
        icon: rorIcon,
      },
      {
        name: 'NestJS',
        icon: nestIcon,
        tag: 'learning',
      },
      {
        name: 'Redux',
        icon: reduxIcon,
      },
      {
        name: 'Tailwind',
        icon: tailwindIcon,
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon,
      },
      {
        name: 'ThreeJS',
        icon: threeIcon,
        tag: 'learning',
      },
    ],
  },
  {
    title: 'Tools & Databases',
    list: [
      {
        name: 'Git',
        icon: gitIcon,
      },
      {
        name: 'Docker',
        icon: dockerIcon,
      },
      {
        name: 'Postman',
        icon: postmanIcon,
      },
      {
        name: 'Prisma',
        icon: prismaIcon,
      },
      {
        name: 'Jest',
        icon: jestIcon,
      },
      {
        name: 'RSpec',
        icon: rspecIcon,
      },
      {
        name: 'Clerk Auth',
        icon: clerkIcon,
      },
      {
        name: 'GoogleAI API',
        icon: aiIcon,
      },
      {
        name: 'MySQL',
        icon: mysqlIcon,
      },
      {
        name: 'PostgreSQL',
        icon: pgIcon,
      },
      {
        name: 'MongoDB',
        icon: mongoIcon,
      },
      {
        name: 'Firebase',
        icon: firebaseIcon,
      },
    ],
  },
  {
    title: 'Professional Skills',
    list: [
      {
        name: 'Teamwork',
        icon: teamworkIcon,
      },
      {
        name: 'Mentoring',
        icon: mentoringIcon,
      },
      {
        name: 'Remote Pair-Programming',
        icon: remotePairIcon,
      },
      {
        name: 'Critical Thinking',
        icon: criticalThinkingIcon,
      },
      {
        name: 'Problem Solving',
        icon: problemSolvingIcon,
      },
    ],
  },
];

export const projects = [
  {
    name: 'Catalog of My Things',
    projectImage: projectImage1,
    info: ['Microverse', 'Back End Dev', '2023'],
    tags: ['Ruby', 'PostgreSQL'],
    sourceLink: 'https://github.com/mohametalmeari/my-things',
    description: `
      Console app designed to meticulously document owned items, including books, music albums, and games. 
      The application uses a Unified Modeling Language (UML) class diagram to represent its underlying 
      structure. Data is stored efficiently using both JSON files and PostgreSQL databases.
    `,
  },
  {
    name: 'Pokémon',
    projectImage: projectImage2,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    liveLink: 'https://mohametalmeari.github.io/JavascriptCapstone',
    sourceLink: 'https://github.com/mohametalmeari/JavascriptCapstone',
    description: `
    Pokémon fan seeking a vibrant hub to connect with fellow enthusiasts and immerse in a vast collection 
    of Pokés. Users can participate in discussions by commenting on Pokémon cards, liking their favorites, 
    and staying updated on the latest releases.
    `,
  },
  {
    name: 'i-Post',
    projectImage: projectImage3,
    info: ['SaaS Project', 'Full Stack Dev', '2023'],
    tags: ['Ruby on Rails', 'CSS', 'PostgreSQL', 'RSpec'],
    liveLink: 'https://i-post-almeari.onrender.com',
    sourceLink: 'https://github.com/mohametalmeari/i-post',
    description: `
    Unleash your creativity by sharing your posts and discovering captivating content from others, it's 
    a dynamic platform where your ideas come to life. Users can create posts on their interesting topics, 
    read posts from others, and interact with the community through likes and comments.
    `,
    note: 'Note: Hosted on a free server, it takes a couple of minutes to load for the first time.',
  },
  {
    name: 'Auto-Type-Code',
    projectImage: projectImage4,
    info: ['SaaS Project', 'VSCode Extension', '2024'],
    tags: ['JavaScript'],
    liveLink:
      'https://marketplace.visualstudio.com/items?itemName=WebCrafter.auto-type-code',
    sourceLink: 'https://github.com/web-crafters-lab/auto-type',
    description: `
      VSCode extension that allows users to automate the typing of predefined code snippets. This extension reads from 
      specified source files and simulates typing into the active text editor, providing various commands to manage and 
      control this process.
    `,
  },
  {
    name: 'Typing Speed',
    projectImage: projectImage5,
    info: ['SaaS Project', 'Front End Dev', '2024'],
    tags: ['ReactJS', 'TailwindCSS', 'JestJS'],
    liveLink: 'https://typingspeedtest-webcrafter.vercel.app',
    sourceLink: 'https://github.com/mohametalmeari/typing-speed',
    description: `
      Test and improve your typing speed with the option to add custom texts and track your progress. Users 
      can practice typing and receive immediate feedback on their performance, including words per minute 
      (WPM) and accuracy percentage.
    `,
  },
  {
    name: 'Genius AI',
    projectImage: projectImage6,
    info: ['SaaS Project', 'Full Stack Dev', '2024'],
    tags: [
      'NextJS',
      'TailwindCSS',
      'Prisma',
      'Stripe',
      'Clerk Auth',
      'GoogleAI API',
      'Replicate API',
    ],
    liveLink: 'https://genius-5ai-tools.vercel.app',
    sourceLink: 'https://github.com/mohametalmeari/ai-saas',
    description: `
      AI tool application that utilizes the power of the GoogleAI API and Replicate API. Users can easily generate 
      multiple types of content, including text, code, images, music, and video, by simply providing text prompts.
    `,
  },
];
