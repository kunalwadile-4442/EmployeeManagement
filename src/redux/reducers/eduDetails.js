import { createSlice } from "@reduxjs/toolkit";

const initialEduState = {
  eduDetails: [
    { schoolName: "", degree: "", fieldOfStudy: "", dateOfCompletion: "", additionalNotes: "", interests: "" },
  ],
};

const eduDetailsSlice = createSlice({
  name: "eduDetails",
  initialState: initialEduState,
  reducers: {
    addNewEduRow: (state) => {
      const newRow = { 
        schoolName: "", 
        degree: "", 
        fieldOfStudy: "", 
        dateOfCompletion: "", 
        additionalNotes: "", 
        interests: "" 
      };
      state.eduDetails.push(newRow);
    },
    updateEduRow: (state, action) => {
      const { index, updatedRow } = action.payload;
      state.eduDetails[index] = { ...state.eduDetails[index], ...updatedRow };
    },
    deleteEduRow: (state, action) => {
      const { index } = action.payload;
      state.eduDetails = state.eduDetails.filter((_, i) => i !== index);
    },
    resetEduDetails: (state) => {
      state.eduDetails = initialEduState.eduDetails;
    },
  },
});

export const { 
  addNewEduRow, 
  updateEduRow, 
  deleteEduRow, 
  resetEduDetails 
} = eduDetailsSlice.actions;

export default eduDetailsSlice.reducer;
