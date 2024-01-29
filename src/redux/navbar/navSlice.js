import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'home',
};

const navSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveSection: (state, { payload }) => {
      state.activeSection = payload;
    },
  },
});
export const { setActiveSection } = navSlice.actions;
export default navSlice.reducer;
