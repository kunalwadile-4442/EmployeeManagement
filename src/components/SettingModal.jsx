// import React, { useState } from "react";
// import Scrollbar from "./Scrollbar";
// import ReactDatePicker from "react-datepicker";
// import { useForm } from "react-hook-form";
// import { format } from "date-fns";
// import InputLabel from "./InputLabel";

// const SettingModal = ({ isOpen, onClose }) => {
//   const [weekDefinition, setWeekDefinition] = useState({
//     week_day: {
//       sunday: { a: true, b: true, c: true, d: true, e: true },
//       monday: { a: false, b: false, c: false, d: false, e: false },
//       tuesday: { a: false, b: false, c: false, d: false, e: false },
//       wednesday: { a: false, b: false, c: false, d: false, e: false },
//       thursday: { a: false, b: false, c: false, d: false, e: false },
//       friday: { a: false, b: false, c: false, d: false, e: false },
//       saturday: { a: false, b: true, c: false, d: true, e: false },
//     },
//   });

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     watch,
//     control,
//     formState: { errors },
//   } = useForm();

//   const handleCheckboxChange = (day, type) => {
//     setWeekDefinition((prev) => ({
//       ...prev,
//       week_day: {
//         ...prev.week_day,
//         [day]: {
//           ...prev.week_day[day],
//           [type]: !prev.week_day[day][type],
//         },
//       },
//     }));
//   };

//   const toggleAllForDay = (day) => {
//     const allChecked = Object.values(weekDefinition.week_day[day]).every(
//       (val) => val
//     );
//     setWeekDefinition((prev) => ({
//       ...prev,
//       week_day: {
//         ...prev.week_day,
//         [day]: {
//           a: !allChecked,
//           b: !allChecked,
//           c: !allChecked,
//           d: !allChecked,
//           e: !allChecked,
//         },
//       },
//     }));
//   };

//   const isChecked = (day, type) => weekDefinition.week_day[day][type];

//   const handleSave = () => {
//     console.log("Saved Week Definition:", weekDefinition);
//     onClose();
//   };

//   return isOpen ? (
//     <div className="z-20 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="popup-container relative bg-white rounded-lg py-4 px-6 w-full max-w-3xl">
//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-semibold">Settings</h3>
//           <button
//             onClick={onClose}
//             className="text-xl font-bold "
//             aria-label="Close"
//           >
//             ×
//           </button>
//         </div>
//         <hr className="mt-2 mb-2" />
//         <h4 className="font-md font-semibold ">Weekend definition</h4>
//         <Scrollbar style={{ height: "calc(100vh - 200px)" }}>
//           <div className="mt-4 overflow-x-auto">
//             <table className="w-full table-auto border border-gray-300">
//               <thead className="text-sm">
//                 <tr>
//                   <th rowSpan="2" className="border border-gray-300 px-2 py-1">
//                     Days
//                   </th>
//                   <th colSpan="6" className="border border-gray-300 px-2 py-1">
//                     Weeks
//                   </th>
//                 </tr>
//                 <tr>
//                   <th className="border border-gray-300 px-2 py-1">All</th>
//                   <th className="border border-gray-300 px-2 py-1">1st</th>
//                   <th className="border border-gray-300 px-2 py-1">2nd</th>
//                   <th className="border border-gray-300 px-2 py-1">3rd</th>
//                   <th className="border border-gray-300 px-2 py-1">4th</th>
//                   <th className="border border-gray-300 px-2 py-1">5th</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(weekDefinition.week_day).map((day) => (
//                   <tr key={day}>
//                     <td className="border text-sm border-gray-300 px-2 py-1">
//                       {day.charAt(0).toUpperCase() + day.slice(1)}
//                     </td>
//                     <td className="border border-gray-300 px-2 py-1">
//                       <input
//                         type="checkbox"
//                         onChange={() => toggleAllForDay(day)}
//                         checked={Object.values(
//                           weekDefinition.week_day[day]
//                         ).every((val) => val)}
//                       />
//                     </td>
//                     {["a", "b", "c", "d", "e"].map((type) => (
//                       <td
//                         key={type}
//                         className="border border-gray-300 px-2 py-1"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={isChecked(day, type)}
//                           onChange={() => handleCheckboxChange(day, type)}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <br />

//             <div className="mb-4">
//               <h3 className="text-md font-bold text-gray-700 mb-2">
//                 Current Year
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <InputLabel htmlFor="currentDate" value="Year starts from" />
//                   <ReactDatePicker
//                     selected={
//                       watch("currentDate")
//                         ? new Date(watch("currentDate"))
//                         : null
//                     }
//                     onChange={(date) => {
//                       const formattedDate = date
//                         ? format(date, "dd-MMM-yyyy")
//                         : null;
//                       setValue("currentDate", formattedDate, {
//                         shouldValidate: true,
//                       });
//                     }}
//                     dateFormat="dd-MMM-yyyy"
//                     placeholderText="Select Current Date"
//                     className="block w-full border rounded-md px-2 py-1.5"
//                     required
//                   />
//                   {errors.currentDate && (
//                     <p className="text-red-600 text-sm mt-1">
//                       {errors.currentDate.message}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <InputLabel htmlFor="endDate" value="Year ends on" />
//                   <ReactDatePicker
//                     selected={
//                       watch("endDate") ? new Date(watch("endDate")) : null
//                     }
//                     onChange={(date) => {
//                       const formattedDate = date
//                         ? format(date, "dd-MMM-yyyy")
//                         : null;
//                       setValue("endDate", formattedDate, {
//                         shouldValidate: true,
//                       });
//                     }}
//                     dateFormat="dd-MMM-yyyy"
//                     placeholderText="Select End Date"
//                     className="block w-full border rounded-md px-2 py-1.5"
//                     required
//                   />
//                   {errors.endDate && (
//                     <p className="text-red-600 text-sm mt-1">
//                       {errors.endDate.message}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Scrollbar>
//         <hr className="mb-2 mt-2 text-sm" />
//         <div className="flex justify-end mt-2 space-x-4">
//           <button
//             onClick={onClose}
//             className="px-2 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSave}
//             className="px-3 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default SettingModal;

import React from "react";
import Scrollbar from "./Scrollbar";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import InputLabel from "./InputLabel";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleDay,
  toggleAllForDay,
  setStartDate,
  setEndDate,
} from "../redux/reducers/settingModalReducer";
import { showSuccessToast } from "../Utils/ToastsUtils";


const SettingModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const weekDefinition = useSelector((state) => state.weekDefinition);

  const {
    watch,
    setValue,
    formState: { errors },
  }= useForm({
      defaultValues: weekDefinition,
    });
  

  const handleCheckboxChange = (day, type) => {
    dispatch(toggleDay({ day, type }));
  };

  const handleToggleAllForDay = (day) => {
    dispatch(toggleAllForDay(day));
  };

  const handleStartDateChange = (date) => {
    const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
    setValue("currentDate", formattedDate, { shouldValidate: true });
    dispatch(setStartDate(formattedDate));
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
    setValue("endDate", formattedDate, { shouldValidate: true });
    dispatch(setEndDate(formattedDate));
  };

  const isChecked = (day, type) => weekDefinition.week_day[day][type];

  const handleSave = () => {
    console.log("Saved Week Definition:", weekDefinition);
    showSuccessToast("Date Save Successfully");
    onClose();
  };

  return isOpen ? (
    <div className="z-20 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="popup-container relative bg-white rounded-lg py-4 px-6 w-full max-w-3xl">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Settings</h3>
          <button
            onClick={onClose}
            className="text-xl font-bold "
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="mt-2 mb-2" />
        <h4 className="font-md font-semibold ">Weekend definition</h4>
        <Scrollbar style={{ height: "calc(100vh - 200px)" }}>
          <div className="mt-4 overflow-x-auto mr-3">
            <table className="w-full table-auto border border-gray-300">
              <thead className="text-sm">
                <tr>
                  <th rowSpan="2" className="border table-header-left border-gray-300 px-2 py-1">
                    Days
                  </th>
                  <th colSpan="6" className="border table-header-right border-gray-300 px-2 py-1">
                    Weeks
                  </th>
                </tr>
                <tr>
                  <th className="border table-header-left border-gray-300 px-2 py-1">All</th>
                  <th className="border border-gray-300 px-2 py-1">1st</th>
                  <th className="border border-gray-300 px-2 py-1">2nd</th>
                  <th className="border border-gray-300 px-2 py-1">3rd</th>
                  <th className="border border-gray-300 px-2 py-1">4th</th>
                  <th className="border table-header-right border-gray-300 px-2 py-1">5th</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(weekDefinition.week_day).map((day) => (
                  <tr key={day}>
                    <td className="border text-sm border-gray-300 px-2 py-1">
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </td>
                    <td className="border border-gray-300 px-2 py-1">
                      <input
                        type="checkbox"
                        onChange={() => handleToggleAllForDay(day)}
                        checked={Object.values(
                          weekDefinition.week_day[day]
                        ).every((val) => val)}
                      />
                    </td>
                    {["a", "b", "c", "d", "e"].map((type) => (
                      <td
                        key={type}
                        className="border border-gray-300 px-2 py-1"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked(day, type)}
                          onChange={() => handleCheckboxChange(day, type)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <div className="mb-4">
              <h3 className="text-md font-bold text-gray-700 mb-2">
                Current Year
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <InputLabel htmlFor="currentDate" value="Year starts from" />
                  <ReactDatePicker
                    selected={
                      weekDefinition.startDate
                        ? new Date(weekDefinition.startDate)
                        : null
                    }
                    onChange={handleStartDateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholderText="Select Current Date"
                    className="block w-full border rounded-md px-2 py-1.5"
                    required
                  />
                  {errors.currentDate && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.currentDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <InputLabel htmlFor="endDate" value="Year ends on" />
                  <ReactDatePicker
                    selected={
                      weekDefinition.endDate
                        ? new Date(weekDefinition.endDate)
                        : null
                    }
                    onChange={handleEndDateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholderText="Select End Date"
                    className="block w-full border rounded-md px-2 py-1.5"
                    required
                  />
                  {errors.endDate && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.endDate.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Scrollbar>
        <hr className="mb-2 mt-2 text-sm" />
        <div className="flex justify-end mt-2 space-x-4">
          <button
            onClick={onClose}
            className="px-2 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default SettingModal;