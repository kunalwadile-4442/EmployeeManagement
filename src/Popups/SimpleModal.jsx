import React from "react";
import { useForm } from "react-hook-form"; // Import useForm hook
import InputField from "../components/InputField";

const SimpleModal = ({ isOpen, onClose, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 


  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50 p-3">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-full max-w-xl min-h-[30vh] max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl hover:text-gray-700"
            aria-label="Close Modal"
          >
            ×
          </button>
        </div>

        <hr className="mb-4" />

        <form onSubmit={handleSubmit(onSubmit)} className="flex-grow space-y-4">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
            <InputField
            name="Leave Type"
            placeholder="Enter Leave Type"
            className=" mt-2"
            inputClassName="h-9 rounded-md"
            register={register(`leave_type`, {
              required: "Leave Type is required",
            })}
            error={errors?.leave_type}
            required
          />
            </div>

            <div className="flex-1">
            <InputField
            name="Days Count for year"
            placeholder="Enter Number of Days"
            className=" mt-2"
            inputClassName="h-9 rounded-md"
            register={register(`days_in_year`, {
                required: "Days is required",
            })}
            error={errors?.days_in_year}
            required
          />
            </div>
          </div>

          <div className="mt-auto flex justify-end gap-4">
            <button
              onClick={onClose}
              className="bg-logo-text-color text-sm hover:bg-light-logo-color text-white font-semibold py-2 px-4 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-logo-text-color text-sm hover:bg-light-logo-color text-white font-semibold py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleModal;
