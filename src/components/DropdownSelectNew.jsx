import React, { useState, useEffect } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { Controller } from "react-hook-form";
// import { App_url } from "../../utils/constants/static";

const DropdownSelectNew = ({
  errors,
  label,
  options,
  onChange,
  name,
  onSelect,
  className,
  required,
  defaultValue,
  multiselect = false,
  disabled = false,
  control,
  rules,
  isCreatable = false,
  formClassName = "",
  placeholder = "",
  fontWeight = "small",
  name_key = "",
  setValue,
  inline,
  value = ""
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState(options || []);
  const [readonly, setReadonly] = useState(true);

  useEffect(() => {
    setDropdownOptions(options);
  }, [options]);

  const handleSelectChange = (selectedOption, actionMeta, field) => {
    const value = multiselect
      ? selectedOption.map((option) => option.value)
      : selectedOption?.value;
    field.onChange(value);

    if (!multiselect) {
      if (name_key && setValue && selectedOption?.label) {
        setValue(name_key, selectedOption?.label);
      }
    }

    if (onChange) {
      onChange(value);
    }

    if (onSelect) {
      onSelect({ ...selectedOption, value, name });
    }

    setSearchInput("");
  };

  const handleInputChange = (inputValue, field, actionMeta) => {
    setSearchInput(inputValue);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled ? "#FDFCFB" : provided.backgroundColor,
      padding: "0.08rem",
      borderRadius: "5px",
      borderWidth: "1px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
    }),
    option: (provided) => ({
      ...provided,
      padding: "10px",
    }),
  };

  const getValue = (field) => {
    if (isCreatable) {
      if (multiselect) {
        if (field?.value) {
          return (
            options?.filter((option) =>
              field.value.includes(option.value)
            ) || field.value.map((value) => ({ label: value, value }))
          );
        } else {
          return null;
        }
      } else {
        const checkDetails = options?.find(
          (option) => option.value === field.value
        );
        return checkDetails || { label: field?.value, value: field?.value };
      }
    } else {
      if (multiselect) {
        return options?.filter((option) =>
          field.value.includes(option?.value)
        );
      } else {
        const checkDetails = options?.find(
          (option) => option.value === field.value
        );
        return checkDetails || null;
      }
    }
  };

  const callOnFocus = () => {
    setReadonly(false);
  };

  const callOnBlur = () => {
    setReadonly(true);
  };

  const RenderSelect = ({ field }) => {
    const selectedValue = getValue(field);
    return (
      <div className="flex flex-col">
        <div className="w-full h-full">
          {isCreatable ? (
            <CreatableSelect
              classNamePrefix="select-form"
              isDisabled={disabled}
              value={selectedValue}
              onChange={(selectedOption, actionMeta) =>
                handleSelectChange(selectedOption, actionMeta, field)
              }
              styles={customStyles}
              options={dropdownOptions}
              onInputChange={(e, actionMeta) =>
                handleInputChange(e, field, actionMeta)
              }
              placeholder={
                placeholder || (defaultValue ? `Select ${defaultValue}` : "")
              }
              className={`${className} ${
                errors ? "border-red-600 shadow-red-500" : "border-[#CCD0CF]"
              } rounded-md text-sm select-form-containers`}
              onFocus={callOnFocus}
              onBlur={callOnBlur}
              inputValue={searchInput}
              isSearchable
              components={{ IndicatorSeparator: null }}
              menuShouldScrollIntoView={false}
              menuPosition="fixed"
            />
          ) : (
            <Select
              classNamePrefix="select-form"
              isDisabled={disabled}
              isMulti={multiselect}
              value={selectedValue}
              onChange={(selectedOption, actionMeta) =>
                handleSelectChange(selectedOption, actionMeta, field)
              }
              styles={customStyles}
              options={dropdownOptions}
              onInputChange={(e, actionMeta) =>
                handleInputChange(e, field, actionMeta)
              }
              placeholder={
                placeholder || (defaultValue ? `Select ${defaultValue}` : "")
              }
              className={`${className}  rounded-md text-sm select-form-containers`}
              onFocus={callOnFocus}
              onBlur={callOnBlur}
              inputValue={searchInput}
              components={{ IndicatorSeparator: null }}
              isSearchable
              menuShouldScrollIntoView={false}
              menuPosition="fixed"
            />
          )}
        </div>
        {errors && (
          <div className="flex items-center">
            <p className="text-xs mx-1 text-red-700 text-left">{errors.message}</p>
          </div>
        )}
      </div>
    );
  };
  
  
  

  return (
    <div
      className={`flex ${inline ? "items-center space-x-2" : "flex flex-col"} ${formClassName}`}
    >
      {label && (
        <label
          className={`text-[#4E4E4E] text-sm font-semibold dropdown-label font-${fontWeight} `}
          htmlFor={name}
        >
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={value}
        render={RenderSelect}
      />
    </div>
  );
};

export default DropdownSelectNew;
