import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const TextArea = (
    { type = 'text', className = '', isFocused = false, placeholder = '', rows = 3, ...props },
    ref
) => {
    const localRef = useRef(null);

    // Imperative handle to expose focus method to parent component
    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    // Automatically focus the textarea if isFocused is true
    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <textarea
            {...props}
            type={type}
            placeholder={placeholder}
            rows={rows}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                className
            }
            ref={localRef}
        />
    );
};

export default forwardRef(TextArea);
