import Scrollbar from '../components/Scrollbar';
// import { setClearForm } from '@/store/userSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FormPopup = (props) => {
    const clearForm = useSelector((state) => state.user.clearForm);
    const dispatch = useDispatch();
    console.log("clearForm::", clearForm);

    const onClearForm = () => {
        dispatch(setClearForm({ status: 'hide', name: '' }));
    };

    if (clearForm.status !== 'modal' || clearForm.name !== props.content?.title) {
        return null;
    }

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50`}>
            <div className={`popup-container relative bg-white rounded-lg py-1 shadow-lg w-full ${props?.className}`} style={{ height: 'calc(100vh - 40px)' }}>
                {/* Close Button in top-right corner */}
                <button
                    onClick={onClearForm}
                    className="absolute right-2 w-[30px] h-[30px] bg-[#FF2929] text-white rounded-full flex items-center justify-center shadow-md"
                    aria-label="Close" style={{marginTop:"-15px", marginRight:"-15px"}}
                >
                    <span className="text-2xl font-bold">×</span>
                </button>
                <Scrollbar style={{ height: `calc(100vh - 40px)` }}>
                    {props.children}
                </Scrollbar>
            </div>
        </div>
    );
}

export default FormPopup;