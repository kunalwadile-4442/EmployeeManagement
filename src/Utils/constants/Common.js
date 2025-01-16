import { App_url } from "./Static";

// Updated sidebarList
export const sidebarList = [
    { name: "Dashboard", route: "/dashboard", icon: App_url.image.dashboard },
    { name: "Setup Organization", route: "/organization/company", icon: App_url.image.setup },
    { name: "Time Tracking", route: "/time-tracking/attendance", icon: App_url.image.time_track }, // Update route to `/attendance`
    { name: "Leave Management", route: "/leave/pending", icon: App_url.image.leave_icon },
    { name: "Project", route: "/project/dashboard", icon: App_url.image.report },
    { name: "Employee Management", route: "/employee/info", icon: App_url.image.employeeManagement }
];

export const  basicDetails = {
  first_name: "Kunal",
  last_name: "Wadile",
  empEmail: 'kunal@appristine.in',
  password: 'Abc123!',
  bank: 'jnsdbj',
  panCard: '89288298',
  dateOfBirth: "2015/2/2",
  // male: true,
  // female: false,
  gender:"",
  empProfilePic: '',
  permanentAdd: 'pune MH',
  presentAdd: 'Phase 1',
  empMobileNumber: '8292988982',
  postCode: '',
  city: 'pune',
  states: 'MH',
  departmentName: "",
  locationName: "",
  designationName: "",
  report_to: "Sachin Sir/ Rohit Sri",
  dateOfJoining: "2025/01/15", 
  yearlyExperience: null, 
  monthlyExperience: null, 
  employeeType: "", 
  jobName: "", 
  employeeStatus: "", 
  basicSalary: "520",
}