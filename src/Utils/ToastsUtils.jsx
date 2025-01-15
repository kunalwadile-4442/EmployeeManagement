import { toast } from 'react-toastify'; 

export const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",  
    className: 'custom-toast ', 
    style: {
      backgroundColor: '#fff', 
      color: 'green',
      fontSize: '14px',
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-center",  
    className: 'custom-toast ', 
    style: {
      backgroundColor: '#fff', // Error color
      color: 'red',
      fontSize: '14px',
    },
  });
};
