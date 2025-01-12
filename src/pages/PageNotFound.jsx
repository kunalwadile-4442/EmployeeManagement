// PageNotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-[#141829] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mt-20 text-[200px] leading-none tracking-wider bg-gradient-text text-gradient-text sm:text-[150px] xs:text-[120px] text-white">
          <b>404</b>
        </div>

              <div className="text-[20px] text-[#f6f6e3] tracking-widest">
          <b>PAGE NOT FOUND</b>
        </div>

        <div className="mt-20 flex justify-center">
  <button
    onClick={handleGoHome}
    className="text-white px-8 py-3 font-bold tracking-wide bg-light-logo-color  rounded-lg transform hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2"
  >
    <span>BACK TO HOME</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16l4-4m0 0l-4-4m4 4H7"
      />
    </svg>
  </button>
</div>

      </div>
    </div>
  );
};

export default PageNotFound;
