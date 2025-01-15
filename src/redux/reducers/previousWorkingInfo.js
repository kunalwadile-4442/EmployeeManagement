import { createSlice } from "@reduxjs/toolkit";

// Initial state with rows having unique 'id'
const initialState = {
  previousWorkingInfo: [
    {
      id: Date.now(), // Unique ID for the row
      companyName: "",
      jobTitle: "Software Developer",
      fromDate: "",
      toDate: "",
      jobDescription: "",
    },
  ],
};

const previousWorkingInfoSlice = createSlice({
  name: "previousWorkingInfo",
  initialState,
  reducers: {
    // Add a new row with a unique ID
    addNewRow: (state) => {
      const newRow = {
        id: Date.now(), // Unique ID
        companyName: "",
        jobTitle: "",
        fromDate: "",
        toDate: "",
        jobDescription: "",
      };
      state.previousWorkingInfo.push(newRow);
    },

    // Update a row by its unique 'id'
    updateRow: (state, action) => {
      const { id, updatedRow } = action.payload;
      const index = state.previousWorkingInfo.findIndex((row) => row.id === id);
      if (index !== -1) {
        state.previousWorkingInfo[index] = {
          ...state.previousWorkingInfo[index],
          ...updatedRow,
        };
      }
    },

    // Delete a row by its unique 'id'
    deleteRow: (state, action) => {
      const id = action.payload;
      state.previousWorkingInfo = state.previousWorkingInfo.filter(
        (row) => row.id !== id
      );
    },
  },
});

// Export actions and reducer
export const { addNewRow, updateRow, deleteRow } = previousWorkingInfoSlice.actions;
export default previousWorkingInfoSlice.reducer;