import projectImage2 from '../assets/images/works/2.png';
import projectImage3 from '../assets/images/works/3.png';
import projectImage4 from '../assets/images/works/4.png';
import projectImage5 from '../assets/images/works/5.png';
import projectImage1 from '../assets/images/works/1.png';
import projectImage6 from '../assets/images/works/6.png';
import projectImage7 from '../assets/images/works/7.png';
import projectImage8 from '../assets/images/works/8.png';
import projectImage9 from '../assets/images/works/9.png';
import projectImage10 from '../assets/images/works/10.png';
import projectImage11 from '../assets/images/works/11.png';
import projectImage12 from '../assets/images/works/12.png';
import projectImage13 from '../assets/images/works/13.png';

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
import bootstrapIcon from '../assets/images/skills/bootstrapIcon.png';

import gitIcon from '../assets/images/skills/gitIcon.png';
import pgIcon from '../assets/images/skills/pgIcon.png';
import jestIcon from '../assets/images/skills/jestIcon.png';
import rspecIcon from '../assets/images/skills/rspecIcon.png';

import teamworkIcon from '../assets/images/skills/teamworkIcon.png';
import mentoringIcon from '../assets/images/skills/mentoringIcon.png';
import remotePairIcon from '../assets/images/skills/remotePairIcon.png';
import criticalThinkingIcon from '../assets/images/skills/criticalThinkingIcon.png';
import problemSolvingIcon from '../assets/images/skills/problemSolvingIcon.png';

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
        tag: 'learning',
      },
      {
        name: 'Ruby',
        icon: rubyIcon,
      },
    ],
  },
  {
    title: 'Frameworks',
    list: [
      {
        name: 'React',
        icon: reactIcon,
      },
      {
        name: 'Redux',
        icon: reduxIcon,
      },
      {
        name: 'Next.js',
        icon: nextIcon,
        tag: 'learning',
      },
      {
        name: 'Ruby on Rails',
        icon: rorIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon,
      },
      {
        name: 'Bootstrap',
        icon: bootstrapIcon,
      },
    ],
  },
  {
    title: 'Tools',
    list: [
      {
        name: 'Git',
        icon: gitIcon,
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
        name: 'PostgreSQL',
        icon: pgIcon,
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
    name: 'To Do List',
    projectImage: projectImage1,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/To-Do-List-Project/dist/',
    sourceLink: 'https://github.com/mohametalmeari/To-Do-List-Project/',
    description: `
    Start your day with a clear plan, stay organized, and get things done. This To-Do list application 
    is designed to help you manage your tasks and stay on top of your daily responsibilities. Users can 
    add, remove, and mark tasks as complete, ensuring that they never miss a beat.
    `,
    note: 'Note: Uses local storage',
  },
  {
    name: 'Awesome Books',
    projectImage: projectImage2,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/mohametalmeari/Awesome-Books-ES6',
    description: `
    Organizing your book collection has never been easier! Designed to help book lovers keep track of 
    their favorite books. Users can easily add, remove, and view books in their collection, ensuring 
    that they never lose track of their reading list.
    `,
  },
  {
    name: 'Catalog of My Things',
    projectImage: projectImage3,
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
    name: 'Math Magicians',
    projectImage: projectImage4,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://almeari-math-magicians.onrender.com',
    sourceLink: 'https://github.com/mohametalmeari/math-magicians',
    description: `
    Dive into the world of numbers with and enrich your browsing experience with a collection of quotes 
    that add a touch of optimism to your day. Users can do basic mathematical operations with a simple 
    calculator and read a random quote to inspire and motivate them.
    `,
  },
  {
    name: 'Nebula Nights',
    projectImage: projectImage5,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/CapstoneOne',
    sourceLink: 'https://github.com/mohametalmeari/CapstoneOne',
    description: `
    Prepare for a cosmic journey with an innovative and unique concert that combines music, art, and 
    technology to create an immersive space experience! It features curated music, stunning visuals, 
    and interactive elements that allow visitors to explore the depths of the cosmos.
    `,
  },
  {
    name: 'Leaderboard',
    projectImage: projectImage6,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/Leaderboard/dist',
    sourceLink: 'https://github.com/mohametalmeari/Leaderboard',
    description: `
    Show off your skills and compete with other players with this interactive leaderboard, designed to 
    track your progress and keep you motivated. Users can submit their scores and see how they stack up 
    against others, fostering a sense of friendly competition.
    `,
  },
  {
    name: 'Yu-Gi-Oh!',
    projectImage: projectImage7,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://mohametalmeari.github.io/yugioh-react-capstone',
    sourceLink: 'https://github.com/mohametalmeari/yugioh-react-capstone',
    description: `
    Embark on an enthralling journey into the world of Yu-Gi-Oh! cards with this captivating website, 
    designed to celebrate the iconic playing cards featured in the beloved anime. Users can explore a
    vast collection of cards, uncover their secrets, and learn about their unique abilities.
    `,
  },
  {
    name: 'Bookstore',
    projectImage: projectImage8,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://mohametalmeari.github.io/bookstore/',
    sourceLink: 'https://github.com/mohametalmeari/bookstore',
    description: `
    Book lover seeking a convenient way to manage a book collection and keep track of reading progress! 
    Manage books with ease and precision. Users can effortlessly save and organize their favorite books 
    and keep track of how far they've read in each book.
    `,
  },
  {
    name: 'i-Budget',
    projectImage: projectImage9,
    info: ['Microverse', 'Full Stack Dev', '2023'],
    tags: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
    liveLink: 'https://i-budget.onrender.com',
    sourceLink: 'https://github.com/mohametalmeari/i-budget',
    description: `
    Manage your finances with ease and precision. This innovative platform is designed to help you
    take control of your budget and make informed financial decisions. Users can effortlessly track
    their spending, set budgets, and monitor their financial health.
    `,
  },
  {
    name: 'Pokémon',
    projectImage: projectImage10,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/JavascriptCapstone/',
    sourceLink: 'https://github.com/mohametalmeari/JavascriptCapstone',
    description: `
    Pokémon fan seeking a vibrant hub to connect with fellow enthusiasts and immerse in a vast collection 
    of Pokés. Users can participate in discussions by commenting on Pokémon cards, liking their favorites, 
    and staying updated on the latest releases.
    `,
  },
  {
    name: 'i-post',
    projectImage: projectImage11,
    info: ['Personal Project', 'Full Stack Dev', '2023'],
    tags: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
    liveLink: 'https://i-post-almeari.onrender.com/',
    sourceLink: 'https://github.com/mohametalmeari/i-post',
    description: `
    Unleash your creativity by sharing your posts and discovering captivating content from others, it's 
    a dynamic platform where your ideas come to life. Users can create posts on their interesting topics, 
    read posts from others, and interact with the community through likes and comments.
    `,
    note: 'Note: Hosted on a free server, it takes a couple of minutes to load for the first time.',
  },
  {
    name: 'i-Share',
    projectImage: projectImage12,
    info: ['Personal Project', 'Full Stack Dev', '2023'],
    tags: ['React', 'Redux', 'CSS', 'Rails API', 'PostgreSQL'],
    liveLink: 'https://i-share-almeari.onrender.com/',
    sourceLink: 'https://github.com/mohametalmeari/i-share-frontend',
    description: `
    Born from a passion for photography and storytelling, it's a vibrant community platform where photo 
    enthusiasts worldwide connect over shared interests. Users can upload their most captivating photos, 
    discover stories from across the globe, and engage in lively discussions.
    `,
    note: 'Note: API is Hosted on a free server, it takes a couple of minutes to fetch for the first time.',
  },
  {
    name: 'FastPackage',
    projectImage: projectImage13,
    info: ['Personal Project', 'Full Stack Dev', '2024'],
    tags: ['React', 'NextJS', 'TailwindCSS', 'Prisma', 'Stripe', 'Clerk Auth'],
    liveLink: 'https://fastpackage.vercel.app/',
    sourceLink: 'https://github.com/mohametalmeari/nextjs-ecommerce-store',
    description: `
    Boost your business with a dynamic e-commerce platform that provides a customer-centric store and a powerful 
    management dashboard. Visitors can explore your site seamlessly, and enjoy a user-friendly experience.
    `,
  },
];
