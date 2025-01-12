// import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

// const TextInput = (
//     { type = 'text', className = '', isFocused = false, useFor = "text", placeholder = '', rows = 3, value, onChange, ...props },
//     ref
// ) => {
//     const localRef = useRef(null);

//     // Expose focus method to parent component
//     useImperativeHandle(ref, () => ({
//         focus: () => localRef.current?.focus(),
//     }));

//     // Auto-focus when `isFocused` prop is true
//     useEffect(() => {
//         if (isFocused) {
//             localRef.current?.focus();
//         }
//     }, [isFocused]);

//     const renderSearchInput = () => (
//         <div className="flex items-center px-2 h-[50px] bg-white rounded-[50px] shadow-md">
//             <input
//                 {...props}
//                 type={type}
//                 placeholder={placeholder}
//                 className={'bg-transparent focus:outline-none border-none focus:border-none focus:ring-0 text-gray-600 ' + className}
//                 ref={localRef}
//             />
//         </div>
//     );

//     if (type === "textarea") {
//         return (
//             <textarea
//                 {...props}
//                 ref={localRef}
//                 placeholder={placeholder}
//                 rows={rows}
//                 className={'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className}
//             />
//         );
//     }

//     if (type === "date") {
//         return (
//             <input
//                 {...props}
//                 type="date"
//                 value={value}
//                 onChange={(e) => onChange(e, e.target.value)}
//                 className={
//                     'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className
//                 } 
//                                ref={localRef}
//             />
//         );
//     }

//     return (
//         <>
//             {useFor === "search" ? renderSearchInput() : (
//                 <input
//                     {...props}
//                     type={type}
//                     placeholder={placeholder || "yyyy/mm/dd"} // Default placeholder
//                     value={value}
//                     onChange={(e) => onChange(e, e.target.value)} // Pass the value to onChange
//                     className={'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className}
//                     ref={localRef}
//                 />
//             )}
//         </>
//     );
// };

// export default forwardRef(TextInput);
import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const TextInput = (
    {
        type = 'text',
        className = '',
        isFocused = false,
        useFor = 'text',
        placeholder = '',
        rows = 3,
        value,
        onChange,
        onKeyPress, // Add the onKeyPress prop
        ...props
    },
    ref
) => {
    const localRef = useRef(null);

    // Expose focus method to parent component
    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    // Auto-focus when `isFocused` prop is true
    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    // Render search input variant
    const renderSearchInput = () => (
        <div className="flex items-center px-2 h-[50px] bg-white rounded-[50px] shadow-md">
            <input
                {...props}
                type={type}
                placeholder={placeholder}
                className={'bg-transparent focus:outline-none border-none focus:border-none focus:ring-0 text-gray-600 ' + className}
                ref={localRef}
                onKeyDown={(e) => onKeyPress && onKeyPress("text", e)} // Pass "text" to the onKeyPress prop
            />
        </div>
    );

    // TextArea handling
    if (type === 'textarea') {
        return (
            <textarea
                {...props}
                ref={localRef}
                placeholder={placeholder}
                rows={rows}
                className={'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className}
                onKeyDown={(e) => onKeyPress && onKeyPress("text", e)} // Pass "text" to the onKeyPress prop
            />
        );
    }

    // Date input handling
    if (type === 'date') {
        return (
            <input
                {...props}
                type="date"
                value={value}
                onChange={(e) => onChange(e, e.target.value)}
                className={
                    'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className
                }
                ref={localRef}
                onKeyDown={(e) => onKeyPress && onKeyPress("text", e)} // Pass "text" to the onKeyPress prop
            />
        );
    }

    // Default input handling
    return (
        <>
            {useFor === 'search' ? renderSearchInput() : (
                <input
                    {...props}
                    type={type}
                    placeholder={placeholder || 'yyyy/mm/dd'} // Default placeholder
                    value={value}
                    onChange={(e) => onChange(e, e.target.value)} // Pass the value to onChange
                    className={'rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 ' + className}
                    ref={localRef}
                    onKeyDown={(e) => onKeyPress && onKeyPress("text", e)} // Pass "text" to the onKeyPress prop
                />
            )}
        </>
    );
};

export default forwardRef(TextInput);
