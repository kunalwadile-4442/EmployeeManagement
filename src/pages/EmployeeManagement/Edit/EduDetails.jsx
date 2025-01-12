// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewEduRow, updateRow, deleteRow } from "../../../redux/reducers/employeeEditReducer"; // Import actions
// import TableLayout from "../../../layout/TableLayout";
// import TextInput from "../../../components/TextInput";
// import TextArea from "../../../components/TextArea";
// import ReactDatePicker from "react-datepicker";
// import { format } from "date-fns";

// const EduDetails = () => {
//   const dispatch = useDispatch();
//   const eduDetails = useSelector((state) => state.employeeEdit.eduDetails || []); 
//   console.log("Redux eduDetails:", eduDetails); // Debugging

//   const handleDateChange = (name, date, index) => {
//     const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
//     dispatch(updateRow({ index, updatedRow: { [name]: formattedDate }, type: "eduDetails" })); 
//   };

//   const handleInputChange = (index, field, value) => {
//     dispatch(updateRow({ index, updatedRow: { [field]: value }, type: "eduDetails" })); 
//   };

//   const callDeleteClick = (index) => {
//     console.log("Attempting to delete row at index:", index);
//         dispatch(deleteRow({ index: 0, type: "eduDetails" }));
    
//   };

//   const handleSubmit = () => {
//     console.log("Data to be saved:", eduDetails);
//     alert("Data saved successfully edu!");
  
//   };
//   console.log("Table dataItem:", eduDetails);


//   const columnKey = [
//     "School Name",
//     "Degree/Diploma",
//     "Field(s) of Study",
//     "Date of Completion",
//     "Additional Notes",
//     "Interests"
//   ];

//   const renderBody = (item = {}, index) => (
//     <>
//       <td>
//         <TextInput
//           type="text"
//           value={item.schoolName || ""}
//           onChange={(e) => handleInputChange(index, "schoolName", e.target.value)}
//           placeholder="School Name"
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <TextInput
//           type="text"
//           value={item.degree || ""}
//           onChange={(e) => handleInputChange(index, "degree", e.target.value)}
//           placeholder="Degree/Diploma"
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <TextInput
//           type="text"
//           value={item.fieldOfStudy || ""}
//           onChange={(e) => handleInputChange(index, "fieldOfStudy", e.target.value)}
//           placeholder="Field(s) of Study"
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <ReactDatePicker
//           selected={item.dateOfCompletion ? new Date(item.dateOfCompletion) : null}
//           onChange={(date) => handleDateChange("dateOfCompletion", date, index)}
//           dateFormat="yyyy/MM/dd"
//           placeholderText="Select Date of Completion"
//           className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//         />
//       </td>
//       <td>
//         <TextArea
//           value={item.additionalNotes || ""}
//           onChange={(e) => handleInputChange(index, "additionalNotes", e.target.value)}
//           placeholder="Additional Notes"
//           rows={1}
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <TextArea
//           value={item.interests || ""}
//           onChange={(e) => handleInputChange(index, "interests", e.target.value)}
//           placeholder="Interests"
//           rows={1}
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//     </>
//   );

//   return (
//     <div>
//       <TableLayout
//         columnKey={columnKey}
//         dataItem={eduDetails} // Use eduDetails from Redux state
//         renderBody={renderBody}
//         isAdd={true}
//         title="+ Add New Row"
//         handleOpen={() => dispatch(addNewEduRow())} // Dispatch addNewEduRow action
//         style={{ height: 600 }}
//         isDelete={true}
//         callDeleteClick={callDeleteClick}
//         customBtn={true}
//         handleCustomBtnTitle={handleSubmit}
//         customBtnTitle="Save"
//       />
      
      
//     </div>
//   );
// };

// export default EduDetails;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewEduRow, updateEduRow, deleteEduRow } from "../../../redux/reducers/eduDetails"; // Correct import for eduDetails actions
import TableLayout from "../../../layout/TableLayout";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";

const EduDetails = () => {
  const dispatch = useDispatch();
  const eduDetails = useSelector((state) => state.eduDetails.eduDetails || []); // Accessing the correct slice

  const handleDateChange = (name, date, index) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
    dispatch(updateEduRow({ index, updatedRow: { [name]: formattedDate } })); // Dispatch updateEduRow action
  };

  const handleInputChange = (index, field, value) => {
    dispatch(updateEduRow({ index, updatedRow: { [field]: value } })); // Dispatch updateEduRow action
  };

  const callDeleteClick = (index) => {
    dispatch(deleteEduRow({ index })); // Dispatch deleteEduRow action
  };

  const handleSubmit = () => {
    console.log("Data to be saved:", eduDetails);
    alert("Data saved successfully edu!");
  };

  const columnKey = [
    "School Name",
    "Degree/Diploma",
    "Field(s) of Study",
    "Date of Completion",
    "Additional Notes",
    "Interests"
  ];

  const renderBody = (item = {}, index) => (
    <>
      <td>
        <TextInput
          type="text"
          value={item.schoolName || ""}
          onChange={(e) => handleInputChange(index, "schoolName", e.target.value)}
          placeholder="School Name"
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <TextInput
          type="text"
          value={item.degree || ""}
          onChange={(e) => handleInputChange(index, "degree", e.target.value)}
          placeholder="Degree/Diploma"
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <TextInput
          type="text"
          value={item.fieldOfStudy || ""}
          onChange={(e) => handleInputChange(index, "fieldOfStudy", e.target.value)}
          placeholder="Field(s) of Study"
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <ReactDatePicker
          selected={item.dateOfCompletion ? new Date(item.dateOfCompletion) : null}
          onChange={(date) => handleDateChange("dateOfCompletion", date, index)}
          dateFormat="yyyy/MM/dd"
          placeholderText="Select Date of Completion"
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <TextArea
          value={item.additionalNotes || ""}
          onChange={(e) => handleInputChange(index, "additionalNotes", e.target.value)}
          placeholder="Additional Notes"
          rows={1}
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <TextArea
          value={item.interests || ""}
          onChange={(e) => handleInputChange(index, "interests", e.target.value)}
          placeholder="Interests"
          rows={1}
           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
    </>
  );

  return (
    <div>
      <TableLayout
        columnKey={columnKey}
        dataItem={eduDetails} // Use eduDetails from Redux state
        renderBody={renderBody}
        isAdd={true}
        title="+ Add New Row"
        handleOpen={() => dispatch(addNewEduRow())} // Dispatch addNewEduRow action
        style={{ height: 600 }}
        isDelete={true}
        callDeleteClick={callDeleteClick}
        customBtn={true}
        handleCustomBtnTitle={handleSubmit}
        customBtnTitle="Save"
      />
    </div>
  );
};

export default EduDetails;

