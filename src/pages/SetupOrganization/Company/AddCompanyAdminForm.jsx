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
  setCompanyAdminFormData,
  resetCompanyAdminFormData,
} from "../../../redux/reducers/CompanyCreateAdminReducer";
import FormLayout from "../../../layout/FormLayout";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputField from "../../../components/InputField";
import { showSuccessToast } from "../../../Utils/ToastsUtils";

function AddCompanyAdminForm({ id }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.companyAdmin || {});
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    if (id) {
      const fetchedData = {
        companyName: "Appristine",
        contactEmail: "hr@appristine.com",
        contactPhone: "1234567890",
        teamSize: "10",
        website: "https://www.appristine.com",
        password: "password123",
      };
      dispatch(setCompanyAdminFormData(fetchedData));
      reset(fetchedData);
    }
  }, [id, dispatch, reset]);

   const onSubmit = (data) => {
    console.log("Submitted Data:", data);
      showSuccessToast("Form Submitted Successfully!");
      dispatch(resetCompanyAdminFormData());
        setTimeout(() => {
          navigate("/organization/company/list");
        }, 500); 
    };

 
  return (
    <FormLayout
      content={{ submit: "Submit" }}
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: 500 }}
      back
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputField
            name="Company Name"
            placeholder="Enter Company Name"
            inputClassName="h-9 rounded-md"
            register={register("companyName", {
              required: "Company Name is required",
            })}
            required
            error={errors?.companyName}
          />
        </div>
        <div className="mb-4">
          <InputField
            name="Contact Email"
            placeholder="Enter Email"
            inputClassName="h-9 rounded-md"
            register={register("contactEmail", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email address",
              },
            })}
            required
            error={errors?.contactEmail}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputField
            name="Contact Phone"
            placeholder="Enter Phone Number"
            inputClassName="h-9 rounded-md"
            // register={register("", { required: "Phone Number is required" })}
            register={register("contactPhone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            })}
            required
            error={errors?.contactPhone}
          />
        </div>
        <div className="mb-4">
          <InputField
            name="Team Size"
            placeholder="Enter Team Size"
            inputClassName="h-9 rounded-md"
            register={register("teamSize", {
              required: "Team Size is required",
            })}
            required
            error={errors?.teamSize}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputField
            name="Website"
            placeholder="Enter Website URL"
            inputClassName="h-9 rounded-md"
            register={register("website")}
            error={errors?.website}
          />
        </div>
        <div className="mb-4">
          <InputField
            name="Password"
            type="password"
            placeholder="Enter Password"
            inputClassName="h-9 rounded-md"
            register={register("password", {
              required: "Password is required",
            })}
            required
            error={errors?.password}
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default AddCompanyAdminForm;
