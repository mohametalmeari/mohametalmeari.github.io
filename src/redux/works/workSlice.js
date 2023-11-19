import { createSlice } from '@reduxjs/toolkit';
import mobileImage0 from '../../assets/images/works/mobile/0.png';
import mobileImage1 from '../../assets/images/works/mobile/1.png';
import mobileImage2 from '../../assets/images/works/mobile/2.png';
import mobileImage3 from '../../assets/images/works/mobile/3.png';
import mobileImage4 from '../../assets/images/works/mobile/4.png';
import mobileImage5 from '../../assets/images/works/mobile/5.png';

const initialState = {
  worksList: [
    {
      id: 1,
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
      id: 2,
      name: 'Awesome Books',
      mobileImg: mobileImage2,
      desktopImg: mobileImage2,
      info: ['Microverse', 'Front End Dev', '2023'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://mohametalmeari.github.io/Awesome-Books-ES6/',
      sourceLink: 'https://github.com/mohametalmeari/Awesome-Books-ES6',
      shortDescription: 'A Books Library that use local storage to save your favorite books.',
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
      id: 3,
      name: 'NEBULA NIGHTS',
      mobileImg: mobileImage3,
      desktopImg: mobileImage3,
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
      id: 4,
      name: 'Leaderboard',
      mobileImg: mobileImage4,
      desktopImg: mobileImage4,
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
      id: 5,
      name: 'i-budget',
      mobileImg: mobileImage5,
      desktopImg: mobileImage5,
      info: ['Microverse', 'Front End Dev', '2023'],
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
  ],
  details: {
    id: 0,
    name: 'Project',
    mobileImg: mobileImage0,
    desktopImg: mobileImage0,
    info: [],
    tags: [],
    liveLink: '...',
    sourceLink: '...',
    shortDescription: `
    ...
      `,
    description: `
    ...
      `,
  },
  detailsVisibility: 'none',
};

const workSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    closePopupReducer: (state) => {
      state.detailsVisibility = 'none';
    },
    openPopupReducer: (state, { payload }) => {
      state.detailsVisibility = 'flex';
      state.details = state.worksList[payload - 1];
    },
  },
});
export const { closePopupReducer, openPopupReducer } = workSlice.actions;
export default workSlice.reducer;
