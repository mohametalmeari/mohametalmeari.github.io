import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../data';

const initialState = {
  worksList: projects,
  details: {
    name: 'Project',
    projectImage: '',
    info: [],
    tags: [],
    liveLink: '...',
    sourceLink: '...',
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
