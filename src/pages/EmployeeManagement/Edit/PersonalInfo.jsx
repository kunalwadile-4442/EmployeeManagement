// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { setFormData ,resetFormData} from "../../../redux/reducers/employeeEditReducer"; 
// import FormLayout from "../../../layout/FormLayout";
// import TextInput from "../../../components/TextInput";
// import Checkbox from "../../../components/Checkbox";
// import ReactDatePicker from "react-datepicker";
// import InputLabel from "../../../components/InputLabel";
// import { format } from "date-fns";
// import TextArea from "../../../components/TextArea";

// function PersonalInfo() {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.employeeEdit.formData);

//   const handleInputChange = (name, value) => {
//     dispatch(setFormData({ [name]: value }));
//   };

//   const handleDateChange = (name, date) => {
//     // Format the date to yyyy/MM/dd
//     const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
//     handleInputChange(name, formattedDate);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//         dispatch(resetFormData());
  
//   };
//   return (
//     <FormLayout
//       content={{
//         submit: "Submit",
//       }}
//       onSubmit={handleSubmit}
//       className="p-6 bg-white  rounded-md"
//       style={{ height: 500 }}
//     >
//       <div className="grid grid-cols-4 gap-4 mb-4">
//         <div className="col-span-1">
//           <div className="flex flex-col">
//             <InputLabel htmlFor="projectEndDate" value="Date of Birth" />
//             <ReactDatePicker
//               selected={
//                 formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
//               }
//               onChange={(date) => handleDateChange("dateOfBirth", date)}
//               dateFormat="yyyy/MM/dd"
//               placeholderText="Select Birth Date"
//               className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//             />
//           </div>
//         </div>

//         {/* Gender Checkboxes */}
//         <div className="col-span-1 flex flex-row space-y-2">
//           <InputLabel htmlFor="gender" value="Gender" />

//           <div className="flex items-center space-x-4">
//             <InputLabel htmlFor="male" value="Male" />
//             <Checkbox
//               id="male"
//               name="male"
//               checked={formData.male}
//               onChange={(e) => handleInputChange("male", e.target.checked)}
//             />
//           </div>

//           <div className="flex items-center space-x-4 ml-4">
//             <InputLabel htmlFor="female" value="Female" />
//             <Checkbox
//               id="female"
//               name="female"
//               checked={formData.female}
//               onChange={(e) => handleInputChange("female", e.target.checked)}
//             />
//           </div>
//         </div>

//         <div className="col-span-2">
//           <div className="flex flex-col">
//             <InputLabel htmlFor="emp_profile_pic" value="Profile Picture" />
//             <TextInput
//               type="file"
//               id="emp_profile_pic"
//               name="empProfilePic"
//               placeholder="Enter project cost"
//               className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.empProfilePic}
//               onChange={(e) =>
//                 handleInputChange("empProfilePic", e.target.value)
//               }
//             />
//           </div>
//         </div>
//       </div>

     

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="mb-4">
//           <InputLabel htmlFor="permanent_add" value="Permanent Address" />
//           <TextArea
//             id="permanent_add"
//             name="permanentAdd"
//             type="textarea"
//             rows={2}
//             placeholder="Permanent Address"
//             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.permanentAdd}
//             onChange={(e) => handleInputChange("permanentAdd", e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <div className="flex flex-col">
//             <InputLabel htmlFor="last_name" value="Present Address" />
//             <TextArea
//               id="present_add"
//               name="presentAdd"
//               rows={2}
//               type="textarea"
//               placeholder="Present Address"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.presentAdd}
//               onChange={(e) => handleInputChange("presentAdd", e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="mb-4">
//         <InputLabel htmlFor="empMobileNumber" value="Mobile Number" />
//           <TextInput
//             type="text"
//             id="empMobileNumber"
//             name="empMobileNumber"
//             placeholder="Enter mobile number"
//             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.empMobileNumber}
//             onChange={(e) =>
//               handleInputChange("empMobileNumber", e.target.value)
//             }
//           />
          
//         </div>
//         <div className="mb-4">
//         <InputLabel htmlFor="postCode" value="Post Code" />
//           <TextInput
//             type="text"
//             id="postCode"
//             name="postCode"
//             placeholder="Enter Post Cost"
//             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.empProfilePic}
//             onChange={(e) => handleInputChange("postCode", e.target.value)}
//           />
         
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="mb-4">
//         <InputLabel htmlFor="city" value="City" />
//           <TextInput
//             id="city"
//             name="city"
//             placeholder="City"
//             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.city}
//             onChange={(e) => handleInputChange("city", e.target.value)}
//           />
       
//         </div>

//         <div className="mb-4">
//         <InputLabel htmlFor="states" value="State" />
//           <TextInput
//             id="states"
//             name="states"
//             placeholder="State"
//             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.states}
//             onChange={(e) => handleInputChange("states", e.target.value)}
//           />
//         </div>
//       </div>
//     </FormLayout>
//   );
// }

// export default PersonalInfo;
// components/PersonalInfo.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPersonalInfoData, resetPersonalInfoData } from '../../../redux/reducers/employeePersonalInfo';
import FormLayout from '../../../layout/FormLayout';
import TextInput from '../../../components/TextInput';
import Checkbox from '../../../components/Checkbox';
import ReactDatePicker from 'react-datepicker';
import InputLabel from '../../../components/InputLabel';
import { format } from 'date-fns';
import TextArea from '../../../components/TextArea';

function PersonalInfo() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeePersonalInfo);

  const handleInputChange = (name, value) => {
    dispatch(setPersonalInfoData({ [name]: value }));
  };

  const handleDateChange = (name, date) => {
    const formattedDate = date ? format(date, 'yyyy/MM/dd') : null;
    handleInputChange(name, formattedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    dispatch(resetPersonalInfoData());
  };

  return (
    <FormLayout
      content={{
        submit: 'Submit',
      }}
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-md"
      style={{ height: 500 }}
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-1">
          <div className="flex flex-col">
            <InputLabel htmlFor="projectEndDate" value="Date of Birth" />
            <ReactDatePicker
              selected={formData.dateOfBirth ? new Date(formData.dateOfBirth) : null}
              onChange={(date) => handleDateChange('dateOfBirth', date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select Birth Date"
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
            />
          </div>
        </div>

        {/* Gender Checkboxes */}
        <div className="col-span-1 flex flex-row space-y-2">
          <InputLabel htmlFor="gender" value="Gender" />

          <div className="flex items-center space-x-4">
            <InputLabel htmlFor="male" value="Male" />
            <Checkbox
              id="male"
              name="male"
              checked={formData.male}
              onChange={(e) => handleInputChange('male', e.target.checked)}
            />
          </div>

          <div className="flex items-center space-x-4 ml-4">
            <InputLabel htmlFor="female" value="Female" />
            <Checkbox
              id="female"
              name="female"
              checked={formData.female}
              onChange={(e) => handleInputChange('female', e.target.checked)}
            />
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col">
            <InputLabel htmlFor="emp_profile_pic" value="Profile Picture" />
            <TextInput
              type="file"
              id="emp_profile_pic"
              name="empProfilePic"
              placeholder="Enter project cost"
              className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.empProfilePic}
              onChange={(e) => handleInputChange('empProfilePic', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="permanent_add" value="Permanent Address" />
          <TextArea
            id="permanent_add"
            name="permanentAdd"
            type="textarea"
            rows={2}
            placeholder="Permanent Address"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.permanentAdd}
            onChange={(e) => handleInputChange('permanentAdd', e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex flex-col">
            <InputLabel htmlFor="last_name" value="Present Address" />
            <TextArea
              id="present_add"
              name="presentAdd"
              rows={2}
              type="textarea"
              placeholder="Present Address"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.presentAdd}
              onChange={(e) => handleInputChange('presentAdd', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="empMobileNumber" value="Mobile Number" />
          <TextInput
            type="text"
            id="empMobileNumber"
            name="empMobileNumber"
            placeholder="Enter mobile number"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.empMobileNumber}
            onChange={(e) => handleInputChange('empMobileNumber', e.target.value)}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="postCode" value="Post Code" />
          <TextInput
            type="text"
            id="postCode"
            name="postCode"
            placeholder="Enter Post Code"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.postCode}
            onChange={(e) => handleInputChange('postCode', e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="city" value="City" />
          <TextInput
            id="city"
            name="city"
            placeholder="City"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
        </div>

        <div className="mb-4">
          <InputLabel htmlFor="states" value="State" />
          <TextInput
            id="states"
            name="states"
            placeholder="State"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.states}
            onChange={(e) => handleInputChange('states', e.target.value)}
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default PersonalInfo;
