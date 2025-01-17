// import React, { useState } from "react";

// const calculateLateStatus = (att_in_time, att_status) => {
//   const expectedTime = new Date(`1970-01-01T10:00:00`);
//   const inTime = att_in_time ? new Date(`1970-01-01T${att_in_time}`) : null;

//   if (!inTime) {
//     return { message: "Invalid time.", className: "bg-gray-500" }; // In case inTime is not provided
//   }

//   const diff = inTime - expectedTime;
  
//   if (att_status === "absent") {
//     return {
//       message: "You are absent!",
//       className: "bg-yellow-500",
//     };
//   }

//   // On time condition: 59 seconds grace period
//   if (diff <= 0 || diff < 60000) {
//     return {
//       message: "You are on time. Welcome!",
//       className: "bg-green-500",
//     };
//   }

//   const totalMinutesLate = Math.floor(diff / 60000);

//   // Late but within 10 minutes
//   if (totalMinutesLate <= 10) {
//     return {
//       message: `${totalMinutesLate} Min late. Get on time!`,
//       className: "bg-orange-500",
//     };
//   }

//   const hoursLate = Math.floor(totalMinutesLate / 60);
//   const minutesLate = totalMinutesLate % 60;

//   // Late beyond 10 minutes
//   return {
//     message:
//       totalMinutesLate < 60
//         ? `${totalMinutesLate} Min late. Get on time!`
//         : `${hoursLate} Hr ${minutesLate} Min late. Get on time!`,
//     className: "bg-red-500",
//   };
// };


// const LateMark = ({ status, checkInTime }) => {
//   const { message, className } = calculateLateStatus(checkInTime, status);
//   const [currentClass, setCurrentClass] = useState(className);

//   const handleClick = () => {
//     setCurrentClass(currentClass.replace(/-500$/, "-600"));
//     setTimeout(() => setCurrentClass(className), 200);
//   };

//   return (
//     <div className="my-2">
//  <span
//       className={`text-white cursor-pointer  px-3 py-1 rounded ${currentClass}`}
//       onClick={handleClick}
//     >
//       {message}
//     </span>
//     </div>
   
//   );
// };

// export default LateMark;

// import React, { useState } from "react";

// // Function to calculate late status
// const calculateLateStatus = (att_in_time, att_status) => {
//   // If the user is absent, directly return the absent status
//   if (att_status?.toLowerCase() === "absent") {
//     return { message: "You are absent!", className: "bg-yellow-500" };
//   }

//   const expectedTime = new Date(`1970-01-01T10:00:00`); // Expected check-in time
//   let inTime = null;

//   // Convert AM/PM time to 24-hour format
//   if (att_in_time) {
//     const [time, modifier] = att_in_time.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);
//     if (modifier === "PM" && hours < 12) hours += 12;
//     if (modifier === "AM" && hours === 12) hours = 0;
//     inTime = new Date(`1970-01-01T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`);
//   }

//   // If no valid check-in time is provided
//   if (!inTime) {
//     return { message: "Invalid time.", className: "bg-gray-500" };
//   }

//   const diff = inTime - expectedTime;

//   // Grace period for on-time check-in
//   if (diff <= 0 || diff < 60000) {
//     return { message: "You are on time. Welcome!", className: "bg-green-500" };
//   }

//   const totalMinutesLate = Math.floor(diff / 60000);

//   if (totalMinutesLate <= 10) {
//     return { message: `${totalMinutesLate} Min late. Get on time!`, className: "bg-orange-500" };
//   }

//   const hoursLate = Math.floor(totalMinutesLate / 60);
//   const minutesLate = totalMinutesLate % 60;

//   return {
//     message:
//       totalMinutesLate < 60
//         ? `${totalMinutesLate} Min late. Get on time!`
//         : `${hoursLate} Hr ${minutesLate} Min late. Get on time!`,
//     className: "bg-red-500",
//   };
// };

// // LateMark component
// const LateMark = ({ status, checkInTime }) => {
//   const { message, className } = calculateLateStatus(checkInTime, status);
//   const [currentClass, setCurrentClass] = useState(className);

//   const handleClick = () => {
//     setCurrentClass((prev) => prev.replace(/-500$/, "-600"));
//     setTimeout(() => setCurrentClass(className), 200);
//   };

//   return (
//     <div className="my-2">
//       <span
//         className={`text-white cursor-pointer px-3 py-1 rounded ${currentClass}`}
//         onClick={handleClick}
//       >
//         {message}
//       </span>
//     </div>
//   );
// };

// export default LateMark;
import React, { useState } from "react";

// Function to calculate late status
const calculateLateStatus = (att_in_time, att_status) => {
  if (att_status?.toLowerCase() === "absent") {
    return { message: "You are absent!", className: "bg-yellow-500" };
  }

  const expectedTime = new Date(`1970-01-01T10:00:00`);
  let inTime = null;

  if (att_in_time) {
    const [time, modifier] = att_in_time.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    inTime = new Date(`1970-01-01T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`);
  }

  if (!inTime) {
    return { message: "Invalid time.", className: "bg-gray-500" };
  }

  const diff = inTime - expectedTime;

  if (diff <= 0 || diff < 60000) {
    return { message: "You are on time. Welcome!", className: "bg-green-500" };
  }

  const totalMinutesLate = Math.floor(diff / 60000);

  if (totalMinutesLate <= 10) {
    return { message: `${totalMinutesLate} Min late. Get on time!`, className: "bg-orange-500" };
  }

  const hoursLate = Math.floor(totalMinutesLate / 60);
  const minutesLate = totalMinutesLate % 60;

  return {
    message:
      totalMinutesLate < 60
        ? `${totalMinutesLate} Min late. Get on time!`
        : `${hoursLate} Hr ${minutesLate} Min late. Get on time!`,
    className: "bg-red-500",
  };
};

// LateMark Component
const LateMark = ({ status, checkInTime }) => {
  const { message, className } = calculateLateStatus(checkInTime, status);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 200);
  };

  return (
    <div className="my-2">
      <span
        className={`text-white cursor-pointer px-3 py-1 rounded ${className} ${
          isActive ? "brightness-125" : ""
        }`}
        onClick={handleClick}
      >
        {message}
      </span>
    </div>
  );
};

export default LateMark;
