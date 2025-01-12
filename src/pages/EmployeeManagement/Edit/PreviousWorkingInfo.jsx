// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewRow, updateRow, deleteRow } from "../../../redux/reducers/employeeEditReducer";
// import TableLayout from "../../../layout/TableLayout";
// import TextInput from "../../../components/TextInput";
// import TextArea from "../../../components/TextArea";
// import ReactDatePicker from "react-datepicker";
// import { format } from "date-fns";

// const PreviousWorkingInfo = () => {
//   const dispatch = useDispatch();
//   const previousWorkingInfo = useSelector((state) => state.employeeEdit.previousWorkingInfo || []);

//   const handleDateChange = (name, date, index) => {
//     const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
//     dispatch(updateRow({ index, updatedRow: { [name]: formattedDate } }));
//   };

//   const handleInputChange = (index, field, value) => {
//     dispatch(updateRow({ index, updatedRow: { [field]: value } }));
//   };

//   const callDeleteClick = (index) => {
//     console.log("Attempting to delete row at index:", index);
//     dispatch(deleteRow({ index: 0, type: "previousWorking" }));

//   };

//   const handleSubmit = () => {
//     console.log("Data to be saved:", previousWorkingInfo);

   
//     alert("Data saved successfully!"); 
//   };

//   const columnKey = ["Company Name", "Job Title", "From Date", "To Date", "Job Description"];

//   const renderBody = (item = {}, index) => (
//     <>
//       <td>
//         <TextInput
//           type="text"
//           value={item.companyName || ""}  
//           onChange={(e) => handleInputChange(index, "companyName", e.target.value)}
//           placeholder="Company Name"
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <TextInput
//           type="text"
//           value={item.jobTitle || ""} 
//           onChange={(e) => handleInputChange(index, "jobTitle", e.target.value)}
//           placeholder="Job Title"
//           className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//         />
//       </td>
//       <td>
//         <ReactDatePicker
//           selected={item.fromDate ? new Date(item.fromDate) : null} 
//           onChange={(date) => handleDateChange("fromDate", date, index)}
//           dateFormat="yyyy/MM/dd"
//           placeholderText="Select From Date"
//           className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//         />
//       </td>
//       <td>
//         <ReactDatePicker
//           selected={item.toDate ? new Date(item.toDate) : null}  
//           onChange={(date) => handleDateChange("toDate", date, index)}
//           dateFormat="yyyy/MM/dd"
//           placeholderText="Select To Date"
//           className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
//         />
//       </td>
//       <td>
//         <TextArea
//           value={item.jobDescription || ""} 
//           onChange={(e) => handleInputChange(index, "jobDescription", e.target.value)}
//           placeholder="Job Description"
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
//         dataItem={previousWorkingInfo}
//         renderBody={renderBody}
//         isAdd={true}
//         title="+ Add New Row"
//         handleOpen={() => dispatch(addNewRow())}
//         style={{ height: 350 }}
//         isDelete={true}
//         callDeleteClick={callDeleteClick}
//       />
      
//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button
//           onClick={handleSubmit}
//           className="px-4 h-[30px] text-white gap-0 rounded-lg bg-logo-text-color hover:bg-light-logo-color"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PreviousWorkingInfo;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewRow, updateRow, deleteRow } from "../../../redux/reducers/previousWorkingInfo";
import TableLayout from "../../../layout/TableLayout";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";

const PreviousWorkingInfo = () => {
  const dispatch = useDispatch();
  const previousWorkingInfo = useSelector((state) => state.previousWorkingInfo.previousWorkingInfo || []);
  console.log("Redux previousWorkingInfo:", previousWorkingInfo); // Debugging

  const handleDateChange = (name, date, index) => {
    const formattedDate = date ? format(date, "yyyy/MM/dd") : null;
    dispatch(updateRow({ index, updatedRow: { [name]: formattedDate } }));
  };

  const handleInputChange = (index, field, value) => {
    dispatch(updateRow({ index, updatedRow: { [field]: value } }));
  };

  const handleDeleteRow = (index) => {
    console.log("Attempting to delete row at index:", index);
    dispatch(deleteRow({ index }));
  };

  const handleSubmit = () => {
    console.log("Data to be saved:", previousWorkingInfo);
    alert("Data saved successfully!");
  };

  const columnKey = ["Company Name", "Job Title", "From Date", "To Date", "Job Description"];

  const renderBody = (item = {}, index) => (
    <>
      <td>
        <TextInput
          type="text"
          value={item.companyName || ""}
          onChange={(e) => handleInputChange(index, "companyName", e.target.value)}
          placeholder="Company Name"
          className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <TextInput
          type="text"
          value={item.jobTitle || ""}
          onChange={(e) => handleInputChange(index, "jobTitle", e.target.value)}
          placeholder="Job Title"
          className="mt-1 block w-full px-3 py-1.5 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </td>
      <td>
        <ReactDatePicker
          selected={item.fromDate ? new Date(item.fromDate) : null}
          onChange={(date) => handleDateChange("fromDate", date, index)}
          dateFormat="yyyy/MM/dd"
          placeholderText="Select From Date"
          className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
        />
      </td>
      <td>
        <ReactDatePicker
          selected={item.toDate ? new Date(item.toDate) : null}
          onChange={(date) => handleDateChange("toDate", date, index)}
          dateFormat="yyyy/MM/dd"
          placeholderText="Select To Date"
          className="mt-1 block w-full border border-gray-300 rounded-md px-2 py-1.5"
        />
      </td>
      <td>
        <TextArea
          value={item.jobDescription || ""}
          onChange={(e) => handleInputChange(index, "jobDescription", e.target.value)}
          placeholder="Job Description"
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
        dataItem={previousWorkingInfo}
        renderBody={renderBody}
        isAdd={true}
        title="+ Add New Row"
        handleOpen={() => dispatch(addNewRow())}
        style={{ height: 580 }}
        isDelete={true}
        callDeleteClick={handleDeleteRow}
        customBtn={true}
        handleCustomBtnTitle={handleSubmit}
        customBtnTitle="Save"
      />
    </div>
  );
};

export default PreviousWorkingInfo;
