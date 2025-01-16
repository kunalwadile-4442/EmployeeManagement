// import React, { useEffect,useState } from "react";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
// import { setBasicDetails } from "../../../redux/reducers/employeeBasicDetails";
// import ReactDatePicker from "react-datepicker";
// import FormLayout from "../../../layout/FormLayout";
// import InputLabel from "../../../components/InputLabel";
// import { format } from "date-fns";
// import { basicDetails } from "../../../Utils/constants/Common";
// import InputField from "../../../components/InputField";
// import DropdownSelectNew from "../../../components/DropdownSelectNew";
// import RadioButton from "../../../components/RadioButton";

// function BasicInfo({ id }) {
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     watch,
//     control,
//     formState: { errors },
//   } = useForm();
//   useEffect(() => {
//     if (basicDetails && Object.keys(basicDetails).length > 0) {
//       reset({
//         first_name: basicDetails.first_name,
//         last_name: basicDetails.last_name,
//         empEmail: basicDetails.empEmail,
//         password: basicDetails.password,
//         bank: basicDetails.bank,
//         panCard: basicDetails.panCard,
//         dateOfBirth: basicDetails.dateOfBirth,
//         gender: basicDetails.gender,
//         // male: basicDetails.male,
//         // female: basicDetails.female,
//         empProfilePic: basicDetails.empProfilePic,
//         permanentAdd: basicDetails.permanentAdd,
//         presentAdd: basicDetails.presentAdd,
//         empMobileNumber: basicDetails.empMobileNumber,
//         postCode: basicDetails.postCode,
//         city: basicDetails.city,
//         states: basicDetails.states,
//         departmentName: basicDetails.departmentName,
//         locationName: basicDetails.locationName,
//         designationName: basicDetails.designationName,
//         report_to: basicDetails.report_to,
//         dateOfJoining: basicDetails.dateOfJoining,
//         yearlyExperience: basicDetails.yearlyExperience,
//         monthlyExperience: basicDetails.monthlyExperience,
//         employeeType: basicDetails.employeeType,
//         jobName: basicDetails.jobName,
//         employeeStatus: basicDetails.employeeStatus,
//         basicSalary: basicDetails.basicSalary,
//       });
//     }
//   }, []);

//   const handleInputChange = (name, value) => {
//     dispatch(setBasicDetails({ [name]: value }));
//   };

//   const [selectedGender, setSelectedGender] = useState("");
//   const handleRadioChange = (value) => {
//     console.log("New selected value:", value);
//      const genderValue = String(value);
//     console.log("Selected Value:", genderValue);
//       setValue("gender", genderValue);

//     dispatch(setBasicDetails({ gender: genderValue }));
//     setSelectedGender(value);
//   };
//   const onSubmit = (data) => {
//     console.log("Submitted Data:", data);
//     console.log("Form submitted, gender is:", data.gender);
//     dispatch(setBasicDetails(data));
//     reset();
//   };

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  setBasicDetails,
  resetBasicDetails,
  setGender,
} from "../../../redux/reducers/employeeBasicDetails";
import ReactDatePicker from "react-datepicker";
import FormLayout from "../../../layout/FormLayout";
import InputLabel from "../../../components/InputLabel";
import { format } from "date-fns";
import InputField from "../../../components/InputField";
import DropdownSelectNew from "../../../components/DropdownSelectNew";
import RadioButton from "../../../components/RadioButton";
import { showSuccessToast, showErrorToast } from "../../../Utils/ToastsUtils";

function BasicInfo() {
  const dispatch = useDispatch();
  const basicDetails = useSelector(
    (state) => state.employeeBasicDetails.basicDetails
  );


  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: basicDetails,
  });

  const onSubmit = (data) => {
    try {
      console.log("Submitted Data:", data);
      dispatch(setBasicDetails(data));
      showSuccessToast("Basic details saved successfully!");
      dispatch(resetBasicDetails());
      reset();
    } catch (error) {
      console.error("Error saving basic details:", error);
      showErrorToast(
        "An error occurred while saving basic details. Please try again."
      );
    }
  };

  const handleInputChange = (name, value) => {
    dispatch(setBasicDetails({ [name]: value }));
  };
  const radioOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

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
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
  ];

  const monthOptions = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
  ];

  const employeeStatusOptions = [
    { value: "active", label: "Active" },
    { value: "terminated", label: "Terminated" },
    { value: "resigned", label: "Resigned" },
    { value: "deceased", label: "Deceased" },
  ];

  const employeeTypeOptions = [
    { value: "Permanent", label: "Permanent" },
    { value: "Temporary", label: "Temporary" },
    { value: "On Contract", label: "On Contract" },
    { value: "Trainee", label: "Trainee" },
  ];
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
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: "calc(100vh - 140px)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <InputField
            name="First Name"
            placeholder="Enter First Name"
            className=" mt-2"
            inputClassName="h-9 rounded-md"
            register={register(`first_name`, {
              required: "First Name is required",
              // maxLength: {
              //   value: 255,
              //   message: "Customer person name cannot exceed 255 characters",
              // },
            })}
            error={errors?.first_name}
            required
          />
        </div>
        <div className="">
          <InputField
            name="Last Name"
            placeholder="Enter Last Name"
            className=" mt-2"
            inputClassName="h-9 rounded-md"
            register={register(`last_name`, {})}
            error={errors?.last_name}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <InputField
            name="Bank"
            placeholder="Bank A/C"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`bank`, {
              required: "Bank Account Number is required",
            })}
            error={errors?.bank}
          />
        </div>
        <div className="">
          <InputField
            name="PAN Number"
            placeholder="PAN Number"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`panCard`, {
              required: "PAN Card Number is required",
            })}
            error={errors?.panCard}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        <div className="col-span-2">
          <InputField
            name="Email"
            placeholder="Enter Email"
            className="mt-3"
            inputClassName="h-9 rounded-md"
            register={register("empEmail", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
            error={errors?.empEmail}
            required
          />
        </div>
        <div className="col-span-2">
          <InputField
            name="Password"
            placeholder="Enter password"
            type="password"
            className="mt-3"
            inputClassName="h-9 rounded-md"
            register={register("password", {
              required: "Password is required",
              validate: (value) => {
                if (value.length < 6) {
                  return "Password must be at least 6 characters long.";
                }
                if (
                  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:;.,?]).{6,}$/.test(
                    value
                  )
                ) {
                  return "Password must include an uppercase letter, a lowercase letter, a digit, and a special character."; // Complexity message
                }
                return true;
              },
            })}
            error={errors?.password}
          />
        </div>
      </div>

      <div className="bg-[#fcf2fe] mb-3 mt-4 py-1.5 px-1">
        <h2 className=" text-md font-semibold transition-all duration-300">
          Current Working Details:
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Department Name"
            name="departmentName"
            options={departmentOptions}
            onSelect={(option) => {
              handleInputChange("departmentName", option.value);
              setValue("departmentName", option.value);
            }}
            value={departmentOptions.find(
              (option) => option.value === basicDetails.departmentName
            )}
            placeholder="Select Department"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <DropdownSelectNew
            label="Location Name"
            name="locationName"
            options={locationOptions}
            onSelect={(option) => {
              handleInputChange("locationName", option.value);
              setValue("locationName", option.value);
            }}
            value={locationOptions.find(
              (option) => option.value === basicDetails.locationName
            )}
            placeholder="Select Location"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Designation Name"
            name="designationName"
            options={designationOptions}
            onSelect={(option) => {
              handleInputChange("designationName", option.value);
              setValue("designationName", option.value);
            }}
            value={designationOptions.find(
              (option) => option.value === basicDetails.designationName
            )}
            placeholder="Select Designation"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <InputField
            name="Report"
            placeholder="Add Report"
            className=""
            inputClassName="h-9 rounded-md"
            register={register(`report_to`)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="col-span-2 mb-4">
          {/* <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
            <ReactDatePicker
            selected={watch("dateOfJoining") ? new Date(watch("dateOfJoining")) : null}
            onChange={(date) => {
              const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
              setValue("dateOfJoining", formattedDate, { shouldValidate: true });
            }}
            dateFormat="yyyy/MM/dd"
            placeholderText="Select Birth Date"
            className="block w-full border rounded-md px-2 py-1.5"
            {...register("dateOfJoining", {
              // required: "Date of Birth is required", 
            })}
          />
          {errors.dateOfJoining && (
            <p className="text-red-600 text-sm mt-1">
              {errors.dateOfJoining.message}
            </p>
          )} */}

          <InputLabel htmlFor="dateOfJoining" value="Date of Joining" />
          <ReactDatePicker
            selected={
              watch("dateOfJoining") ? new Date(watch("dateOfJoining")) : null
            }
            onChange={(date) => {
              const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
              setValue("dateOfJoining", formattedDate, {
                shouldValidate: true,
              });
            }}
            dateFormat="dd-MMM-yyyy"
            placeholderText="Select Joining Date"
            className="block w-full border rounded-md px-2 py-1.5"
            // required
          />
        </div>

        <div className="col-span-1 mb-4">
          <DropdownSelectNew
            label="Experience"
            name="yearlyExperience"
            options={yearOptions}
            onSelect={(option) => {
              handleInputChange("yearlyExperience", option.value);
              setValue("yearlyExperience", option.value);
            }}
            value={yearOptions.find(
              (option) => option.value === basicDetails.yearlyExperience
            )}
            placeholder="Select Year"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>

        <div className="col-span-1 mb-4">
          <DropdownSelectNew
            name="monthlyExperience"
            options={monthOptions}
            onSelect={(option) => {
              handleInputChange("monthlyExperience", option.value);
              setValue("monthlyExperience", option.value);
            }}
            value={monthOptions.find(
              (option) => option.value === basicDetails.monthlyExperience
            )}
            placeholder="Select Month"
            control={control}
            className="mt-5"
            setValue={setValue}
          />

          {/* <DropdownSelect
            id="monthlyExperience"
            options={monthOptions}
            onSelect={(option) => {
              handleInputChange("monthlyExperience", option.value);
              setValue("monthlyExperience", option.value);
            }}
            value={monthOptions.find(
              (option) => option.value === basicDetails.monthlyExperience
            )}
            placeholder="Select month"
            className="mt-5 w-full"
            {...register("monthlyExperience", {
              required: "Experience is required",
            })}
          />
          {errors.monthlyExperience && (
            <p className="text-red-500 text-sm">
              {errors.monthlyExperience.message}
            </p>
          )} */}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Employee Type"
            name="employeeType"
            options={employeeTypeOptions}
            onSelect={(option) => {
              handleInputChange("employeeType", option.value);
              setValue("employeeType", option.value);
            }}
            value={employeeTypeOptions.find(
              (option) => option.value === basicDetails.employeeType
            )}
            placeholder="Select Employee Type"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
        <div className="mb-4">
          <DropdownSelectNew
            label="Job Role"
            name="jobName"
            options={jobOptions}
            onSelect={(option) => {
              handleInputChange("jobName", option.value);
              setValue("jobName", option.value);
            }}
            value={jobOptions.find(
              (option) => option.value === basicDetails.jobName
            )}
            placeholder="Select Employee Type"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-2">
          <DropdownSelectNew
            label="Employee Status"
            name="employeeStatus"
            options={employeeStatusOptions}
            onSelect={(option) => {
              handleInputChange("employeeStatus", option.value);
              setValue("employeeStatus", option.value);
            }}
            value={employeeStatusOptions.find(
              (option) => option.value === basicDetails.employeeStatus
            )}
            placeholder="Select Employee Type"
            control={control}
            className=""
            setValue={setValue}
          />
        </div>
        <div className="col-span-2">
          <InputField
            name="Basic Salary"
            placeholder="Enter Salary"
            className=" "
            inputClassName="h-9 rounded-md"
            register={register(`basicSalary`, {
              // maxLength: {
              //   value: 255,
              //   message: "Customer person name cannot exceed 255 characters",
              // },
            })}
            error={errors?.basicSalary}
          />
        </div>
      </div>

      <div className="bg-[#fcf2fe] mb-3 mt-4 py-1.5 px-1">
        <h2 className=" text-md font-semibold transition-all duration-300">
          Personal Details:
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-1">
          <div className="flex flex-col">
            <InputLabel htmlFor="dateOfBirth" value="Date of Birth" required />

            {/* <ReactDatePicker
              selected={
                watch("dateOfBirth") ? new Date(watch("dateOfBirth")) : null
              }
               onChange={(date) => {
                            const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
                            setValue("dateOfBirth", formattedDate, { shouldValidate: true });
                          }}
              // onChange={(date) => {
              //   const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
              //   setValue("dateOfBirth", formattedDate, {
              //     shouldValidate: true,
              //   });
              // }}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select Birth Date"
              className="block w-full border rounded-md px-2 py-1.5"
              required
            />
            {errors.dateOfBirth && (
              <p className="text-red-600 text-sm mt-1">
                {errors.dateOfBirth.message}
              </p>
            )} */}
            <ReactDatePicker
              selected={
                watch("dateOfBirth") ? new Date(watch("dateOfBirth")) : null
              }
              onChange={(date) => {
                const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
                setValue("dateOfBirth", formattedDate, {
                  shouldValidate: true,
                });
              }}
              dateFormat="dd-MMM-yyyy"
              placeholderText="Select Birth Date"
              className="block w-full border rounded-md px-2 py-1.5"
              required
            />
            {errors.dateOfBirth && (
              <p className="text-red-600 text-sm mt-1">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
        </div>

        <div className="col-span-1 flex flex-row space-y-2">
          <InputLabel htmlFor="gender" value="Gender" required />
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <RadioButton
                name="gender"
                options={radioOptions}
                selectedValue={basicDetails.gender}
                onChange={(value) => {
                  dispatch(setGender(value)); 
                  setValue("gender", value); 
                }}
              />
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex flex-col">
            <InputField
              name="Profile Picture"
              placeholder="Choose Profile Picture"
              inputClassName="h-9 rounded-md"
              type="file"
              register={register(`empProfilePic`)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-3">
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
        <div className="mb-3">
          <div className="flex flex-col">
            <InputField
              name="Present Address"
              placeholder="Present Address"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={2}
              register={register(`presentAdd`)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <InputField
            name="Mobile Number"
            placeholder="Enter Mobile Number"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`empMobileNumber`, {
              maxLength: {
                value: 10,
                message: "Max 10 digit",
              },
            })}
            error={errors?.empMobileNumber}
          />
        </div>
        <div className="">
          <InputField
            name="Post Code"
            placeholder="Enter Post Code"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`postCode`)}
            error={errors?.postCode}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-2">
          <InputField
            name="City"
            placeholder="Enter City"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`city`)}
          />
        </div>

        <div className="">
          <InputField
            name="State"
            placeholder="Enter State"
            className=" mt-3"
            inputClassName="h-9 rounded-md"
            register={register(`states`)}
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default BasicInfo;
