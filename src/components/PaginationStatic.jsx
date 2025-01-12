import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange, action }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className="flex items-center justify-center space-x-2 mt-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md bg-[#F5F5F5] hover:bg-gray-300 disabled:opacity-50"
            >
                &lt;
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        handlePageClick(index + 1)
                    }}
                    className={`px-3 py-1 border rounded-md ${currentPage === index + 1 ? 'bg-logo-text-color text-white' : 'bg-[#F5F5F5] hover:bg-gray-300'}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleNext();
                }}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;