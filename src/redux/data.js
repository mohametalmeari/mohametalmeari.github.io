import mobileImage1 from '../assets/images/works/mobile/1.png';
import mobileImage2 from '../assets/images/works/mobile/2.png';
import mobileImage3 from '../assets/images/works/mobile/3.png';
import mobileImage4 from '../assets/images/works/mobile/4.png';
import mobileImage5 from '../assets/images/works/mobile/5.png';
import mobileImage6 from '../assets/images/works/mobile/6.png';
import mobileImage7 from '../assets/images/works/mobile/7.png';
import mobileImage8 from '../assets/images/works/mobile/8.png';
import mobileImage9 from '../assets/images/works/mobile/9.png';
import mobileImage10 from '../assets/images/works/mobile/10.png';
import mobileImage11 from '../assets/images/works/mobile/11.png';
import mobileImage12 from '../assets/images/works/mobile/12.png';

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
    ],
  },
];

export const projects = [
  {
    name: 'To Do List',
    mobileImg: mobileImage1,
    desktopImg: mobileImage1,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/To-Do-List-Project/dist/',
    sourceLink: 'https://github.com/mohametalmeari/To-Do-List-Project/',
    shortDescription: `
    To Do List is a tool that helps to organize your day. It simply lists the things that you 
    need to do and allows you to mark them as complete.
    `,
    description: `
    Having a To-Do list is a great way to stay organized and manage your tasks efficiently. 
    With so many things to do and so little time, it's easy to feel overwhelmed and unsure of 
    where to start. That's where a To-Do list comes in handy! It's a simple tool that helps 
    you keep track of all the tasks you need to complete in a given day, week, or month. A To-Do 
    list can be as basic or as detailed as you like. At its core, it's a list of tasks or activities 
    that you need to complete. 
    By having all your tasks in one place, you can quickly and easily see what needs to be done, 
    without having to keep everything in your head. One of the benefits of using a To-Do list 
    is that it can help you to stay focused.
    `,
  },
  {
    name: 'Awesome Books',
    mobileImg: mobileImage2,
    desktopImg: mobileImage2,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/Awesome-Books-ES6/',
    sourceLink: 'https://github.com/mohametalmeari/Awesome-Books-ES6',
    shortDescription: `
    A Books Library with local storage simplifies tracking favorite books. Access your collection 
    across devices without the need for an internet connection, ensuring security and control 
    over your private data.
    `,
    description: `
    A Books Library that uses local storage is a convenient and simple way to keep track of your 
    favorite books. With so many books available in the world today, it can be difficult to 
    remember which ones you've read and which ones you want to read. This is where a Books Library 
    comes in handy. By using local storage to save your favorite books, you can easily access your 
    collection from any device. Whether you're using your laptop, phone, or tablet, you can quickly 
    view your collection and find the book you're looking for. Plus, because the data is stored 
    locally, you don't need an internet connection to access your library. Another benefit of using 
    local storage for your Books Library is that it's secure and private. You don't need to worry 
    about your data being shared or compromised, as it's all stored locally on your device. This 
    also means that you have full control over your collection, and you can easily add or remove 
    books as you please.
    `,
  },
  {
    name: 'Catalog of My Things',
    mobileImg: mobileImage3,
    desktopImg: mobileImage3,
    info: ['Microverse', 'Back End Dev', '2023'],
    tags: ['Ruby', 'PostgreSQL'],
    sourceLink: 'https://github.com/mohametalmeari/my-things',
    shortDescription: `
    Catalog of My Things, a console app, records owned items like books, music albums, and games using a 
    UML class diagram. Data is stored in JSON files and a corresponding database with tables mirroring the 
    program's class structure is prepared.
    `,
    description: `
    The "Catalog of My Things" is a console app designed to meticulously document owned items, 
    encompassing books, music albums, and games. The application employs a Unified Modeling 
    Language (UML) class diagram to represent its underlying structure. Data is efficiently 
    stored using JSON files, and a parallel database is created with tables mirroring the program's 
    class organization. This comprehensive approach ensures seamless organization and retrieval 
    of information, making the catalog a robust tool for managing and tracking personal possessions.
    `,
  },
  {
    name: 'Math Magicians',
    mobileImg: mobileImage4,
    desktopImg: mobileImage4,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://almeari-math-magicians.onrender.com',
    sourceLink: 'https://github.com/mohametalmeari/math-magicians',
    shortDescription: `
    This website is a simple calculator that can perform basic math operations, including addition, 
    subtraction, multiplication, division, and modulo. Additionally, the website features a page 
    dedicated to cool random quotes that aim to keep you motivated and optimistic. Feel free to check it out!
    `,
    description: `
    Discover a user-friendly haven for basic mathematical operations with this website's simple calculator. 
    It seamlessly executes fundamental math tasks such as addition, subtraction, multiplication, division, 
    and modulo, catering to your numerical needs effortlessly. Beyond being a handy calculator, the site 
    offers an extra dose of inspiration. Explore a dedicated page filled with cool and random quotes, designed 
    to uplift and motivate. Whether you're tackling mathematical challenges or simply seeking a positive boost, 
    this website has something for everyone. Dive into the world of numbers with the convenience of a versatile 
    calculator, and enrich your browsing experience with a collection of quotes that add a touch of optimism 
    to your day. 
    `,
  },
  {
    name: 'NEBULA NIGHTS',
    mobileImg: mobileImage5,
    desktopImg: mobileImage5,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/CapstoneOne',
    sourceLink: 'https://github.com/mohametalmeari/CapstoneOne',
    shortDescription: `
    An Interstellar Music Experience is a one-of-a-kind concert that combines the best of music, art, 
    and technology to create an immersive and unforgettable intergalactic journey through the cosmos.
    `,
    description: `
    The Interstellar Music Experience website is an innovative and unique concert that combines music, 
    art, and technology to create an immersive journey through space. It features curated music, stunning 
    visuals, and interactive elements that allow visitors to explore the depths of the cosmos. It's a 
    celebration of the intersection of art, music, and technology and promises to be a truly unforgettable 
    experience for space enthusiasts and music lovers alike.
    `,
  },
  {
    name: 'Leaderboard',
    mobileImg: mobileImage6,
    desktopImg: mobileImage6,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mohametalmeari.github.io/Leaderboard/dist',
    sourceLink: 'https://github.com/mohametalmeari/Leaderboard',
    shortDescription: `
    Leaderboard displays scores submitted by different players. It also allows you to submit your score.
    `,
    description: `
    The leaderboard is a great way to track your progress and see how you stack up against other players. 
    It displays scores submitted by different players, and it also allows you to submit your score. To 
    submit your score, simply enter your name and the score you achieved. Your score will then be added 
    to the leaderboard for all to see. The leaderboard is a great way to stay motivated and competitive. 
    It's also a great way to see how you're improving over time. So if you're looking for a way to track 
    your progress and stay motivated, be sure to check out the leaderboard.
    `,
  },
  {
    name: 'YU-GI-OH!',
    mobileImg: mobileImage7,
    desktopImg: mobileImage7,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://mo-dev.site/yugioh-react-capstone',
    sourceLink: 'https://github.com/mohametalmeari/yugioh-react-capstone',
    shortDescription: `
    YU-GI-OH is a cool website that tells you all about the awesome playing cards from the Yu-Gi-Oh! anime. 
    It's a place where you can learn and discover more about these cards. If you're a big fan of Yu-Gi-Oh!, 
    this website is perfect for you to explore and learn about your favorite cards!
    `,
    description: `
    Yu-Gi-Oh! enthusiasts rejoice, as there's a captivating website dedicated to unraveling the mystique of 
    the phenomenal playing cards featured in the iconic Yu-Gi-Oh! anime. This cool platform serves as a haven 
    for fans, offering a comprehensive repository of information about these fantastic cards. It's not just a 
    website; it's an immersive space where enthusiasts can delve into the intricacies of their favorite 
    Yu-Gi-Oh! cards. Whether you're a seasoned duelist or a curious newcomer, this online sanctuary is 
    tailor-made for you. Immerse yourself in the world of Yu-Gi-Oh! as you explore, learn, and uncover 
    the secrets behind these captivating cards. Unleash the power of your passion for Yu-Gi-Oh! as you 
    navigate through a treasure trove of knowledge on this website, designed to cater to the curiosity 
    and excitement of every fan. Dive into the realm of Yu-Gi-Oh! cards and let the journey begin!
    `,
  },
  {
    name: 'Bookstore',
    mobileImg: mobileImage8,
    desktopImg: mobileImage8,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['React', 'Redux', 'CSS'],
    liveLink: 'https://mohametalmeari.github.io/bookstore/',
    sourceLink: 'https://github.com/mohametalmeari/bookstore',
    shortDescription: `
    Bookstore is a user-friendly website designed for saving books, organizing your literary collection, 
    and monitoring the progress of your favorite books as you read them.
    `,
    description: `
    Bookstore is a helpful website for book lovers. It lets you save and organize your favorite books. 
    You can also keep track of how far you've read in each book. The site is easy to use, making it 
    simple to manage your book collection. Whether you read a lot or just occasionally, Bookstore 
    gives you a convenient way to enjoy and keep tabs on your books. Join today for a user-friendly 
    experience that makes your reading journey more enjoyable and organized.
    `,
  },
  {
    name: 'i-budget',
    mobileImg: mobileImage9,
    desktopImg: mobileImage9,
    info: ['Microverse', 'Full Stack Dev', '2023'],
    tags: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
    liveLink: 'https://i-budget.onrender.com',
    sourceLink: 'https://github.com/mohametalmeari/i-budget',
    shortDescription: `
    i-budget is a mobile web application designed for efficient budget management
    `,
    description: `
    i-budget is a user-friendly mobile web application dedicated to enhancing your budget management 
    experience. This innovative tool empowers users to take control of their finances effortlessly. 
    Getting started with i-budget is a breeze. Simply register and log in to access a wealth of 
    financial management features. Add transactions to customizable categories tailored to your 
    specific needs, providing you with a detailed overview of your spending habits. What sets i-budget 
    apart is its unwavering commitment to security. We've implemented robust authentication measures 
    to safeguard your financial data. Rest assured that your information is stored securely in a 
    PostgreSQL database, ensuring the utmost privacy.
    `,
  },
  {
    name: 'Pokémon',
    mobileImg: mobileImage10,
    desktopImg: mobileImage10,
    info: ['Microverse', 'Front End Dev', '2023'],
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mo-dev.site/JavascriptCapstone/',
    sourceLink: 'https://github.com/mohametalmeari/JavascriptCapstone',
    shortDescription: `
    Pokémon website is a hub for enthusiasts to explore a vast collection of Pokés. 
    With engaging discussions and updates on new releases, it's a go-to platform 
    for staying connected to the Pokémon community.
    `,
    description: `
    The Pokémon website serves as a vibrant hub, inviting enthusiasts to immerse 
    themselves in a vast collection of Pokés. Boasting engaging discussions and 
    providing timely updates on the latest releases, it stands as the go-to platform 
    for staying intricately connected to the dynamic and ever-evolving Pokémon 
    community. This digital haven not only showcases an extensive array of Pokémon, 
    but also fosters a sense of camaraderie among fans who share a common passion for 
    these iconic creatures. Whether you're a seasoned Pokémon trainer or a newcomer 
    eager to delve into the Pokémon universe, this website offers a comprehensive 
    and interactive experience. From insightful discussions about gameplay strategies 
    to the excitement surrounding new additions to the Pokémon world, the website acts 
    as an indispensable resource for enthusiasts seeking to stay informed and engaged 
    within the vibrant realm of Pokémon.
    `,
  },
  {
    name: 'i-post',
    mobileImg: mobileImage11,
    desktopImg: mobileImage11,
    info: ['Personal Project', 'Full Stack Dev', '2023'],
    tags: ['Ruby on Rails', 'CSS', 'PostgreSQL'],
    liveLink: 'https://i-post-almeari.onrender.com/',
    sourceLink: 'https://github.com/mohametalmeari/i-post',
    shortDescription: `
    i-Post is a Dynamic platform where you can share your thoughts, 
    discover diverse content, and participate in engaging discussions. 
    Your posts make you part of a lively community where you can connect with people.
    `,
    description: `
    i-Post stands as a dynamic and vibrant platform, offering an interactive space 
    for individuals to not only share their thoughts but also delve into a world of 
    diverse content. This dynamic hub goes beyond being just a social space—it's a 
    thriving community where every post contributes to a lively tapestry of ideas. 
    By participating in i-Post, you become an integral part of a collective voice, 
    connecting with like-minded individuals and fostering engaging discussions. The 
    platform's essence lies in the power of shared experiences, providing an enriching 
    environment where your posts not only express your thoughts but also spark 
    connections and conversations that resonate within the i-Post community. Join 
    us in shaping this dynamic space!
    `,
  },
  {
    name: 'i-share',
    mobileImg: mobileImage12,
    desktopImg: mobileImage12,
    info: ['Personal Project', 'Full Stack Dev', '2023'],
    tags: ['React', 'Redux', 'CSS', 'Rails API', 'PostgreSQL'],
    liveLink: 'https://i-share-almeari.onrender.com/',
    sourceLink: 'https://github.com/mohametalmeari/i-share-frontend',
    shortDescription: `
    i-share is a cool place for sharing photos online. You can post your pics, 
    give stars to ones you like, and talk to people who love photos too. It's a 
    fun way to connect and see awesome pictures from around the world. Join in, 
    share your moments, and enjoy the visual stories!
    `,
    description: `
    i-Share is an amazing platform designed for sharing captivating photos online. 
    Here, you have the opportunity to effortlessly share your favorite pictures, 
    express your admiration by giving stars, and engage in conversations with fellow 
    photography enthusiasts. It's a delightful and interactive space where you 
    can connect with people who share a passion for photos. Immerse yourself in 
    the experience, share your cherished moments, and revel in the visual narratives 
    that unfold from every corner of the globe. Join us in creating a vibrant 
    community where every image tells a unique story!
    `,
  },
];
