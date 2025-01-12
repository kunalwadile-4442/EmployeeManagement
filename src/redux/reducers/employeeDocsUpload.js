import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  docsType: '',
  docsUpload: '',
  description: '',  
};

const employeeDocsUploadSlice = createSlice({
  name: 'employeeDocsUpload',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload }; 
    },
    resetFormData: () => initialState,
  },
});

export const { setFormData, resetFormData } = employeeDocsUploadSlice.actions;

export default employeeDocsUploadSlice.reducer;
