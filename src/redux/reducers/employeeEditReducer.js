import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    first_name: "",
    last_name: "",
    empEmail: "",
    empCode: "F2012",
    bank: "",
    panCard: "",
    departmentName: "",
    locationName: "",
    report: "",
    dateOfJoining: "",
    yearlyExperience: null,
    monthlyExperience: null,
    employeeType: "",
    jobName: "",
    employeeStatus: "Active",
    basicSalary: "",
    dateOfBirth: "", 
    male: true, 
    female: false, 
    empProfilePic: "", 
    permanentAdd: "", 
    presentAdd: "", 
    empMobileNumber: "",
    postCode: "", 
    city: "Dhule", 
    states: "MH", 
    docsType: "", 
    docsUpload: "", 
    description: "", 
  },
  previousWorkingInfo: [
    { companyName: "Appristine", jobTitle: "Software developer", fromDate: "", toDate: "", jobDescription: "" },
  ],
  eduDetails: [
    { schoolName: "", degree: "", fieldOfStudy: "", dateOfCompletion: "", additionalNotes: "", interests: "" }
  ],
};


console.log("initialState::employeeEdit", initialState);

const employeeEditSlice = createSlice({
  name: "employeeEdit",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },

    addNewRow: (state) => {
      const newRow = { companyName: "", jobTitle: "", fromDate: "", toDate: "", jobDescription: "" };
      state.previousWorkingInfo.push(newRow);
    },
    updateRow: (state, action) => {
      const { index, updatedRow, type } = action.payload;
      if (type === "previousWorking") {
        state.previousWorkingInfo[index] = { ...state.previousWorkingInfo[index], ...updatedRow };
      } else if (type === "eduDetails") {
        state.eduDetails[index] = { ...state.eduDetails[index], ...updatedRow };
      }
    },

    deleteRow: (state, action) => {
      const { index, type } = action.payload;
      if (type === "previousWorking") {
        state.previousWorkingInfo = state.previousWorkingInfo.filter((_, i) => i !== index);
      } else if (type === "eduDetails") {
        state.eduDetails = state.eduDetails.filter((_, i) => i !== index);
      }
    },

    addNewEduRow: (state) => {
      const newRow = { schoolName: "", degree: "", fieldOfStudy: "", dateOfCompletion: "", additionalNotes: "", interests: "" };
      state.eduDetails.push(newRow);
    },
  },
});

export const { 
  setFormData, 
  resetFormData, 
  addNewRow, 
  updateRow, 
  deleteRow, 
  addNewEduRow 
} = employeeEditSlice.actions;
export default employeeEditSlice.reducer;
