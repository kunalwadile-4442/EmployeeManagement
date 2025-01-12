import AuthenticatedLayout from '../../../layout/AuthenticatedLayout';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocationFormData, resetLocationFormData } from "../../../redux/reducers/orgLocationReducer";
import FormLayout from "../../../layout/FormLayout";
import TextInput from "../../../components/TextInput";
import InputLabel from "../../../components/InputLabel";
import DropdownSelect from "../../../components/DropdownSelect";
import TextArea from '../../../components/TextArea';
import { useNavigate } from 'react-router-dom';


function LocationForm({ id }) {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.orgLocation?.locationFormData || {});

    const [selectedCountry, setSelectedCountry] = useState(formData.country || ""); 
    const [stateOptions, setStateOptions] = useState([]); 

    const navigate =  useNavigate();

    useEffect(() => {
        if (id) {
            const fetchedData = {
              
            };
            dispatch(setLocationFormData(fetchedData));
            setSelectedCountry(fetchedData.country); // Set the country on form load
        }
    }, [id, dispatch]);

    // Define country and state options
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

    // Update state options when country changes
    useEffect(() => {
        if (selectedCountry) {
            setStateOptions(availableStates[selectedCountry] || []);
        }
    }, [selectedCountry]);

    const handleInputChange = (name, value) => {
        dispatch(setLocationFormData({ [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
        dispatch(resetLocationFormData());
    };

    return (
        <AuthenticatedLayout top_heading={"Add New Location"} back={"Back"} handleBackClick={() => navigate(-1)}>
            <FormLayout
                content={{ submit: "Submit" }}
                onSubmit={handleSubmit}
                className="px-4 py-2 bg-white rounded-md"
                style={{ height: 500 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <InputLabel htmlFor="company" value="Company" />
                        <DropdownSelect
                            id="company"
                            options={[{ value: "Appristine", label: "Appristine Technology" }]}
                            onSelect={(option) => handleInputChange("company", option.value)}
                            value={{ value: formData.company, label: "Appristine Technology" }}
                            placeholder="Select Company"
                            className="mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel htmlFor="location_name" value="Location Name" />
                        <TextInput
                            id="locationName"
                            name="locationName"
                            placeholder="Enter Location"
                            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            value={formData.locationName}
                            onChange={(e) => handleInputChange("locationName", e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <InputLabel htmlFor="add_one" value="Address Line 1" />
                        <TextArea
                            id="add_one"
                            name="add_one"
                            rows={2}
                            placeholder="Address Line 1"
                            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            value={formData.add_one}
                            onChange={(e) => handleInputChange("add_one", e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <InputLabel htmlFor="add_two" value="Address Line 2" />
                        <TextArea
                            id="add_two"
                            name="add_two"
                            rows={2}
                            placeholder="Address Line 2"
                            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            value={formData.add_two}
                            onChange={(e) => handleInputChange("add_two", e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="col-span-2 mb-4">
                        <InputLabel htmlFor="country" value="Country" />
                        <DropdownSelect
                            id="country"
                            options={countryOptions}
                            onSelect={(option) => {
                                handleInputChange("country", option.value);
                                setSelectedCountry(option.value); // Update selected country
                            }}
                            value={countryOptions.find((option) => option.value === formData.country)}
                            placeholder="Select Country"
                            className="mt-1"
                        />
                    </div>

                    <div className="col-span-1 mb-4">
                        <InputLabel htmlFor="state" value="State" />
                        <DropdownSelect
                            id="state"
                            options={stateOptions}
                            onSelect={(option) => handleInputChange("state", option.value)}
                            value={stateOptions.find((option) => option.value === formData.state)}
                            placeholder="Select State"
                            className="mt-1 w-full"
                        />
                    </div>

                    <div className="col-span-1 mb-4">
                        <InputLabel htmlFor="zip" value="Zip Code" />
                        <TextInput
                            id="zip"
                            name="zip"
                            placeholder="Zip Code"
                            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            value={formData.zip}
                            onChange={(e) => handleInputChange("zip", e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <InputLabel htmlFor="city" value="City" />
                        <TextInput
                            id="city"
                            name="city"
                            placeholder="Enter City"
                            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                    </div>
                </div>

            </FormLayout>
        </AuthenticatedLayout>
    );
}

export default LocationForm;
