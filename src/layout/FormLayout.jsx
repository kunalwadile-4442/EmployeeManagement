// import React from 'react';
// import PrimaryButton from '../components/PrimaryButton';

// const FormLayout = ({ children, content, onSubmit, header, ref }) => {
//   return (
//     <React.Fragment>
//       <div className="formlayout-container" ref={ref}>
//         <div className="formlayout-bottom-section px-4 py-4">
//           <form className="pt-4" onSubmit={onSubmit}>
//             <div className="formlayout-children-container">{children}</div>
//             {content?.submit && (
//               <div className="py-2 flex justify-start gap-2">
//                 <PrimaryButton type="submit">{content?.submit}</PrimaryButton>
//                 {content?.cancel && <PrimaryButton>{content?.cancel}</PrimaryButton>}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default FormLayout;

// import React from "react";
// import PrimaryButton from "../components/PrimaryButton";
// import Scrollbar from "../components/Scrollbar";

// const FormLayout = ({
//   children,
//   content = {},
//   onSubmit,
//   actions = [],
//   className = "",
//   style
// }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (onSubmit) onSubmit(e); // Call the parent-provided submit handler
//   };

//   return (
//     <div className={`formlayout-container ${className}`}>
//       <Scrollbar style={style}>

      
//       <form className="formlayout-form" onSubmit={handleSubmit}>
        
//         <div className="formlayout-children">{children}</div>

//         <div className="formlayout-actions mt-2 ml-2 flex gap-2">
//           {content?.submit && (
//             <PrimaryButton type="submit" className="btn-submit">
//               {content.submit}
//             </PrimaryButton>
//           )}
//           {content?.cancel && (
//             <PrimaryButton
//               type="button"
//               className="btn-cancel"
//               onClick={content.onCancel || (() => {})}
//             >
//               {content.cancel}
//             </PrimaryButton>
//           )}
//           {actions.map((action, index) => (
//             <PrimaryButton
//               key={index}
//               type={action.type || "button"}
//               className={action.className || ""}
//               onClick={action.onClick || (() => {})}
//             >
//               {action.label}
//             </PrimaryButton>
//           ))}
//         </div>
//       </form>
//       </Scrollbar>
//     </div>
//   );
// };

// export default FormLayout;

import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Scrollbar from "../components/Scrollbar";
import { useNavigate } from "react-router-dom";
import { showSuccessToast, showErrorToast } from "../Utils/ToastsUtils"; // Import toast functions

const FormLayout = ({
  children,
  content = {},
  onSubmit,
  actions = [],
  className = "",
  style,
  back,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (onSubmit){
      onSubmit(e); 
    } 
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (onSubmit) {
  //     try {
  //       await onSubmit(e); 
  //       showSuccessToast("Form submitted successfully!"); 
  //     } catch (error) {
  //       showErrorToast("Form submission failed!"); 
  //     }
  //   }
  // };
  
  

  const navigate = useNavigate(); 
  
  const handleBackClick = () => {
    navigate(-1); 
  }

  return (
 
  <div className={`formlayout-container ${className}`}>
  <div className="flex justify-end mr-4">
    {back && (
      <button
        onClick={handleBackClick} 
                  className=' px-4  py-1 text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color font-poppins text-sm  border font-medium  text-right'
      >
        Back
      </button>
    )}
  </div>
  
  <Scrollbar style={style}>
    <form className="formlayout-form mr-3" onSubmit={handleSubmit}>
      <div className="formlayout-children">{children}</div>

      <div className="formlayout-actions mt-2 mr-2 flex justify-end gap-2 mb-4">
        {content?.submit && (
          <PrimaryButton type="submit" className="btn-submit">
            {content.submit}
          </PrimaryButton>
        )}
        {content?.cancel && (
          <PrimaryButton
            type="button"
            className="btn-cancel"
            onClick={content.onCancel || (() => {})}
          >
            {content.cancel}
          </PrimaryButton>
        )}
        {actions.map((action, index) => (
          <PrimaryButton
            key={index}
            type={action.type || "button"}
            className={action.className || ""}
            onClick={action.onClick || (() => {})}
          >
            {action.label}
          </PrimaryButton>
        ))}
      </div>
    </form>
  </Scrollbar>
</div>

  );
};

export default FormLayout;
