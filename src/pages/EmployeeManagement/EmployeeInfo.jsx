import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableLayout from "../../layout/TableLayout";
import FilterForm from "../../components/FilterForm";
import FilterToggle from "../../components/FilterHideShow";
import {
  setFilteredData
 
} from "../../redux/reducers/hrReducer";
import { useNavigate } from "react-router-dom";

const EmployeeInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { attendanceData, filteredData, } = useSelector(
    (state) => state.hrApp
  );

  const [showFilters, setShowFilters] = React.useState(false);

  const handleSearch = (filters) => {
    let filtered = attendanceData;

    if (filters.emp_first_name) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(filters.emp_first_name.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter((item) => item.location === filters.location);
    }

    if (filters.dept_name) {
      filtered = filtered.filter(
        (item) => item.department === filters.dept_name
      );
    }

    if (filters.desi_name) {
      filtered = filtered.filter(
        (item) => item.designation === filters.desi_name
      );
    }

    if (filters.emp_status) {
      filtered = filtered.filter((item) => item.status === filters.emp_status);
    }

    dispatch(setFilteredData(filtered));
  };

  
  const handleReset = () => {
    dispatch(setFilteredData(attendanceData));
  };

  const callEditClick = (item) => {
    console.log("Edit attendance:", item);
    navigate(`/employee/${item.id}/edit`);
  };

  const callDeleteClick = (item) => {
    console.log("Delete attendance:", item);
  };

  const addNewEmp = () => {
    console.log("addNewEmp");
    navigate("/employee/create");
  };

  const columnKey = ["Name", "Date", "Status"];

  const renderBody = (item) => (
    <>
      <td>{item.name}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
    </>
  );
  return (
    <div>
      <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

      {showFilters && (
        <FilterForm
          EmployeeName={attendanceData.map((item) => ({
            value: item.name,
            label: item.name,
          }))}
          Locations={attendanceData.map((item) => ({
            value: item.location,
            label: item.location,
          }))}
          Department={attendanceData.map((item) => ({
            value: item.department,
            label: item.department,
          }))}
          Designation={attendanceData.map((item) => ({
            value: item.designation,
            label: item.designation,
          }))}
          EmpStatus={attendanceData.map((item) => ({
            value: item.status,
            label: item.status,
          }))}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      )}

      <TableLayout
        columnKey={columnKey}
        dataItem={filteredData.length > 0 ? filteredData : attendanceData}
        renderBody={renderBody}
        serial_no={true}
        edit={true}
        isAdd={true}
        isDelete={true}
        title="+ Add New Employee"
        handleOpen={addNewEmp}
        callEditClick={callEditClick}
        callDeleteClick={callDeleteClick}
        style={{
          height: `${
            showFilters ? "calc( 100vh - 160px)" : "calc( 100vh - 10px)"
          }`,
        }}
        links={{}}
      />      
    </div>
  );
};

export default EmployeeInfo;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import TableLayout from "../../layout/TableLayout";
// import FilterForm from "../../components/FilterForm";
// import FilterToggle from "../../components/FilterHideShow";
// import {
//   setFilteredData,
//   openModal,
//   closeModal,
// } from "../../redux/reducers/hrReducer";
// import Modal from "../../Popups/Modal";

// const EmployeeInfo = () => {
//   const dispatch = useDispatch();
//   const { attendanceData, filteredData, isModalOpen, modalData } = useSelector(
//     (state) => state.hrApp
//   );

//   const [showFilters, setShowFilters] = useState(false);

//   const handleSearch = (filters) => {
//     let filtered = attendanceData;

//     if (filters.emp_first_name) {
//       filtered = filtered.filter((item) =>
//         item.name.toLowerCase().includes(filters.emp_first_name.toLowerCase())
//       );
//     }

//     if (filters.type_name) {
//       filtered = filtered.filter(
//         (item) => item.status.toLowerCase() === filters.type_name.toLowerCase()
//       );
//     }

//     if (filters.location) {
//       filtered = filtered.filter(
//         (item) => item.location.toLowerCase() === filters.location.toLowerCase()
//       );
//     }

//     if (filters.dept_name) {
//       filtered = filtered.filter(
//         (item) => item.department.toLowerCase() === filters.dept_name.toLowerCase()
//       );
//     }

//     if (filters.desi_name) {
//       filtered = filtered.filter(
//         (item) => item.designation.toLowerCase() === filters.desi_name.toLowerCase()
//       );
//     }

//     if (filters.emp_status) {
//       filtered = filtered.filter(
//         (item) => item.status.toLowerCase() === filters.emp_status.toLowerCase()
//       );
//     }

//     if (filters.from_date && filters.to_date) {
//       const fromDate = new Date(filters.from_date);
//       const toDate = new Date(filters.to_date);

//       filtered = filtered.filter((item) => {
//         const itemDate = new Date(item.date);
//         return itemDate >= fromDate && itemDate <= toDate;
//       });
//     }

//     dispatch(setFilteredData(filtered));
//   };

//   const handleReset = () => {
//     dispatch(setFilteredData(attendanceData));
//   };

//   const handleClickWhoCheckLate = () => {
//     const tableData = [
//       ["John Doe", "2025-01-01"],
//       ["Jane Smith", "2025-01-02"],
//       ["Mark Lee", "2025-01-03"],
//       ["Alice Brown", "2025-01-04"],
//       ["Robert White", "2025-01-05"],
//     ];
//     dispatch(
//       openModal({
//         title: "Late CheckIn",
//         tableHeaders: ["Full Name", "In Date"],
//         tableData: tableData,
//       })
//     );
//   };

//   const handleCloseModal = () => {
//     dispatch(closeModal());
//   };

//   const addNewEmp = () => {
//     console.log("addNewEmp");
//   };

//   const columnKey = ["Name", "Date", "Status"];

//   return (
//     <div>
//       <FilterToggle showFilters={showFilters} setShowFilters={setShowFilters} />

//       {showFilters && (
//         <FilterForm
//           EmployeeName={attendanceData.map((item) => ({
//             value: item.name,
//             label: item.name,
//           }))}
//           Locations={attendanceData.map((item) => ({
//             value: item.location,
//             label: item.location,
//           }))}
//           Department={attendanceData.map((item) => ({
//             value: item.department,
//             label: item.department,
//           }))}
//           Designation={attendanceData.map((item) => ({
//             value: item.designation,
//             label: item.designation,
//           }))}
//           EmpStatus={attendanceData.map((item) => ({
//             value: item.status,
//             label: item.status,
//           }))}
//           handleSearch={handleSearch}
//           handleReset={handleReset}
//         />
//       )}

//       <TableLayout
//         columnKey={columnKey}
//         dataItem={filteredData.length > 0 ? filteredData : attendanceData}
//         renderBody={(item) => (
//           <>
//             <td>{item.name}</td>
//             <td>{item.date}</td>
//             <td>{item.status}</td>
//           </>
//         )}
//         serial_no={true}
//         edit={true}
//         isAdd={true}
//         isDelete={true}
//         title="+ Add New Employee"
//         handleOpen={addNewEmp}
//       />

//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         title={modalData?.title}
//         tableHeaders={modalData?.tableHeaders || []}
//         tableData={modalData?.tableData || []}
//       />
//     </div>
//   );
// };

// export default EmployeeInfo;
