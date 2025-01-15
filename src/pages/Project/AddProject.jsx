// import React from "react";
// import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
// import FormLayout from "../../layout/FormLayout";
// import TextInput from "../../components/TextInput";
// import DropdownSelect from "../../components/DropdownSelect";
// import Checkbox from "../../components/Checkbox";
// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Add this line if needed
// import InputLabel from "../../components/InputLabel"; // Your custom InputLabel component

// function AddProject() {
//   const [formData, setFormData] = React.useState({
//     projectName: "",
//     projectManager: "",
//     projectStartDate: null,
//     projectEndDate: null,
//     projectDueDate: null,
//     projectCost: "",
//     projectAssignTo: "",
//     onTestServer: false,
//     onLiveServer: false,
//     closed: false,
//   });

//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <AuthenticatedLayout top_heading={"Add New Project"}>
//         <FormLayout
//           formTitle="Add New Project"
//           content={{
//             submit: "Submit",
//             cancel: "Cancel",
//           }}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="mb-4">
//               <InputLabel htmlFor="projectName" value="Enter Project Name" />
//               <TextInput
//                 id="projectName"
//                 name="projectName"
//                 placeholder="Enter project name"
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 value={formData.projectName}
//                 onChange={(e) => handleInputChange("projectName", e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <InputLabel htmlFor="projectManager" value="Project Manager" />
//               <DropdownSelect
//                 id="projectManager"
//                 name="projectManager"
//                 options={[
//                   { value: "1", label: "Manager 1" },
//                   { value: "2", label: "Manager 2" },
//                 ]}
//                 value={formData.projectManager}
//                 onSelect={(selected) =>
//                   handleInputChange("projectManager", selected.value)
//                 }
//                 className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//              <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectStartDate" value="Project Start Date" />
//               <ReactDatePicker
//                 selected={formData.projectStartDate}
//                 onChange={(date) => handleInputChange("projectStartDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select Start Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//             </div>
//             <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectEndDate" value="Project End Date" />
//               <ReactDatePicker
//                 selected={formData.projectEndDate}
//                 onChange={(date) => handleInputChange("projectEndDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select End Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="mb-4">
//               <InputLabel htmlFor="projectAssignTo" value="Project Assign To" />
//               <DropdownSelect
//                 id="projectAssignTo"
//                 name="projectAssignTo"
//                 options={[
//                   { value: "1", label: "Employee 1" },
//                   { value: "2", label: "Employee 2" },
//                 ]}
//                 value={formData.projectAssignTo}
//                 onSelect={(selected) =>
//                   handleInputChange("projectAssignTo", selected.value)
//                 }
//                 className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:outline-none"
//               />
//             </div>
//             <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectDueDate" value="Project Due Date" />
//               <ReactDatePicker
//                 selected={formData.projectDueDate}
//                 onChange={(date) => handleInputChange("projectDueDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select Due Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="mb-4">
//               <InputLabel htmlFor="projectCost" value="Project Cost" />
//               <TextInput
//                 type="text"
//                 id="projectCost"
//                 name="projectCost"
//                 placeholder="Enter project cost"
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 value={formData.projectCost}
//                 onChange={(e) => handleInputChange("projectCost", e.target.value)}
//               />
//             </div>
//             <div className="mt-1 flex flex-row justify-between mx-4">
//               <div className="space-y-1">
//                 <InputLabel htmlFor="onTestServer" value="On Test Server" />
//                 <Checkbox
//                   id="onTestServer"
//                   name="onTestServer"
//                   checked={formData.onTestServer}
//                   className="py-1.5"
//                   onChange={(e) =>
//                     handleInputChange("onTestServer", e.target.checked)
//                   }
//                 />
//               </div>

//               <div className="space-y-1">
//                 <InputLabel htmlFor="onLiveServer" value="On Live Server" />
//                 <Checkbox
//                   id="onLiveServer"
//                   name="onLiveServer"
//                   checked={formData.onLiveServer}
//                   onChange={(e) =>
//                     handleInputChange("onLiveServer", e.target.checked)
//                   }
//                 />
//               </div>

//               <div className="space-y-1">
//                 <InputLabel htmlFor="closed" value="Closed" />
//                 <Checkbox
//                   id="closed"
//                   name="closed"
//                   checked={formData.closed}
//                   onChange={(e) => handleInputChange("closed", e.target.checked)}
//                 />
//               </div>
//             </div>
//           </div>
//         </FormLayout>
//       </AuthenticatedLayout>
//     </>
//   );
// }

// export default AddProject;

// Changes Required then working

// import React from "react";
// import FormLayout from "../../layout/FormLayout";
// import TextInput from "../../components/TextInput";
// import DropdownSelect from "../../components/DropdownSelect";
// import Checkbox from "../../components/Checkbox";
// import ReactDatePicker from "react-datepicker";
// import InputLabel from "../../components/InputLabel";
// import { useNavigate } from "react-router-dom";

// function AddProject() {
//   const initialFormState = {
//     projectName: "",
//     projectManager: "",
//     projectStartDate: null,
//     projectEndDate: null,
//     projectDueDate: null,
//     projectCost: "",
//     projectAssignTo: "",
//     onTestServer: false,
//     onLiveServer: false,
//     closed: false,
//   };

//   const [formData, setFormData] = React.useState(initialFormState);
// const navigate =  useNavigate();
//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);

//     setFormData(initialFormState);
//   };

//   const handleCancel = () => {
//     console.log("Form cancelled");
//     setFormData(initialFormState);
//   };

//   return (
//       <FormLayout
//         content={{
//           submit: "Submit",
//           cancel: "Cancel",
//           onCancel: handleCancel,
//         }}
//         onSubmit={handleSubmit}
//         className="px-4 py-2 bg-white rounded-md"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="projectName" value="Enter Project Name" />
//             <TextInput
//               id="projectName"
//               name="projectName"
//               placeholder="Enter project name"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.projectName}
//               onChange={(e) => handleInputChange("projectName", e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="projectManager" value="Project Manager" />
//             <DropdownSelect
//               id="projectManager"
//               name="projectManager"
//               options={[
//                 { value: "1", label: "Manager 1" },
//                 { value: "2", label: "Manager 2" },
//               ]}
//               value={formData.projectManager}
//               onSelect={(selected) =>
//                 handleInputChange("projectManager", selected.value)
//               }
//               className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:outline-none"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel
//                 htmlFor="projectStartDate"
//                 value="Project Start Date"
//               />
//               <ReactDatePicker
//                 selected={formData.projectStartDate}
//                 onChange={(date) => handleInputChange("projectStartDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select Start Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectEndDate" value="Project End Date" />
//               <ReactDatePicker
//                 selected={formData.projectEndDate}
//                 onChange={(date) => handleInputChange("projectEndDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select End Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="projectAssignTo" value="Project Assign To" />
//             <DropdownSelect
//               id="projectAssignTo"
//               name="projectAssignTo"
//               options={[
//                 { value: "1", label: "Employee 1" },
//                 { value: "2", label: "Employee 2" },
//               ]}
//               value={formData.projectAssignTo}
//               onSelect={(selected) =>
//                 handleInputChange("projectAssignTo", selected.value)
//               }
//               className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectDueDate" value="Project Due Date" />
//               <ReactDatePicker
//                 selected={formData.projectDueDate}
//                 onChange={(date) => handleInputChange("projectDueDate", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select Due Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="projectCost" value="Project Cost" />
//             <TextInput
//               type="text"
//               id="projectCost"
//               name="projectCost"
//               placeholder="Enter project cost"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.projectCost}
//               onChange={(e) => handleInputChange("projectCost", e.target.value)}
//             />
//           </div>
//           <div className="mt-1 flex flex-row justify-between mx-4">
//             <div className="space-y-1">
//               <InputLabel htmlFor="onTestServer" value="On Test Server" />
//               <Checkbox
//                 id="onTestServer"
//                 name="onTestServer"
//                 checked={formData.onTestServer}
//                 className="p-4"
//                 onChange={(e) =>
//                   handleInputChange("onTestServer", e.target.checked)
//                 }
//               />
//             </div>

//             <div className="space-y-1">
//               <InputLabel htmlFor="onLiveServer" value="On Live Server" />
//               <Checkbox
//                 id="onLiveServer"
//                 name="onLiveServer"
//                 checked={formData.onLiveServer}
//                 className="p-4"
//                 onChange={(e) =>
//                   handleInputChange("onLiveServer", e.target.checked)
//                 }
//               />
//             </div>

//             <div className="space-y-1">
//               <InputLabel htmlFor="closed" value="Closed" />
//               <Checkbox
//                 id="closed"
//                 name="closed"
//                 checked={formData.closed}
//                 className="p-4"
//                 onChange={(e) => handleInputChange("closed", e.target.checked)}
//               />
//             </div>
//           </div>
//         </div>
//       </FormLayout>
//   );
// }

// export default AddProject;
import React from 'react'

function AddProject() {
  return (
    <div>AddProject</div>
  )
}

export default AddProject