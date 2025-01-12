import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBasicDetails ,resetBasicDetails } from "../../../redux/reducers/employeeBasicDetails"; 
import FormLayout from "../../../layout/FormLayout";
import TextInput from "../../../components/TextInput";
import InputLabel from "../../../components/InputLabel";

function BasicInfo({ id }) {
  const dispatch = useDispatch();

  const basicDetails = useSelector((state) => state.employeeBasicDetails?.basicDetails || {});

  useEffect(() => {
    if (id) {
      const fetchedData = {
        first_name: "John",
        last_name: "Doe",
        empEmail: "john.doe@example.com",
        empCode: "F2012",
        bank: "XYZ Bank",
        panCard: "ABCDE1234F",
      };

      dispatch(setBasicDetails(fetchedData)); 
    }
  }, [id, dispatch]);


  const handleInputChange = (name, value) => {
    dispatch(setBasicDetails({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", basicDetails);
    dispatch(resetBasicDetails());
  };

  return (
    <FormLayout
      content={{
        submit: "Submit",
      }}
      onSubmit={handleSubmit}
      className="p-6 bg-white  rounded-md"
      style={{height: 450}}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="emp_first_name" value="First Name" />
          <TextInput
            id="emp_FirstName"
            name="first_name"
            placeholder="First name"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.first_name}
            onChange={(e) => handleInputChange("first_name", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="emp_last_name" value="Last Name" />
          <TextInput
            id="emp_LastName"
            name="last_name"
            placeholder="Last name"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.last_name}
            onChange={(e) => handleInputChange("last_name", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="col-span-2">
          <InputLabel htmlFor="emp_email" value="Email Address" />
          <TextInput
            id="emp_Email"
            name="empEmail"
            type="email"
            placeholder="Email Address"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.empEmail}
            onChange={(e) => handleInputChange("empEmail", e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <InputLabel htmlFor="employeeCode" value="Employee Code" />
          <TextInput
            id="employeeCode"
            name="empCode"
            placeholder="Employee Code"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.empCode}
            onChange={(e) => handleInputChange("empCode", e.target.value)}
            disabled
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="mb-4">
          <InputLabel htmlFor="bank" value="Bank A/c" />
          <TextInput
            id="bank"
            name="bank"
            placeholder="Bank A/c"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.bank}
            onChange={(e) => handleInputChange("bank", e.target.value)}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="panCard" value="PAN Number" />
          <TextInput
            id="panCard"
            name="panCard"
            placeholder="PAN Number"
            className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
            value={basicDetails.panCard}
            onChange={(e) => handleInputChange("panCard", e.target.value)}
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default BasicInfo;
