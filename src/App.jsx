
// // import React, { Suspense } from "react";
// // import { Provider } from "react-redux";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom";
// // import store from "./redux/store";
// // import { ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import "react-datepicker/dist/react-datepicker.css";
// // import LoadingSpinner from "./components/LoadingSpinner";
// // import "./App.css";

// // const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
// // const TimeTrackingLayout = React.lazy(() =>
// //   import("./pages/TimeTracking/TimeTrackingLayout")
// // );
// // const Attendance = React.lazy(() => import("./pages/TimeTracking/Attendance"));
// // const Checkin = React.lazy(() => import("./pages/TimeTracking/Checkin"));
// // const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
// // const Login = React.lazy(() => import("./pages/auth/Login"));
// // const Register = React.lazy(() => import("./pages/auth/Register"));
// // const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
// // const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));

// // const App = () => {
// //   return (
// //     <div className="main-container">
// //       <Provider store={store}>
// //         <Router>
// //           <Suspense fallback={<LoadingSpinner />}>
// //             <Routes>
// //               <Route path="/login" element={<Login />} />
// //               <Route path="/register" element={<Register />} />
// //               <Route path="/password-reset" element={<ResetPassword />} />
// //               <Route path="/forgot-password" element={<ForgotPassword />} />

// //               <Route path="/" element={<Navigate to="/dashboard" />} />
// //               <Route path="/dashboard" element={<Dashboard />} />

// //               <Route path="/time-tracking" element={<TimeTrackingLayout />}>
// //                 <Route path="attendance" element={<Attendance />} />
// //                 <Route path="checkin" element={<Checkin />} />
// //               </Route>

// //               <Route path="*" element={<PageNotFound />} />
// //             </Routes>
// //           </Suspense>
// //         </Router>

// //         <ToastContainer
// //           position="top-center"
// //           autoClose={5000}
// //           hideProgressBar={false}
// //           newestOnTop={false}
// //           closeOnClick
// //           rtl={false}
// //           pauseOnFocusLoss
// //           draggable
// //           pauseOnHover
// //         />
// //       </Provider>
// //     </div>
// //   );
// // };
// //  export default App;

// import React, { Suspense } from "react";
// import { Provider, useSelector } from "react-redux";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import store from "./redux/store";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "react-datepicker/dist/react-datepicker.css";
// import LoadingSpinner from "./components/LoadingSpinner";
// import "./App.css";

// const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
// const TimeTrackingLayout = React.lazy(() =>
//   import("./pages/TimeTracking/TimeTrackingLayout")
// );
// const Attendance = React.lazy(() => import("./pages/TimeTracking/Attendance"));
// const Checkin = React.lazy(() => import("./pages/TimeTracking/Checkin"));
// const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
// const Login = React.lazy(() => import("./pages/auth/Login"));
// // const Register = React.lazy(() => import("./pages/auth/Register"));
// const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
// const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
// const LeaveManagementLayout = React.lazy(() => import("./pages/LeaveManagement/LeaveManagementLayout"));
// const PendingLeave = React.lazy(() => import("./pages/LeaveManagement/PendingLeave"));
// const ApproveLeave = React.lazy(() => import("./pages/LeaveManagement/ApproveLeave"));
// const CancelledLeave = React.lazy(() => import("./pages/LeaveManagement/CancelledLeave"));
// const ProjectLayout = React.lazy(() => import("./pages/Project/ProjectLayout"));
// const ProjectDashboard = React.lazy(() => import("./pages/Project/ProjectDashboard"));
// const ProjectAssign = React.lazy(() => import("./pages/Project/ProjectAssign"));
// const ProjectListing = React.lazy(() => import("./pages/Project/ProjectListing"));
// const ProjectReport = React.lazy(() => import("./pages/Project/ProjectReport"));
// const CalendarReport = React.lazy(() => import("./pages/Project/CalendarReport"));
// const AddProject = React.lazy(() => import("./pages/Project/AddProject"));





// const App = () => {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

//   return (
//     <div className="main-container">
//       <Provider store={store}>
//         <Router>
//           <Suspense fallback={<LoadingSpinner />}>
//             <Routes>
//               {/* Public Routes */}
//               <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
//               {/* <Route path="/register" element={<Register />} /> */}
//               <Route path="/password-reset" element={<ResetPassword />} />
//               <Route path="/forgot-password" element={<ForgotPassword />} />

//               <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
//               <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />

//               <Route path="/time-tracking" element={isAuthenticated ? <TimeTrackingLayout /> : <Navigate to="/login" />}>
//                 <Route path="attendance" element={isAuthenticated ? <Attendance /> : <Navigate to="/login" />} />
//                 <Route path="checkin" element={isAuthenticated ? <Checkin /> : <Navigate to="/login" />} />
//               </Route>

//               <Route path="/leave" element={isAuthenticated ? <LeaveManagementLayout /> : <Navigate to="/login" />}>
//                 <Route path="pending" element={isAuthenticated ? <PendingLeave /> : <Navigate to="/login" />} />
//                 <Route path="cancelled" element={isAuthenticated ? <CancelledLeave /> : <Navigate to="/login" />} />
//                 <Route path="approve" element={isAuthenticated ? <ApproveLeave /> : <Navigate to="/login" />} />
//               </Route>

//               <Route path="/project" element={isAuthenticated ? <ProjectLayout /> : <Navigate to="/login" />}>
//                 <Route path="dashboard" element={isAuthenticated ? <ProjectDashboard /> : <Navigate to="/login" />} />
//                 <Route path="list" element={isAuthenticated ? <ProjectListing /> : <Navigate to="/login" />} />
//                 <Route path="assign" element={isAuthenticated ? <ProjectAssign /> : <Navigate to="/login" />} />
//                 <Route path="reports" element={isAuthenticated ? <ProjectReport /> : <Navigate to="/login" />} />
//                 <Route path="calendar" element={isAuthenticated ? <CalendarReport /> : <Navigate to="/login" />} />
//                 <Route path="add-project" element={isAuthenticated ? <AddProject /> : <Navigate to="/login" />} />
//               </Route>

//               <Route path="*" element={<PageNotFound />} />
//             </Routes>
//           </Suspense>
//         </Router>

//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//         />
//       </Provider>
//     </div>
//   );
// };

// export default App;

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import LoadingSpinner from "./components/LoadingSpinner";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";


const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const TimeTrackingLayout = React.lazy(() =>import("./pages/TimeTracking/TimeTrackingLayout"));
const Attendance = React.lazy(() => import("./pages/TimeTracking/Attendance"));
const Checkin = React.lazy(() => import("./pages/TimeTracking/Checkin"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const ForgotPassword = React.lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("./pages/auth/ResetPassword"));
const LeaveManagementLayout = React.lazy(() =>import("./pages/LeaveManagement/LeaveManagementLayout"));
const PendingLeave = React.lazy(() => import("./pages/LeaveManagement/PendingLeave"));
const ApproveLeave = React.lazy(() => import("./pages/LeaveManagement/ApproveLeave"));
const CancelledLeave = React.lazy(() => import("./pages/LeaveManagement/CancelledLeave"));
const ProjectLayout = React.lazy(() => import("./pages/Project/ProjectLayout"));
const ProjectDashboard = React.lazy(() => import("./pages/Project/ProjectDashboard"));
const ProjectAssign = React.lazy(() => import("./pages/Project/ProjectAssign"));
const ProjectListing = React.lazy(() => import("./pages/Project/ProjectListing"));
const ProjectReport = React.lazy(() => import("./pages/Project/ProjectReport"));
const CalendarReport = React.lazy(() => import("./pages/Project/CalendarReport"));
const AddProject = React.lazy(() => import("./pages/Project/AddProject"));
const EmployeeManagementLayout = React.lazy(() => import("./pages/EmployeeManagement/EmployeeManagementLayout"));
const EmployeeInfo = React.lazy(() => import("./pages/EmployeeManagement/EmployeeInfo"));
const CreateEmp = React.lazy(() => import("./pages/EmployeeManagement/CreateEmp"));
const EditEmpLayout = React.lazy(() => import("./pages/EmployeeManagement/Edit/EditLayout"));
const SetupOrganizationLayout = React.lazy(() => import("./pages/SetupOrganization/SetupOrganizationLayout"));
const CompanyProfile = React.lazy(() => import("./pages/SetupOrganization/CompanyProfile"));
const Locations = React.lazy(() => import("./pages/SetupOrganization/Locations"));
const Departments = React.lazy(() => import("./pages/SetupOrganization/Departments"));
const LeaveConfig = React.lazy(() => import("./pages/SetupOrganization/LeaveConfig"));
const Designations = React.lazy(() => import("./pages/SetupOrganization/Designations"));
const HolidayCalender = React.lazy(() => import("./pages/SetupOrganization/HolidayCalender"));
const LocationForm = React.lazy(() => import("./pages/SetupOrganization/Location/LocationForm"));
const DesignationForm = React.lazy(() => import("./pages/SetupOrganization/Designation/DesignationForm"));
const EditCompanyProfile = React.lazy(()=> import("./pages/SetupOrganization/Company/companyForm"))


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
              </Route>
                
                 {/* Projects */}
              <Route path="/project" element={<PrivateRoute><ProjectLayout /></PrivateRoute>}>
                <Route path="dashboard" element={<PrivateRoute><ProjectDashboard /></PrivateRoute>} />
                <Route path="list" element={<PrivateRoute><ProjectListing /></PrivateRoute>} />
                <Route path="assign" element={<PrivateRoute><ProjectAssign /></PrivateRoute>} />
                <Route path="reports" element={<PrivateRoute><ProjectReport /></PrivateRoute>} />
                <Route path="calendar" element={<PrivateRoute><CalendarReport /></PrivateRoute>} />
              </Route>
                <Route path="/project/add-project" element={<PrivateRoute><AddProject /></PrivateRoute>} />
                  
                   {/* Emp Leave */}
                <Route path="/employee" element={<PrivateRoute><EmployeeManagementLayout /></PrivateRoute>}>
                <Route path="info" element={<PrivateRoute><EmployeeInfo /></PrivateRoute>} />
              </Route>
              <Route path="/employee/create" element={<PrivateRoute><CreateEmp /></PrivateRoute>} />
              <Route path="/employee/:id/edit" element={<PrivateRoute><EditEmpLayout /></PrivateRoute>} />
                     
              {/*Setup Organization */}
                <Route path="/organization" element={<PrivateRoute><SetupOrganizationLayout /></PrivateRoute>}>
                <Route path="company" element={<PrivateRoute><CompanyProfile /></PrivateRoute>} />
                <Route path="locations" element={<PrivateRoute><Locations /></PrivateRoute>} />
                <Route path="departments" element={<PrivateRoute><Departments /></PrivateRoute>} />
                <Route path="designations" element={<PrivateRoute><Designations /></PrivateRoute>} />
                <Route path="leave-config" element={<PrivateRoute><LeaveConfig /></PrivateRoute>} />
                <Route path="holiday-calender" element={<PrivateRoute><HolidayCalender /></PrivateRoute>} />
              </Route>
              <Route path="/location/create" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
              <Route path="/location/:id/edit" element={<PrivateRoute><LocationForm /></PrivateRoute>} />
              <Route path="/designation/create" element={<PrivateRoute><DesignationForm /></PrivateRoute>} />
              <Route path="/designation/:id/edit" element={<PrivateRoute><DesignationForm /></PrivateRoute>} />
              <Route path="company/:id/edit" element={<PrivateRoute><EditCompanyProfile /></PrivateRoute>} />

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
