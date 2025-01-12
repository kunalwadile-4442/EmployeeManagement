import React, { useState } from "react";

const calculateLateStatus = (att_in_time, att_status) => {
  const expectedTime = new Date(`1970-01-01T10:00:00`);
  const inTime = att_in_time ? new Date(`1970-01-01T${att_in_time}`) : null;

  if (!inTime) {
    return { message: "Invalid time.", className: "bg-gray-500" }; // In case inTime is not provided
  }

  const diff = inTime - expectedTime;
  
  if (att_status === "absent") {
    return {
      message: "You are absent!",
      className: "bg-yellow-500",
    };
  }

  // On time condition: 59 seconds grace period
  if (diff <= 0 || diff < 60000) {
    return {
      message: "You are on time. Welcome!",
      className: "bg-green-500",
    };
  }

  const totalMinutesLate = Math.floor(diff / 60000);

  // Late but within 10 minutes
  if (totalMinutesLate <= 10) {
    return {
      message: `${totalMinutesLate} Min late. Get on time!`,
      className: "bg-orange-500",
    };
  }

  const hoursLate = Math.floor(totalMinutesLate / 60);
  const minutesLate = totalMinutesLate % 60;

  // Late beyond 10 minutes
  return {
    message:
      totalMinutesLate < 60
        ? `${totalMinutesLate} Min late. Get on time!`
        : `${hoursLate} Hr ${minutesLate} Min late. Get on time!`,
    className: "bg-red-500",
  };
};


const LateMark = ({ status, checkInTime }) => {
  const { message, className } = calculateLateStatus(checkInTime, status);
  const [currentClass, setCurrentClass] = useState(className);

  const handleClick = () => {
    setCurrentClass(currentClass.replace(/-500$/, "-600"));
    setTimeout(() => setCurrentClass(className), 200);
  };

  return (
    <div className="my-2">
 <span
      className={`text-white cursor-pointer  px-3 py-1 rounded ${currentClass}`}
      onClick={handleClick}
    >
      {message}
    </span>
    </div>
   
  );
};

export default LateMark;
