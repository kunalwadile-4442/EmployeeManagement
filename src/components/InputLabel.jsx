// export default function InputLabel({
//     value,
//     className = '',
//     children,
//     ...props
// }) {
//     return (
//         <label
//             {...props}
//             className={
//                 `block text-sm font-medium text-gray-700 ` +
//                 className
//             }
//         >
//             {value ? value : children}
//         </label>
//     );
// }

export default function InputLabel({
    value,
    className = '',
    children,
    required = false, // Add a `required` prop
    ...props
  }) {
    return (
      <label
        {...props}
        className={`block text-sm font-semibold  text-gray-700 ${className}`}
      >
        {value ? value : children}
        {required && (
          <span className="text-red-600 ml-1">*</span> 
        )}
      </label>
    );
  }
  