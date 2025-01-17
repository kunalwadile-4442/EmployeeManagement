import React from "react";
import Scrollbar from "../components/Scrollbar";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import InputLabel from "../components/InputLabel";
import { useSelector, useDispatch } from "react-redux";
import {
  setAttDate,
  setFieldValue,
  setAttTime,
} from "../redux/reducers/attendanceModalReducer";
import { showSuccessToast } from "../Utils/ToastsUtils";
import DropdownSelectNew from "../components/DropdownSelectNew";
import TimePicker from "react-time-picker";
import InputField from "../components/InputField";

const AddAttendance = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const attendanceModal = useSelector((state) => state.attendanceModal);

  const {
    watch,
    register,
    setValue,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: attendanceModal,
  });

  const handleDateChange = (date) => {
    const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
    setValue("attDate", formattedDate, { shouldValidate: true });
    dispatch(setAttDate(formattedDate));
  };
  const handleTimeChange = (time) => {
    setValue("inTime", time, { shouldValidate: true });
    dispatch(setAttTime(time));
  };

  const handleSave = () => {
    const formData = watch();
    console.log("Form data on save:", formData);
    dispatch(setFieldValue(formData));
    showSuccessToast("Attendance saved successfully");
    reset();
    onClose();
  };

  const companyOptions = [{ value: "Company 1", label: "Company 1" }];
  const locationOptions = [{ value: "Location 1", label: "Location 1" }];
  const deptOptions = [{ value: "Dept 1", label: "Dept 1" }];
  const employeeOptions = [{ value: "Employee 1", label: "Employee 1" }];
  const shiftOptions = [{ value: "Shift 1", label: "Shift 1" }];
  const statusOptions = [{ value: "Active", label: "Active" }];
  return isOpen ? (
    <div className="z-20 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="popup-container relative bg-white rounded-lg py-4 px-6 w-full max-w-3xl">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Add View Attendance</h3>
          <button
            onClick={onClose}
            className="text-xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <hr className="mt-2 mb-2" />
        <Scrollbar style={{ height: "calc(100vh - 200px)" }}>
          <div className="mt-4 overflow-x-auto mr-3">
            <br />
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <DropdownSelectNew
                    label="Company Name"
                    name="companyName"
                    control={control}
                    options={companyOptions}
                    errors={errors.companyName}
                    placeholder="Select Company"
                  />
                </div>
                <div>
                  <DropdownSelectNew
                    label="Location"
                    name="locationName"
                    control={control}
                    options={locationOptions}
                    errors={errors.locationName}
                    placeholder="Select Location"
                  />
                </div>
                <div>
                  <DropdownSelectNew
                    name="deptName"
                    label="Department"
                    control={control}
                    options={deptOptions}
                    errors={errors.deptName}
                    placeholder="Select Department"
                  />
                </div>
                <div>
                  <DropdownSelectNew
                    label="Employee Name"
                    name="employeeName"
                    control={control}
                    options={employeeOptions}
                    errors={errors.employeeName}
                    placeholder="Select Employee"
                  />
                </div>
                <div>
                  <DropdownSelectNew
                    label="Shift"
                    name="shift"
                    control={control}
                    options={shiftOptions}
                    errors={errors.shift}
                    placeholder="Select Shift"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="attDate" value="Date" />
                  <ReactDatePicker
                    selected={
                      attendanceModal.attDate
                        ? new Date(attendanceModal.attDate)
                        : null
                    }
                    onChange={handleDateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholderText="Select End Date"
                    className="block w-full border rounded-md px-2 py-1.5"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="inTime" value="In time" />
                  <TimePicker
                    onChange={handleTimeChange}
                    value={attendanceModal?.inTime}
                    className="form-control add-start-date"
                    name="att_in_time"
                    id="att_in_time"
                    placeholder="Time In"
                  />
                  <InputField
                    name="Out time"
                    className=" mt-2"
                    inputClassName="h-9 rounded-md"
                    register={register(`outTime`)}
                  />
                </div>

                <div>
                  <div>
                    <DropdownSelectNew
                      label="Status"
                      name="attStatus"
                      control={control}
                      options={statusOptions}
                      errors={errors.attStatus}
                      placeholder="Select Shift"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div className="mb-4"></div>
          </div>
        </Scrollbar>
        <hr className="mb-2 mt-2 text-sm" />
        <div className="flex justify-end mt-2 space-x-4">
          <button
            onClick={onClose}
            className="px-2 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1 bg-logo-text-color text-white hover:bg-light-logo-color rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddAttendance;
