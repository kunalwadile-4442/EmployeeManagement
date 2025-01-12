/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Images from "./Images";
import Button from "./Button";


const Icon = ({
  className = "",
  buttonClassName = "",
  size = "",
  variant = "",
  auth = false,
  rounded = false,
  disabled = false,
  loading = false,
  attrIcon = "",
  image = false,
  button = false,
  style = {},
  onClick,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    }
  };

  const IconData = () => {
    if (image) {
      return (
        <i onClick={handleClick} className={`common_icon_image ${className}`}>
          <Images src={attrIcon || ""} auth={auth} />
        </i>
      );
    }
    return (
      <i
        onClick={handleClick}
        style={{ ...style, "--icon-url": `url(${attrIcon})` }}
        className={`common_icon ${className}`}
        attr-icon={attrIcon}
      />
    );
  };

  const ButtonView = () => {
    return (
      <Button
        disabled={disabled}
        onClick={handleClick}
        className={`btn-icon ${buttonClassName} btn-${size}`}
        label={IconData()}
      />
    );
  };

  return button ? ButtonView() : IconData();
};

Icon.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  auth: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  attrIcon: PropTypes.string,
  image: PropTypes.bool,
  style: PropTypes.object,
  button: PropTypes.bool,
};

export default Icon;
