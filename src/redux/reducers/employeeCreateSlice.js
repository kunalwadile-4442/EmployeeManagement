import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "kunal",
  last_name: "",
  email: "",
  dateOfBirth: null,
  permanentAdd: "",
  presentAdd: "",
  gender:"male",
  empProfilePic: "",
  // empCode: "F9289",
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
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const { setFormData, resetFormData ,setGender} = employeeCreateSlice.actions;

export default employeeCreateSlice.reducer;
