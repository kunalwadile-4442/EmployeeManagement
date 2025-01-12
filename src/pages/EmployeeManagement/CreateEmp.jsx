import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormData,
  resetFormData,
} from "../../redux/reducers/employeeCreateSlice";
import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
import FormLayout from "../../layout/FormLayout";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import ReactDatePicker from "react-datepicker";
import InputLabel from "../../components/InputLabel";
import { format } from "date-fns";
import TextArea from "../../components/TextArea";
import { useNavigate } from "react-router-dom";

function CreateEmp() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeeCreate);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    dispatch(setFormData({ [name]: value }));
  };

  const handleDateChange = (name, date) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
    handleInputChange(name, formattedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    dispatch(resetFormData());
  };
  return (
    <AuthenticatedLayout
      top_heading={"Add New Employee"}
      back={"Back"}
      handleBackClick={() => navigate(-1)}
    >
      <FormLayout
        content={{
          submit: "Submit",
        }}
        onSubmit={handleSubmit}
        className="p-6 bg-white  rounded-md"
        style={{ height: 680 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputLabel htmlFor="emp_first_name" value="First Name" />
            <TextInput
              id="emp_FirstName"
              name="first_name"
              placeholder="First name"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.first_name}
              onChange={(e) => handleInputChange("first_name", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="emp_last_name" value="Last Name" />
            <TextInput
              id="emp_LastName"
              name="last_name"
              placeholder="Last name"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.last_name}
              onChange={(e) => handleInputChange("last_name", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          {/* Email Address */}
          <div className="col-span-2">
            <div className="flex flex-col">
              <InputLabel htmlFor="emp_email" value="Email Address" />
              <TextInput
                id="emp_LastName"
                name="email"
                placeholder="Email Address"
                className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="col-span-1">
            <div className="flex flex-col">
              <InputLabel htmlFor="projectEndDate" value="Date of Birth" />
              <ReactDatePicker
                selected={
                  formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
                }
                onChange={(date) => handleDateChange("dateOfBirth", date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Select Birth Date"
                className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
              />
            </div>
          </div>

          <div className="col-span-1 flex flex-row space-y-2">
            <InputLabel htmlFor="gender" value="Gender" />

            <div className="flex items-center space-x-4">
              <InputLabel htmlFor="male" value="Male" />
              <Checkbox
                id="male"
                name="male"
                checked={formData.male}
                onChange={(e) => handleInputChange("male", e.target.checked)}
                className="bg-[#140242] text-white "
              />
            </div>

            <div className="flex items-center space-x-4 ml-4">
              <InputLabel htmlFor="female" value="Female" />
              <Checkbox
                id="female"
                name="female"
                checked={formData.female}
                onChange={(e) => handleInputChange("female", e.target.checked)}
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
              onChange={(e) =>
                handleInputChange("permanentAdd", e.target.value)
              }
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
                onChange={(e) =>
                  handleInputChange("presentAdd", e.target.value)
                }
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputLabel htmlFor="emp_profile_pic" value="Profile Picture" />
            <TextInput
              type="file"
              id="emp_profile_pic"
              name="empProfilePic"
              placeholder="Enter project cost"
              className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.empProfilePic}
              onChange={(e) =>
                handleInputChange("empProfilePic", e.target.value)
              }
            />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="employeeCode" value="Employee Code" />
            <TextInput
              id="employeeCode"
              name="empCode"
              placeholder="Enter project cost"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.empCode}
              onChange={(e) => handleInputChange("empCode", e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
            <ReactDatePicker
              selected={
                formData.dateOfJoining ? new Date(formData.dateOfJoining) : null
              }
              onChange={(date) => handleDateChange("dateOfJoining", date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select joining date"
              className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
            />
          </div>

          <div className="mb-4">
            <InputLabel htmlFor="empMobileNumber" value="Mobile Number" />
            <TextInput
              type="text"
              id="empMobileNumber"
              name="empMobileNumber"
              placeholder="Enter mobile number"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.empMobileNumber}
              onChange={(e) =>
                handleInputChange("empMobileNumber", e.target.value)
              }
            />
          </div>
        </div>
      </FormLayout>
    </AuthenticatedLayout>
  );
}

export default CreateEmp;
