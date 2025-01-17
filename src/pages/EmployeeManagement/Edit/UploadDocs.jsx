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

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFormData, resetFormData } from '../../../redux/reducers/employeeDocsUpload';
// import FormLayout from '../../../layout/FormLayout';
// import TextInput from '../../../components/TextInput';
// import DropdownSelect from '../../../components/DropdownSelect';
// import InputLabel from '../../../components/InputLabel';
// import TextArea from '../../../components/TextArea';

// function UploadDocs() {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.employeeDocsUpload);

//   const handleInputChange = (name, value) => {
//     dispatch(setFormData({ [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//     dispatch(resetFormData());
//   };

//   const docsTypeOptions = [
//     { value: 'resume', label: 'Resume' },
//     { value: 'aadhar card', label: 'Aadhar Card' },
//     { value: 'pan card', label: 'PAN Card' },
//     { value: 'photo copy', label: 'Photo Copy' },
//     { value: 'previous employee exp certificate', label: 'Previous Employee Experience Certificate' },
//     { value: 'salary slip', label: 'Salary Slip' },
//     { value: 'educational certificate', label: 'Educational Certificate' },
//   ];

//   return (
//     <FormLayout
//       content={{
//         submit: 'Submit',
//       }}
//       onSubmit={handleSubmit}
//       className="p-6 bg-white rounded-md"
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
//                 handleInputChange('docsType', option.value)
//               }
//               value={docsTypeOptions.find(
//                 (option) => option.value === formData.docsType
//               )}
//               placeholder="Select Document Type"
//               className="mt-1 w-full"
//             />
//           </div>
//         </div>

//         <div className="col-span-1 flex flex-col">
//           <InputLabel htmlFor="docsUpload" value="Document Upload" />
//           <TextInput
//             type="file"
//             id="docsUpload"
//             name="docsUpload"
//             placeholder="Enter project cost"
//             className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//             value={formData.docsUpload}
//             onChange={(e) => handleInputChange('docsUpload', e.target.value)}
//           />
//         </div>

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
//               onChange={(e) => handleInputChange('description', e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//     </FormLayout>
//   );
// }

// export default UploadDocs;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormData,
  resetFormData,
} from "../../../redux/reducers/employeeDocsUpload";
import { useForm } from "react-hook-form";
import FormLayout from "../../../layout/FormLayout";
import InputField from "../../../components/InputField";
import DropdownSelectNew from "../../../components/DropdownSelectNew";
import { showSuccessToast, showErrorToast } from "../../../Utils/ToastsUtils"; // Import toast functions

function UploadDocs() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeeDocsUpload);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm({
    defaultValues: formData,
  });

  React.useEffect(() => {
    setValue("docsType", formData.docsType);
    setValue("docsUpload", formData.docsUpload);
    setValue("description", formData.description);
  }, [formData, setValue]);

  const handleInputChange = (name, value) => {
    dispatch(setFormData({ [name]: value }));
  };

  // const handleSubmitForm = (data) => {
  //   try {
  //     console.log("Submitted Data:", data);
  //     console.log("Saved Data:", data.employeeDocsUpload);
  //     dispatch(resetFormData());
  //     showSuccessToast("Document Uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error Document upload details:", error);
  //     showErrorToast(
  //       "An error occurred while uploading document. Please try again."
  //     );
  //   }
  // };

  const handleSubmitForm = (data) => {
    try {
      console.log("Submitted Data:", data);
      console.log("Saved Data in Redux:", formData); 
      console.log("Uploaded File:", formData.docsUpload); 
      dispatch(resetFormData());
      showSuccessToast("Document Uploaded successfully!");
      reset();
    } catch (error) {
      console.error("Error Document upload details:", error);
      showErrorToast(
        "An error occurred while uploading the document. Please try again."
      );
    }
  };

  const docsTypeOptions = [
    { value: "resume", label: "Resume" },
    { value: "aadhar card", label: "Aadhar Card" },
    { value: "pan card", label: "PAN Card" },
    { value: "photo copy", label: "Photo Copy" },
    {
      value: "previous employee exp certificate",
      label: "Previous Employee Experience Certificate",
    },
    { value: "salary slip", label: "Salary Slip" },
    { value: "educational certificate", label: "Educational Certificate" },
  ];

  return (
    <FormLayout
      content={{
        submit: "Submit",
      }}
      onSubmit={handleSubmit(handleSubmitForm)}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: 500 }}
    >
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-1">
          <div className="flex flex-col">
            <DropdownSelectNew
              label="Document Type"
              name="docsType"
              options={docsTypeOptions}
              onSelect={(option) => {
                handleInputChange("docsType", option.value);
                setValue("docsType", option.value);
              }}
              value={docsTypeOptions.find(
                (option) => option.value === formData.docsType
              )}
              placeholder="Select Document"
              control={control}
              rules={{ required: "Document type is required" }}
              className=""
              setValue={setValue}
              required
            />
            {errors.docsType && (
              <p className="text-red-500 text-xs">{errors.docsType.message}</p>
            )}
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          {/* <InputField
            name="Document Upload"
            placeholder="Upload Docs"
            inputClassName="h-9 rounded-md"
            type="file"
            register={register(`docsUpload`)}
          /> */}
          <InputField
            name="Document Upload"
            placeholder="Upload Docs"
            inputClassName="h-9 rounded-md"
            type="file"
            register={register("docsUpload")}
            onChange={({ value }) => {
              if (value) {
                handleInputChange("docsUpload", value);
                setValue("docsUpload", value); 
              }
            }}
          />
        </div>

        <div className="col-span-2">
          <div className="flex flex-col">
            <InputField
              name="Description"
              placeholder="Description"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={1}
              register={register(`description`)}
            />
          </div>
        </div>
      </div>
    </FormLayout>
  );
}

export default UploadDocs;
