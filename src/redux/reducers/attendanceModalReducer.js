import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyName: "",
  locationName: "",
  deptName: "",
  employeeName: "",
  shift: "",
  attDate: "12-12-2025",
  inTime: "", 
  attStatus: "",
  outTime:"00:00"
};

const attendanceModalSlice = createSlice({
  name: 'attendanceModal',
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value; 
    },

    setAttDate: (state, action) => {
      state.attDate = action.payload;
    },

    setAttTime: (state, action) => {
      state.inTime = action.payload; 
    }
  },
});

export const { setFieldValue, setAttDate, setAttTime } = attendanceModalSlice.actions;
export default attendanceModalSlice.reducer;
