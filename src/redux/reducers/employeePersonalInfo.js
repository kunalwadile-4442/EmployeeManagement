// redux/reducers/employeePersonalInfoReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dateOfBirth: '',
  male: true,
  female: false,
  empProfilePic: '',
  permanentAdd: '',
  presentAdd: '',
  empMobileNumber: '',
  postCode: '',
  city: '',
  states: '',
};

const employeePersonalInfoSlice = createSlice({
  name: 'employeePersonalInfo',
  initialState,
  reducers: {
    setPersonalInfoData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetPersonalInfoData: () => initialState,
  },
});

export const { setPersonalInfoData, resetPersonalInfoData } = employeePersonalInfoSlice.actions;

export default employeePersonalInfoSlice.reducer;
