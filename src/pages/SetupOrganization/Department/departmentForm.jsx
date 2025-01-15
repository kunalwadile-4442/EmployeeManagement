// import AuthenticatedLayout from "../../../layout/AuthenticatedLayout";
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setDesignationFormData,
//   resetDesignationFormData,
// } from "../../../redux/reducers/orgDesignationReducer";
// import FormLayout from "../../../layout/FormLayout";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import InputField from "../../../components/InputField";
// import DropdownSelectNew from "../../../components/DropdownSelectNew";

// function DepartmentForm({ id }) {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.orgDesignation || {});
//   const navigate = useNavigate();
//   const {
//     register,
//     control,
//     setValue,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm({
//     defaultValues: formData,
//   });

//   useEffect(() => {
//     if (id) {
//       const fetchedData = {
//         company: "Appristine",
//         departmentName: "HR",
//         designation: "Manager",
//       };
//       dispatch(setDesignationFormData(fetchedData));
//     }
//   }, [id, dispatch]);

//   const branchOptions = [
//     { value: "Pune", label: "Pune" },
//     { value: "Solapur", label: "Solapur" },
//     { value: "Engineering", label: "Engineering" },
//     { value: "Marketing", label: "Marketing" },
//   ];

//   const handleInputChange = (name, value) => {
//     dispatch(setDesignationFormData({ [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     dispatch(resetDesignationFormData());
//   };

//   return (
//     <AuthenticatedLayout
//       top_heading={"Department Details"}
//       back={"Back"}
//       handleBackClick={() => navigate(-1)}
//     >
//       <FormLayout
//         content={{ submit: "Submit" }}
//         onSubmit={handleSubmit}
//         className="px-4 py-2 bg-white rounded-md"
//         style={{ height: 500 }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputField
//               name="Department Name"
//               placeholder="Enter Department Name"
//               className=" "
//               inputClassName="h-9 rounded-md"
//               register={register(`department`, {
//                 required: "Department is required",
//               })}
//               required
//               error={errors?.department}
//             />
//           </div>
//           <div className="mb-4">
//             <DropdownSelectNew
//               label="Branch"
//               name="departmentName"
//               options={branchOptions}
//               onSelect={(option) => {
//                 handleInputChange("departmentName", option.value);
//                 setValue("departmentName", option.value);
//               }}
//               value={branchOptions.find(
//                 (option) => option.value === formData.departmentName
//               )}
//               placeholder="Select Branch"
//               control={control}
//               rules={{ required: "Branch  is required" }}
//               className=""
//               setValue={setValue}
//               required
//             />
//             {errors.departmentName && (
//               <p className="text-red-500 text-xs">
//                 {errors.departmentName.message}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputField
//               name="Department Lead"
//               placeholder="Enter Department Lead"
//               className=" "
//               inputClassName="h-9 rounded-md"
//               register={register(`departmentLead`, {
//                 required: "Department Lead is required",
//               })}
//               required
//               error={errors?.departmentLead}
//             />
//           </div>
//         </div>
//       </FormLayout>
//     </AuthenticatedLayout>
//   );
// }


// export default DepartmentForm;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDesignationFormData,
  resetDesignationFormData,
} from "../../../redux/reducers/orgDesignationReducer";
import FormLayout from "../../../layout/FormLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../../../components/InputField";
import DropdownSelectNew from "../../../components/DropdownSelectNew";

function DepartmentForm({ id }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.orgDesignation || {});
  const navigate = useNavigate();
  const {
    register,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit, // Use handleSubmit from react-hook-form
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    if (id) {
      const fetchedData = {
        company: "Appristine",
        departmentName: "HR",
        designation: "Manager",
      };
      dispatch(setDesignationFormData(fetchedData));
    }
  }, [id, dispatch]);

  const branchOptions = [
    { value: "Pune", label: "Pune" },
    { value: "Solapur", label: "Solapur" },
    { value: "Engineering", label: "Engineering" },
    { value: "Marketing", label: "Marketing" },
  ];

  const handleInputChange = (name, value) => {
    dispatch(setDesignationFormData({ [name]: value }));
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    dispatch(resetDesignationFormData());
    navigate("/organization/departments")
  };

  return (
   
      <FormLayout
        content={{ submit: "Submit" }}
        onSubmit={handleSubmit(onSubmit)} // Use handleSubmit here
        className="px-4 py-2 bg-white rounded-md"
        style={{ height: 500 }}
        back
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="Department Name"
              placeholder="Enter Department Name"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register(`department`, {
                required: "Department is required",
              })}
              required
              error={errors?.department} // Show error if it exists
            />
          </div>
          <div className="mb-4">
            <DropdownSelectNew
              label="Branch"
              name="departmentName"
              options={branchOptions}
              onSelect={(option) => {
                handleInputChange("departmentName", option.value);
                setValue("departmentName", option.value);
              }}
              value={branchOptions.find(
                (option) => option.value === formData.departmentName
              )}
              placeholder="Select Branch"
              control={control}
              rules={{ required: "Branch is required" }} // Add validation rules here
              className=""
              setValue={setValue}
              required
            />
            {errors.departmentName && (
              <p className="text-red-500 text-xs">
                {errors.departmentName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="Department Lead"
              placeholder="Enter Department Lead"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register(`departmentLead`, {
                required: "Department Lead is required",
              })}
              required
              error={errors?.departmentLead} // Show error if it exists
            />
          </div>
        </div>
      </FormLayout>
  );
}

export default DepartmentForm;
