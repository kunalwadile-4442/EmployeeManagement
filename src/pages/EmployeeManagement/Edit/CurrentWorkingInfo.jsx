import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWorking, resetCurrentWorking } from "../../../redux/reducers/employeeCurrentWorking";
import FormLayout from "../../../layout/FormLayout";
import TextInput from "../../../components/TextInput";
import InputLabel from "../../../components/InputLabel";
import DropdownSelect from "../../../components/DropdownSelect";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
function CurrentWorkingInfo({ id }) {
  const dispatch = useDispatch();

  const currentWorking = useSelector((state) => state.employeeCurrentWorking?.currentWorking || {});

  useEffect(() => {
    if (id) {
      const fetchedData = {
       
        // departmentName: "HR",
        // locationName: "Mumbai",
        // designationName: "Finance",
        // report_to: "Sachin Sir",
        // dateOfJoining: "2023/01/15", 
        // yearlyExperience: null, 
        // monthlyExperience: null, 
        // employeeType: "", 
        // jobName: "", 
        // employeeStatus: "", 
        // basicSalary: "",
      };

      dispatch(setCurrentWorking(fetchedData));
    }
  }, [id, dispatch]);

  const handleInputChange = (name, value) => {
    dispatch(setCurrentWorking({ [name]: value }));
  };

   const handleDateChange = (name, date) => {
      const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
      handleInputChange(name, formattedDate);
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", currentWorking);
    dispatch(resetCurrentWorking());
  };

  // Dropdown options for Department Name and Location Name
  const departmentOptions = [
    { value: "HR", label: "HR" },
    { value: "Finance", label: "Finance" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
  ];
  
  const designationOptions = [
    { value: "Finance", label: "Finance" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
    { value: "Human Resources", label: "Human Resources" },
  ];

  const jobOptions = [
    { value: "director/ceo", label: "Director/CEO" },
    { value: "cto/co_founder", label: "CTO/Co-Founder" },
    { value: "coo/co_founder", label: "COO/Co-Founder" },
    { value: "team_lead/project_manager", label: "Team Lead/Project Manager" },
  ];
  
  
  const yearOptions = [
    { value: 1 ,label: 1},
    { value: 2 ,label: 2},
    { value: 3 ,label: 3},
    { value: 4 ,label: 4},
    { value: 5 ,label: 5},
    { value: 6 ,label: 6},
    { value: 7 ,label: 7},
    { value: 8 ,label: 8},
    { value: 9 ,label: 9},
    { value: 10 ,label: 10},
  ]
  

  const monthOptions = [
    { value: 1 ,label: 1},
    { value: 2 ,label: 2},
    { value: 3 ,label: 3},
    { value: 4 ,label: 4},
    { value: 5 ,label: 5},
    { value: 6 ,label: 6},
    { value: 7 ,label: 7},
    { value: 8 ,label: 8},
    { value: 9 ,label: 9},
    { value: 10 ,label: 10},
    { value: 11 ,label: 11},
    { value: 12 ,label: 12},
  ]

  const employeeStatusOptions = [
    { value: "active", label: "Active" },
    { value: "terminated", label: "Terminated" },
    { value: "resigned", label: "Resigned" },
    { value: "deceased", label: "Deceased" },
  ];
  
  const employeeTypeOptions = [
    {value:"Permanent" , label:"Permanent"},
    {value:"Temporary" , label:"Temporary"},
    {value:"On Contract" , label:"On Contract"},
    {value:"Trainee" , label:"Trainee"},

  ]
  const locationOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Chennai", label: "Chennai" },
  ];

  return (
    <FormLayout
      content={{
        submit: "Submit",
      }}
      onSubmit={handleSubmit}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: 500 }}
    >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="departmentName" value="Department Name" />
          <DropdownSelect
            id="departmentName"
            options={departmentOptions}
            onSelect={(option) => handleInputChange("departmentName", option.value)}
            value={departmentOptions.find((option) => option.value === currentWorking.departmentName)}
            placeholder="Select Department"
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="locationName" value="Location Name" />
          <DropdownSelect
            id="locationName"
            options={locationOptions}
            onSelect={(option) => handleInputChange("locationName", option.value)}
            value={locationOptions.find((option) => option.value === currentWorking.locationName)}
            placeholder="Select Location"
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="designationName" value="Designation Name" />
          <DropdownSelect
            id="designationName"
            options={designationOptions}
            onSelect={(option) => handleInputChange("designationName", option.value)}
            value={designationOptions.find((option) => option.value === currentWorking.designationName)}
            placeholder="Select Department"
            className="mt-1"
          />
        </div>
        <div className="mb-4">
        <InputLabel htmlFor="report_to" value="Report To" />
          <TextInput
            id="report_to"
            name="report_to"
            placeholder="Report"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={currentWorking.report_to}
            onChange={(e) => handleInputChange("report_to", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
  {/* Left side: Date Picker */}
  <div className="col-span-2 mb-4">
    <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
    <ReactDatePicker
      selected={currentWorking.dateOfJoining ? new Date(currentWorking.dateOfJoining) : null}
      onChange={(date) => handleDateChange("dateOfJoining", date)}
      dateFormat="yyyy/MM/dd"
      placeholderText="Select joining date"
      className="mt-1 w-full border border-gray-300 rounded-md px-2 py-1.5"
    />
  </div>

  {/* Right side: Two Dropdowns */}
  <div className="col-span-1 mb-4">
    <InputLabel htmlFor="experience" value="Experience" />
    <DropdownSelect
      id="yearlyExperience"
      options={yearOptions}
      onSelect={(option) => handleInputChange("yearlyExperience", option.value)}
      value={yearOptions.find((option) => option.value === currentWorking.yearlyExperience)}
      placeholder="Select Year"
      className="mt-1 w-full"
    />
  </div>

  <div className="col-span-1 mb-4">
    <DropdownSelect
      id="monthlyExperience"
      options={monthOptions}
      onSelect={(option) => handleInputChange("monthlyExperience", option.value)}
      value={monthOptions.find((option) => option.value === currentWorking.monthlyExperience)}
      placeholder="Select month"
      className="mt-6 w-full"
    />
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="employeeType" value="Employee Type" />
          <DropdownSelect
            id="employeeType"
            options={employeeTypeOptions}
            onSelect={(option) => handleInputChange("employeeType", option.value)}
            value={employeeTypeOptions.find((option) => option.value === currentWorking.employeeType)}
            placeholder="Select Department"
            className="mt-1"
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="jobName" value="Job Role" />
          <DropdownSelect
            id="jobName"
            options={jobOptions}
            onSelect={(option) => handleInputChange("jobName", option.value)}
            value={jobOptions.find((option) => option.value === currentWorking.jobName)}
            placeholder="Select Location"
            className="mt-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-2">
        <InputLabel htmlFor="employeeStatus" value="Employee Status" />
          <DropdownSelect
            id="employeeStatus"
            options={employeeStatusOptions}
            onSelect={(option) => handleInputChange("employeeStatus", option.value)}
            value={employeeStatusOptions.find((option) => option.value === currentWorking.employeeStatus)}
            placeholder="Select Department"
            className="mt-1"
          />
        </div>
        <div className="col-span-2">
          <InputLabel htmlFor="basicSalary" value="Basic Salary" />
          <TextInput
            id="basicSalary"
            name="basicSalary"
            placeholder="Basic salary"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={currentWorking.basicSalary}
            onChange={(e) => handleInputChange("basicSalary", e.target.value)}
            
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default CurrentWorkingInfo;
