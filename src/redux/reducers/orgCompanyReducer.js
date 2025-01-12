import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isEditing: false,
  companyDetails: {
    name: "Appristine Technology",
    tagline: "Software Development",
    contactPerson: "Kunal",
    phone: "12312312311",
    email: "kunal@appristine.com",
    address: "Pune",
    bannerImg: "/path/to/banner.jpg", 
    profileImg: "/path/to/profile.jpg", 
  },
};

const orgCompanySlice = createSlice({
  name: "orgCompany",
  initialState,
  reducers: {
    toggleEdit(state) {
      state.isEditing = !state.isEditing;
    },
    updateCompanyDetails(state, action) {
      state.companyDetails = { ...state.companyDetails, ...action.payload };
    },
    updateImage(state, action) {
      const { key, value } = action.payload;
      state.companyDetails[key] = value;
    },
  },
});

export const { toggleEdit, updateCompanyDetails, updateImage } =
  orgCompanySlice.actions;

export default orgCompanySlice.reducer;
