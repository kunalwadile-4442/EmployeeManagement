import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import hrAppReducer from "./reducers/hrReducer";
import employeeCreateReducer from './reducers/employeeCreateSlice';
import orgLocationReducer from './reducers/orgLocationReducer';
import orgDesignationReducer from './reducers/orgDesignationReducer';
import orgCompanyReducer from './reducers/orgCompanyReducer';
import employeeBasicDetailsReducer from './reducers/employeeBasicDetails';
import employeeCurrentWorkingReducer from './reducers/employeeCurrentWorking';
import previousWorkingInfoReducer from './reducers/previousWorkingInfo';
import eduDetailsReducer from './reducers/eduDetails';
import employeePersonalInfoReducer from './reducers/employeePersonalInfo'
import employeeDocsUploadReducer from './reducers/employeeDocsUpload'
import HolidayFormReducer from './reducers/holidayFormReducer'
import CompanyCreateAdminReducer from './reducers/CompanyCreateAdminReducer'
import weekDefinitionReducer from './reducers/settingModalReducer'
import attendanceModalReducer from './reducers/attendanceModalReducer'
import createLeaveReducer from './reducers/createLeaveReducer'



const store = configureStore({
  reducer: {
    user: userReducer,
    hrApp: hrAppReducer,
    employeeCreate: employeeCreateReducer,
    employeeBasicDetails:employeeBasicDetailsReducer,
    employeeCurrentWorking:employeeCurrentWorkingReducer,
    previousWorkingInfo:previousWorkingInfoReducer,
    eduDetails:eduDetailsReducer,
    employeePersonalInfo:employeePersonalInfoReducer,
    employeeDocsUpload: employeeDocsUploadReducer,
    orgLocation: orgLocationReducer,
    orgDesignation: orgDesignationReducer,
    orgCompany: orgCompanyReducer,
    holidayForm: HolidayFormReducer,
    CompanyAdmin: CompanyCreateAdminReducer,
    weekDefinition: weekDefinitionReducer,
    attendanceModal: attendanceModalReducer,
    createLeave: createLeaveReducer,
  },
});

export default store;
