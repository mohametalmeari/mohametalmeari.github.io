import { configureStore } from '@reduxjs/toolkit';
import workReducer from './works/workSlice';
import navReducer from './navbar/navSlice';

const store = configureStore({
  reducer: {
    works: workReducer,
    navbar: navReducer,
  },
});

export default store;
