// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   basicDetails: {
//     first_name: "kunal",
//     last_name: "",
//     empEmail: "",
//     empCode: "F28938",
//     bank: "",
//     panCard: "",
//   },
// };

// const employeeBasicDetailsSlice = createSlice({
//   name: "employeeBasicDetails",
//   initialState,
//   reducers: {
//     setBasicDetails: (state, action) => {
//       state.basicDetails = { ...state.basicDetails, ...action.payload };
//     },
//     resetBasicDetails: (state) => {
//       state.basicDetails = initialState.basicDetails;
//     },
//   },
// });

// export const { setBasicDetails, resetBasicDetails } = employeeBasicDetailsSlice.actions;
// export default employeeBasicDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicDetails: {
    first_name: "Kunal",
    last_name: "Wadile",
    empEmail: 'kunal@appristine.in',
    password: 'Kunal@123',
    bank: 'SBI',
    panCard: '89288298',
    dateOfBirth: '2023/01/25',
    gender:"male",
    empProfilePic: '',
    permanentAdd: 'pune MH',
    presentAdd: 'Phase 1',
    empMobileNumber: '8292988982',
    postCode: '',
    city: 'pune',
    states: 'MH',
    departmentName: "",
    locationName: "",
    designationName: "",
    report_to: "",
    dateOfJoining: "2023/01/15", 
    yearlyExperience: null, 
    monthlyExperience: null, 
    employeeType: "", 
    jobName: "", 
    employeeStatus: "", 
    basicSalary: "520",
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
    setGender: (state, action) => {
      state.basicDetails.gender = action.payload;
    },    
  },
});

export const { setBasicDetails, resetBasicDetails,setGender } = employeeBasicDetailsSlice.actions;
export default employeeBasicDetailsSlice.reducer;
