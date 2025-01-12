import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicDetails: {
    first_name: "kunal",
    last_name: "",
    empEmail: "",
    empCode: "",
    bank: "",
    panCard: "",
  },
};

const employeeBasicDetailsSlice = createSlice({
  name: "employeeBasicDetails",
  initialState,
  reducers: {
    setBasicDetails: (state, action) => {
      state.basicDetails = { ...state.basicDetails, ...action.payload };
    },
    resetBasicDetails: (state) => {
      state.basicDetails = initialState.basicDetails;
    },
  },
});

export const { setBasicDetails, resetBasicDetails } = employeeBasicDetailsSlice.actions;
export default employeeBasicDetailsSlice.reducer;
