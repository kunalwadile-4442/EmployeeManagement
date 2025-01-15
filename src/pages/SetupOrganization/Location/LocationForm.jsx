import AuthenticatedLayout from "../../../layout/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLocationFormData,
  resetLocationFormData,
} from "../../../redux/reducers/orgLocationReducer";
import FormLayout from "../../../layout/FormLayout";
import { useNavigate } from "react-router-dom";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import DropdownSelectNew from "../../../components/DropdownSelectNew";

function LocationForm({ id }) {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state) => state.orgLocation?.locationFormData || {}
  );

  const [selectedCountry, setSelectedCountry] = useState(formData.country || "");
  const [stateOptions, setStateOptions] = useState([]);
  const {
    register,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit, // Make sure you're using the correct handleSubmit
  } = useForm({
    defaultValues: formData,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchedData = {};
      dispatch(setLocationFormData(fetchedData));
      setSelectedCountry(fetchedData.country); // Set the country on form load
    }
  }, [id, dispatch]);

  const companyOptions = [{ value: "Apprsistine", label: "Appristine" }];
  const countryOptions = [
    { value: "India", label: "India" },
    { value: "USA", label: "USA" },
    { value: "UK", label: "UK" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
  ];

  const availableStates = {
    India: [
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Delhi", label: "Delhi" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Gujarat", label: "Gujarat" },
    ],
    USA: [
      { value: "California", label: "California" },
      { value: "Texas", label: "Texas" },
      { value: "Florida", label: "Florida" },
      { value: "New York", label: "New York" },
      { value: "Illinois", label: "Illinois" },
      { value: "Ohio", label: "Ohio" },
    ],
    UK: [
      { value: "England", label: "England" },
      { value: "Scotland", label: "Scotland" },
      { value: "Wales", label: "Wales" },
      { value: "Northern Ireland", label: "Northern Ireland" },
      { value: "Yorkshire and the Humber", label: "Yorkshire and the Humber" },
      { value: "South East", label: "South East" },
    ],
    Canada: [
      { value: "Ontario", label: "Ontario" },
      { value: "Quebec", label: "Quebec" },
      { value: "British Columbia", label: "British Columbia" },
      { value: "Alberta", label: "Alberta" },
      { value: "Nova Scotia", label: "Nova Scotia" },
      { value: "Manitoba", label: "Manitoba" },
    ],
    Australia: [
      { value: "New South Wales", label: "New South Wales" },
      { value: "Victoria", label: "Victoria" },
      { value: "Queensland", label: "Queensland" },
      { value: "Western Australia", label: "Western Australia" },
      { value: "South Australia", label: "South Australia" },
      { value: "Tasmania", label: "Tasmania" },
    ],
  };

  useEffect(() => {
    if (selectedCountry) {
      setStateOptions(availableStates[selectedCountry] || []);
    }
  }, [selectedCountry]);

  const handleInputChange = (name, value) => {
    dispatch(setLocationFormData({ [name]: value }));
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    dispatch(resetLocationFormData());
    navigate("/organization/locations")
  };

  return (
    // <AuthenticatedLayout
    //   top_heading={"Add New Location"}
    //   back={"Back"}
    //   handleBackClick={() => navigate(-1)}
    // >
      <FormLayout
        content={{ submit: "Submit" }}
        onSubmit={handleSubmit(onSubmit)} // Pass handleSubmit from react-hook-form here
        className="px-4 py-2 bg-white rounded-md"
        style={{ height: 500 }}
        back
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              rules={{ required: "Company is required" }} // Update the error message
              className=" "
              setValue={setValue}
              required
            />
            {errors.company && (
              <p className="text-red-500 text-xs">{errors.company.message}</p>
            )}
          </div>
          <div className="mb-4">
            <InputField
              name="Location Name"
              placeholder="Enter location"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register("locationName", {
                required: "Location is required",
              })}
              required
              error={errors?.locationName?.message} // Pass the error message correctly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="Address Line 1"
              placeholder="Enter Address"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={2}
              register={register("add_one", {
                required: "Address is required",
              })}
              required
              error={errors?.add_one?.message} // Pass the error message correctly
            />
          </div>
          <div className="mb-4">
            <InputField
              name="Address Line 2"
              placeholder="Enter Address"
              inputClassName="rounded-md"
              useFor="textarea"
              rows={2}
              register={register("add_two", {
                required: "Address is required",
              })}
              required
              error={errors?.add_two?.message} // Pass the error message correctly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="col-span-2 mb-4">
            <DropdownSelectNew
              label="Country"
              name="country"
              options={countryOptions}
              onSelect={(option) => {
                handleInputChange("country", option.value);
                setValue("country", option.value);
              }}
              value={countryOptions.find(
                (option) => option.value === formData.country
              )}
              placeholder="Select Company"
              control={control}
              rules={{ required: "Country is required" }}
              className=" "
              setValue={setValue}
              required
            />
            {errors.country && (
              <p className="text-red-500 text-xs">{errors.country.message}</p>
            )}
          </div>

          <div className="col-span-1 mb-4">
            <DropdownSelectNew
              label="State"
              name="state"
              options={stateOptions}
              onSelect={(option) => {
                handleInputChange("state", option.value);
                setValue("state", option.value);
              }}
              value={stateOptions.find(
                (option) => option.value === formData.state
              )}
              placeholder="Select State"
              control={control}
              rules={{ required: "State is required" }}
              className=" "
              setValue={setValue}
              required
            />
            {errors.state && (
              <p className="text-red-500 text-xs">{errors.state.message}</p>
            )}
          </div>

          <div className="col-span-1 mb-4">
            <InputField
              name="Zip Code"
              placeholder="Enter Zip Code"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register("zip", {
                required: "Zip Code is required",
              })}
              required
              error={errors?.zip?.message} // Pass the error message correctly
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <InputField
              name="City"
              placeholder="Enter City"
              className=" "
              inputClassName="h-9 rounded-md"
              register={register("city", {
                required: "City is required",
              })}
              required
              error={errors?.city?.message} // Pass the error message correctly
            />
          </div>
        </div>
      </FormLayout>
    // </AuthenticatedLayout>
  );
}

export default LocationForm;
