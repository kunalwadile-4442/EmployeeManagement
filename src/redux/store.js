import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer"
import hrAppReducer from "./reducers/hrReducer";
import employeeEditReducer from './reducers/employeeEditReducer'; 
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

const store = configureStore({
  reducer: {
    user: userReducer,
    hrApp: hrAppReducer,
    employeeEdit:employeeEditReducer,
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
  },
});

export default store;
