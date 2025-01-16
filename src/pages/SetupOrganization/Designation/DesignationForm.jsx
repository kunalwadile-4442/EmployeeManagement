// import AuthenticatedLayout from '../../../layout/AuthenticatedLayout';
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setLocationFormData, resetLocationFormData } from "../../../redux/reducers/orgLocationReducer";
// import FormLayout from "../../../layout/FormLayout";
// import TextInput from "../../../components/TextInput";
// import InputLabel from "../../../components/InputLabel";
// import DropdownSelect from "../../../components/DropdownSelect";
// import { useNavigate } from 'react-router-dom';



// function DesignationForm({id}) {
//     const dispatch = useDispatch();
//     const formData = useSelector((state) => state.orgLocation?.locationFormData || {});

//     const [selectedCountry, setSelectedCountry] = useState(formData.country || ""); 
//     const [stateOptions, setStateOptions] = useState([]); 

//     const navigate =  useNavigate();

//     useEffect(() => {
//         if (id) {
//             const fetchedData = {
              
//             };
//             dispatch(setLocationFormData(fetchedData));
//             setSelectedCountry(fetchedData.country); // Set the country on form load
//         }
//     }, [id, dispatch]);

//     // Define country and state options
//     const countryOptions = [
//         { value: "India", label: "India" },
//         { value: "USA", label: "USA" },
//         { value: "UK", label: "UK" },
//         { value: "Canada", label: "Canada" },
//         { value: "Australia", label: "Australia" },
//     ];

//     const availableStates = {
//         India: [
//             { value: "Maharashtra", label: "Maharashtra" },
//             { value: "Delhi", label: "Delhi" },
//             { value: "Karnataka", label: "Karnataka" },
//             { value: "Tamil Nadu", label: "Tamil Nadu" },
//             { value: "Uttar Pradesh", label: "Uttar Pradesh" },
//             { value: "Gujarat", label: "Gujarat" },
//         ],
//         USA: [
//             { value: "California", label: "California" },
//             { value: "Texas", label: "Texas" },
//             { value: "Florida", label: "Florida" },
//             { value: "New York", label: "New York" },
//             { value: "Illinois", label: "Illinois" },
//             { value: "Ohio", label: "Ohio" },
//         ],
//         UK: [
//             { value: "England", label: "England" },
//             { value: "Scotland", label: "Scotland" },
//             { value: "Wales", label: "Wales" },
//             { value: "Northern Ireland", label: "Northern Ireland" },
//             { value: "Yorkshire and the Humber", label: "Yorkshire and the Humber" },
//             { value: "South East", label: "South East" },
//         ],
//         Canada: [
//             { value: "Ontario", label: "Ontario" },
//             { value: "Quebec", label: "Quebec" },
//             { value: "British Columbia", label: "British Columbia" },
//             { value: "Alberta", label: "Alberta" },
//             { value: "Nova Scotia", label: "Nova Scotia" },
//             { value: "Manitoba", label: "Manitoba" },
//         ],
//         Australia: [
//             { value: "New South Wales", label: "New South Wales" },
//             { value: "Victoria", label: "Victoria" },
//             { value: "Queensland", label: "Queensland" },
//             { value: "Western Australia", label: "Western Australia" },
//             { value: "South Australia", label: "South Australia" },
//             { value: "Tasmania", label: "Tasmania" },
//         ],
//     };

//     const departmentOptions = [
//         { value: "HR", label: "HR" },
//         { value: "Finance", label: "Finance" },
//         { value: "Engineering", label: "Engineering" },
//         { value: "Marketing", label: "Marketing" },
//       ];

//     // Update state options when country changes
//     useEffect(() => {
//         if (selectedCountry) {
//             setStateOptions(availableStates[selectedCountry] || []);
//         }
//     }, [selectedCountry]);

//     const handleInputChange = (name, value) => {
//         dispatch(setLocationFormData({ [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submitted Data:", formData);
//         dispatch(resetLocationFormData());
//     };
//   return (
//     <AuthenticatedLayout top_heading={" Add New Designation"} back={"Back"} handleBackClick={() => navigate(-1)}>
//         <FormLayout
//                 content={{ submit: "Submit" }}
//                 onSubmit={handleSubmit}
//                 className="px-4 py-2 bg-white rounded-md"
//                 style={{ height: 500 }}
//             >
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="mb-4">
//                         <InputLabel htmlFor="company" value="Company Name" />
//                         <DropdownSelect
//                             id="company"
//                             options={[{ value: "Appristine", label: "Appristine Technology" }]}
//                             onSelect={(option) => handleInputChange("company", option.value)}
//                             value={{ value: formData.company, label: "Appristine Technology" }}
//                             placeholder="Select Company"
//                             className="mt-1"
//                         />
//                     </div>
//                     <div className="mb-4">
//                     <InputLabel htmlFor="departmentName" value="Department Name" />
//           <DropdownSelect
//             id="departmentName"
//             options={departmentOptions}
//             onSelect={(option) => handleInputChange("departmentName", option.value)}
//             value={departmentOptions.find((option) => option.value === formData.departmentName)}
//             placeholder="Select Department"
//             className="mt-1"
//           />
//                     </div>
//                 </div>

                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div className="mb-4">
//                         <InputLabel htmlFor="designation" value="Designation Name" />
//                         <TextInput
//                             id="designation"
//                             name="designation"
//                             placeholder="Enter Designation"
//                             className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                             value={formData.designation}
//                             onChange={(e) => handleInputChange("designation", e.target.value)}
//                         />
//                     </div>
//                 </div>

//             </FormLayout>
//         </AuthenticatedLayout>
//   );
// }

// export default DesignationForm;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDesignationFormData, resetDesignationFormData } from "../../../redux/reducers/orgDesignationReducer";
import FormLayout from "../../../layout/FormLayout";
import { useNavigate } from 'react-router-dom';
import DropdownSelectNew from '../../../components/DropdownSelectNew';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/InputField';
import { showSuccessToast } from "../../../Utils/ToastsUtils";

function DesignationForm({ id }) {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.orgDesignation || {});
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchedData = {
                company: "",
                departmentName: "",
                designation: "",
            };
            dispatch(setDesignationFormData(fetchedData));
        }
    }, [id, dispatch]);

    const {
        register,
        control,
        setValue,
        formState: { errors },
        handleSubmit, 
    } = useForm({
        defaultValues: formData,
    });

    const companyOption = [
        { value: "Appristine", label: "Appristine" },
    ];

    const departmentOptions = [
        { value: "HR", label: "HR" },
        { value: "Finance", label: "Finance" },
        { value: "Engineering", label: "Engineering" },
        { value: "Marketing", label: "Marketing" },
    ];

    const handleInputChange = (name, value) => {
        dispatch(setDesignationFormData({ [name]: value }));
    };

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
        showSuccessToast("Form Submitted Successfully!");
        dispatch(resetDesignationFormData());
              setTimeout(() => {
                navigate("/organization/designations")
            }, 500); 
    };

    return (
      
            <FormLayout
                content={{ submit: "Submit" }}
                onSubmit={handleSubmit(onSubmit)} // Call handleSubmit to trigger validation
                className="px-4 py-2 bg-white rounded-md"
                style={{ height: 500 }}
                back
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <DropdownSelectNew
                            label="Company Name"
                            name="company"
                            options={companyOption}
                            onSelect={(option) => {
                                handleInputChange("company", option.value);
                                setValue("company", option.value);
                            }}
                            value={companyOption.find(
                                (option) => option.value === formData.company
                            )}
                            placeholder="Select company"
                            control={control}
                            rules={{ required: "Company is required" }}
                            className=""
                            setValue={setValue}
                            required
                        />
                        {errors.company && (
                            <p className="text-red-500 text-xs">
                                {errors.company.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <DropdownSelectNew
                            label="Department Name"
                            name="departmentName"
                            options={departmentOptions}
                            onSelect={(option) => {
                                handleInputChange("departmentName", option.value);
                                setValue("departmentName", option.value);
                            }}
                            value={departmentOptions.find(
                                (option) => option.value === formData.departmentName
                            )}
                            placeholder="Select Department Name"
                            control={control}
                            rules={{ required: "Department Name is required" }}
                            className=""
                            setValue={setValue}
                            required
                        />
                        {errors.departmentName && (
                            <p className="text-red-500 text-xs">
                                {errors.departmentName.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <InputField
                            name="Designation Name"
                            placeholder="Enter Designation Name"
                            className=" "
                            inputClassName="h-9 rounded-md"
                            register={register(`designation`, {
                                required: "Designation Name is required", // Update validation message
                            })}
                            required
                            error={errors?.designation?.message} // Show error if it exists
                        />
                      
                    </div>
                </div>
            </FormLayout>
      
    );
}

export default DesignationForm;
