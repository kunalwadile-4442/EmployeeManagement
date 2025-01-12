// import React, { useState } from "react";
// import InputLabel from "../components/InputLabel";
// import TextInput from "../components/TextInput";
// import DropdownSelect from "../components/DropdownSelect";

// const formatDate = (date) => {
//     if (!date) return "";
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}/${month}/${day}`;
// };

// const FilterForm = ({
//     EmployeeName,
//     ProjectName,
//     LeaveStatus,
//     LeaveType,
//     Location,
//     Department,
//     Designation,
//     EmployeeStatus,
//     handleSearch,
//     emp_name_dropdown,
//     project_name_dropdown,
//     location_dropdown,
//     department_dropdown,
//     designation_dropdown,
//     employee_status_dropdown,
//     leave_type_dropdown,
//     leave_status_dropdown,
//     emp_id,
// }) => {
//     const [filters, setFilters] = useState({
//         emp_first_name: "",
//         project_name: "",
//         location: "",
//         dept_name: "",
//         desg_name: "",
//         leave_status: "",
//         from_date: "",
//         to_date: "",
//         type_name: "",
//         emp_status: "",
//     });

//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         const isAnyFilterSelected = Object.values(filters).some(
//             (value) => value !== ""
//         );
//         if (!isAnyFilterSelected) {
//             return;
//         }

//         // Here, `handleSearch` will now just receive the filters and page number, with no Inertia.js handling.
//         const page = new URLSearchParams(window.location.search).get("page") || 1;
//         const formattedFilters = {
//             ...filters,
//             from_date: formatDate(filters.from_date),
//             to_date: formatDate(filters.to_date),
//         };

//         handleSearch(formattedFilters, page, e);
//     };

//     const handleInputChange = (field, value) => {
//         setFilters((prevFilters) => ({
//             ...prevFilters,
//             [field]: value,
//         }));

//         const url = new URL(window.location);
//         url.searchParams.set(field, value);
//         window.history.pushState({}, "", url);
//     };

//     const handleReset = () => {
//         setFilters({
//             emp_first_name: "",
//             project_name: "",
//             location: "",
//             dept_name: "",
//             desg_name: "",
//             leave_status: "",
//             from_date: "",
//             to_date: "",
//             type_name: "",
//             emp_status: "",
//         });
//         // Reset the URL search params.
//         const url = new URL(window.location);
//         url.search = "";
//         window.history.pushState({}, "", url.toString());
//         window.location.reload();
//     };

//     const employeeOptions = Array.isArray(EmployeeName) ? EmployeeName : [];
//     const projectOptions = Array.isArray(ProjectName) ? ProjectName : [];
//     const locationOptions = Array.isArray(Location) ? Location : [];
//     const departmentOptions = Array.isArray(Department) ? Department : [];
//     const designationOptions = Array.isArray(Designation) ? Designation : [];
//     const employeeStatusOptions = Array.isArray(EmployeeStatus)
//         ? EmployeeStatus
//         : [];
//     const leaveTypeOptions = Array.isArray(LeaveType) ? LeaveType : [];
//     const leaveStatusOptions = Array.isArray(LeaveStatus) ? LeaveStatus : [];

//     return (
//         <form
//             onSubmit={handleFormSubmit}
//             className="flex flex-col gap-4 text-sm mt-2 px-2"
//         >
//             <div className="flex flex-wrap gap-2">
//                 {emp_name_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="employee_name" value="Employee Name" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px] z-20"
//                             name="employee_name"
//                             placeholder="Select Employee..."
//                             options={[
//                                 { value: "", label: "Select Employee" },
//                                 ...employeeOptions,
//                             ]}
//                             value={
//                                 filters.emp_id
//                                     ? employeeOptions.find(
//                                           (option) =>
//                                               option.value === filters.emp_id
//                                       ) || {}
//                                     : employeeOptions.find(
//                                           (option) =>
//                                               option.value ===
//                                               filters.emp_first_name
//                                       ) || {}
//                             }
//                             onSelect={(selectedOption) => {
//                                 handleInputChange(
//                                     "emp_first_name",
//                                     selectedOption?.value
//                                 );
//                             }}
//                         />
//                     </div>
//                 )}

//                 {leave_type_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="leave_type" value="Leave Type" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="leave_type"
//                             placeholder="Select leave type..."
//                             options={[
//                                 { value: "", label: "Select Leave" },
//                                 ...leaveTypeOptions,
//                             ]}
//                             value={
//                                 leaveTypeOptions.find(
//                                     (option) =>
//                                         option.value === filters.type_name
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "type_name",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {leave_status_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="leave_status" value="Leave Status" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="leave_status"
//                             placeholder="Select leave status..."
//                             options={[
//                                 { value: "", label: "Select Leave Status" },
//                                 ...leaveStatusOptions,
//                             ]}
//                             value={
//                                 leaveStatusOptions.find(
//                                     (option) =>
//                                         option.value === filters.leave_status
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "leave_status",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {project_name_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="project_name" value="Project Name" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="project_name"
//                             placeholder="Select Project..."
//                             options={[
//                                 { value: "", label: "Select Project" },
//                                 ...projectOptions,
//                             ]}
//                             value={
//                                 projectOptions.find(
//                                     (option) =>
//                                         option.value === filters.project_name
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "project_name",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {location_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="location" value="Location" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="location"
//                             placeholder="Select Location..."
//                             options={[
//                                 { value: "", label: "Select Location" },
//                                 ...locationOptions,
//                             ]}
//                             value={
//                                 locationOptions.find(
//                                     (option) =>
//                                         option.value === filters.location
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "location",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {department_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="dept_name" value="Department" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="dept_name"
//                             placeholder="Select Department..."
//                             options={[
//                                 { value: "", label: "Select Department" },
//                                 ...departmentOptions,
//                             ]}
//                             value={
//                                 departmentOptions.find(
//                                     (option) =>
//                                         option.value === filters.dept_name
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "dept_name",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {designation_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="designation" value="Designation" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="designation"
//                             placeholder="Select Designation..."
//                             options={[
//                                 { value: "", label: "Select Designation" },
//                                 ...designationOptions,
//                             ]}
//                             value={
//                                 designationOptions.find(
//                                     (option) =>
//                                         option.value === filters.desg_name
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "desg_name",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {employee_status_dropdown && (
//                     <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
//                         <InputLabel htmlFor="emp_status" value="Employee Status" />
//                         <DropdownSelect
//                             className="mt-1 w-full min-w-[150px]"
//                             name="emp_status"
//                             placeholder="Select Employee Status..."
//                             options={[
//                                 { value: "", label: "Select Status" },
//                                 ...employeeStatusOptions,
//                             ]}
//                             value={
//                                 employeeStatusOptions.find(
//                                     (option) =>
//                                         option.value === filters.emp_status
//                                 ) || {}
//                             }
//                             onSelect={(selectedOption) =>
//                                 handleInputChange(
//                                     "emp_status",
//                                     selectedOption?.value
//                                 )
//                             }
//                         />
//                     </div>
//                 )}

//                 {/* Add date filters (from_date and to_date) here */}

//             <div className="flex flex-col w-full  sm:w-1/2 md:w-1/5">
//                     <InputLabel htmlFor="from_date" value="From Date" />
//                     <TextInput
//                         type="date"
//                         name="from_date"
//                         value={filters.from_date}
//                         onChange={(e) =>
//                             handleInputChange("from_date", e.target.value)
//                         }
//                         className="mt-1 block w-full"
//                     />
//                 </div>

//                 <div className="flex flex-col w-full  sm:w-1/2 md:w-1/5">
//                     <InputLabel htmlFor="to_date" value="To Date" />
//                     <TextInput
//                         type="date"
//                         name="to_date"
//                         value={filters.to_date}
//                         onChange={(e) =>
//                             handleInputChange("to_date", e.target.value)
//                         }
//                         className="mt-1 block w-full"
//                     />
//                 </div>
//                 <div className="flex items-center justify-end mt-5">
//                     <button
//                         className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
//                         type="submit"
//                     >
//                         Search
//                     </button>

//                     <button
//                         className="px-4 h-[30px] text-logo-text-color border font-bold border-logo-text-color gap-0 rounded-lg ml-2"
//                         type="button"
//                         onClick={handleReset}
//                     >
//                         Reset
//                     </button>
//                 </div>
//                 </div>
//         </form>
//     );
// };

// export default FilterForm;

import React, { useState } from "react";
import InputLabel from "../components/InputLabel";
import DropdownSelect from "../components/DropdownSelect";
import ReactDatePicker from "react-datepicker";

const formatDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const FilterForm = ({
  EmployeeName,
  LeaveType,
  handleSearch,
  LeaveStatus,
  handleReset,
  FormDate,
  ToDate,
  EmpStatus,
  Designation,
  Department,
  Locations,
}) => {
  const [filters, setFilters] = useState({
    emp_first_name: "",
    from_date: "",
    to_date: "",
    type_name: "",
    emp_status: "",
    desi_name:"",
    dept_name:"",
    location:"",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedFilters = {
      ...filters,
      from_date: formatDate(filters.from_date),
      to_date: formatDate(filters.to_date),
    };
    handleSearch(formattedFilters);
  };

  const handleInputChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 text-sm mt-2 px-2"
    >
      <div className="flex flex-wrap gap-2">
        {EmployeeName && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="employee_name" value="Employee Name" />
            <DropdownSelect
              className="mt-1 w-full"
              name="employee_name"
              placeholder="Select Employee..."
              options={[
                { value: "", label: "Select Employee" },
                ...EmployeeName,
              ]}
              value={filters.emp_first_name}
              onSelect={(selectedOption) =>
                handleInputChange("emp_first_name", selectedOption?.value)
              }
            />
          </div>
        )}
        {Locations && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="location_name" value="Location" />
            <DropdownSelect
              className="mt-1 w-full"
              name="location_name"
              placeholder="Select Location..."
              options={[
                { value: "", label: "Select Location" },
                ...EmployeeName,
              ]}
              value={filters.location}
              onSelect={(selectedOption) =>
                handleInputChange("location", selectedOption?.value)
              }
            />
          </div>
        )}

        {Department && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="department_name" value="Department" />
            <DropdownSelect
              className="mt-1 w-full"
              name="employee_name"
              placeholder="Select Department..."
              options={[
                { value: "", label: "Select Employee" },
                ...EmployeeName,
              ]}
              value={filters.dept_name}
              onSelect={(selectedOption) =>
                handleInputChange("dept_name", selectedOption?.value)
              }
            />
          </div>
        )}
        {Designation && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="designation_name" value="Designation" />
            <DropdownSelect
              className="mt-1 w-full"
              name="employee_name"
              placeholder="Select Designation..."
              options={[
                { value: "", label: "Select Designation" },
                ...EmployeeName,
              ]}
              value={filters.dsgi_name}
              onSelect={(selectedOption) =>
                handleInputChange("dsgi_name", selectedOption?.value)
              }
            />
          </div>
        )}

        {EmpStatus && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="employee_status" value="Employee Status" />
            <DropdownSelect
              className="mt-1 w-full"
              name="employee_status"
              placeholder="Select Status..."
              options={[{ value: "", label: "Select Status" }, ...EmployeeName]}
              value={filters.emp_status}
              onSelect={(selectedOption) =>
                handleInputChange("emp_status", selectedOption?.value)
              }
            />
          </div>
        )}

        {LeaveType && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="leave_type" value="Leave Type" />
            <DropdownSelect
              className="mt-1 w-full"
              name="leave_type"
              placeholder="Select Leave Type..."
              options={[
                { value: "", label: "Select Leave Type" },
                ...LeaveType,
              ]}
              value={filters.type_name}
              onSelect={(selectedOption) =>
                handleInputChange("type_name", selectedOption?.value)
              }
            />
          </div>
        )}

        {LeaveStatus && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="leave_status" value="Leave Status" />
            <DropdownSelect
              className="mt-1 w-full"
              name="leave_status"
              placeholder="Select Leave Status..."
              options={[
                { value: "", label: "Select Leave Status" },
                ...LeaveStatus,
              ]}
              value={filters.status}
              onSelect={(selectedOption) =>
                handleInputChange("leave_status", selectedOption?.value)
              }
            />
          </div>
        )}

        {FormDate && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="from_date" value="From Date" />
            <ReactDatePicker
              selected={filters.from_date ? new Date(filters.from_date) : null}
              onChange={(date) =>
                handleInputChange(
                  "from_date",
                  date ? date.toISOString().split("T")[0] : ""
                )
              }
              dateFormat="yyyy/MM/dd"
              placeholderText="Select From Date"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        )}

        {ToDate && (
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/5">
            <InputLabel htmlFor="to_date" value="To Date" />
            <ReactDatePicker
              selected={filters.to_date ? new Date(filters.to_date) : null}
              onChange={(date) =>
                handleInputChange(
                  "to_date",
                  date ? date.toISOString().split("T")[0] : ""
                )
              }
              dateFormat="yyyy/MM/dd"
              placeholderText="Select To Date"
              className="mt-1  block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        )}

        <div className="flex items-center justify-end mt-5">
          <button
            className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
            type="submit"
          >
            Search
          </button>
          <button
            className="px-4 h-[30px] text-logo-text-color border font-bold border-logo-text-color gap-0 rounded-lg ml-2"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
