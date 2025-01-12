import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-12 h-12 rounded-full animate-spin
                    border-4 border-dashed border-purple-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default LoadingSpinner;
