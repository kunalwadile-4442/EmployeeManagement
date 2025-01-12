


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWorking: {
    departmentName: "",
        locationName: "",
        designationName: "",
        report_to: "Sachin Sir",
        dateOfJoining: "2023/01/15", 
        yearlyExperience: null, 
        monthlyExperience: null, 
        employeeType: "", 
        jobName: "", 
        employeeStatus: "", 
        basicSalary: "520",
  },
};

const employeeCurrentWorkingSlice = createSlice({
  name: "employeeCurrentWorking",
  initialState,
  reducers: {
    setCurrentWorking: (state, action) => {
      state.currentWorking = { ...state.currentWorking, ...action.payload };
    },
    resetCurrentWorking: (state) => {
      state.currentWorking = initialState.currentWorking;
    },
  },
});

export const { setCurrentWorking, resetCurrentWorking } = employeeCurrentWorkingSlice.actions;
export default employeeCurrentWorkingSlice.reducer;
