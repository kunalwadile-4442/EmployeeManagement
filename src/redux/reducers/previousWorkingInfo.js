import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  previousWorkingInfo: [
    { companyName: "", jobTitle: "Software developer", fromDate: "", toDate: "", jobDescription: "" },
  ],
};

const previousWorkingInfoSlice = createSlice({
  name: "previousWorkingInfo",
  initialState,
  reducers: {
    addNewRow: (state) => {
      const newRow = { companyName: "", jobTitle: "", fromDate: "", toDate: "", jobDescription: "" };
      state.previousWorkingInfo.push(newRow);
    },
    updateRow: (state, action) => {
      const { index, updatedRow } = action.payload;
      state.previousWorkingInfo[index] = { ...state.previousWorkingInfo[index], ...updatedRow };
    },
    deleteRow: (state, action) => {
      const { index } = action.payload;
      state.previousWorkingInfo = state.previousWorkingInfo.filter((_, i) => i !== index);
    },
  },
});

export const { addNewRow, updateRow, deleteRow } = previousWorkingInfoSlice.actions;
export default previousWorkingInfoSlice.reducer;
