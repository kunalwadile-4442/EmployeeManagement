import React from "react";

function ConfirmModalPopup({ isOpen, message, onSubmit, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-5 rounded-md shadow-lg w-1/3">
        <h2 className="text-lg font-semibold">Delete</h2>
        <hr className="my-1" />
        <p className="mb-6 mt-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-purple-300 hover:bg-purple-400 text-gray-800 font-semibold py-1 px-3 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-logo-text-color hover:bg-light-logo-color text-white font-semibold py-1 px-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModalPopup;
