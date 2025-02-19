

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "./components/LoadingSpinner";
import PrivateRoute from "./components/PrivateRoute";
import "react-quill/dist/quill.snow.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import "./App.css";


const Dashboard = React.lazy(() => import("./pages/Dashboard/subRoutes/Dashboard"));
const TimeTrackingLayout = React.lazy(() =>import("./pages/TimeTracking/TimeTrackingLayout"));
const Attendance = React.lazy(() => import("./pages/TimeTracking/subRoutes/Attendance"));
const Checkin = React.lazy(() => import("./pages/TimeTracking/subRoutes/Checkin"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
const LeaveManagementLayout = React.lazy(() =>import("./pages/LeaveManagement/LeaveManagementLayout"));
const PendingLeave = React.lazy(() => import("./pages/LeaveManagement/subRoutes/PendingLeave"));
const ApproveLeave = React.lazy(() => import("./pages/LeaveManagement/subRoutes/ApproveLeave"));
const CancelledLeave = React.lazy(() => import("./pages/LeaveManagement/subRoutes/CancelledLeave"));
const ProjectLayout = React.lazy(() => import("./pages/Project/ProjectLayout"));
const ProjectDashboard = React.lazy(() => import("./pages/Project/subRoutes/ProjectDashboard"));
const ProjectAssign = React.lazy(() => import("./pages/Project/subRoutes/ProjectAssign"));
const ProjectListing = React.lazy(() => import("./pages/Project/subRoutes/ProjectListing"));
const ProjectReport = React.lazy(() => import("./pages/Project/subRoutes/ProjectReport"));
const CalendarReport = React.lazy(() => import("./pages/Project/subRoutes/CalendarReport"));
const AddProject = React.lazy(() => import("./pages/Project/AddProject"));
const EmployeeManagementLayout = React.lazy(() => import("./pages/EmployeeManagement/EmployeeManagementLayout"));
const EmployeeInfo = React.lazy(() => import("./pages/EmployeeManagement/subRoutes/EmployeeInfo"));
const ActiveEmployee = React.lazy(() => import("./pages/EmployeeManagement/subRoutes/ActiveEmployee"));
const ResignEmployee = React.lazy(() => import("./pages/EmployeeManagement/subRoutes/ResignEmployee"));
const CreateEmp = React.lazy(() => import("./pages/EmployeeManagement/CreateEmp"));
const EditEmpLayout = React.lazy(() => import("./pages/EmployeeManagement/Edit/EditLayout"));
const SetupOrganizationLayout = React.lazy(() => import("./pages/SetupOrganization/SetupOrganizationLayout"));
const CompanyProfile = React.lazy(() => import("./pages/SetupOrganization/subRoutes/CompanyProfile"));
const CompanyCreate = React.lazy(() => import("./pages/SetupOrganization/subRoutes/CompanyAdmin"));
const Locations = React.lazy(() => import("./pages/SetupOrganization/subRoutes/Locations"));
const Departments = React.lazy(() => import("./pages/SetupOrganization/subRoutes/Departments"));
const LeaveConfig = React.lazy(() => import("./pages/SetupOrganization/subRoutes/LeaveConfig"));
const Designations = React.lazy(() => import("./pages/SetupOrganization/subRoutes/Designations"));
const HolidayCalender = React.lazy(() => import("./pages/SetupOrganization/subRoutes/HolidayCalender"));
const HolidayForm = React.lazy(() => import("./pages/SetupOrganization/Holiday/HolidayForm"));
const LocationForm = React.lazy(() => import("./pages/SetupOrganization/Location/LocationForm"));
const DesignationForm = React.lazy(() => import("./pages/SetupOrganization/Designation/DesignationForm"));
// const EditCompanyProfile = React.lazy(()=> import("./pages/SetupOrganization/Company/companyForm"))
const AddCompanyAdminForm = React.lazy(() => import("./pages/SetupOrganization/Company/AddCompanyAdminForm"));
const DepartmentForm = React.lazy(() => import("./pages/SetupOrganization/Department/departmentForm"));
const CreateLeave = React.lazy(() => import("./pages/LeaveManagement/subRoutes/CreateLeave"));


const App = () => {
  return (
    <div className="main-container">
      <Provider store={store}>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/password-reset" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route
              path="/"
              element={
                <PrivateRoute>
                  <Navigate to="/dashboard" />
                </PrivateRoute>
              }
            />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
               
                {/* Time tracking */}
              <Route path="/time-tracking" element={<PrivateRoute><TimeTrackingLayout /></PrivateRoute>}>
                <Route path="attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />
                <Route path="checkin" element={<PrivateRoute><Checkin /></PrivateRoute>} />
              </Route>
                  
                   {/* Leave Management */}
              <Route path="/leave" element={<PrivateRoute><LeaveManagementLayout /></PrivateRoute>}>
                <Route path="pending" element={<PrivateRoute><PendingLeave /></PrivateRoute>} />
                <Route path="cancelled" element={<PrivateRoute><CancelledLeave /></PrivateRoute>} />
                <Route path="approve" element={<PrivateRoute><ApproveLeave /></PrivateRoute>} />
                <Route path="create" element={<PrivateRoute><CreateLeave /></PrivateRoute>} />
              </Route>
                
                 {/* Projects */}
              <Route path="/project" element={<PrivateRoute><ProjectLayout /></PrivateRoute>}>
                <Route path="dashboard" element={<PrivateRoute><ProjectDashboard /></PrivateRoute>} />
                <Route path="list" element={<PrivateRoute><ProjectListing /></PrivateRoute>} />
                <Route path="assign" element={<PrivateRoute><ProjectAssign /></PrivateRoute>} />
                <Route path="reports" element={<PrivateRoute><ProjectReport /></PrivateRoute>} />
                <Route path="calendar" element={<PrivateRoute><CalendarReport /></PrivateRoute>} />
                <Route path="dashboard/add-project" element={<PrivateRoute><AddProject /></PrivateRoute>} />
              </Route>
                  
                   {/* Emp Leave */}
              <Route path="/employee" element={<PrivateRoute><EmployeeManagementLayout /></PrivateRoute>}>
                <Route path="info" element={<PrivateRoute><EmployeeInfo /></PrivateRoute>} />
                <Route path="active" element={<PrivateRoute><ActiveEmployee /></PrivateRoute>} />
                <Route path="resign" element={<PrivateRoute><ResignEmployee /></PrivateRoute>} />
                <Route path="info/create" element={<PrivateRoute><CreateEmp /></PrivateRoute>} />
              </Route>
              <Route path="/employee/edit/:id" element={<PrivateRoute><EditEmpLayout /></PrivateRoute>} />
                     
              {/*Setup Organization */}
              <Route path="/organization" element={<PrivateRoute><SetupOrganizationLayout /></PrivateRoute>}>
                <Route path="company" element={<PrivateRoute><CompanyProfile /></PrivateRoute>} />
                <Route path="company/list" element={<PrivateRoute><CompanyCreate /></PrivateRoute>} />
                <Route path="locations" element={<PrivateRoute><Locations /></PrivateRoute>} />
                <Route path="departments" element={<PrivateRoute><Departments /></PrivateRoute>} />
                <Route path="designations" element={<PrivateRoute><Designations /></PrivateRoute>} />
                <Route path="leave-config" element={<PrivateRoute><LeaveConfig /></PrivateRoute>} />
                <Route path="holiday-calender" element={<PrivateRoute><HolidayCalender /></PrivateRoute>} />
                <Route path="departments/create" element={<PrivateRoute><DepartmentForm /></PrivateRoute>} />
                <Route path="locations/create" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
                <Route path="designations/create" element={<PrivateRoute><DesignationForm /></PrivateRoute>} />
                <Route path="holiday-calender/create" element={<PrivateRoute><HolidayForm /></PrivateRoute>} />
                <Route path="departments/edit/:id" element={<PrivateRoute><DepartmentForm /></PrivateRoute>} />
                <Route path="locations/edit/:id" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
                <Route path="designations/edit/:id" element={<PrivateRoute><DesignationForm /></PrivateRoute>} />
                <Route path="company/add" element={<PrivateRoute><AddCompanyAdminForm /></PrivateRoute>} />
                <Route path="company/edit/:id" element={<PrivateRoute><AddCompanyAdminForm /></PrivateRoute>} />
               <Route path="holiday-calender/edit/:id" element={<PrivateRoute><HolidayForm /></PrivateRoute>} />
             </Route>

              {/* <Route path="company/:id/edit" element={<PrivateRoute><EditCompanyProfile /></PrivateRoute>} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Provider>
    </div>
  );
};

export default App;
