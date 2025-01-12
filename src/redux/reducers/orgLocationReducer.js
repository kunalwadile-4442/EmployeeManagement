import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locationFormData: {
    company: '',
    locationName: '',
    add_one: '',
    add_two: '',
    country: '',
    state: '',
    city: '',
    zip: '',
  },
};

const orgLocationSlice = createSlice({
  name: 'orgLocation',
  initialState,
  reducers: {
    setLocationFormData: (state, action) => {
      state.locationFormData = { ...state.locationFormData, ...action.payload };
    },
    resetLocationFormData: (state) => {
      state.locationFormData = { ...initialState.locationFormData };
    },
  },
});

export const { setLocationFormData, resetLocationFormData } = orgLocationSlice.actions;

export default orgLocationSlice.reducer;
