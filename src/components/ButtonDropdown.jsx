/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';

const ButtonDropDown = (props) => {
  const {
    children,
    options,
    isCheck,
  } = props;

  const [showMenu, setShowMenu] = useState(false);

  const callShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const onChange = (e, data) => {
    const allValue = props?.value;
    const listValue = [];
    const checkFind = allValue?.find((item) => data?.value == item?.value);

    if (checkFind) {
      allValue?.map((item) => {
        if (data?.value != item?.value) {
          listValue.push(item);
        }
      });
    } else {
      allValue?.map((item) => {
        listValue.push(item);
      });
      listValue.push(data);
    }

    if (props?.onChange) {
      props.onChange(listValue);
    }
  };

  const onSelect = (item) => {
    props?.onChange(item);
    callShowMenu();
  };

  const callOptionList = (item, index) => {
    if (isCheck) {
      const checkSelect = props?.value?.find((item1) => item?.value == item1.value);
      return (
        <li key={index}>
          <label htmlFor={`${item?.label}_${index}`} className={`option ${item?.label}_${index}`}>
            <input
              type="checkbox"
              checked={checkSelect ? true : false}
              onChange={(e) => onChange(e, item)}
              id={`${item?.label}_${index}`}
              className="mr-2"
            />
            <span className="option-text">{item?.label || item?.name}</span>
          </label>
        </li>
      );
    }

    return (
      <li key={index} className="option" onClick={() => onSelect(item)}>
        <span className="option-text">{item?.label || item?.name}</span>
      </li>
    );
  };

  return (
    <React.Fragment>
      <div className="dropdown-wrapper">
        <div className={`select-menu place-end ${!showMenu ? '' : 'active'}`}>
          <div className="select-btn" onClick={callShowMenu}>
            {children}
          </div>
          {options?.length && (
            <ul className="options">
              {props?.menuTitle && (
                <li className="option-label">
                  <span className="option-text">{props.menuTitle}</span>
                </li>
              )}
              {options?.map((item, index) => (
                <React.Fragment key={index}>
                  {callOptionList(item, index)}
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
        {showMenu && (
          <div className="backdrop" onClick={callShowMenu}></div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ButtonDropDown;
