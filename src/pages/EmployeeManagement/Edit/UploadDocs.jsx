// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setFormData,resetFormData } from "../../../redux/reducers/employeeEditReducer";
// import FormLayout from "../../../layout/FormLayout";
// import TextInput from "../../../components/TextInput";
// import DropdownSelect from "../../../components/DropdownSelect";
// import InputLabel from "../../../components/InputLabel";
// import TextArea from "../../../components/TextArea";

// function UploadDocs() {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.employeeEdit.formData);

//   const handleInputChange = (name, value) => {
//     dispatch(setFormData({ [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     dispatch(resetFormData());
//   };

//   const docsTypeOptions = [
//     { value: "resume", label: "Resume" },
//     { value: "aadhar card", label: "Aadhar Card" },
//     { value: "pan card", label: "PAN Card" },
//     { value: "photo copy", label: "Photo Copy" },
//     { value: "previous employee exp certificate", label: "Previous Employee Experience Certificate" },
//     { value: "salary slip", label: "Salary Slip" },
//     { value: "educational certificate", label: "Educational Certificate" },

//   ];
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
//             <InputLabel htmlFor="docs_type" value="Document Type" />
//             <DropdownSelect
//               id="docsType"
//               options={docsTypeOptions}
//               onSelect={(option) =>
//                 handleInputChange("docsType", option.value)
//               }
//               value={docsTypeOptions.find(
//                 (option) => option.value === formData.docsType
//               )}
//               placeholder="Select Document Type"
//               className="mt-1 w-full"
//             />
//           </div>
//         </div>

//         <div className="col-span-1 flex flex-col ">
//           <InputLabel htmlFor="docsUpload" value="Document Upload" />
//           <TextInput
//             type="file"
//             id="docsUpload"
//             name="docsUpload"
//             placeholder="Enter project cost"
//             className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.docsUpload}
//             onChange={(e) => handleInputChange("docsUpload", e.target.value)}
//           />
//         </div>

//         {/* Date of Birth */}
//         <div className="col-span-2">
//           <div className="flex flex-col">
//             <InputLabel htmlFor="description" value="Description" />
//             <TextArea
//               id="description"
//               name="description"
//               type="textarea"
//               rows={1}
//               placeholder="Description"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.description}
//               onChange={(e) =>
//                 handleInputChange("description", e.target.value)
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </FormLayout>
//   );
// }

// export default UploadDocs;

// components/UploadDocs.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData, resetFormData } from '../../../redux/reducers/employeeDocsUpload';
import FormLayout from '../../../layout/FormLayout';
import TextInput from '../../../components/TextInput';
import DropdownSelect from '../../../components/DropdownSelect';
import InputLabel from '../../../components/InputLabel';
import TextArea from '../../../components/TextArea';

function UploadDocs() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeeDocsUpload);

  const handleInputChange = (name, value) => {
    dispatch(setFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    dispatch(resetFormData());
  };

  const docsTypeOptions = [
    { value: 'resume', label: 'Resume' },
    { value: 'aadhar card', label: 'Aadhar Card' },
    { value: 'pan card', label: 'PAN Card' },
    { value: 'photo copy', label: 'Photo Copy' },
    { value: 'previous employee exp certificate', label: 'Previous Employee Experience Certificate' },
    { value: 'salary slip', label: 'Salary Slip' },
    { value: 'educational certificate', label: 'Educational Certificate' },
  ];

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
            <InputLabel htmlFor="docs_type" value="Document Type" />
            <DropdownSelect
              id="docsType"
              options={docsTypeOptions}
              onSelect={(option) =>
                handleInputChange('docsType', option.value)
              }
              value={docsTypeOptions.find(
                (option) => option.value === formData.docsType
              )}
              placeholder="Select Document Type"
              className="mt-1 w-full"
            />
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <InputLabel htmlFor="docsUpload" value="Document Upload" />
          <TextInput
            type="file"
            id="docsUpload"
            name="docsUpload"
            placeholder="Enter project cost"
            className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={formData.docsUpload}
            onChange={(e) => handleInputChange('docsUpload', e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <div className="flex flex-col">
            <InputLabel htmlFor="description" value="Description" />
            <TextArea
              id="description"
              name="description"
              type="textarea"
              rows={1}
              placeholder="Description"
              className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </div>
        </div>
      </div>
    </FormLayout>
  );
}

export default UploadDocs;
