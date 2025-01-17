// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setLeaveFormData, resetLeaveFormData } from "../../../redux/reducers/createLeaveReducer";
// import FormLayout from "../../../layout/FormLayout";
// import { useForm, Controller } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import DropdownSelectNew from "../../../components/DropdownSelectNew";
// import InputField from "../../../components/InputField";
// import ReactDatePicker from "react-datepicker";
// import { format } from "date-fns"; // Import format from date-fns
// import { showSuccessToast } from "../../../Utils/ToastsUtils";
// import InputLabel from "../../../components/InputLabel";

// function CreateLeave({ id }) {
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.createLeave || {});
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       const fetchedData = {
//         employeeName: "",
//         leaveType: "",
//         dateFrom: null,
//         dateTo: null,
//         email: "",
//       };
//       dispatch(setLeaveFormData(fetchedData));
//     }
//   }, [id, dispatch]);

//   const {
//     register,
//     control,
//     setValue,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: formData,
//   });

//   const employeeOptions = [
//     { value: "john_doe", label: "John Doe" },
//     { value: "jane_smith", label: "Jane Smith" },
//   ];

//   const leaveTypeOptions = [
//     { value: "sick_leave", label: "Sick Leave" },
//     { value: "casual_leave", label: "Casual Leave" },
//   ];

//   const onSubmit = (data) => {
//     console.log("Submitted Data:", data);
//     showSuccessToast("Leave Request Submitted Successfully!");
//     dispatch(resetLeaveFormData());
//     setTimeout(() => {
//       navigate("/leave-management");
//     }, 500);
//   };

//   const handleDateChange = (date, name) => {
//     const formattedDate = date ? format(date, "dd-MM-yyyy") : null; // Format date to DD-MM-YYYY
//     dispatch(setLeaveFormData({ [name]: formattedDate }));
//     setValue(name, formattedDate);
//   };

//   return (
//     <FormLayout
//       content={{ submit: "Submit" }}
//       onSubmit={handleSubmit(onSubmit)}
//       className="px-4 py-2 bg-white rounded-md"
//       style={{ height: 500 }}
//       back
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="mb-4">
//           <DropdownSelectNew
//             label="Employee Name"
//             name="employeeName"
//             options={employeeOptions}
//             onSelect={(option) => {
//               dispatch(setLeaveFormData({ employeeName: option.value }));
//               setValue("employeeName", option.value);
//             }}
//             value={employeeOptions.find((option) => option.value === formData.employeeName)}
//             placeholder="Select Employee"
//             control={control}
//             rules={{ required: "Employee Name is required" }}
//             setValue={setValue}
//           />
//           {errors.employeeName && (
//             <p className="text-red-500 text-xs">{errors.employeeName.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <DropdownSelectNew
//             label="Leave Type"
//             name="leaveType"
//             options={leaveTypeOptions}
//             onSelect={(option) => {
//               dispatch(setLeaveFormData({ leaveType: option.value }));
//               setValue("leaveType", option.value);
//             }}
//             value={leaveTypeOptions.find((option) => option.value === formData.leaveType)}
//             placeholder="Select Leave Type"
//             control={control}
//             rules={{ required: "Leave Type is required" }}
//             setValue={setValue}

//           />
//           {errors.leaveType && (
//             <p className="text-red-500 text-xs">{errors.leaveType.message}</p>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="mb-4">
//           <InputLabel htmlFor="dateFrom" value="From Date" />
//           <ReactDatePicker
//             selected={formData.dateFrom ? new Date(formData.dateFrom) : null}
//             onChange={(date) => handleDateChange(date, "dateFrom")}
//             dateFormat="dd-MMM-yyyy"
//             placeholderText="Select From Date"
//             className="block w-full border rounded-md px-2 py-1.5"
//             required
//           />
//           {errors.dateFrom && (
//             <p className="text-red-500 text-xs">{errors.dateFrom.message}</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <InputLabel htmlFor="dateTo" value="To Date" />
//           <ReactDatePicker
//             selected={formData.dateTo ? new Date(formData.dateTo) : null}
//             onChange={(date) => handleDateChange(date, "dateTo")}
//             dateFormat="dd-MMM-yyyy"
//             placeholderText="Select To Date"
//             className="block w-full border rounded-md px-2 py-1.5"
//           />
//           {errors.dateTo && (
//             <p className="text-red-500 text-xs">{errors.dateTo.message}</p>
//           )}
//         </div>
//       </div>

//       <div className="grid grid-cols-2">
//       <div className="">
//         <InputField
//           name="Email"
//           placeholder="Enter Email"
//           className=" "
//           inputClassName="h-9 rounded-md"
//           register={register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               message: "Invalid email format",
//             },
//           })}
//           error={errors?.email?.message}
//         />

//       </div>
//       </div>
//     </FormLayout>
//   );
// }

// export default CreateLeave;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLeaveFormData,
  resetLeaveFormData,
} from "../../../redux/reducers/createLeaveReducer";
import FormLayout from "../../../layout/FormLayout";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DropdownSelectNew from "../../../components/DropdownSelectNew";
import InputField from "../../../components/InputField";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import { showSuccessToast } from "../../../Utils/ToastsUtils";
import InputLabel from "../../../components/InputLabel";
import TextEditor from "../../../components/TextEditor"; // Import TextEditor component

function CreateLeave({ id }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.createLeave || {});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchedData = {
        employeeName: "",
        leaveType: "",
        dateFrom: null,
        dateTo: null,
        email: "",
        reason: "",
      };
      dispatch(setLeaveFormData(fetchedData));
    }
  }, [id, dispatch]);

  const {

    control,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: formData,
  });

  const employeeOptions = [
    { value: "john_doe", label: "John Doe" },
    { value: "jane_smith", label: "Jane Smith" },
  ];

  const leaveTypeOptions = [
    { value: "sick_leave", label: "Sick Leave" },
    { value: "casual_leave", label: "Casual Leave" },
  ];

  const emailOptions = [
    { value:"kunal@appristine.in", label:"kunal@appristine.in"},
    { value:"vaibhav.k@appristine.in", label:"vaibhav.k@appristine.in"}
  ]
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    showSuccessToast("Leave Request Submitted Successfully!");
    dispatch(resetLeaveFormData());
    setTimeout(() => {
      navigate("/leave/pending");
    }, 500);
  };

  const handleDateChange = (date, name) => {
    const formattedDate = date ? format(date, "dd-MM-yyyy") : null;
    dispatch(setLeaveFormData({ [name]: formattedDate }));
    setValue(name, formattedDate);
  };

  return (
    <FormLayout
      content={{ submit: "Submit" }}
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: "calc(100vh - 120px)" }}
      back
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Employee Name"
            name="employeeName"
            options={employeeOptions}
            onSelect={(option) => {
              dispatch(setLeaveFormData({ employeeName: option.value }));
              setValue("employeeName", option.value);
            }}
            value={employeeOptions.find(
              (option) => option.value === formData.employeeName
            )}
            placeholder="Select Employee"
            control={control}
            rules={{ required: "Employee Name is required" }}
            setValue={setValue}
            required
          />
          {errors.employeeName && (
            <p className="text-red-500 text-xs">
              {errors.employeeName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <DropdownSelectNew
            label="Leave Type"
            name="leaveType"
            options={leaveTypeOptions}
            onSelect={(option) => {
              dispatch(setLeaveFormData({ leaveType: option.value }));
              setValue("leaveType", option.value);
            }}
            value={leaveTypeOptions.find(
              (option) => option.value === formData.leaveType
            )}
            placeholder="Select Leave Type"
            control={control}
            rules={{ required: "Leave Type is required" }}
            setValue={setValue}
            required
          />
          {errors.leaveType && (
            <p className="text-red-500 text-xs">{errors.leaveType.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="dateFrom" value="From Date" required />
          <ReactDatePicker
            selected={formData.dateFrom ? new Date(formData.dateFrom) : null}
            onChange={(date) => handleDateChange(date, "dateFrom")}
            dateFormat="dd-MMM-yyyy"
            placeholderText="Select From Date"
            className="block w-full border rounded-md px-2 py-1.5"
            required
          />
        </div>

        <div className="mb-4">
          <InputLabel htmlFor="dateTo" value="To Date" required />
          <ReactDatePicker
            selected={formData.dateTo ? new Date(formData.dateTo) : null}
            onChange={(date) => handleDateChange(date, "dateTo")}
            dateFormat="dd-MMM-yyyy"
            placeholderText="Select To Date"
            className="block w-full border rounded-md px-2 py-1.5"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <DropdownSelectNew
            label="Email"
            name="email"
            options={emailOptions}
            onSelect={(option) => {
              dispatch(setLeaveFormData({ email: option.value }));
              setValue("email", option.value);
            }}
            value={emailOptions.find(
              (option) => option.value === formData.email
            )}
            placeholder="Enter Email"
            control={control}
            rules={{
              required: "Email is required",
            }}
            setValue={setValue}
            required
            multiselect={true}
          />
        </div>
      </div>
      <div className="mt-4">
        <InputLabel htmlFor="reason" value="Reason for Leave" required />
        <Controller
          name="reason"
          control={control}
          render={({ field }) => (
            <TextEditor field={field} errors={errors?.reason} />
          )}
          rules={{ required: "Reason for leave is required" }}
        />
      </div>
    </FormLayout>
  );
}

export default CreateLeave;
