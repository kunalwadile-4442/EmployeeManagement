import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  attendanceData: [
    { id: uuidv4(), name: "John Doe", date: "2025-01-07", status: "Present" },
    { id: uuidv4(), name: "Jane Smith", date: "2025-01-07", status: "Absent" },
    { id: uuidv4(), name: "Alice Brown", date: "2025-01-07", status: "Present" },
    { id: uuidv4(), name: "Tom Johnson", date: "2025-01-07", status: "Late" },
    { id: uuidv4(), name: "Bob White", date: "2025-01-07", status: "Absent" },
    { id: uuidv4(), name: "John Doe", date: "2025-01-07", status: "Present" },
    { id: uuidv4(), name: "Jane Smith", date: "2025-01-07", status: "Absent" },
    { id: uuidv4(), name: "Tom Johnson", date: "2025-01-07", status: "Late" },
    { id: uuidv4(), name: "Alice Brown", date: "2025-01-07", status: "Present" },
    { id:  uuidv4(), name: "Sam Karan", date: "2025-01-07", status: "Absent" },
    { id:  uuidv4(), name: "ram ", date: "2025-01-07", status: "Absent" },
    { id:  uuidv4(), name: "Sham", date: "2025-01-07", status: "Absent" },
    { id:  uuidv4(), name: "ghanasham", date: "2025-01-07", status: "Absent" },
  ],
  timeTrackData: [
    {
      id: uuidv4(),
      employee: "John Doe",
      firstCheckInTime: "10:15 AM",
      lastCheckOutTime: "06:30 PM",
      attendanceDate: "2025-01-15",
      duration: "9h 15m",
      status: "Present",
    },
    {
      id: uuidv4(),
      lateMark: "No",
      employee: "Jane Smith",
      firstCheckInTime: "10:05 AM",
      lastCheckOutTime: "05:45 PM",
      attendanceDate: "2025-01-15",
      duration: "9h 0m",
      status: "Present",
    },
    {
      id: uuidv4(),
      employee: "Alice Johnson",
      firstCheckInTime: "",
      lastCheckOutTime: "",
      attendanceDate: "2025-01-15",
      duration: "",
      status: "absent",
    },
    {
      id: uuidv4(),
      employee: "Bob Brown",
      firstCheckInTime: "10:00 AM",
      lastCheckOutTime: "07:00 PM",
      attendanceDate: "2025-01-15",
      duration: "8h 55m",
      status: "Present",
    },
    {
      id: uuidv4(),
      employee: "Charlie Wilson",
      firstCheckInTime: "",
      lastCheckOutTime: "",
      attendanceDate: "2025-01-15",
      duration: "",
      status: "absent",
    },
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
