// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   empFirstName: "",
//   empLastName: "",
//   empEmail: "",
//   dateOfBirth: null,
//   empCode: "F2012",
//   male: true,
//   female: false,
//   permanentAdd: "",
//   presentAdd: "",
//   empProfilePic: "",
//   dateOfJoining: null,
//   empMobileNumber: "",
// };

// const employeeCreateSlice = createSlice({
//   name: "employeeCreate",
//   initialState,
//   reducers: {
//     setFormData: (state, action) => {
//       return { ...state, ...action.payload };
//     },
//     resetFormData: () => initialState,
//   },
// });

// export const { setFormData, resetFormData } = employeeCreateSlice.actions;
// export default employeeCreateSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  dateOfBirth: null,
  male: true,
  female: false,
  permanentAdd: "",
  presentAdd: "",
  empProfilePic: "",
  empCode: "F9289",
  dateOfJoining: null,
  empMobileNumber: "",
};

const employeeCreateSlice = createSlice({
  name: "employeeCreate",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState,
  },
});

export const { setFormData, resetFormData } = employeeCreateSlice.actions;

export default employeeCreateSlice.reducer;
