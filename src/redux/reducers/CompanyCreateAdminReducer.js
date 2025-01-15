import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companyName: "",
  contactEmail: "",
  contactPhone: "",
  teamSize: "",
  website: "kunal",
  password: "",
};

const companyAdminSlice = createSlice({
  name: "companyAdmin",
  initialState,
  reducers: {
    setCompanyAdminFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCompanyAdminFormData: () => initialState,
  },
});

export const { setCompanyAdminFormData, resetCompanyAdminFormData } = companyAdminSlice.actions;

export default companyAdminSlice.reducer;
