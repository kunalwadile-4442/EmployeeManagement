import { useState } from "react";


import SpinnerSm from "./SpinnerSm";

const Button = (prop) => {
  const [disabled, setDisabled] = useState(false);

  const onClick = (e) => {
    if (prop?.onClick) {
      setDisabled(true);
      if (!prop.disabled && !prop.isLoading) {
        prop?.onClick(e);
      }
      setTimeout(() => setDisabled(false), 500);
    }
  };

  return (
    <button
      disabled={prop.disabled || disabled}
      type={prop.type ? prop.type : "button"}
      className={`${
        prop.className
      } py-1 px-1 text-sm transition-colors duration-300 hover:darken-on-hover ${
        !prop.disabled
          ? prop?.className?.includes("hover:bg")
            ? ""
            : "hover:bg-primary-100"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-2">
        {prop.icon && <img src={prop.icon} className="h-3" alt="" />}
        <p>{prop.label}</p>
        {prop.isLoading && <SpinnerSm />}
        {prop?.children}
      </div>
    </button>
  );
};

export default Button;
