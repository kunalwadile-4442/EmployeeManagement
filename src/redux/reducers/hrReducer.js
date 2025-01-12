import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attendanceData: [
    { id: 1, name: "John Doe", date: "2025-01-07", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2025-01-07", status: "Absent" },
    { id: 3, name: "Tom Johnson", date: "2025-01-07", status: "Late" },
    { id: 4, name: "Alice Brown", date: "2025-01-07", status: "Present" },
    { id: 5, name: "Bob White", date: "2025-01-07", status: "Absent" },
    { id: 6, name: "John Doe", date: "2025-01-07", status: "Present" },
    { id: 7, name: "Jane Smith", date: "2025-01-07", status: "Absent" },
    { id: 8, name: "Tom Johnson", date: "2025-01-07", status: "Late" },
    { id: 9, name: "Alice Brown", date: "2025-01-07", status: "Present" },
    { id: 10, name: "Sam Karan", date: "2025-01-07", status: "Absent" },
    { id: 11, name: "ram ", date: "2025-01-07", status: "Absent" },
    { id: 12, name: "Sham", date: "2025-01-07", status: "Absent" },
    { id: 13, name: "ghanasham", date: "2025-01-07", status: "Absent" },
  ],
  filteredData: [],
  filters: {
    emp_first_name: "",
    type_name: "",
    leave_status:"",
  },
  isModalOpen: false,
  modalData: {
    title: "",
    tableHeaders: [],
    tableData: [],
  },
};

console.log("initialState::hrApp",initialState);
const hrAppSlice = createSlice({
  name: "hrApp",
  initialState,
  reducers: {
   
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalData = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalData = { title: "", tableHeaders: [], tableData: [] };
    },
  },
});

export const {
  startLogout,
  endLogout,
  setFilters,
  setFilteredData,
  openModal,
  closeModal,
} = hrAppSlice.actions;

export default hrAppSlice.reducer;
