// import React, { useState } from "react";
// import ReactDatePicker from "react-datepicker";

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

//   const [startDate, setStartDate] = useState(new Date()); // Year start date
//   const [endDate, setEndDate] = useState(new Date()); // Year end date

//   const isChecked = (day, type) => {
//     return weekDefinition?.week_day?.[day]?.[type] ? "checked" : "";
//   };

//   return isOpen ? (
//     <div className="z-20 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//       <div className="popup-container relative bg-white rounded-lg py-4 px-6 w-full max-w-3xl">
//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-semibold">Weekend Settings</h3>
//           <button
//             onClick={onClose}
//             className="text-xl font-bold text-red-500"
//             aria-label="Close"
//           >
//             ×
//           </button>
//         </div>
//         <hr className="mt-2 mb-2" />

//         <div className="mt-4 overflow-x-auto">
//           <table className="w-full table-auto border border-gray-300">
//             <thead>
//               <tr>
//                 <th rowSpan="2" className="border border-gray-300 px-2 py-1">
//                   Setting
//                 </th>
//                 <th
//                   colSpan="6"
//                   className="weeks-shift-wise1 border border-gray-300 px-2 py-1"
//                 >
//                   Weeks
//                 </th>
//               </tr>
//               <tr>
//                 <th className="border border-gray-300 px-2 py-1">All</th>
//                 <th className="border border-gray-300 px-2 py-1">1st</th>
//                 <th className="border border-gray-300 px-2 py-1">2nd</th>
//                 <th className="border border-gray-300 px-2 py-1">3rd</th>
//                 <th className="border border-gray-300 px-2 py-1">4th</th>
//                 <th className="border border-gray-300 px-2 py-1">5th</th>
//               </tr>
//             </thead>
//             <tbody>
//               {["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map(
//                 (day) => (
//                   <tr key={day}>
//                     <td className="border border-gray-300 px-2 py-1">
//                       {day.charAt(0).toUpperCase() + day.slice(1)}
//                     </td>
//                     <td className="border border-gray-300 px-2 py-1">
//                       <input type="checkbox" className="select_all" />
//                     </td>
//                     {["a", "b", "c", "d", "e"].map((type, index) => (
//                       <td key={type} className="border border-gray-300 px-2 py-1">
//                         <input
//                           className="checkbox"
//                           type="checkbox"
//                           name={`all_val[${day}][${type}]`}
//                           id={`${day}${index + 1}`}
//                           value={index + 1}
//                           checked={isChecked(day, type)}
//                           onChange={() => {
//                             const newWeekDefinition = { ...weekDefinition };
//                             newWeekDefinition.week_day[day][type] =
//                               !newWeekDefinition.week_day[day][type];
//                             setWeekDefinition(newWeekDefinition);
//                           }}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Add ReactDatePicker here */}
//         <div className="mt-4">
//           <div className="flex items-center mb-4">
//             <InputLabel htmlFor="from_date" value="From Date" />
//                        <ReactDatePicker
//                          selected={filters.from_date ? new Date(filters.from_date) : null}
//                          onChange={(date) =>
//                            handleInputChange(
//                              "from_date",
//                              date ? date.toISOString().split("T")[0] : ""
//                            )
//                          }
//                          dateFormat="yyyy/MM/dd"
//                          placeholderText="Select From Date"
//                          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                        />
//           </div>
//           <div className="flex items-center">
//             <InputLabel htmlFor="from_date" value="From Date" />
//                        <ReactDatePicker
//                          selected={filters.from_date ? new Date(filters.from_date) : null}
//                          onChange={(date) =>
//                            handleInputChange(
//                              "from_date",
//                              date ? date.toISOString().split("T")[0] : ""
//                            )
//                          }
//                          dateFormat="yyyy/MM/dd"
//                          placeholderText="Select From Date"
//                          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                        />
//           </div>
//         </div>

//         <hr className="mb-2 mt-2" />
//         <div className="flex justify-end mt-2">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-logo-text-color text-white rounded-md"
//           >
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   ) : null;
// };

// export default SettingModal;
import React from 'react'

function SettingModal() {
  return (
    <div>SettingModal</div>
  )
}

export default SettingModal
