// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setFormData,
//   resetFormData,
// } from "../../redux/reducers/employeeCreateSlice";
// import AuthenticatedLayout from "../../layout/AuthenticatedLayout";
// import FormLayout from "../../layout/FormLayout";
// import TextInput from "../../components/TextInput";
// import Checkbox from "../../components/Checkbox";
// import ReactDatePicker from "react-datepicker";
// import InputLabel from "../../components/InputLabel";
// import { format } from "date-fns";
// import TextArea from "../../components/TextArea";
// import { useNavigate } from "react-router-dom";

// function CreateEmp() {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.employeeCreate);
//   const navigate = useNavigate();

//   const handleInputChange = (name, value) => {
//     dispatch(setFormData({ [name]: value }));
//   };

//   const handleDateChange = (name, date) => {
//     const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
//     handleInputChange(name, formattedDate);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     dispatch(resetFormData());
//   };
//   return (
//     <AuthenticatedLayout
//       top_heading={"Add New Employee"}
//       back={"Back"}
//       handleBackClick={() => navigate(-1)}
//     >
//       <FormLayout
//         content={{
//           submit: "Submit",
//         }}
//         onSubmit={handleSubmit}
//         className="p-6 bg-white  rounded-md"
//         style={{ height: 500 }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="emp_first_name" value="First Name" />
//             <TextInput
//               id="emp_FirstName"
//               name="first_name"
//               placeholder="First name"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.first_name}
//               onChange={(e) => handleInputChange("first_name", e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="emp_last_name" value="Last Name" />
//             <TextInput
//               id="emp_LastName"
//               name="last_name"
//               placeholder="Last name"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.last_name}
//               onChange={(e) => handleInputChange("last_name", e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-4 gap-4 mb-4">
//           <div className="col-span-2">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="emp_email" value="Email Address" />
//               <TextInput
//                 id="emp_LastName"
//                 name="email"
//                 placeholder="Email Address"
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange("email", e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="col-span-1">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="projectEndDate" value="Date of Birth" />
//               <ReactDatePicker
//                 selected={
//                   formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
//                 }
//                 onChange={(date) => handleDateChange("dateOfBirth", date)}
//                 dateFormat="yyyy/MM/dd"
//                 placeholderText="Select Birth Date"
//                 className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//               />
//             </div>
//           </div>

//           <div className="col-span-1 flex flex-row space-y-2">
//             <InputLabel htmlFor="gender" value="Gender" />

//             <div className="flex items-center space-x-4">
//               <InputLabel htmlFor="male" value="Male" />
//               <Checkbox
//                 id="male"
//                 name="male"
//                 checked={formData.male}
//                 onChange={(e) => handleInputChange("male", e.target.checked)}
//                 className="bg-[#140242] text-white "
//               />
//             </div>

//             <div className="flex items-center space-x-4 ml-4">
//               <InputLabel htmlFor="female" value="Female" />
//               <Checkbox
//                 id="female"
//                 name="female"
//                 checked={formData.female}
//                 onChange={(e) => handleInputChange("female", e.target.checked)}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="permanent_add" value="Permanent Address" />
//             <TextArea
//               id="permanent_add"
//               name="permanentAdd"
//               type="textarea"
//               rows={2}
//               placeholder="Permanent Address"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.permanentAdd}
//               onChange={(e) =>
//                 handleInputChange("permanentAdd", e.target.value)
//               }
//             />
//           </div>
//           <div className="mb-4">
//             <div className="flex flex-col">
//               <InputLabel htmlFor="last_name" value="Present Address" />
//               <TextArea
//                 id="present_add"
//                 name="presentAdd"
//                 rows={2}
//                 type="textarea"
//                 placeholder="Present Address"
//                 className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                 value={formData.presentAdd}
//                 onChange={(e) =>
//                   handleInputChange("presentAdd", e.target.value)
//                 }
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
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
//           <div className="mb-4">
//             <InputLabel htmlFor="employeeCode" value="Employee Code" />
//             <TextInput
//               id="employeeCode"
//               name="empCode"
//               placeholder="Enter project cost"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.empCode}
//               onChange={(e) => handleInputChange("empCode", e.target.value)}
//               disabled
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="mb-4">
//             <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
//             <ReactDatePicker
//               selected={
//                 formData.dateOfJoining ? new Date(formData.dateOfJoining) : null
//               }
//               onChange={(date) => handleDateChange("dateOfJoining", date)}
//               dateFormat="yyyy/MM/dd"
//               placeholderText="Select joining date"
//               className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//             />
//           </div>

//           <div className="mb-4">
//             <InputLabel htmlFor="empMobileNumber" value="Mobile Number" />
//             <TextInput
//               type="text"
//               id="empMobileNumber"
//               name="empMobileNumber"
//               placeholder="Enter mobile number"
//               className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//               value={formData.empMobileNumber}
//               onChange={(e) =>
//                 handleInputChange("empMobileNumber", e.target.value)
//               }
//             />
//           </div>
//         </div>
//       </FormLayout>
//     </AuthenticatedLayout>
//   );
// }

// export default CreateEmp;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setFormData,
  resetFormData,
} from "../../redux/reducers/employeeCreateSlice";
import FormLayout from "../../layout/FormLayout";
import Checkbox from "../../components/Checkbox";
import ReactDatePicker from "react-datepicker";
import InputLabel from "../../components/InputLabel";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";

function CreateEmp() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.employeeCreate);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });



  const genderMale = watch("male");
  const genderFemale = watch("female");

  const onSubmit = (data) => {
    dispatch(setFormData(data));
    console.log("Submitted Data:", data);
    dispatch(resetFormData());
    reset();
    navigate("/employee/info")
  };

 const handleDateChange = (name, date) => {
  setValue(name, date ? date.toISOString().split("T")[0] : null);
};;

  return (
   
      <FormLayout
        content={{
          submit: "Submit",
        }}
        onSubmit={handleSubmit(onSubmit)}
        className="px-4 py-2 bg-white rounded-md"
        style={{ height: 500 }}
        back
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="First Name"
              placeholder="Enter First Name"
              className=""
              inputClassName="h-9 rounded-md"
              register={register(`first_name`, {
                required: "First Name is required",
              })}
              required
              error={errors?.first_name}
            />
          </div>

          <div className="mb-4">
            <InputField
              name="Last Name"
              placeholder="Enter Last Name"
              className=""
              inputClassName="h-9 rounded-md"
              register={register(`last_name`, {
                required: "First Last is required",
              })}
              required
              error={errors?.last_name}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <InputField
              name="Email Address"
              placeholder="Enter Email"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register(`email`, {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              required
              error={errors?.email}
            />
          </div>

          <div>
            <InputLabel htmlFor="dateOfBirth" value="Date of Birth" />
            <ReactDatePicker
              selected={
                formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
              }
              onChange={(date) => handleDateChange("dateOfBirth", date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select Birth Date"
              className=" block w-full border border-gray-300 rounded-md px-2 py-1.5"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-row items-center gap-4">
            <InputLabel htmlFor="gender" value="Gender" />
            <div className="flex items-center gap-4">
              <Checkbox
                id="male"
                {...register("male")}
                checked={genderMale}
                onChange={(e) => setValue("male", e.target.checked)}
              />
              <InputLabel htmlFor="male" value="Male" />

              <Checkbox
                id="female"
                {...register("female")}
                checked={genderFemale}
                onChange={(e) => setValue("female", e.target.checked)}
              />
              <InputLabel htmlFor="female" value="Female" />
            </div>
          </div>
          <div>
            <InputField
              name="Mobile Number"
              placeholder="Enter Mobile Number"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register(`empMobileNumber`, {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              required
              error={errors?.empMobileNumber}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
          <InputField
              name="Profile Picture"
              placeholder="Choose Profile Picture"
              inputClassName="h-9 rounded-md"
              type="file"
              register={register(`empProfilePic`)}
            />
           
          </div>

          <div className="mb-4">
          <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
          <ReactDatePicker
  selected={
    formData.dateOfJoining ? new Date(formData.dateOfJoining) : null
  }
  onChange={(date) => handleDateChange("dateOfJoining", date)}
  dateFormat="yyyy/MM/dd"
  placeholderText="Select Joining Date"
  className=" block w-full border border-gray-300 rounded-md px-2 py-1.5"
/>
          
          </div>
        </div>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="Permanent Address"
              placeholder="Permanent Address"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={2}
              register={register(`permanentAdd`, {
                required: "Permanent Address required",
                
              })}
              required
              error={errors?.permanentAdd}
            />
           
          </div>

          <div className="mb-4">
            <InputField
              name="Present Address"
              placeholder="Present Address"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={2}
              register={register(`presentAdd`, {
                required: "Present Address required",
                
              })}
              required
              error={errors?.presentAdd}
            />
           
          
          </div>
        </div>
      </FormLayout>
  );
}

export default CreateEmp;
