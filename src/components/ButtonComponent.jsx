export default function ButtonComponent({
    className = '',
    disabled,
    children,
    isEdit,
    isDownload,
    isEmail,
    ...props
  }) {
    let buttonStyles = "bg-[#292D32] text-white"; 
    
    if (isDownload) {
      buttonStyles = "bg-[#B1E903] text-black"; 
    } else if (isEmail) {
      buttonStyles = "bg-[#1D70B8] text-white"; 
    } else if (isEdit) {
      buttonStyles = "bg-[#292D32] text-white"; 
    }
  
    return (
      <button
        {...props}
        className={`inline-flex items-center rounded-md font-inter font-medium text-[16px] leading-[19.36px] border border-transparent px-4 py-2 text-xs font-semibold tracking-widest transition duration-150 ease-in-out
                    ${buttonStyles}
                    ${disabled ? 'opacity-25' : 'hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900'}
                    ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
  