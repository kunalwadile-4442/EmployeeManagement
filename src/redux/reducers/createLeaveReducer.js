import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeName: "",
  leaveType: "",
  dateFrom: null,
  dateTo: null,
  email: "",
  reason:"",
};

const createLeaveSlice = createSlice({
  name: "createLeave",
  initialState,
  reducers: {
    setLeaveFormData(state, action) {
      return {
        ...state,
        ...action.payload, // Merge the incoming payload with the current state
      };
    },
    resetLeaveFormData() {
      return initialState; // Reset to initial state
    },
  },
});

export const { setLeaveFormData, resetLeaveFormData } = createLeaveSlice.actions;
export default createLeaveSlice.reducer;
