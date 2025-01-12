import React, { useState } from "react";

// Function to determine if the check-in time is late and return the message
const LateMarkText = (att_in_time, att_status) => {
  const expectedTime = new Date(`1970-01-01T10:00:00`);
  const inTime = att_in_time ? new Date(`1970-01-01T${att_in_time}`) : null;

  if (att_status === "present" && inTime) {
    const diff = inTime - expectedTime;

    if (diff < 0) {
      return null; // On time, so no need to show any message
    }

    const totalMinutesLate = Math.floor(diff / 60000);
    if (totalMinutesLate <= 10) {
      return null; // Late but within 10 minutes, so no need to show any message
    }

    const hoursLate = Math.floor(totalMinutesLate / 60);
    const minutesLate = totalMinutesLate % 60;

    return {
      message:
        totalMinutesLate < 60
          ? `${totalMinutesLate} Min late. Get on time!`
          : `${hoursLate} Hr ${minutesLate} Min late. Get on time!`,
      className: "text-red-500 font-extrabold", 
    };
  }

  if (att_status === "absent") {
    return null; 
  }

  return null; 
};

const LateMark = ({ status, checkInTime }) => {
  const lateStatus = LateMarkText(checkInTime, status);

  if (!lateStatus) {
    return null;
  }

  const { message, className } = lateStatus;
  const [currentClass, setCurrentClass] = useState(className);

  

  return (
    <div className="my-1">
 <span
      className={`cursor-pointer px-2 py-2 rounded ${currentClass}`}
    
    >
      {message}
    </span> 
    </div>
   
  );
};

export default LateMark;
