import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "",
  departmentName: "",
  designation: "Hr",
};

const orgDesignationSlice = createSlice({
  name: "orgDesignation",
  initialState,
  reducers: {
    setDesignationFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetDesignationFormData: () => initialState,
  },
});

export const { setDesignationFormData, resetDesignationFormData } = orgDesignationSlice.actions;

export default orgDesignationSlice.reducer;
