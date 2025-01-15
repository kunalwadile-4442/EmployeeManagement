import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  company: '',
  branch: '',
  holidayType: '',
  dayType: '',
  date: '',
  description: ''
};

const holidayFormSlice = createSlice({
  name: 'holidayForm',
  initialState,
  reducers: {
    setHolidayFormData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetHolidayFormData: () => initialState,
  },
});

export const { setHolidayFormData, resetHolidayFormData } = holidayFormSlice.actions;
export default holidayFormSlice.reducer;
