// export default function Checkbox({ className = '', ...props }) {
//     return (
//         <input
//             {...props}
//             type="checkbox"
//             className={
//                 'rounded border-gray-300 text-logo-text-color shadow-sm focus:ring-light-logo-color ' +
//                 className
//             }
//         />
//     );
// }

export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={`rounded border-gray-300 text-[#140242] shadow-sm focus:ring-[#633A8D] focus:ring-2 focus:outline-none ${className}`}
        />
    );
}

