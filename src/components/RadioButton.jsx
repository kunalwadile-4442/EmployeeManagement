// import React, { useState } from "react";

// const RadioButton = ({ name, options = [], selectedValue, onChange }) => {
//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-wrap">
//         {options.map((option) => (
//           <label key={option.value} className="flex items-center mr-4 cursor-pointer">
//             <input
//               type="radio"
//               name={name}
//               value={option.value}
//               checked={selectedValue === option.value}
//               onChange={() => onChange(option.value)}
//               className="hidden" 
//             />
//             <span className="w-5 h-5 border-2 border-light-logo-color rounded-full flex items-center justify-center mr-2 relative">
//               <span
//                 className={`w-3 h-3 bg-light-logo-color hover:bg-logo-text-color rounded-full transform transition-all duration-200 ${selectedValue === option.value ? "opacity-100" : "opacity-0"}`}
//               ></span>
//             </span>
//             <span className="text-gray-700 font-semibold">{option.label}</span> 
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RadioButton;
import React, { useState } from "react";

const RadioButton = ({ name, options = [], selectedValue, onChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap">
        {options.map((option) => (
          <label key={option.value} className="flex items-center mr-4 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => {
                console.log("Selected value:", selectedValue);  // Log current selected value
                console.log("Option value:", option.value);      // Log the value of the clicked option
                onChange(option.value);  // Call the passed onChange handler with the selected value
              }}
              className="hidden" 
            />
            <span className="w-5 h-5 border-2 border-light-logo-color rounded-full flex items-center justify-center mr-2 relative">
              <span
                className={`w-3 h-3 bg-light-logo-color hover:bg-logo-text-color rounded-full transform transition-all duration-200 ${selectedValue === option.value ? "opacity-100" : "opacity-0"}`}
              ></span>
            </span>
            <span className="text-gray-700 font-semibold">{option.label}</span> 
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButton;
