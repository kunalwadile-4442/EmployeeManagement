import React from "react";
import Scrollbar from '../components/Scrollbar';

const Modal = ({ isOpen, onClose, title, tableData = [], tableHeaders = [] }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-50 p-3">
            <div className="bg-white px-6 py-4 rounded-lg shadow-lg w-full max-w-xl max-h-[90vh] flex flex-col">
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

                {tableHeaders.length > 0 ? (
                    <Scrollbar 
                        style={{ height: '60vh', width: '100%' }} 
                        autoHide 
                    >
                        <table className="w-full border-collapse text-sm">
                            <thead className="bg-gray-200 sticky top-0 z-10">
                                <tr>
                                    {tableHeaders.map((header, index) => (
                                        <th
                                            key={index}
                                            className="text-left px-4 p-2"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.length > 0 ? (
                                    tableData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td
                                                    key={cellIndex}
                                                    className="border-b px-4 p-1 border-gray-200"
                                                >
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={tableHeaders.length} className="text-center text-gray-500 py-2">
                                            No Result Found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </Scrollbar>
                ) : (
                    <p className="text-gray-500">No headers to display.</p>
                )}

                {/* Close Button */}
                <div className="mt-2 text-right">
                    <hr className="mb-4" />
                    <button
                        onClick={onClose}
                        className="bg-logo-text-color text-sm hover:bg-light-logo-color text-white font-semibold py-2 px-4 rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
