import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { LuEye, LuSearch, LuEyeOff } from "react-icons/lu";

const InputField = (prop) => {
  const [Focus, setFocus] = useState(false);
  const [Password, setPassword] = useState(false);
  const [readOnly, setReadonly] = useState(true);
  const callOnFocus = (e) => {
    e.preventDefault();
    setFocus(true);
    if (!prop?.readOnly) {
      setReadonly(false);
    }
    if (prop?.onFocus) {
      prop?.onFocus(e);
    }
  };
  const callOnBlur = (e) => {
    setFocus(false);
    if (!prop?.readOnly) {
      setReadonly(true);
    }
    if (prop?.onBlur) {
      prop?.onBlur(e);
    }
  };
  const onClickRightLabel = () => {
    if (prop?.onClickRightLabel) {
      prop?.onClickRightLabel();
    }
  };
  const renderInput = (field) => {
    const onChange = (e) => {
      if (prop?.control) {
        field.onChange(e.target.value);
      } else if (field?.onChange) {
        field.onChange(e);
      }
      if (prop?.onChange) {
        prop?.onChange({
          name: e.target.name || prop?.name || field?.name,
          value: e.target.value,
        });
      }
    };

    if (prop.type === "file") {
      return (
        <div
          className={`flex border-[1px] items-center justify-center overflow-hidden ${
            prop.inputClassName
          } ${
            prop.error ? "" : Focus ? "border-primary" : "border-[#C8C9C9]"
          } ${prop?.rightLabel && "right_icon"} ${
            prop.disabled && "input-disabled"
          }`}
        >
          <input
            type="file"
            id={prop.id}
            className="focus:outline-none w-full px-3 py-1 text-sm h-full"
            onChange={(e) => {
              const file = e.target.files?.[0]; // Ensure file exists
              console.log("Selected file:", file);

              if (prop?.onChange) {
                prop.onChange({
                  name: e.target.name || prop?.name,
                  value: file,
                });
              }
            }}
            onFocus={callOnFocus}
            onBlur={callOnBlur}
            readOnly={prop?.readOnly || readOnly}
            disabled={prop.disabled}
          />
          {prop?.rightLabel && (
            <span
              className="right-label cursor-pointer"
              onClick={onClickRightLabel}
            >
              {prop?.rightLabel}
            </span>
          )}
        </div>
      );
    }

    return (
      <div
        className={`flex border-[1px] items-center justify-center overflow-hidden ${
          prop.inputClassName
        } ${prop.error ? "" : Focus ? "border-primary" : "border-[#C8C9C9]"} ${
          prop?.rightLabel && "right_icon"
        }  ${prop.disabled && "input-disabled"} `}
        onClick={callOnFocus}
        onTouchStart={callOnFocus}
      >
        {prop.useFor === "search" && (
          <span className="w-[40px] h-[30px] flex items-center justify-center pl-[7px] pr-[7px]">
            <LuSearch className="h-full text-[#77808D] transform text-[20px]" />
          </span>
        )}
        <input
          onKeyDown={prop.onEnterClick && prop.onEnterClick}
          placeholder={
            prop.placeholder
              ? prop.placeholder
              : typeof prop.name == "string"
              ? `Enter ${
                  prop.name.charAt(0).toLowerCase() + prop.name.slice(1)
                }`
              : ""
          }
          autocomplete={prop?.autocomplete}
          type={prop.type === "password" && !Password ? "password" : "text"}
          id={prop.id}
          className={`focus:outline-none w-full px-3 py-2 placeholder:text-sm text-sm h-full ${
            prop.useFor === "search" ? "max-w-[calc(100%-30px)] pl-0" : ""
          } ${
            prop.useFor === "search"
              ? prop.controlClassName
              : prop.inputClassName
          }`}
          {...field}
          onChange={onChange}
          onFocus={callOnFocus}
          onBlur={callOnBlur}
          readOnly={prop?.readOnly || readOnly}
          disabled={prop.disabled}
          value={field?.value || prop?.value}
        />
        {prop?.rightLabel && (
          <span
            className="right-label cursor-pointer"
            onClick={onClickRightLabel}
          >
            {prop?.rightLabel}
          </span>
        )}
        {prop.type === "password" &&
          (Password ? (
            <LuEyeOff
              className="cursor-pointer h-full mr-2"
              onClick={() => setPassword(!Password)}
            />
          ) : (
            <LuEye
              className="cursor-pointer h-full mr-2"
              onClick={() => setPassword(!Password)}
            />
          ))}
      </div>
    );
  };

  const renderTextarea = (field) => {
    const onChange = (e) => {
      if (prop?.control) {
        console.log("onChange", e.target.value);

        field.onChange(e.target.value);
      } else if (field?.onChange) {
        field.onChange(e);
      }
      if (prop?.onChange) {
        prop?.onChange({
          name: e.target.name || prop?.name,
          value: e.target.value,
        });
      }
    };
    return (
      <div
        className={`bg-white border-[1px] w-full ${prop.inputClassName} ${
          prop.error ? "" : Focus ? "border-primary" : "border-[#C8C9C9]"
        } overflow-hidden d-flex flex-col ${
          prop.disabled && "input-disabled"
        } `}
      >
        <div
          className={`flex ${
            prop?.innerRender ? "h-[calc(100%-45px)] overflow-auto" : "h-full"
          } ${prop?.rightLabel && "right_icon "}`}
        >
          <textarea
            onBlur={() => setFocus(false)}
            {...field}
            placeholder={prop.placeholder}
            className={`rounded focus:outline-none w-full  text-sm resize-none placeholder:text-sm px-2 py-2`}
            onFocus={callOnFocus}
            onChange={onChange}
            onKeyDown={prop?.onKeyDown && prop?.onKeyDown}
            rows={prop?.rows || 2}
            value={field?.value || prop?.value}
            disabled={prop.disabled}
          >
            {field?.value || prop?.value}
          </textarea>
          {prop?.rightLabel && (
            <span
              className="right-label ms-auto cursor-pointer"
              onClick={onClickRightLabel}
            >
              {prop?.rightLabel}
            </span>
          )}
        </div>
        {prop?.innerRender}
      </div>
    );
  };

  const ErrorInfo = ({ error }) => {
    if (!error) {
      return <React.Fragment></React.Fragment>;
    }
    return (
      <div className="min-h-4 py-[0.15rem]">
        <div className="flex items-center">
          <img
            className="h-[0.5rem]"
            // src={App_url.image.info}
            alt=""
          />
          <p className="text-xs mx-1 text-red-600 text-left">
            {error?.message || error}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className={`input-form-group ${prop.className}`}>
      {(prop.name || prop?.label) && (
        <p
          className={`text-[#4E4E4E] text-sm font-semibold ${prop.labelClassName}`}
        >
          {prop?.label || prop.name}
          {prop.required && <span className="text-red-600"> *</span>}
        </p>
      )}
      {prop.useFor === "textarea" ? (
        <div>
          {prop.control && prop.control_name ? (
            <Controller
              name={prop.control_name}
              control={prop.control}
              render={({ field, fieldState }) => (
                <>
                  {renderTextarea(field)}
                  <ErrorInfo error={fieldState?.error} />
                </>
              )}
            />
          ) : (
            <>
              {renderTextarea(prop.register)}
              <ErrorInfo error={prop.error} />
            </>
          )}
        </div>
      ) : (
        <div>
          {prop.control && prop.control_name ? (
            <Controller
              name={prop.control_name}
              control={prop.control}
              rules={prop?.rules}
              render={({ field, fieldState }) => (
                <>
                  {renderInput(field)}
                  <ErrorInfo error={fieldState?.error} />
                </>
              )}
            />
          ) : (
            <>
              {renderInput(prop.register)}
              <ErrorInfo error={prop.error} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default InputField;
