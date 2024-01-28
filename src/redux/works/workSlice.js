import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../data';
import exampleImage from '../../assets/images/works/mobile/0.png';

const initialState = {
  worksList: projects,
  details: {
    id: 0,
    name: 'Project',
    mobileImg: exampleImage,
    desktopImg: exampleImage,
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
