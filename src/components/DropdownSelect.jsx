import React, { forwardRef, useState } from 'react';
import Select from 'react-select';

const DropdownSelect = forwardRef(function TextInput(
  { options, onSelect, className, errors, ...props },
  ref
) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (option) => {
    setSelectedValue(option); 
    onSelect(option);
  };
  return (
    <Select
      {...props}
      ref={ref}
      classNamePrefix="select-form"
      value={selectedValue}
      onChange={handleChange} 
      options={options}
      className={`${className} ${
        !errors ? "border-[#CCD0CF]" : "border-red-600"
      } rounded-md text-sm select-form-containers  border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 `}
      isSearchable
      menuShouldScrollIntoView={false}
      menuPosition="fixed"
    />
  );
});

export default DropdownSelect;
