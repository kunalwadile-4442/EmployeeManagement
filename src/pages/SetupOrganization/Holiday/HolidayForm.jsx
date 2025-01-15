import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setHolidayFormData,
  resetHolidayFormData,
} from "../../../redux/reducers/holidayFormReducer";
import { useNavigate } from "react-router-dom";
import FormLayout from "../../../layout/FormLayout";
import DropdownSelectNew from "../../../components/DropdownSelectNew";
import InputField from "../../../components/InputField";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import InputLabel from "../../../components/InputLabel";

function HolidayForm({ id }) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.holidayForm || {});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchedData = {
        name: "",
        company: "",
        branch: "",
        holidayType: "",
        dayType: "full",
        date: new Date(),
        description: "",
      };
      dispatch(setHolidayFormData(fetchedData));
    }
  }, [id, dispatch]);

  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: formData,
  });

  const companyOptions = [{ value: "Appristine", label: "Appristine" }];

  const branchOptions = [
    { value: "Branch 1", label: "Branch 1" },
    { value: "Branch 2", label: "Branch 2" },
  ];

  const holidayTypeOptions = [
    { value: "Public", label: "Public" },
    { value: "Bank", label: "Bank" },
    { value: "Personal", label: "Personal" },
  ];

  const dayTypeOptions = [
    { value: "full", label: "Full Day" },
    { value: "half", label: "Half Day" },
  ];

  const handleInputChange = (name, value) => {
    dispatch(setHolidayFormData({ name, value }));
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    dispatch(resetHolidayFormData());
    navigate("/organization/holiday-calender");
  };

  return (
    <FormLayout
      content={{ submit: "Submit" }}
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 py-2 bg-white rounded-md"
      style={{ height: 500 }}
      back
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputField
            name="Holiday Name"
            placeholder="Enter Holiday Name"
            className=""
            inputClassName="h-9 rounded-md"
            register={register("name", {
              required: "Holiday Name is required",
            })}
            error={errors?.name?.message}
            required
          />
        </div>

        <div className="mb-4">
          <DropdownSelectNew
            label="Company"
            name="company"
            options={companyOptions}
            onSelect={(option) => {
              handleInputChange("company", option.value);
              setValue("company", option.value);
            }}
            value={companyOptions.find(
              (option) => option.value === formData.company
            )}
            placeholder="Select Company"
            control={control}
            rules={{ required: "Company is required" }}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Branch"
            name="branch"
            options={branchOptions}
            onSelect={(option) => {
              handleInputChange("branch", option.value);
              setValue("branch", option.value);
            }}
            value={branchOptions.find(
              (option) => option.value === formData.branch
            )}
            placeholder="Select Branch"
            control={control}
            rules={{ required: "Branch is required" }}
            required
          />
        </div>

        <div className="mb-4">
          <DropdownSelectNew
            label="Holiday Type"
            name="holidayType"
            options={holidayTypeOptions}
            onSelect={(option) => {
              handleInputChange("holidayType", option.value);
              setValue("holidayType", option.value);
            }}
            value={holidayTypeOptions.find(
              (option) => option.value === formData.holidayType
            )}
            placeholder="Select Holiday Type"
            control={control}
            rules={{ required: "Holiday Type is required" }}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <DropdownSelectNew
            label="Day Type"
            name="dayType"
            options={dayTypeOptions}
            onSelect={(option) => {
              handleInputChange("dayType", option.value);
              setValue("dayType", option.value);
            }}
            value={dayTypeOptions.find(
              (option) => option.value === formData.dayType
            )}
            placeholder="Select Day Type"
            control={control}
            required
          />
        </div>

        <div className="mb-4">
          <InputLabel name="date" value="Date" />

          <ReactDatePicker
            selected={watch("date") ? new Date(watch("date")) : null}
            onChange={(date) => {
              const formattedDate = date ? format(date, "dd-MMM-yyyy") : null;
              setValue("date", formattedDate, { shouldValidate: true });
            }}
            dateFormat="dd-MMM-yyyy"
            placeholderText="Select Date"
            className="block w-full border rounded-md px-2 py-1.5"
          />

          {errors.date && (
            <p className="text-red-600 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputField
            name="Description"
            placeholder="Enter Description"
            useFor="textarea"
            rows={2}
            inputClassName=" rounded-md"
            register={register("description", {
              required: "Description is required",
            })}
            error={errors?.description?.message}
            required
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default HolidayForm;
