import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialEduState = {
  eduDetails: [{
    id: uuidv4(),
    schoolName: "", 
    degree: "", 
    fieldOfStudy: "", 
    dateOfCompletion: "", 
    additionalNotes: "", 
    interests: "" 
  }],
};

const eduDetailsSlice = createSlice({
  name: "eduDetails",
  initialState: initialEduState,
  reducers: {
    addNewEduRow: (state) => {
      const newRow = { 
        id: uuidv4(),
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
      const { id, updatedRow } = action.payload;
      const index = state.eduDetails.findIndex((row) => row.id === id);
      if (index !== -1) {
        state.eduDetails[index] = { ...state.eduDetails[index], ...updatedRow };
      }
    },
    deleteEduRow: (state, action) => {
      const id = action.payload;
      state.eduDetails = state.eduDetails.filter((row) => row.id !== id);
    },
    resetEduDetails: (state) => {
      state.eduDetails = [];
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
