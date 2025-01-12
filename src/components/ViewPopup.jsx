// import FormPopup from '@/Popups/FormPopup'
import FormPopup from '../Popups/FormPopup'
import React from 'react'
import { useSelector } from 'react-redux'

const ViewPopup = () => {
    const clearForm = useSelector((state) => state.user.clearForm);
    return (
        <FormPopup content={{ title: "Employee Details" }}>
            <h1 className='font-semibold flex justify-center items-center text-lg pb-3'>Employee Details</h1>

            <div>
                {clearForm?.url && typeof clearForm?.url === 'object' ? (
                    Object.entries(clearForm?.url).map(([key, value], index) => (
                        <div key={index}>
                            <strong>{key}:</strong> <span>{value}</span>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </FormPopup>
    )
}

export default ViewPopup
