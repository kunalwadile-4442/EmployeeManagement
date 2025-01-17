import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   docsType: '',
//   docsUpload: null,
//   description: '',  
// };
// console.log('initialState: docs upload',initialState)

// const employeeDocsUploadSlice = createSlice({
//   name: 'employeeDocsUpload',
//   initialState,
//   reducers: {
//     setFormData: (state, action) => {
//       return { ...state, ...action.payload }; 
//     },
//     resetFormData: () => initialState,
//   },
// });

// export const { setFormData, resetFormData } = employeeDocsUploadSlice.actions;

// export default employeeDocsUploadSlice.reducer;

const initialState = {
  docsType: '',
  docsUpload: null, // Ensure this holds a File object
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